import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dimensions
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles Geometry
    const particlesCount = 350;
    const positionArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create a spherical distribution for a premium galactic look
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 15 + Math.random() * 25; // radius between 15 and 40

      positionArray[i] = r * Math.sin(phi) * Math.cos(theta);     // X
      positionArray[i + 1] = r * Math.sin(phi) * Math.sin(theta); // Y
      positionArray[i + 2] = r * Math.cos(phi);                  // Z

      scaleArray[i / 3] = Math.random();
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));

    // Create a particle texture dynamically via canvas to avoid external asset loading
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(99, 102, 241, 0.8)'); // Indigo
      gradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.2)'); // Violet
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    // Materials
    const material = new THREE.PointsMaterial({
      size: 0.8,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x9f9fff,
    });

    // Points Mesh
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Interaction coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow rotation
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.01;

      // Smooth mouse follow (easing)
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particles.position.x = targetX * 0.5;
      particles.position.y = -targetY * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default ThreeBackground;
