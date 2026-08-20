import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { LunarDataset } from '../../types/lunar';

interface LunarGlobe3DProps {
  dataset: LunarDataset;
}

export const LunarGlobe3D: React.FC<LunarGlobe3DProps> = ({ dataset }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight || 200;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Minimal Lunar Canvas Texture
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, 512, 256);

    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.beginPath();
      ctx.arc(Math.random() * 512, Math.random() * 256, Math.random() * 20 + 5, 0, Math.PI * 2);
      ctx.fill();
    }
    const moonTex = new THREE.CanvasTexture(canvas);

    const moonGeo = new THREE.SphereGeometry(1.0, 48, 48);
    const moonMat = new THREE.MeshStandardMaterial({
      map: moonTex,
      roughness: 0.9,
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    scene.add(moonMesh);

    // Target Pin
    const latRad = (dataset.targetCoordinates.lat * Math.PI) / 180;
    const lonRad = (dataset.targetCoordinates.lon * Math.PI) / 180;
    const fx = Math.cos(latRad) * Math.sin(lonRad);
    const fy = Math.sin(latRad);
    const fz = Math.cos(latRad) * Math.cos(lonRad);

    const pinGeo = new THREE.RingGeometry(0.04, 0.07, 24);
    const pinMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });
    const pinMesh = new THREE.Mesh(pinGeo, pinMat);
    pinMesh.position.set(fx * 1.01, fy * 1.01, fz * 1.01);
    pinMesh.lookAt(new THREE.Vector3(fx * 2, fy * 2, fz * 2));
    moonMesh.add(pinMesh);

    // Lighting
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(3, 1, 2);
    scene.add(dirLight);

    const ambLight = new THREE.AmbientLight(0x0f172a, 0.7);
    scene.add(ambLight);

    // Initial orientation
    if (dataset.targetCoordinates.lat < 0) {
      moonMesh.rotation.x = 0.55;
    }

    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      moonMesh.rotation.y += (e.clientX - prevMouse.x) * 0.006;
      moonMesh.rotation.x += (e.clientY - prevMouse.y) * 0.006;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onMouseUp = () => {
      isDragging = false;
    };

    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isDragging) {
        moonMesh.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      const nw = mount.clientWidth;
      const nh = mount.clientHeight || 200;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      mount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [dataset]);

  return (
    <div className="flex flex-col rounded-2xl bg-[#0d131f] border border-slate-800 p-5 space-y-3 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">
            Lunar Target Region
          </h3>
          <p className="text-xs text-slate-400">
            Target: {dataset.targetCoordinates.latStr}, {dataset.targetCoordinates.lonStr}
          </p>
        </div>
      </div>

      <div
        ref={mountRef}
        className="w-full aspect-[2.5/1] bg-[#090e18] rounded-xl border border-slate-800/80 overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center relative"
      >
        <span className="absolute bottom-2 right-2 text-[10px] text-slate-500 pointer-events-none">
          Drag to rotate
        </span>
      </div>
    </div>
  );
};
