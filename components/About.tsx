'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Heart, Award } from 'lucide-react';
import AnimatedGrid from './AnimatedGrid';

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative" ref={ref}>
      <AnimatedGrid />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Award className="h-4 w-4" />
            <span>เกี่ยวกับเรา</span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Love Way
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ดีที่สุดสำหรับทุกความต้องการของคุณ
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">บริษัท ทางรัก จำกัด</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              บริษัท ทางรัก จำกัด เป็นบริษัทที่มุ่งมั่นในการสร้างสรรค์ผลิตภัณฑ์คุณภาพสูง
              เพื่อตอบสนองความต้องการของลูกค้าทุกคน ด้วยความมุ่งมั่นในการพัฒนาผลิตภัณฑ์
              ที่มีคุณภาพและปลอดภัย เพื่อให้ทุกคนได้ใช้ผลิตภัณฑ์ที่ดีที่สุด
            </p>
          </motion.div>

          <motion.div
            className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-600 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Celina-Care</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Celina-Care เป็นแบรนด์ที่มุ่งเน้นด้านสุขภาพและความเป็นอยู่ที่ดี
              ด้วยผลิตภัณฑ์ที่ผ่านการวิจัยและพัฒนาอย่างต่อเนื่อง
              เพื่อให้ทุกคนมีสุขภาพที่ดีและมีความสุขในชีวิตประจำวัน
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

