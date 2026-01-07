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
    accent: 'pink',
  },
  {
    name: 'ผลิตภัณฑ์สมุนไพร',
    description: 'ผลิตภัณฑ์สมุนไพรเพื่อสุขภาพและความเป็นอยู่ที่ดี',
    slug: 'herbal',
    image: '/product/category/herb-cate.png',
    accent: 'green',
  },
  {
    name: 'ผลิตภัณฑ์ทำความสะอาด',
    description: 'น้ำยาทำความสะอาดอเนกประสงค์คุณภาพสูง',
    slug: 'cleaning',
    image: '/product/category/clean-cate.png',
    accent: 'blue',
  },
  {
    name: 'ผลิตภัณฑ์สำหรับสัตว์เลี้ยง',
    description: 'ผลิตภัณฑ์ดูแลสัตว์เลี้ยงอย่างอ่อนโยนและปลอดภัย',
    slug: 'pet-care',
    image: '/product/category/pet-cate.png',
    accent: 'purple',
  },
];

const accentColors = {
  pink: {
    border: 'border-pink-300 hover:border-pink-500',
    bg: 'bg-pink-50',
    text: 'text-pink-700',
    button: 'bg-pink-600 hover:bg-pink-700',
  },
  green: {
    border: 'border-green-300 hover:border-green-500',
    bg: 'bg-green-50',
    text: 'text-green-700',
    button: 'bg-green-600 hover:bg-green-700',
  },
  blue: {
    border: 'border-blue-300 hover:border-blue-500',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  purple: {
    border: 'border-purple-300 hover:border-purple-500',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    button: 'bg-purple-600 hover:bg-purple-700',
  },
};

export default function ProductCategories4() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

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
            หมวดหมู่สินค้า
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            เลือกจากหลากหลายหมวดหมู่ผลิตภัณฑ์คุณภาพสูง
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const colors = accentColors[category.accent as keyof typeof accentColors];
            return (
              <Link key={index} href={`/products?category=${category.slug}`}>
                <motion.div
                  className={`group relative bg-white rounded-2xl overflow-hidden border-2 ${colors.border} transition-all duration-500 shadow-md hover:shadow-xl`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {/* Overlay on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      category.accent === 'pink' ? 'bg-gradient-to-t from-pink-500/20 to-transparent' :
                      category.accent === 'green' ? 'bg-gradient-to-t from-green-500/20 to-transparent' :
                      category.accent === 'blue' ? 'bg-gradient-to-t from-blue-500/20 to-transparent' :
                      'bg-gradient-to-t from-purple-500/20 to-transparent'
                    }`} />
                  </div>

                  {/* Content Section */}
                  <div className={`p-6 ${colors.bg} transition-colors duration-500`}>
                    <motion.h3
                      className={`text-xl md:text-2xl font-bold ${colors.text} mb-3 group-hover:translate-x-2 transition-transform duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {category.name}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-600 text-sm md:text-base mb-6 line-clamp-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {category.description}
                    </motion.p>
                    
                    {/* Button */}
                    <motion.div
                      className={`inline-flex items-center gap-2 ${colors.button} text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md transition-all duration-300 w-fit`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <span>ดูสินค้า</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 ${colors.bg} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

