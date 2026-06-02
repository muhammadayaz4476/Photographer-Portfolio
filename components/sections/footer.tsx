"use client";

import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUp,
  Youtube,
  Dribbble,
  Globe,
} from 'lucide-react';

// Custom Behance icon component
function BehanceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h6c1.7 0 3 1.3 3 3s-1.3 3-3 3H3V9z" />
      <path d="M3 15h7c1.7 0 3 1.3 3 3s-1.3 3-3 3H3v-6z" />
      <path d="M15 7.5h6M18 6v3" />
      <path d="M21 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://x.com', label: 'X' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
  { icon: BehanceIcon, href: 'https://behance.net', label: 'Behance' },
];

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-[hsl(30,10%,88%)] bg-[hsl(38,15%,95%)]">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            {/* OH Logo */}
            <svg width="48" height="30" viewBox="0 0 48 30" className="mb-5">
              <text
                x="24"
                y="24"
                textAnchor="middle"
                fill="hsl(30,10%,18%)"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 400, letterSpacing: '2px' }}
              >
                OH
              </text>
            </svg>
            <p className="text-[hsl(30,8%,50%)] text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-inter)' }}>
              Cinematic photography that transcends the ordinary.
              Where light meets emotion, stories become timeless.
            </p>
          </div>

          <div>
            <h4 className="text-[hsl(30,10%,35%)] text-[10px] tracking-[0.3em] uppercase mb-5">Navigation</h4>
            <div className="space-y-3">
              {['Home', 'Gallery', 'About', 'Services', 'Testimonials', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[hsl(30,8%,50%)] text-sm hover:text-[hsl(38,90%,50%)] transition-colors duration-500 elegant-underline"
                  data-cursor-hover
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[hsl(30,10%,35%)] text-[10px] tracking-[0.3em] uppercase mb-5">Connect</h4>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[hsl(40,20%,99%,0.6)] border border-[hsl(30,10%,88%)] flex items-center justify-center text-[hsl(30,8%,45%)] hover:text-[hsl(38,90%,50%)] hover:border-[hsl(38,90%,50%,0.3)] hover:shadow-[0_0_20px_hsl(38,90%,50%,0.1)] hover:-translate-y-1 hover:scale-105 transition-all duration-500"
                    data-cursor-hover
                    aria-label={social.label}
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
            <p className="text-[hsl(30,8%,50%)] text-sm" style={{ fontFamily: 'var(--font-inter)' }}>studio@otishale.photo</p>
          </div>
        </div>

        <div className="border-t border-[hsl(30,10%,88%)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(30,8%,55%)] text-xs tracking-wider" style={{ fontFamily: 'var(--font-inter)' }}>
            &copy; {new Date().getFullYear()} Otis Hale Photography. All rights reserved.
          </p>
          <a
            href="#home"
            className="w-10 h-10 rounded-full border border-[hsl(30,10%,85%)] flex items-center justify-center text-[hsl(30,8%,50%)] hover:text-[hsl(38,90%,50%)] hover:border-[hsl(38,90%,50%,0.3)] hover:shadow-[0_0_15px_hsl(38,90%,50%,0.08)] transition-all duration-500"
            data-cursor-hover
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
