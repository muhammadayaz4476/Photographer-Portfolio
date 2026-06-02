"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Elena & Marco Rossi',
    role: 'Wedding Couple',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Otis captured not just our wedding — he captured the feeling of the day. Every image tells the story of our love in a way we never could have imagined. Pure artistry.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'National Geographic Editor',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'His ability to find the extraordinary in the mundane is unmatched. Every assignment delivers images that stop our readers in their tracks. A true visual poet.',
    rating: 5,
  },
  {
    name: 'James Whitfield',
    role: 'CEO, Atlas Ventures',
    avatar: 'https://images.pexels.com/photos/1468763/pexels-photo-1468763.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Our brand identity was completely transformed. Otis understood our vision before we could articulate it ourselves. The commercial shots exceeded every expectation.',
    rating: 5,
  },
  {
    name: 'Amara Okafor',
    role: 'Travel Author',
    avatar: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Traveling with Otis as our photographer was like seeing the world through new eyes. His images became the soul of our book — raw, authentic, breathtakingly beautiful.',
    rating: 5,
  },
  {
    name: 'David & Claire Laurent',
    role: 'Art Collectors',
    avatar: 'https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'We commissioned Otis for our gallery exhibition. His cinematic approach brings a narrative depth to photography that we have rarely encountered. Truly exceptional work.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-28 md:py-36 px-6 overflow-hidden bg-[hsl(38,15%,95%)]">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(38 90% 50% / 0.03) 0%, transparent 55%)', filter: 'blur(200px)' }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(38,90%,50%)] text-[10px] sm:text-xs tracking-[0.5em] uppercase font-light">Testimonials</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-light text-[hsl(30,10%,18%)] tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Client Words
          </h2>
          <div className="mt-6 mx-auto w-16 h-[1px] bg-gradient-to-r from-transparent via-[hsl(38,90%,50%)] to-transparent" />
        </motion.div>

        <div className="relative">
          <Quote className="absolute -top-2 left-6 sm:left-10 text-[hsl(38,90%,50%,0.08)]" size={50} />

          <div className="glass-gold rounded-3xl p-8 sm:p-10 md:p-14 min-h-[300px] sm:min-h-[320px] flex flex-col justify-center relative overflow-hidden">
            {/* Ambient light inside card */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(38 90% 50% / 0.04) 0%, transparent 60%)', filter: 'blur(80px)' }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[hsl(38,90%,50%)] text-[hsl(38,90%,50%)]" />
                  ))}
                </div>

                <p className="text-[hsl(30,8%,35%)] text-lg sm:text-xl md:text-[22px] leading-relaxed font-light mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[hsl(38,90%,50%,0.2)]"
                  />
                  <div>
                    <h4 className="text-[hsl(30,10%,22%)] font-light tracking-wider text-sm" style={{ fontFamily: 'var(--font-cormorant)' }}>
                      {testimonials[current].name}
                    </h4>
                    <p className="text-[hsl(30,8%,50%)] text-xs tracking-wider mt-0.5" style={{ fontFamily: 'var(--font-inter)' }}>
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-[hsl(30,10%,85%)] flex items-center justify-center text-[hsl(30,8%,50%)] hover:text-[hsl(38,90%,50%)] hover:border-[hsl(38,90%,50%,0.3)] hover:shadow-[0_0_15px_hsl(38,90%,50%,0.08)] transition-all duration-500"
              data-cursor-hover
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    i === current ? 'bg-[hsl(38,90%,50%)] w-6' : 'bg-[hsl(30,10%,80%)] w-3 hover:bg-[hsl(30,10%,60%)]'
                  }`}
                  data-cursor-hover
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-[hsl(30,10%,85%)] flex items-center justify-center text-[hsl(30,8%,50%)] hover:text-[hsl(38,90%,50%)] hover:border-[hsl(38,90%,50%,0.3)] hover:shadow-[0_0_15px_hsl(38,90%,50%,0.08)] transition-all duration-500"
              data-cursor-hover
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
