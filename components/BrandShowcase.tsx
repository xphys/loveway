'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  { name: "Celina's", color: "bg-pink-100", image: "/brand/celina.png" },
  { name: "Rapha", color: "bg-green-100", image: "/brand/rapha.png" },
  { name: "Celvin", color: "bg-blue-100", image: "/brand/celvin.png" },
  { name: "Rapha Biotech", color: "bg-amber-100", image: "/brand/rapha.png" }
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
        ease: "easeOut" as const,
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
              className="flex flex-col items-center cursor-pointer group"
              variants={itemVariants}
              whileHover={{ y: -12 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <motion.div
                className="bg-white h-40 w-40 rounded-full flex items-center justify-center mb-4 relative shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain p-8"
                />
              </motion.div>
              <h3 className="text-base font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">{brand.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

