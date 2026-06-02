"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'py-3 bg-[hsl(40,20%,97%,0.85)] backdrop-blur-2xl border-b border-[hsl(30,10%,88%,0.5)] shadow-[0_4px_30px_hsl(30,10%,20%,0.05),0_1px_0_0_hsl(38,90%,50%,0.08)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* OH Logo */}
          <a href="#home" className="group relative" data-cursor-hover>
            <svg width="48" height="30" viewBox="0 0 48 30" className="transition-transform duration-500 group-hover:scale-105">
              <text
                x="24"
                y="24"
                textAnchor="middle"
                fill={isScrolled ? 'hsl(30,10%,18%)' : 'hsl(30,10%,18%)'}
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 400, letterSpacing: '2px' }}
              >
                OH
              </text>
            </svg>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[hsl(38,90%,50%)] transition-all duration-500 group-hover:w-6" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`elegant-underline relative px-4 py-2 text-[11px] tracking-[0.18em] uppercase transition-colors duration-500 ${
                  activeSection === link.href.slice(1)
                    ? 'text-[hsl(38, 93%, 44%)]'
                    : 'text-[hsl(30, 2%, 21%)] hover:text-[hsl(30,10%,18%)]'
                }`}
                data-cursor-hover
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book Now CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[hsl(30,10%,18%)] text-[hsl(40,20%,97%)] text-[10px] tracking-[0.2em] uppercase font-medium rounded-full btn-shimmer hover:shadow-[0_0_30px_hsl(30,10%,18%,0.12)] transition-all duration-500"
            data-cursor-hover
          >
            Book Now
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-[hsl(30,10%,30%)] p-2"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[hsl(40,20%,97%,0.95)] backdrop-blur-3xl pt-24 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className={`py-4 text-2xl font-light tracking-wider border-b border-[hsl(30,10%,88%,0.4)] transition-colors duration-300 ${
                    activeSection === link.href.slice(1) ? 'text-[hsl(38,90%,50%)]' : 'text-[hsl(30,10%,25%)]'
                  }`}
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 py-4 bg-[hsl(30,10%,18%)] text-[hsl(40,20%,97%)] text-center text-[11px] tracking-[0.2em] uppercase rounded-full"
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
