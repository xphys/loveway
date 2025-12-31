'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  { name: "Celina's", color: "bg-pink-100" },
  { name: "Rapha", color: "bg-green-100" },
  { name: "Celvin", color: "bg-blue-100" },
  { name: "Rapha Biotech", color: "bg-amber-100" }
];

export default function BrandShowcase() {
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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            แบรนด์ของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ผลิตภัณฑ์คุณภาพจากแบรนด์ที่คุณไว้วางใจ
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
              className="flex flex-col items-center cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className={`${brand.color} h-24 w-24 rounded-full flex items-center justify-center mb-4 relative overflow-hidden`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/noimage.jpg"
                  alt={brand.name}
                  fill
                  className="object-cover rounded-full"
                />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800">{brand.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

