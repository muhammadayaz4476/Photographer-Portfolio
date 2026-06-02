"use client";

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const categories = ['All', 'Landscape', 'Wildlife', 'Portrait', 'Travel', 'Culture', 'B&W'];

const galleryImages = [
  { src: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Alpine Dawn', category: 'Landscape', height: 'h-80' },
  { src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Golden Valley', category: 'Landscape', height: 'h-96' },
  { src: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Desert Wind', category: 'Travel', height: 'h-72' },
  { src: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Emerald Falls', category: 'Landscape', height: 'h-80' },
  { src: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Silent Hunter', category: 'Wildlife', height: 'h-96' },
  { src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Urban Light', category: 'Portrait', height: 'h-72' },
  { src: 'https://images.pexels.com/photos/326235/pexels-photo-326235.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Ancient Ruins', category: 'Culture', height: 'h-80' },
  // { src: 'https://images.pexels.com/photos/917493/pexels-photo-917493.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Forest Path', category: 'Landscape', height: 'h-96' },
  // { src: 'https://images.pexels.com/photos/33045/animal-lion-mammal-wildlife.jpg?auto=compress&cs=tinysrgb&w=800', title: 'Majestic Gaze', category: 'Wildlife', height: 'h-72' },
  { src: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Venice Canals', category: 'Travel', height: 'h-80' },
  { src: 'https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Winter Silence', category: 'B&W', height: 'h-96' },
  { src: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Temple Guard', category: 'Culture', height: 'h-72' },
  // { src: 'https://images.pexels.com/photos/56875/giant-panda-bear-bamboo-56875.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Gentle Giant', category: 'Wildlife', height: 'h-80' },
  { src: 'https://images.pexels.com/photos/1468763/pexels-photo-1468763.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Cafe Moment', category: 'Portrait', height: 'h-96' },
  { src: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Ocean Dream', category: 'Landscape', height: 'h-72' },
  { src: 'https://images.pexels.com/photos/2355519/pexels-photo-2355519.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Shadow Play', category: 'B&W', height: 'h-80' },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  }, [lightboxIndex, filteredImages.length]);
  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <section id="gallery" className="relative py-28 md:py-36 px-6 overflow-hidden bg-[hsl(40,20%,97%)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(38,15%,95%)] via-[hsl(40,20%,97%)] to-[hsl(40,20%,97%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(38 90% 50% / 0.03) 0%, transparent 55%)', filter: 'blur(100px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(38,90%,50%)] text-[10px] sm:text-xs tracking-[0.5em] uppercase font-light">Portfolio</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-light text-[hsl(30,10%,18%)] tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Visual Stories
          </h2>
          <div className="mt-6 mx-auto w-16 h-[1px] bg-gradient-to-r from-transparent via-[hsl(38,90%,50%)] to-transparent" />
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 text-[10px] sm:text-xs tracking-[0.2em] uppercase rounded-full border transition-all duration-500 ${
                activeCategory === cat
                  ? 'bg-[hsl(30,10%,18%)] text-[hsl(40,20%,97%)] border-[hsl(30,10%,18%)] shadow-[0_4px_20px_hsl(30,10%,18%,0.08)]'
                  : 'bg-transparent text-[hsl(30,8%,45%)] border-[hsl(30,10%,85%)] hover:border-[hsl(30,10%,60%)] hover:text-[hsl(30,10%,25%)]'
              }`}
              data-cursor-hover
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`masonry-grid-item group relative ${img.height} rounded-2xl overflow-hidden cursor-pointer card-lift img-glow-border`}
                onClick={() => openLightbox(i)}
                data-cursor-hover
              >
                <div className="w-full h-full img-hover-zoom">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(30,10%,15%,0.7)] via-[hsl(30,10%,15%,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h3 className="text-white text-sm font-light tracking-wider" style={{ fontFamily: 'var(--font-cormorant)' }}>{img.title}</h3>
                      <p className="text-[hsl(38,90%,50%,0.6)] text-[10px] tracking-[0.2em] uppercase mt-1">{img.category}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <ZoomIn size={14} className="text-white/70" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[hsl(30,10%,10%,0.95)] backdrop-blur-2xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors z-10" data-cursor-hover>
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-4 sm:left-8 text-white/40 hover:text-[hsl(38,90%,50%)] transition-colors z-10" data-cursor-hover>
              <ChevronLeft size={36} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-4 sm:right-8 text-white/40 hover:text-[hsl(38,90%,50%)] transition-colors z-10" data-cursor-hover>
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[lightboxIndex]?.src}
                alt={filteredImages[lightboxIndex]?.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="mt-5 text-center">
                <h3 className="text-white/60 text-lg font-light tracking-wider" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {filteredImages[lightboxIndex]?.title}
                </h3>
                <p className="text-[hsl(38,90%,50%,0.4)] text-xs tracking-[0.2em] uppercase mt-1">
                  {filteredImages[lightboxIndex]?.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
