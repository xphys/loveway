'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    name: "Celina's",
    image: "bg-gradient-to-br from-amber-50 to-amber-100",
    description: "ผลิตภัณฑ์ความงาม"
  },
  {
    name: "Rapha",
    image: "bg-gradient-to-br from-green-50 to-green-100",
    description: "ผลิตภัณฑ์สมุนไพรธรรมชาติ"
  },
  {
    name: "Celvin",
    image: "bg-gradient-to-br from-blue-50 to-blue-100",
    description: "ผลิตภัณฑ์ทำความสะอาด"
  },
  {
    name: "Rapha Biotech",
    image: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    description: "ผลิตภัณฑ์สำหรับสัตว์เลี้ยง"
  }
];

export default function ProductCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className={`${category.image} rounded-lg p-6 aspect-square flex flex-col items-center justify-center cursor-pointer`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="h-24 w-24 bg-white rounded-lg mb-4 relative overflow-hidden"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/noimage.jpg"
                  alt={category.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            หมวดหมู่สินค้า
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ค้นหาผลิตภัณฑ์ที่เหมาะกับคุณจากหลากหลายหมวดหมู่
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className={`${category.image} h-48 flex items-center justify-center relative overflow-hidden`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/noimage.jpg"
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={`/products/${category.name.toLowerCase()}`}
                    className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    ดูสินค้า
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

