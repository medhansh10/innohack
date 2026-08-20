import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface StarfieldBackgroundProps {
  appState?: 'PRE_FLIGHT' | 'PROCESSING' | 'DASHBOARD';
}

export const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({ appState = 'PRE_FLIGHT' }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const moonMeshRef = useRef<THREE.Mesh | null>(null);
  const targetPosRef = useRef<{ x: number; y: number; z: number; scale: number }>({
    x: 0,
    y: -3.1,
    z: 0,
    scale: 1.0,
  });

  useEffect(() => {
    // 21hrs.space layout: Massive Moon rising from the bottom on landing page
    if (appState === 'PRE_FLIGHT') {
      targetPosRef.current = { x: 0, y: -3.5, z: 0, scale: 1.0 };
    } else if (appState === 'PROCESSING') {
      targetPosRef.current = { x: 0, y: -0.5, z: 0.5, scale: 0.85 };
    } else {
      // In Dashboard: Position as a subtle companion in top-right / side
      targetPosRef.current = { x: 2.8, y: -0.6, z: -1.2, scale: 0.65 };
    }
  }, [appState]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // High-Resolution 2048x1024 Realistic Moon Textures (Color, Bump, Normal)
    const generateRealisticLunarMaps = () => {
      const w = 2048;
      const h = 1024;

      const colorCanvas = document.createElement('canvas');
      colorCanvas.width = w;
      colorCanvas.height = h;
      const cCtx = colorCanvas.getContext('2d')!;

      const bumpCanvas = document.createElement('canvas');
      bumpCanvas.width = w;
      bumpCanvas.height = h;
      const bCtx = bumpCanvas.getContext('2d')!;

      // 1. Base Regolith Grey
      cCtx.fillStyle = '#5c5a54';
      cCtx.fillRect(0, 0, w, h);
      bCtx.fillStyle = '#808080';
      bCtx.fillRect(0, 0, w, h);

      // Micro-texture noise for realistic dusty surface grain
      for (let i = 0; i < 500; i++) {
        const px = Math.random() * w;
        const py = Math.random() * h;
        const pr = Math.random() * 60 + 10;
        const bright = Math.random() > 0.48;

        const cGrad = cCtx.createRadialGradient(px, py, 1, px, py, pr);
        cGrad.addColorStop(0, bright ? 'rgba(220, 216, 205, 0.2)' : 'rgba(10, 10, 9, 0.38)');
        cGrad.addColorStop(1, 'transparent');
        cCtx.fillStyle = cGrad;
        cCtx.beginPath();
        cCtx.arc(px, py, pr, 0, Math.PI * 2);
        cCtx.fill();

        const bGrad = bCtx.createRadialGradient(px, py, 1, px, py, pr);
        bGrad.addColorStop(0, bright ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)');
        bGrad.addColorStop(1, 'transparent');
        bCtx.fillStyle = bGrad;
        bCtx.beginPath();
        bCtx.arc(px, py, pr, 0, Math.PI * 2);
        bCtx.fill();
      }

      // 2. Realistic Lunar Maria (Dark Basalt Seas)
      const maria = [
        { x: 600, y: 360, rx: 270, ry: 180, rot: -0.12 }, // Oceanus Procellarum
        { x: 940, y: 310, rx: 180, ry: 140, rot: 0.1 },   // Mare Imbrium
        { x: 1160, y: 390, rx: 130, ry: 110, rot: 0.15 }, // Mare Serenitatis
        { x: 1320, y: 500, rx: 150, ry: 120, rot: -0.1 }, // Mare Tranquillitatis
        { x: 1500, y: 420, rx: 100, ry: 85, rot: 0.05 },  // Mare Crisium
        { x: 1420, y: 620, rx: 120, ry: 100, rot: -0.2 }, // Mare Fecunditatis
        { x: 1260, y: 650, rx: 85, ry: 75, rot: 0 },      // Mare Nectaris
        { x: 780, y: 660, rx: 130, ry: 105, rot: 0.25 },  // Mare Nubium
        { x: 560, y: 680, rx: 80, ry: 70, rot: 0 },       // Mare Humorum
        { x: 1020, y: 170, rx: 300, ry: 45, rot: 0.05 },  // Mare Frigoris
      ];

      for (const m of maria) {
        cCtx.save();
        cCtx.translate(m.x, m.y);
        cCtx.rotate(m.rot);
        const mGrad = cCtx.createRadialGradient(0, 0, 5, 0, 0, Math.max(m.rx, m.ry));
        mGrad.addColorStop(0, '#151513');
        mGrad.addColorStop(0.55, '#22211e');
        mGrad.addColorStop(0.85, '#3b3933');
        mGrad.addColorStop(1, 'transparent');
        cCtx.fillStyle = mGrad;
        cCtx.beginPath();
        cCtx.ellipse(0, 0, m.rx, m.ry, 0, 0, Math.PI * 2);
        cCtx.fill();
        cCtx.restore();

        bCtx.save();
        bCtx.translate(m.x, m.y);
        bCtx.rotate(m.rot);
        const mbGrad = bCtx.createRadialGradient(0, 0, 5, 0, 0, Math.max(m.rx, m.ry));
        mbGrad.addColorStop(0, 'rgba(20, 20, 20, 0.8)');
        mbGrad.addColorStop(1, 'transparent');
        bCtx.fillStyle = mbGrad;
        bCtx.beginPath();
        bCtx.ellipse(0, 0, m.rx, m.ry, 0, 0, Math.PI * 2);
        bCtx.fill();
        bCtx.restore();
      }

      // 3. Realistic Major Craters with Ejecta Rays & Topographic Rims
      const majorCraters = [
        { x: 860, y: 770, r: 24, rays: true, rayCount: 32, rayLen: 520 }, // Tycho
        { x: 720, y: 420, r: 28, rays: true, rayCount: 22, rayLen: 300 }, // Copernicus
        { x: 540, y: 450, r: 16, rays: true, rayCount: 16, rayLen: 190 }, // Kepler
        { x: 460, y: 320, r: 20, rays: false, veryBright: true },         // Aristarchus
        { x: 900, y: 220, r: 24, darkFloor: true },                      // Plato
        { x: 900, y: 860, r: 38, rays: false },                          // Clavius
      ];

      for (const c of majorCraters) {
        if (c.rays && c.rayCount && c.rayLen) {
          cCtx.strokeStyle = 'rgba(248, 250, 252, 0.3)';
          cCtx.lineWidth = 1.3;
          for (let i = 0; i < c.rayCount; i++) {
            const angle = (i / c.rayCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.08;
            const len = c.rayLen * (0.65 + Math.random() * 0.5);
            cCtx.beginPath();
            cCtx.moveTo(c.x, c.y);
            cCtx.lineTo(c.x + Math.cos(angle) * len, c.y + Math.sin(angle) * len);
            cCtx.stroke();
          }
        }

        const rimGrad = cCtx.createRadialGradient(c.x, c.y, c.r * 0.5, c.x, c.y, c.r * 1.5);
        rimGrad.addColorStop(0, c.darkFloor ? '#090908' : c.veryBright ? '#e8e4da' : '#c4c0b5');
        rimGrad.addColorStop(0.7, c.veryBright ? '#f4f0e6' : '#8d897f');
        rimGrad.addColorStop(1, 'transparent');
        cCtx.fillStyle = rimGrad;
        cCtx.beginPath();
        cCtx.arc(c.x, c.y, c.r * 1.5, 0, Math.PI * 2);
        cCtx.fill();

        // 3D Bump relief
        const bRimGrad = bCtx.createRadialGradient(c.x, c.y, c.r * 0.45, c.x, c.y, c.r * 1.35);
        bRimGrad.addColorStop(0, '#000000');
        bRimGrad.addColorStop(0.7, '#ffffff');
        bRimGrad.addColorStop(1, 'rgba(128,128,128,0)');
        bCtx.fillStyle = bRimGrad;
        bCtx.beginPath();
        bCtx.arc(c.x, c.y, c.r * 1.35, 0, Math.PI * 2);
        bCtx.fill();
      }

      // 4. Hundreds of realistic micro-craters across the surface
      for (let i = 0; i < 900; i++) {
        const cx = Math.random() * w;
        const cy = Math.random() * h;
        const cr = Math.random() * 5 + 1.2;

        cCtx.fillStyle = 'rgba(220, 216, 205, 0.36)';
        cCtx.beginPath();
        cCtx.arc(cx, cy, cr, 0, Math.PI * 2);
        cCtx.fill();

        const bSmall = bCtx.createRadialGradient(cx, cy, cr * 0.35, cx, cy, cr * 1.25);
        bSmall.addColorStop(0, 'rgba(5, 5, 5, 0.9)');
        bSmall.addColorStop(0.7, 'rgba(250, 250, 250, 0.9)');
        bSmall.addColorStop(1, 'transparent');
        bCtx.fillStyle = bSmall;
        bCtx.beginPath();
        bCtx.arc(cx, cy, cr * 1.25, 0, Math.PI * 2);
        bCtx.fill();
      }

      // South Pole Highlands Brightness
      const spGrad = cCtx.createLinearGradient(0, 680, 0, 1024);
      spGrad.addColorStop(0, 'transparent');
      spGrad.addColorStop(1, 'rgba(220, 216, 205, 0.34)');
      cCtx.fillStyle = spGrad;
      cCtx.fillRect(0, 680, w, 344);

      const colorTex = new THREE.CanvasTexture(colorCanvas);
      const bumpTex = new THREE.CanvasTexture(bumpCanvas);
      return { colorTex, bumpTex };
    };

    // NASA Lunar Reconnaissance Orbiter (LRO) colour mosaic plus Lunar Orbiter
    // Laser Altimeter (LOLA) elevation data. These are cylindrical/equirectangular
    // maps, so Three.js wraps them directly around the sphere.
    const textureLoader = new THREE.TextureLoader();
    const colorTex = textureLoader.load('/assets/nasa-lroc-color-2k.jpg');
    const elevationTex = textureLoader.load('/assets/nasa-lola-height-1k.jpg');
    colorTex.colorSpace = THREE.SRGBColorSpace;
    colorTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    elevationTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // 2. Large Moon Sphere rising up like 21hrs.space
    const moonGeo = new THREE.SphereGeometry(4.15, 128, 128);
    const moonMat = new THREE.MeshStandardMaterial({
      map: colorTex,
      bumpMap: elevationTex,
      bumpScale: 0.14,
      displacementMap: elevationTex,
      displacementScale: 0.035,
      roughness: 0.98,
      metalness: 0,
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    moonMesh.position.set(targetPosRef.current.x, targetPosRef.current.y, targetPosRef.current.z);
    scene.add(moonMesh);
    moonMeshRef.current = moonMesh;

    // 3. Dramatic Grazing Sunlight (lighting up the top horizon curve of the Moon)
    const sunLight = new THREE.DirectionalLight(0xf3ede0, 3.3);
    sunLight.position.set(-3.5, 5.0, 3.0); // Low, grazing light keeps the surface tactile rather than glossy
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0x070706, 0.16);
    scene.add(ambientLight);

    // Deep space background stars
    const starCount = 280;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 22;
      starPositions[i + 1] = (Math.random() - 0.5) * 16;
      starPositions[i + 2] = (Math.random() - 0.5) * 8 - 4;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xe8e4da,
      size: 0.02,
      transparent: true,
      opacity: 0.3,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // A few restrained meteor streaks—rare enough to preserve the calm, deep-space feel.
    const meteors: Array<{
      line: THREE.Line;
      material: THREE.LineBasicMaterial;
      delay: number;
      speed: number;
    }> = [];

    for (let i = 0; i < 4; i++) {
      const meteorGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-0.28, 0.1, 0),
        new THREE.Vector3(0.3, -0.12, 0),
      ]);
      const meteorMat = new THREE.LineBasicMaterial({
        color: 0xf5efe2,
        transparent: true,
        opacity: 0,
      });
      const meteor = new THREE.Line(meteorGeo, meteorMat);
      meteor.position.set((Math.random() - 0.5) * 10, Math.random() * 5 + 0.5, -2.5);
      scene.add(meteor);
      meteors.push({
        line: meteor,
        material: meteorMat,
        delay: 2 + Math.random() * 7,
        speed: 0.035 + Math.random() * 0.025,
      });
    }

    // 4. Interactive Drag with Momentum
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };
    let mouseX = 0;
    let mouseY = 0;
    let targetParallaxX = 0;
    let targetParallaxY = 0;

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.closest('button') || target.closest('.pointer-events-auto'))) {
        return;
      }
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

      if (isDragging && moonMesh) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        velocity.x = deltaX * 0.004;
        velocity.y = deltaY * 0.004;

        moonMesh.rotation.y += velocity.x;
        moonMesh.rotation.x += velocity.y;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation loop
    let animId: number;
    const clock = new THREE.Clock();
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.05);

      targetParallaxX += (mouseX - targetParallaxX) * 0.03;
      targetParallaxY += (mouseY - targetParallaxY) * 0.03;

      if (moonMesh) {
        if (!isDragging) {
          velocity.x *= 0.95;
          velocity.y *= 0.95;
          moonMesh.rotation.y += velocity.x + 0.0008;
          moonMesh.rotation.x += velocity.y;
        }

        // Smooth position transition
        moonMesh.position.x += (targetPosRef.current.x + targetParallaxX * 0.15 - moonMesh.position.x) * 0.05;
        moonMesh.position.y += (targetPosRef.current.y - targetParallaxY * 0.1 - moonMesh.position.y) * 0.05;
        moonMesh.position.z += (targetPosRef.current.z - moonMesh.position.z) * 0.05;
      }

      meteors.forEach((meteor) => {
        meteor.delay -= delta;
        if (meteor.delay > 0) return;

        meteor.line.position.x -= meteor.speed * 60 * delta;
        meteor.line.position.y -= meteor.speed * 22 * delta;
        meteor.material.opacity = Math.min(0.72, meteor.material.opacity + delta * 5);

        if (meteor.line.position.x < -6.5 || meteor.line.position.y < -3.5) {
          meteor.line.position.set(5.5 + Math.random() * 3.5, 1.5 + Math.random() * 4, -2.5);
          meteor.material.opacity = 0;
          meteor.delay = 4 + Math.random() * 10;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      colorTex.dispose();
      elevationTex.dispose();
      starGeo.dispose();
      starMat.dispose();
      meteors.forEach(({ line, material }) => {
        line.geometry.dispose();
        material.dispose();
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#030303]">
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
};
