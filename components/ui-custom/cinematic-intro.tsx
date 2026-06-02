"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const oRef = useRef<HTMLSpanElement>(null);
  const hRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete,
      });

      // O appears from left with blur
      tl.fromTo(oRef.current,
        { opacity: 0, x: -80, filter: 'blur(12px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.2 },
        0.3
      );

      // H appears from right with blur
      tl.fromTo(hRef.current,
        { opacity: 0, x: 80, filter: 'blur(12px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.2 },
        0.5
      );

      // Gold line grows between them
      tl.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power2.inOut' },
        1.2
      );

      // Tagline fades in
      tl.fromTo(taglineRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.8
      );

      // Everything zooms out with glow, then fades
      tl.to(containerRef.current, {
        scale: 40,
        opacity: 0,
        filter: 'blur(20px)',
        duration: 1.5,
        ease: 'power4.in',
      }, 3.2);

      // Container disappears
      tl.set(containerRef.current, { display: 'none' });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[hsl(40,20%,97%)] flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-6">
          <span
            ref={oRef}
            className="text-[120px] sm:text-[160px] font-light text-[hsl(30,10%,18%)] leading-none select-none"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            O
          </span>
          <div
            ref={lineRef}
            className="w-12 sm:w-16 h-[1.5px] bg-gradient-to-r from-[hsl(38,90%,50%)] via-[hsl(30,85%,48%)] to-[hsl(38,90%,50%)] origin-center"
            style={{ boxShadow: '0 0 20px hsl(38 90% 50% / 0.3), 0 0 40px hsl(38 90% 50% / 0.15)' }}
          />
          <span
            ref={hRef}
            className="text-[120px] sm:text-[160px] font-light text-[hsl(30,10%,18%)] leading-none select-none"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            H
          </span>
        </div>
        <div ref={taglineRef} className="mt-6 flex items-center gap-3">
          <div className="w-6 h-[1px] bg-[hsl(38,90%,50%,0.3)]" />
          <span className="text-[hsl(30,8%,50%)] text-[10px] tracking-[0.5em] uppercase font-light">
            Otis Hale Photography
          </span>
          <div className="w-6 h-[1px] bg-[hsl(38,90%,50%,0.3)]" />
        </div>
      </div>
    </div>
  );
}
