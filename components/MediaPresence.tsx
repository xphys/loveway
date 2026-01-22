'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Users, Mic, TrendingUp, Building2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const mediaImages = [
  {
    id: 1,
    src: '/new_images/345603_0.jpg',
    alt: 'Panel Discussion at Department of Medical Sciences OTOP/SMEs Conference 2568',
    titleKey: 'event1Title' as const,
    dateKey: 'event1Date' as const,
    objectPosition: 'center center',
  },
  {
    id: 2,
    src: '/new_images/345602_0.jpg',
    alt: 'Speaker at Conference Panel',
    titleKey: 'event2Title' as const,
    dateKey: null,
    objectPosition: 'center 30%',
  },
];

export default function MediaPresence() {
  const t = useTranslations('home.media');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaImages.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold mb-6">
            <Mic className="h-4 w-4" />
            <span>{t('badge')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Image Carousel */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={mediaImages[currentIndex].src}
                    alt={mediaImages[currentIndex].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: mediaImages[currentIndex].objectPosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold mb-3">
                      <Building2 className="h-3 w-3" />
                      {t('eventLabel')}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {t(mediaImages[currentIndex].titleKey)}
                    </h3>
                    {mediaImages[currentIndex].dateKey && (
                      <p className="text-sm text-white/90">
                        {t(mediaImages[currentIndex].dateKey)}
                      </p>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {mediaImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column with Features */}
          <motion.div
            className="h-[500px] flex items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6 w-full h-full">
              {[
                { icon: Users, label: t('feature1'), value: '100+' },
                { icon: Mic, label: t('feature2'), value: '5+' },
                { icon: TrendingUp, label: t('feature3'), value: '2568' },
                { icon: Building2, label: t('feature4'), value: 'DMSc' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100/50 hover:shadow-xl transition-shadow flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">{feature.value}</div>
                  <div className="text-sm text-gray-600 font-medium leading-tight text-center">{feature.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
