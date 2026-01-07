'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'ผลิตภัณฑ์บำรุงผิว',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูงจากธรรมชาติ',
    slug: 'skincare',
    image: '/product/category/skincare-cate.png',
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-200',
  },
  {
    name: 'ผลิตภัณฑ์สมุนไพร',
    description: 'ผลิตภัณฑ์สมุนไพรเพื่อสุขภาพและความเป็นอยู่ที่ดี',
    slug: 'herbal',
    image: '/product/category/herb-cate.png',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-200',
  },
  {
    name: 'ผลิตภัณฑ์ทำความสะอาด',
    description: 'น้ำยาทำความสะอาดอเนกประสงค์คุณภาพสูง',
    slug: 'cleaning',
    image: '/product/category/clean-cate.png',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-200',
  },
  {
    name: 'ผลิตภัณฑ์สำหรับสัตว์เลี้ยง',
    description: 'ผลิตภัณฑ์ดูแลสัตว์เลี้ยงอย่างอ่อนโยนและปลอดภัย',
    slug: 'pet-care',
    image: '/product/category/pet-cate.png',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-200',
  },
];

export default function ProductCategories1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-amber-500" />
            <h2 className="text-3xl py-4 md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              หมวดหมู่สินค้า
            </h2>
            <Sparkles className="h-6 w-6 text-amber-500" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            เลือกจากหลากหลายหมวดหมู่ผลิตภัณฑ์คุณภาพสูง
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            return (
              <Link key={index} href={`/products?category=${category.slug}`}>
                <motion.div
                  className={`group relative h-80 md:h-96 rounded-3xl overflow-hidden border-2 ${category.borderColor} bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Background Image */}
                  <div className="absolute inset-0 -z-10">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-125 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent group-hover:from-white/98 group-hover:via-white/60 transition-all duration-500" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-3 group-hover:w-16 transition-all duration-300" />
                    </motion.div>
                    
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:translate-y-[-4px] transition-transform duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {category.name}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-700 text-sm md:text-base mb-6 line-clamp-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {category.description}
                    </motion.p>
                    
                    {/* Button */}
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-lg group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300 w-fit backdrop-blur-sm"
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
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

