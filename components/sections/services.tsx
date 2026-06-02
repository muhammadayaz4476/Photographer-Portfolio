"use client";

import { motion } from 'framer-motion';
import { Camera, Mountain, Heart, Calendar, Briefcase, Film } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Capturing the most intimate moments of your love story with cinematic elegance and timeless grace.',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Mountain,
    title: 'Travel Photography',
    description: 'Documenting the soul of destinations — from hidden alleyways to vast horizons — with authentic vision.',
    image: 'https://images.unsplash.com/photo-1662129265912-bb92302888ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmFsaW5nfGVufDB8fDB8fHww',
  },
  {
    icon: Camera,
    title: 'Nature Photography',
    description: 'Revealing the raw beauty of the natural world, from microscopic details to grand landscapes.',
    image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Calendar,
    title: 'Event Coverage',
    description: 'Comprehensive documentation of corporate galas, launches, and celebrations with editorial precision.',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Briefcase,
    title: 'Commercial Photography',
    description: 'Elevating brands through powerful visual storytelling that connects products with human emotion.',
    image: 'https://images.unsplash.com/photo-1621024994326-91782bb4a5ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbW1lcmNpYWwlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    icon: Film,
    title: 'Cinematic Shoots',
    description: 'Director-level production for short films, music videos, and artistic visual narratives.',
    image: 'https://images.pexels.com/photos/2873485/pexels-photo-2873485.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 md:py-36 px-6 overflow-hidden bg-[hsl(40,20%,97%)]">
      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(38 90% 50% / 0.03) 0%, transparent 55%)', filter: 'blur(150px)' }} />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(174 60% 45% / 0.02) 0%, transparent 50%)', filter: 'blur(120px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[hsl(38, 98%, 45%)] text-[10px] sm:text-xs tracking-[0.5em] uppercase font-light">Services</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-light text-[hsl(30,10%,18%)] tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
            What I Offer
          </h2>
          <div className="mt-6 mx-auto w-16 h-[1px] bg-gradient-to-r from-transparent via-[hsl(38,90%,50%)] to-transparent" />
          <p className="mt-8 max-w-xl mx-auto text-[hsl(30,8%,50%)] leading-relaxed text-[15px]" style={{ fontFamily: 'var(--font-inter)' }}>
            Every project is a collaboration. I bring technical mastery and artistic vision
            to create images that transcend the ordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden card-lift cursor-pointer"
              data-cursor-hover
            >
              {/* Full image background */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,10%,8%,0.9)] via-[hsl(30,10%,8%,0.3)] to-transparent" />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ boxShadow: 'inset 0 0 60px hsl(38 90% 50% / 0.08)' }} />

              {/* Content overlay */}
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className="w-11 h-11 rounded-xl bg-[hsl(38,90%,50%,0.15)] border border-[hsl(38,90%,50%,0.2)] flex items-center justify-center mb-4 group-hover:bg-[hsl(38,90%,50%,0.25)] transition-colors duration-500">
                  <service.icon size={18} className="text-[hsl(38,90%,50%,0.7)]" />
                </div>

                <h3 className="text-xl font-light text-white mb-2" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {service.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[hsl(38,90%,50%,0.6)] text-[10px] tracking-[0.2em] uppercase group-hover:text-[hsl(38,90%,50%,0.9)] transition-colors duration-500"
                >
                  Learn More
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
