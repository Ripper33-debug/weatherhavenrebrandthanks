'use client';

import { useEffect, useRef } from 'react';

export default function Simple3DTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;

    // Simple 2D test to see if component renders
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a rotating green square
      const time = Date.now() * 0.001;
      const x = canvas.width / 2 + Math.cos(time) * 100;
      const y = canvas.height / 2 + Math.sin(time) * 100;
      
      ctx.fillStyle = '#00ff00';
      ctx.fillRect(x - 25, y - 25, 50, 50);
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 10,
      pointerEvents: 'none',
      background: 'rgba(255, 0, 0, 0.1)' // Red background to see if component renders
    }}>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
