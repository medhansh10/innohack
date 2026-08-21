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

export interface HapkeGeometry {
  incidence_angle_deg: number;
  sun_elevation_deg: number;
  derived_emission_angle_deg: number;
  nominal_phase_angle_deg: number;
  roll_deg: number;
  pitch_deg: number;
  sun_azimuth_deg: number;
  target: string;
  instrument: string;
}

export interface HapkeParameters {
  w: number;
  b: number;
  c: number;
  B0: number;
  h: number;
}

export interface HapkeReliabilityStats {
  deep_shadow_area_pct: number;
  penumbra_area_pct: number;
  illuminated_area_pct: number;
  mean_pixel_confidence_pct: number;
}

export interface HapkeFeatureBreakdown {
  name: string;
  area_pct: number;
  status: string;
  badge: string;
  color: 'emerald' | 'amber' | 'rose' | string;
  description: string;
}

export interface HapkeImages {
  confidence_heatmap: string;
  confidence_overlay: string;
  shadow_mask: string;
}

export interface HapkeAnalysis {
  geometry: HapkeGeometry;
  hapke_parameters: HapkeParameters;
  theoretical_reflectance_if: number;
  opposition_surge_active: boolean;
  opposition_surge_note: string;
  reliability_stats: HapkeReliabilityStats;
  executive_briefing: string;
  images: HapkeImages;
  feature_breakdown: HapkeFeatureBreakdown[];
}

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
  hapke_analysis?: HapkeAnalysis | null;
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

/**
 * Fetch existing Hapke photometric analysis from backend.
 */
export async function fetchHapkeAnalysis(): Promise<HapkeAnalysis | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/hapke-analysis`, { method: 'GET' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
