'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ProductCategories() {
  const t = useTranslations('home.categories');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const categories = [
    {
      nameKey: 'skincare.name',
      descriptionKey: 'skincare.description',
      slug: 'skincare',
      image: '/product/category/skincare-cate.png',
    },
    {
      nameKey: 'herbal.name',
      descriptionKey: 'herbal.description',
      slug: 'herbal',
      image: '/product/category/herb-cate.png',
    },
    {
      nameKey: 'cleaning.name',
      descriptionKey: 'cleaning.description',
      slug: 'cleaning',
      image: '/product/category/clean-cate.png',
    },
    {
      nameKey: 'petCare.name',
      descriptionKey: 'petCare.description',
      slug: 'pet-care',
      image: '/product/category/pet-cate.png',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            return (
              <Link key={index} href={`/products?category=${category.slug}`}>
                <motion.div
                  className="group relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={category.image}
                      alt={t(category.nameKey)}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  {/* Light Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent group-hover:from-white/98 group-hover:via-white/70 transition-all duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:translate-y-[-4px] transition-transform duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {t(category.nameKey)}
                    </motion.h3>

                    <motion.p
                      className="text-gray-700 text-sm md:text-base mb-4 line-clamp-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {t(category.descriptionKey)}
                    </motion.p>
                    
                    {/* Button */}
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg group-hover:bg-gray-800 transition-all duration-300 w-fit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <span>{t('viewProducts')}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
