import React, { useRef } from 'react';

export default function MagneticButton({ children, href, className = '' }) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${relX * 0.15}px, ${relY * 0.15}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  };

  const Comp = href ? 'a' : 'button';

  return (
    <Comp
      href={href}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      className={`inline-flex items-center justify-center rounded-md px-5 py-2.5 transition will-change-transform bg-white text-black hover:bg-white/90 border border-white/20 shadow-[0_8px_30px_rgb(2,6,23,0.35)] ${className}`}
    >
      {children}
    </Comp>
  );
}
