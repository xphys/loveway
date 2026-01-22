'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('home.about');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden relative" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Logo */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          {/* <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full" />
              <Image
                src="/logo.png"
                alt="Love Way"
                width={200}
                height={200}
                className="relative drop-shadow-2xl"
              />
            </div>
          </motion.div> */}

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-500 via-cyan-500 via-blue-700 to-blue-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('brandName')}
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {t('tagline')}
          </motion.p>
        </motion.div>

        {/* Company Story Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500" />
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-3xl p-[2px]">
              <div className="bg-white group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:via-white group-hover:to-cyan-100 rounded-3xl p-12 sm:p-16 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <div className="relative rounded-full overflow-hidden shadow-lg ring-4 ring-blue-200">
                          <Image
                            src="/logo.png"
                            alt="Love Way"
                            width={80}
                            height={80}
                            className="object-cover w-20 h-20"
                          />
                        </div>
                      </motion.div>
                      <div>

                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                          {t('companyName')}
                        </h3>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t('description1')}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t('description2')}
                    </p>
                  </div>

                  <motion.div
                    className="relative h-[500px] cursor-pointer group"
                    whileHover={{ scale: 1.4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <Image
                      src="/new_images/345041.jpg"
                      alt="RAPHA Biotech Product Information - Company's certified herbal products"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

