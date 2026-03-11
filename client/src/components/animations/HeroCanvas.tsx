import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 25 : 50;
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];

    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xFFAB40 });
    const nodeMaterialCyan = new THREE.MeshBasicMaterial({ color: 0x4285F4 });
    const nodeGeometry = new THREE.SphereGeometry(0.08, 8, 8);

    for (let i = 0; i < nodeCount; i++) {
      const material = Math.random() > 0.5 ? nodeMaterial : nodeMaterialCyan;
      const node = new THREE.Mesh(nodeGeometry, material);
      node.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      );
      nodes.push(node);
      nodePositions.push(node.position.clone());
      scene.add(node);
    }

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xFFAB40,
      transparent: true,
      opacity: 0.3,
    });

    const lines: THREE.Line[] = [];
    const maxDist = 3.5;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < maxDist) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position,
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          lines.push(line);
          scene.add(line);
        }
      }
    }

    const travelParticles: { mesh: THREE.Mesh; from: number; to: number; progress: number; speed: number }[] = [];
    const travelMat = new THREE.MeshBasicMaterial({ color: 0xFFD740 });
    const travelGeo = new THREE.SphereGeometry(0.04, 6, 6);
    const pairCount = Math.min(lines.length, isMobile ? 8 : 15);

    for (let i = 0; i < pairCount; i++) {
      const fromIdx = Math.floor(Math.random() * nodeCount);
      let toIdx = Math.floor(Math.random() * nodeCount);
      while (toIdx === fromIdx) toIdx = Math.floor(Math.random() * nodeCount);
      const mesh = new THREE.Mesh(travelGeo, travelMat);
      scene.add(mesh);
      travelParticles.push({
        mesh,
        from: fromIdx,
        to: toIdx,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
      });
    }

    camera.position.z = 6;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    let time = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.005;

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].position.x = nodePositions[i].x + Math.sin(time + i * 0.5) * 0.15;
        nodes[i].position.y = nodePositions[i].y + Math.cos(time + i * 0.3) * 0.1;
      }

      let lineIdx = 0;
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          if (lineIdx < lines.length) {
            const positions = lines[lineIdx].geometry.attributes.position;
            if (positions) {
              const arr = positions.array as Float32Array;
              arr[0] = nodes[i].position.x;
              arr[1] = nodes[i].position.y;
              arr[2] = nodes[i].position.z;
              arr[3] = nodes[j].position.x;
              arr[4] = nodes[j].position.y;
              arr[5] = nodes[j].position.z;
              positions.needsUpdate = true;
            }
            lineIdx++;
          }
        }
      }

      for (const tp of travelParticles) {
        tp.progress += tp.speed;
        if (tp.progress > 1) {
          tp.progress = 0;
          tp.from = tp.to;
          tp.to = Math.floor(Math.random() * nodeCount);
        }
        const fromPos = nodes[tp.from].position;
        const toPos = nodes[tp.to].position;
        tp.mesh.position.lerpVectors(fromPos, toPos, tp.progress);
      }

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const w = canvas.parentElement.clientWidth;
      const h = canvas.parentElement.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      nodeMaterialCyan.dispose();
      lineMaterial.dispose();
      travelMat.dispose();
      travelGeo.dispose();
      lines.forEach(l => l.geometry.dispose());
      scene.clear();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none', opacity: 0.7 }}
      data-testid="hero-canvas"
    />
  );
}
