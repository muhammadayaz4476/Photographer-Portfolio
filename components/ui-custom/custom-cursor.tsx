"use client";

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const visible = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if (typeof window === 'undefined' || 'ontouchstart' in window) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.current = e.clientX;
      cursorY.current = e.clientY;
      if (!visible.current) {
        visible.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => {
      visible.current = true;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      visible.current = false;
      setIsVisible(false);
    };

    const addListeners = () => {
      const els = document.querySelectorAll('a, button, [data-cursor-hover]');
      els.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    // Animation loop for smooth cursor following
    let animId: number;
    const animate = () => {
      setPos({ x: cursorX.current, y: cursorY.current });
      animId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Re-add hover listeners when DOM changes
    const observer = new MutationObserver(() => addListeners());
    observer.observe(document.body, { childList: true, subtree: true });
    addListeners();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          transform: `translate(${pos.x - (isHovering ? 28 : 20)}px, ${pos.y - (isHovering ? 28 : 20)}px)`,
          width: isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'hsl(38,90%,50%)' : 'rgba(30,10%,18%,0.3)'}`,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, opacity 0.3s',
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: isHovering ? 'hsl(38,90%,50%)' : 'hsl(30,10%,18%)',
          opacity: isVisible ? 0.8 : 0,
          transition: 'background 0.3s, opacity 0.3s',
          boxShadow: isHovering ? '0 0 12px hsl(38,90%,50%,0.4)' : 'none',
        }}
      />
    </>
  );
}
