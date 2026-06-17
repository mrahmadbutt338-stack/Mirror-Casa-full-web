'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const shinePos = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for tags and roles
      let isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.getAttribute('role') === 'button' ||
        target.closest('[role="button"]') !== null;

      // Fallback: Check if the element has cursor: pointer
      if (!isInteractive && window.getComputedStyle(target).cursor === 'pointer') {
        isInteractive = true;
      }
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing for ring and shine only
    const animateTrailing = () => {
      const ringLerp = 0.13;
      const shineLerp = 0.08;

      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringLerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringLerp;

      shinePos.current.x += (mousePos.current.x - shinePos.current.x) * shineLerp;
      shinePos.current.y += (mousePos.current.y - shinePos.current.y) * shineLerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      if (shineRef.current) {
        shineRef.current.style.transform = `translate(${shinePos.current.x}px, ${shinePos.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animateTrailing);
    };

    rafRef.current = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  const opacity = isVisible ? 1 : 0;

  return (
    <>
      {/* Outer ring — smooth trailing, behind the default cursor */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '52px' : isClicking ? '30px' : '38px',
          height: isHovering ? '52px' : isClicking ? '30px' : '38px',
          border: `2px solid rgba(167,139,250,${isHovering ? '0.9' : '0.55'})`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity,
          transform: 'translate(-200px, -200px) translate(-50%, -50%)',
          transition: 'width 0.18s cubic-bezier(0.16,1,0.3,1), height 0.18s cubic-bezier(0.16,1,0.3,1), border-color 0.2s, opacity 0.3s',
          willChange: 'transform',
          mixBlendMode: 'normal',
        }}
      />

      {/* Glow shine — slowest trailing */}
      <div
        ref={shineRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '65px' : '22px',
          height: isHovering ? '65px' : '22px',
          background: 'radial-gradient(circle, rgba(192,132,252,0.22) 0%, rgba(244,114,182,0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99997,
          opacity,
          transform: 'translate(-200px, -200px) translate(-50%, -50%)',
          transition: 'width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  );
}
