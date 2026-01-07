'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Leaf, Sparkles, Droplets, Heart } from 'lucide-react';

const categories = [
  {
    name: 'ผลิตภัณฑ์บำรุงผิว',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูงจากธรรมชาติ',
    slug: 'skincare',
    image: '/product/category/skincare-cate.png',
    icon: Sparkles,
    gradient: 'from-pink-400 to-rose-500',
  },
  {
    name: 'ผลิตภัณฑ์สมุนไพร',
    description: 'ผลิตภัณฑ์สมุนไพรเพื่อสุขภาพและความเป็นอยู่ที่ดี',
    slug: 'herbal',
    image: '/product/category/herb-cate.png',
    icon: Leaf,
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    name: 'ผลิตภัณฑ์ทำความสะอาด',
    description: 'น้ำยาทำความสะอาดอเนกประสงค์คุณภาพสูง',
    slug: 'cleaning',
    image: '/product/category/clean-cate.png',
    icon: Droplets,
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    name: 'ผลิตภัณฑ์สำหรับสัตว์เลี้ยง',
    description: 'ผลิตภัณฑ์ดูแลสัตว์เลี้ยงอย่างอ่อนโยนและปลอดภัย',
    slug: 'pet-care',
    image: '/product/category/pet-cate.png',
    icon: Heart,
    gradient: 'from-purple-400 to-indigo-500',
  },
];

export default function ProductCategories2() {
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
            const IconComponent = category.icon;
            return (
              <Link key={index} href={`/products?category=${category.slug}`}>
                <motion.div
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Icon Circle */}
                  <motion.div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="h-10 w-10 text-white" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                  </motion.div>

                  {/* Image Preview */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-gray-100">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  {/* Content */}
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300"
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
                    className={`inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r ${category.gradient} shadow-md group-hover:shadow-lg transition-all duration-300 w-fit`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span>ดูสินค้า</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

