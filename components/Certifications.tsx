'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Shield, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

const certifications = [
  { id: 1, image: '/new_images/345605_0.jpg', year: '2568', type: 'Safety Product' },
  { id: 2, image: '/new_images/345606_0.jpg', year: '2567', type: 'Safety Product' },
  { id: 3, image: '/new_images/345609_0.jpg', year: '2567', type: 'Smart Product' },
  { id: 4, image: '/new_images/345607_0.jpg', year: '2567', type: 'Safety Product' },
  { id: 5, image: '/new_images/345608_0.jpg', year: '2568', type: 'Safety Product' },
  { id: 6, image: '/new_images/345610_0.jpg', year: '2567', type: 'Safety Product' },
];

const featuredCertifications = [
  { id: 1, image: '/new_images/345611_0.jpg', title: 'Curcuma Coffee Enzyme Scrub Soap', badge: 'DMSc Certified', gradient: 'from-orange-100 via-amber-50 to-yellow-50' },
  { id: 2, image: '/new_images/345612_0.jpg', title: 'Probiotic Body Liquid Soap', badge: 'Smart Product', gradient: 'from-blue-100 via-cyan-50 to-sky-50' },
];

export default function Certifications() {
  const t = useTranslations('home.certifications');

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <Shield className="h-4 w-4" />
            <span>{t('badge')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { icon: Award, label: t('stat1Label'), value: '6+' },
            { icon: Shield, label: t('stat2Label'), value: '100%' },
            { icon: CheckCircle2, label: t('stat3Label'), value: 'DMSc' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 shadow-lg text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className="h-10 w-10 text-blue-600 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-16">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <motion.div
                className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-blue-100/50"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={cert.image}
                  alt={`${cert.type} Certificate ${cert.year}`}
                  fill
                  className="object-contain p-3"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="text-white text-center">
                    <div className="text-xs font-semibold">{cert.type}</div>
                    <div className="text-xs opacity-90">{cert.year}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Featured Product Certifications - Full Image Display */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {featuredCertifications.map((product, idx) => (
            <motion.div
              key={product.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
            >
              <div className="relative h-[500px] md:h-[600px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span className="font-medium">{t('footer')}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
