"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import GallerySection from '@/components/sections/gallery';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/sections/footer';
import SectionDivider from '@/components/sections/section-divider';

const CinematicIntro = dynamic(() => import('@/components/ui-custom/cinematic-intro'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/ui-custom/custom-cursor'), { ssr: false });
const SmoothScrollProvider = dynamic(() => import('@/components/ui-custom/ambient-background'), { ssr: false });
const AmbientParticles = dynamic(() => import('@/components/ui-custom/particles'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/ui-custom/scroll-progress'), { ssr: false });

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('intro-seen');
    if (seen) {
      setIntroComplete(true);
      setShowContent(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('intro-seen', '1');
    setIntroComplete(true);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {!introComplete && <CinematicIntro onComplete={handleIntroComplete} />}
      <CustomCursor />

      {introComplete && (
        <>
          <SmoothScrollProvider>
            <AmbientParticles />
            <ScrollProgress />
            <div className="grain-overlay" />
            <Navigation />
            <main className={showContent ? 'opacity-100' : 'opacity-0'} style={{ transition: 'opacity 0.8s ease' }}>
              <HeroSection />
              <SectionDivider />
              <GallerySection />
              <SectionDivider />
              <AboutSection />
              <SectionDivider />
              <ServicesSection />
              <SectionDivider />
              <TestimonialsSection />
              <SectionDivider />
              <ContactSection />
              <Footer />
            </main>
          </SmoothScrollProvider>
        </>
      )}
    </>
  );
}
