import React, { useEffect, useRef } from 'react';

// Floating particles that subtly react to mouse/touch
export default function Particles({ count = 80 }) {
  const canvasRef = useRef(null);
  const pointer = useRef({ x: null, y: null });
  const particles = useRef([]);
  const rafId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function resize() {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();

    // init particles
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width / dpr,
      y: Math.random() * canvas.height / dpr,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 1.8 + 0.6,
      hue: Math.random() > 0.5 ? 200 + Math.random() * 40 : 340 + Math.random() * 20, // cyan/blue and magenta
    }));

    function step() {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles.current) {
        // attraction/repulsion to pointer
        if (pointer.current.x !== null) {
          const dx = pointer.current.x - p.x;
          const dy = pointer.current.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          const force = Math.min(3 / dist, 0.05);
          p.vx += dx * force * 0.02;
          p.vy += dy * force * 0.02;
        }

        // motion with slight damping
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        // wrap around screen
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        // draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, 0.7)`;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 60%, 0.6)`;
        ctx.shadowBlur = 8;
        ctx.fill();
      }

      rafId.current = requestAnimationFrame(step);
    }

    function onMove(e) {
      if (e.touches && e.touches[0]) {
        pointer.current.x = e.touches[0].clientX;
        pointer.current.y = e.touches[0].clientY;
      } else {
        pointer.current.x = e.clientX;
        pointer.current.y = e.clientY;
      }
    }

    function onLeave() {
      pointer.current.x = null;
      pointer.current.y = null;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('touchend', onLeave);

    step();

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('touchend', onLeave);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-40"
      aria-hidden
    />
  );
}
