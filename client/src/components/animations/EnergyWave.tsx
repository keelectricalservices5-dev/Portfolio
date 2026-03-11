import { useEffect, useRef } from 'react';

export default function EnergyWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 80;
    };
    resize();

    let animationId: number;
    let time = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.03;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.strokeStyle = '#FFAB40';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.6;

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin((x * 0.02) + time) * 20 + Math.sin((x * 0.01) + time * 0.5) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#4285F4';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin((x * 0.025) + time * 1.2) * 15 + Math.cos((x * 0.015) + time * 0.7) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full"
      style={{ pointerEvents: 'none', height: '80px' }}
    />
  );
}
