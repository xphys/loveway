'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'ผลิตภัณฑ์บำรุงผิว',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูงจากธรรมชาติ',
    slug: 'skincare',
    image: '/product/category/skincare-cate.png',
    gradient: 'from-pink-500 via-rose-500 to-pink-600',
    textColor: 'text-pink-50',
  },
  {
    name: 'ผลิตภัณฑ์สมุนไพร',
    description: 'ผลิตภัณฑ์สมุนไพรเพื่อสุขภาพและความเป็นอยู่ที่ดี',
    slug: 'herbal',
    image: '/product/category/herb-cate.png',
    gradient: 'from-green-500 via-emerald-500 to-green-600',
    textColor: 'text-green-50',
  },
  {
    name: 'ผลิตภัณฑ์ทำความสะอาด',
    description: 'น้ำยาทำความสะอาดอเนกประสงค์คุณภาพสูง',
    slug: 'cleaning',
    image: '/product/category/clean-cate.png',
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    textColor: 'text-blue-50',
  },
  {
    name: 'ผลิตภัณฑ์สำหรับสัตว์เลี้ยง',
    description: 'ผลิตภัณฑ์ดูแลสัตว์เลี้ยงอย่างอ่อนโยนและปลอดภัย',
    slug: 'pet-care',
    image: '/product/category/pet-cate.png',
    gradient: 'from-purple-500 via-indigo-500 to-purple-600',
    textColor: 'text-purple-50',
  },
];

export default function ProductCategories3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            หมวดหมู่สินค้า
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            เลือกจากหลากหลายหมวดหมู่ผลิตภัณฑ์คุณภาพสูง
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            return (
              <Link key={index} href={`/products?category=${category.slug}`}>
                <motion.div
                  className={`group relative h-80 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br ${category.gradient} shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.05 }}
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />
                  </div>

                  {/* Animated Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-500`} />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                    <motion.h3
                      className={`text-2xl md:text-3xl font-bold ${category.textColor} mb-3 group-hover:scale-105 transition-transform duration-300`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {category.name}
                    </motion.h3>
                    
                    <motion.p
                      className={`${category.textColor} text-sm md:text-base mb-6 line-clamp-2 opacity-90`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 0.9, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {category.description}
                    </motion.p>
                    
                    {/* Button */}
                    <motion.div
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-xl text-sm font-semibold border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300 w-fit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <span>ดูสินค้า</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

