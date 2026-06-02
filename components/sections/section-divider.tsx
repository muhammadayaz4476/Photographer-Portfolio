"use client";

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="relative py-6">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[hsl(30,10%,88%)] to-transparent" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex justify-center"
      >
        <div className="w-1.5 h-1.5 bg-[hsl(38,90%,50%,0.4)] rotate-45" />
      </motion.div>
    </div>
  );
}
