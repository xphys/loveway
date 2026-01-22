'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

const brands = [
  { name: "Celina's", gradient: "from-pink-400 via-pink-300 to-pink-200", image: "/brand/celina.png" },
  { name: "Rapha", gradient: "from-green-400 via-green-300 to-green-200", image: "/brand/rapha.png" },
  { name: "Celvin", gradient: "from-blue-400 via-blue-300 to-blue-200", image: "/brand/celvin.png" },
  { name: "Rapha Biotech", gradient: "from-amber-400 via-amber-300 to-amber-200", image: "/brand/rapha.png" }
];

export default function BrandShowcase() {
  const t = useTranslations('home.brands');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative" ref={ref}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner/3.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center cursor-pointer group"
              variants={itemVariants}
              whileHover={{ y: -12 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <motion.div
                className="h-44 w-44 rounded-full flex items-center justify-center mb-4 relative"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${brand.gradient} p-1 shadow-lg`}>
                  <div className="bg-white h-full w-full rounded-full flex items-center justify-center relative">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </motion.div>
              <h3 className="text-base font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{brand.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

