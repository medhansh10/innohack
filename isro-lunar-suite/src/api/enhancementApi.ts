/// <reference types="vite/client" />

/**
 * API client for the Satellite Image Enhancement backend.
 *
 * All requests use the base URL from the VITE_API_URL environment variable
 * so it can be changed in one place (.env) without touching component code.
 */

// --------------- Base URL ---------------

const API_BASE_URL: string =
  (import.meta.env.VITE_API_URL as string | undefined) ?? 'http://127.0.0.1:8000';

// --------------- Types ---------------

export interface EnhancementResult {
  message: string;
  filename: string;
  selected_img: string;
  selected_xml: string;
  converted_npy: string;
  total_tiles: number;
  processed_tiles: number;
  stitched_demo: string;
  original_preview: string | null;
  image_width: number;
  image_height: number;
  processing_time_seconds: number;
}

// --------------- Helpers ---------------

/**
 * Convert a backend-relative path like "outputs/stitched_demo.png"
 * into a full URL the browser can fetch.
 */
export function getOutputUrl(relativePath: string): string {
  // Normalise backslashes (Windows) to forward slashes
  const normalized = relativePath.replace(/\\/g, '/');

  // If it already starts with http, return as-is
  if (normalized.startsWith('http')) return normalized;

  // Strip leading "./" if present
  const clean = normalized.replace(/^\.\//, '');

  return `${API_BASE_URL}/${clean}`;
}

// --------------- API Calls ---------------

/**
 * Upload a PDS4 ZIP file and wait for the full processing pipeline to complete.
 * This may take several minutes (Real-ESRGAN tile processing).
 */
export async function uploadPds4Zip(file: File): Promise<EnhancementResult> {
  const formData = new FormData();
  formData.append('file', file);

  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/upload-pds4`, {
      method: 'POST',
      body: formData,
      // Do NOT set Content-Type header — browser sets it with boundary
    });
  } catch (err) {
    throw new Error(
      'Cannot reach the backend server. Make sure it is running on ' + API_BASE_URL
    );
  }

  if (!response.ok) {
    // Try to extract the FastAPI error detail
    let detail = `Server error (${response.status})`;
    try {
      const body = await response.json();
      if (body.detail) {
        detail = typeof body.detail === 'string' ? body.detail : JSON.stringify(body.detail);
      }
    } catch {
      // response wasn't JSON — use status text
      detail = `${response.status} ${response.statusText}`;
    }
    throw new Error(detail);
  }

  return response.json();
}

/**
 * Quick health check — returns true if the backend is reachable.
 */
export async function checkHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}/health`, { method: 'GET' });
    if (!res.ok) return false;
    const data = await res.json();
    return data.status === 'healthy';
  } catch {
    return false;
  }
}
