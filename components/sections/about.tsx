"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Camera, Globe, Users } from 'lucide-react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2200;
    const steps = 70;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: Camera, value: 850, suffix: '+', label: 'Projects Completed' },
  { icon: Globe, value: 42, suffix: '', label: 'Countries Explored' },
  { icon: Award, value: 28, suffix: '', label: 'Awards Won' },
  { icon: Users, value: 350, suffix: '+', label: 'Happy Clients' },
];

const timeline = [
  { year: '2010', title: 'The Beginning', desc: 'First camera, first sunset, first realization that light tells stories.', image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { year: '2014', title: 'National Geographic', desc: 'Published first feature in Nat Geo — a milestone that shaped the vision.', image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { year: '2018', title: 'Sony World Photography Awards', desc: 'Won the Landscape category, gaining international recognition.', image: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { year: '2022', title: 'Studio Otis Hale', desc: 'Opened a cinematic photography studio in the heart of Florence.', image: 'https://images.pexels.com/photos/326235/pexels-photo-326235.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { year: '2025', title: 'Global Exhibition', desc: 'World tour exhibition spanning 12 cities across 4 continents.', image: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6 overflow-hidden bg-[hsl(38,15%,95%)]">
      {/* Warm ambient lights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(38 90% 50% / 0.04) 0%, transparent 55%)', filter: 'blur(120px)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(174 60% 45% / 0.03) 0%, transparent 50%)', filter: 'blur(100px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[hsl(0, 0%, 3%)] text-[10px] sm:text-xs tracking-[0.5em] uppercase font-light">About</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-light text-[hsl(30,10%,18%)] tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Behind the Lens
          </h2>
          <div className="mt-6 mx-auto w-16 h-[1px] bg-gradient-to-r from-transparent via-[hsl(30, 4%, 10%)] to-transparent" />
        </motion.div>

        {/* Asymmetrical editorial layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-28">
          {/* Image column - larger */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative">
              {/* Main portrait */}
              <div className="overflow-hidden rounded-2xl premium-frame shadow-[0_30px_80px_hsl(30,10%,20%,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1603574670812-d24560880210?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww"
                  alt="Photographer at work"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Floating accent image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 -right-4 md:-right-8 w-36 md:w-48 overflow-hidden rounded-xl border-4 border-[hsl(40,20%,97%)] shadow-[0_20px_50px_hsl(30,10%,20%,0.1)]"
              >
                <img
                  src="https://media.istockphoto.com/id/2194222903/photo/empty-photo-studio-with-a-green-backdrop-setup.webp?a=1&b=1&s=612x612&w=0&k=20&c=jT7Zc-Z27i3WpUv1sObV-AbgQXJmS23vWb0Dw-6fSjc="
                  alt="Studio detail"
                  className="w-full aspect-square object-cover"
                />
              </motion.div>

              {/* Decorative frame accents */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[hsl(38,90%,50%,0.2)] rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-[hsl(30,10%,85%)] rounded-2xl" />

              {/* Floating label */}
              <div className="absolute bottom-6 left-6 glass rounded-lg px-4 py-2">
                <span className="text-[9px] tracking-[0.3em] uppercase text-[hsl(38,90%,50%,0.7)]">Est. 2010</span>
              </div>
            </div>
          </motion.div>

          {/* Text column - smaller */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h3 className="text-3xl md:text-4xl font-light text-[hsl(30,10%,18%)] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Otis Hale
            </h3>
            <p className="text-[hsl(30,8%,45%)] leading-[1.85] mb-5 text-[15px]" style={{ fontFamily: 'var(--font-inter)' }}>
              For over fifteen years, I have chased light across deserts, through ancient forests,
              and into the eyes of those who dare to feel. My work is not about capturing what is
              seen — it is about revealing what is felt. Every frame is a story, every shadow
              a memory, every highlight a hope.
            </p>
            <p className="text-[hsl(30,8%,45%)] leading-[1.85] mb-8 text-[15px]" style={{ fontFamily: 'var(--font-inter)' }}>
              From the volcanic peaks of Iceland to the bustling markets of Marrakech,
              my lens finds the extraordinary in the ordinary and the eternal in the fleeting.
              I believe photography is the art of seeing what the heart already knows.
            </p>

            {/* Awards */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['Sony World Photography Award', 'Nat Geo Featured', 'IPA Gold Winner', 'PDN 30'].map((award) => (
                <span
                  key={award}
                  className="px-4 py-1.5 text-[9px] tracking-[0.2em] uppercase border border-[hsl(38,90%,50%,0.2)] text-[hsl(38,90%,50%,0.6)] rounded-full hover:border-[hsl(38,90%,50%,0.4)] hover:text-[hsl(38,90%,50%,0.8)] transition-all duration-500 bg-[hsl(38,90%,50%,0.04)]"
                >
                  {award}
                </span>
              ))}
            </div>

            {/* Signature */}
            <div className="text-[hsl(30,10%,25%)] text-2xl italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Otis Hale
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-28"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center glass-gold rounded-2xl p-6 sm:p-8 card-lift group"
            >
              <stat.icon size={22} className="mx-auto mb-3 text-[hsl(38,90%,50%,0.5)] group-hover:text-[hsl(38,90%,50%,0.8)] transition-colors duration-500" />
              <div className="text-3xl sm:text-4xl font-light text-[hsl(30,10%,18%)] mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[hsl(30,8%,50%)] text-[9px] tracking-[0.2em] uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey / Timeline - visual storytelling */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-2xl md:text-3xl font-light text-[hsl(30,10%,25%)] mb-16"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            The Journey
          </motion.h3>

          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-[19px] md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[hsl(38,90%,50%,0.3)] via-[hsl(30,10%,85%)] to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative pl-14 md:pl-0 pb-14 last:pb-0 md:flex md:items-start ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-10 h-10 rounded-full bg-[hsl(40,20%,97%)] border-2 border-[hsl(38,90%,50%,0.3)] flex items-center justify-center z-10 shadow-[0_0_15px_hsl(38,90%,50%,0.08)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[hsl(37, 94%, 51%)]" />
                </div>

                {/* Content card */}
                <div className={`md:w-[calc(50%-40px)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass rounded-xl p-6 card-lift group">
                    {/* Image thumbnail */}
                    <div className="overflow-hidden rounded-lg mb-4 aspect-[3/2]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <span className="text-[hsl(38,90%,50%,0.7)] text-sm tracking-[0.15em]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {item.year}
                    </span>
                    <h4 className="text-[hsl(30,10%,22%)] font-light mt-1 text-lg" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {item.title}
                    </h4>
                    <p className="text-[hsl(0, 0%, 6%)] mt-2 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
