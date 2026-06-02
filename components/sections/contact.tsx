"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, ArrowRight, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 overflow-hidden bg-[hsl(40,20%,97%)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(40,20%,97%)] via-[hsl(38,15%,95%)] to-[hsl(40,20%,97%)]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(38 90% 50% / 0.04) 0%, transparent 55%)', filter: 'blur(150px)' }} />
      <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(174 60% 45% / 0.03) 0%, transparent 50%)', filter: 'blur(120px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[hsl(38,90%,50%)] text-[10px] sm:text-xs tracking-[0.5em] uppercase font-light">Contact</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-light text-[hsl(30,10%,18%)] tracking-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Let&apos;s Create
          </h2>
          <div className="mt-6 mx-auto w-16 h-[1px] bg-gradient-to-r from-transparent via-[hsl(38,90%,50%)] to-transparent" />
          <p className="mt-8 max-w-xl mx-auto text-[hsl(30,8%,50%)] leading-relaxed text-[15px]" style={{ fontFamily: 'var(--font-inter)' }}>
            Ready to bring your vision to life? Every great image begins with a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-gold rounded-2xl p-7 space-y-7">
              {[
                { icon: MapPin, label: 'Studio', value: 'Via dei Calzaiuoli 12, Florence, Italy' },
                { icon: Mail, label: 'Email', value: 'studio@otishale.photo' },
                { icon: Phone, label: 'Phone', value: '+39 055 234 5678' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(38,90%,50%,0.08)] border border-[hsl(38,90%,50%,0.12)] flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-[hsl(38,90%,50%,0.6)]" />
                  </div>
                  <div>
                    <h4 className="text-[hsl(30,8%,45%)] text-xs font-light tracking-wider">{item.label}</h4>
                    <p className="text-[hsl(30,10%,22%)] text-sm mt-1" style={{ fontFamily: 'var(--font-inter)' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-2xl overflow-hidden aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(38,15%,92%)] to-[hsl(40,18%,95%)] flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="mx-auto text-[hsl(38,90%,50%,0.3)] mb-2" />
                  <p className="text-[hsl(30,8%,45%)] text-[10px] tracking-[0.3em] uppercase">Florence, Italy</p>
                  <p className="text-[hsl(30,8%,55%)] text-[9px] mt-1">43.7696 N, 11.2558 E</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="glass-gold rounded-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(38 90% 50% / 0.03) 0%, transparent 55%)', filter: 'blur(60px)' }} />

              <h3 className="text-2xl font-light text-[hsl(30,10%,22%)] mb-8 relative z-10" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Book a Session
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[hsl(30,8%,50%)] text-[10px] tracking-[0.2em] uppercase block mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-[hsl(40,20%,99%,0.6)] border border-[hsl(30,10%,88%)] rounded-lg px-4 py-3 text-[hsl(30,10%,18%)] text-sm placeholder:text-[hsl(30,8%,65%)] field-glow focus:outline-none transition-all duration-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[hsl(30,8%,50%)] text-[10px] tracking-[0.2em] uppercase block mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-[hsl(40,20%,99%,0.6)] border border-[hsl(30,10%,88%)] rounded-lg px-4 py-3 text-[hsl(30,10%,18%)] text-sm placeholder:text-[hsl(30,8%,65%)] field-glow focus:outline-none transition-all duration-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[hsl(30,8%,50%)] text-[10px] tracking-[0.2em] uppercase block mb-2">Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full bg-[hsl(40,20%,99%,0.6)] border border-[hsl(30,10%,88%)] rounded-lg px-4 py-3 text-[hsl(30,10%,18%)] text-sm field-glow focus:outline-none transition-all duration-500 appearance-none"
                  >
                    <option value="" className="bg-white">Select a service</option>
                    <option value="wedding" className="bg-white">Wedding Photography</option>
                    <option value="travel" className="bg-white">Travel Photography</option>
                    <option value="nature" className="bg-white">Nature Photography</option>
                    <option value="event" className="bg-white">Event Coverage</option>
                    <option value="commercial" className="bg-white">Commercial Photography</option>
                    <option value="cinematic" className="bg-white">Cinematic Shoots</option>
                  </select>
                </div>

                <div>
                  <label className="text-[hsl(30,8%,50%)] text-[10px] tracking-[0.2em] uppercase block mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full bg-[hsl(40,20%,99%,0.6)] border border-[hsl(30,10%,88%)] rounded-lg px-4 py-3 text-[hsl(30,10%,18%)] text-sm placeholder:text-[hsl(30,8%,65%)] field-glow focus:outline-none transition-all duration-500 resize-none"
                    placeholder="Tell me about your vision..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[hsl(30,10%,18%)] text-[hsl(40,20%,97%)] text-[11px] tracking-[0.2em] uppercase font-medium rounded-lg btn-shimmer hover:shadow-[0_0_40px_hsl(30,10%,18%,0.12)] transition-all duration-500 flex items-center justify-center gap-3"
                  data-cursor-hover
                >
                  {isSubmitted ? (
                    <span className="flex items-center gap-2"><Send size={14} /> Message Sent</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
