"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';

const floatingImages = [
  // Row 1 - Luxury fashion portraits from diverse cultures
  {
    src: 'https://images.unsplash.com/photo-1623577284502-d65cdc6ba0b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tbWVyY2lhbCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
    x: '5%', y: '8%', w: 220, h: 300, rotate: -4, speed: 0.035, zIndex: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
    x: '82%', y: '5%', w: 200, h: 270, rotate: 3, speed: 0.04, zIndex: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww',
    x: '20%', y: '65%', w: 240, h: 320, rotate: 2, speed: 0.03, zIndex: 1,
  },
  // Row 2 - Cinematic travel & cultural portraits
  {
    src: 'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww',
    x: '68%', y: '60%', w: 210, h: 280, rotate: -3, speed: 0.038, zIndex: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1561643241-9abf82d76a68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvbWVufGVufDB8fDB8fHww',
    x: '90%', y: '35%', w: 190, h: 260, rotate: 4, speed: 0.032, zIndex: 2,
  },
  // Row 3 - More diverse beauty & emotion
  {
    src: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D',
    x: '0%', y: '38%', w: 200, h: 280, rotate: -1, speed: 0.028, zIndex: 1,
  },
 
  // Row 4 - Artistic & natural light
  {
    src: 'https://images.unsplash.com/photo-1538998073820-4dfa76300194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyfGVufDB8fDB8fHww',
    x: '75%', y: '80%', w: 200, h: 270, rotate: 1, speed: 0.036, zIndex: 1,
  },
 
  // Row 5 - Additional emotional portraits
 
  {
    src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkc3xlbnwwfHwwfHx8MA%3D%3D',
    x: '72%', y: '28%', w: 170, h: 220, rotate: 2, speed: 0.031, zIndex: 4,
  },
  {
    src: 'https://images.unsplash.com/photo-1458239920096-bffee8aba36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGtpZHN8ZW58MHx8MHx8fDA%3D',
    x: '8%', y: '55%', w: 175, h: 235, rotate: -1.5, speed: 0.026, zIndex: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRyZWVzfGVufDB8fDB8fHww',
    x: '85%', y: '70%', w: 185, h: 250, rotate: 1.5, speed: 0.029, zIndex: 2,
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.96]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen overflow-hidden bg-[hsl(40,20%,97%)]">
      {/* Light luxury gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(40,20%,97%)] via-[hsl(38,15%,95%)] to-[hsl(40,18%,93%)]" />

      {/* Ambient warm lights */}
      <div
        className="absolute top-[-10%] left-[20%] w-[700px] h-[700px] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, hsl(38 90% 50% / 0.06) 0%, transparent 60%)',
          filter: 'blur(80px)',
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div
        className="absolute bottom-[-5%] right-[15%] w-[600px] h-[600px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, hsl(174 60% 45% / 0.05) 0%, transparent 55%)',
          filter: 'blur(100px)',
          transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div
        className="absolute top-[30%] right-[5%] w-[400px] h-[400px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, hsl(30 85% 48% / 0.04) 0%, transparent 50%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Floating parallax images */}
      <div className="absolute inset-0 hidden lg:block">
        {floatingImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 4.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              left: img.x,
              top: img.y,
              zIndex: img.zIndex,
              transform: `translate(${mousePos.x * img.speed * 40}px, ${mousePos.y * img.speed * 40}px) rotate(${img.rotate + mousePos.x * img.speed * 5}deg)`,
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="absolute group"
          >
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', -(20 + i * 3) + '%']) }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                className="relative"
              >
                {/* Premium frame effect */}
                <div className="overflow-hidden rounded-2xl premium-frame shadow-[0_20px_60px_hsl(30,10%,20%,0.08)] group-hover:shadow-[0_25px_70px_hsl(30,10%,20%,0.12)] transition-shadow duration-700">
                  <img
                    src={img.src}
                    alt="Cinematic portrait"
                    width={img.w}
                    height={img.h}
                    className="object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,10%,20%,0.15)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-[hsl(30,10%,40%)] text-[10px] sm:text-xs tracking-[0.5em] uppercase font-light">
            <span className="w-8 h-[1px] bg-[hsl(38,90%,50%,0.3)]" />
            Award-Winning Photography
            <span className="w-8 h-[1px] bg-[hsl(38,90%,50%,0.3)]" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 4.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-[0.9]"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          <span className="text-[hsl(30,10%,18%)]">Capturing</span>
          <br />
          <span className="gradient-text-gold">Timeless</span>
          <br />
          <span className="text-[hsl(30,10%,18%)]">Moments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 5.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-lg text-[hsl(30,8%,45%)] text-base sm:text-lg font-light leading-relaxed"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Where light meets emotion. Cinematic storytelling through the lens,
          creating visual narratives that endure beyond time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 5.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex items-center gap-5"
        >
          <a
            href="#gallery"
            className="magnetic-btn btn-shimmer relative px-8 py-3.5 bg-[hsl(30,10%,18%)] text-[hsl(40,20%,97%)] text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:shadow-[0_0_40px_hsl(30,10%,18%,0.15)] transition-all duration-500 flex items-center gap-3 overflow-hidden"
            data-cursor-hover
          >
            View Portfolio
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </a>
          <a
            href="#about"
            className="group flex items-center gap-2 text-[hsl(30,10%,35%)] text-[11px] tracking-[0.2em] uppercase hover:text-[hsl(38,90%,50%)] transition-colors duration-500"
            data-cursor-hover
          >
            <span className="w-9 h-9 rounded-full border border-[hsl(30,10%,80%)] flex items-center justify-center group-hover:border-[hsl(38,90%,50%,0.4)] transition-colors duration-500">
              <Play size={12} className="ml-0.5" />
            </span>
            Watch Reel
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] tracking-[0.5em] uppercase text-[hsl(30,8%,60%)]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={14} className="text-[hsl(30,8%,55%)]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(40,20%,97%)] to-transparent z-[5]" />
    </section>
  );
}
