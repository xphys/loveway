'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'ผลิตภัณฑ์บำรุงผิว',
    description: 'ผลิตภัณฑ์บำรุงผิวคุณภาพสูงจากธรรมชาติ',
    slug: 'skincare',
    gradient: 'from-pink-500 via-rose-500 to-amber-500',
    bgGradient: 'from-pink-50 via-rose-50 to-amber-50',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="skincareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="35" r="18" fill="url(#skincareGrad)" opacity="0.3" />
        <path d="M 30 50 Q 50 30, 70 50 Q 50 70, 30 50" fill="url(#skincareGrad)" />
        <circle cx="50" cy="50" r="8" fill="url(#skincareGrad)" />
        <path d="M 50 42 Q 45 50, 50 58 Q 55 50, 50 42" fill="white" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: 'ผลิตภัณฑ์สมุนไพร',
    description: 'ผลิตภัณฑ์สมุนไพรเพื่อสุขภาพและความเป็นอยู่ที่ดี',
    slug: 'herbal',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgGradient: 'from-green-50 via-emerald-50 to-teal-50',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="herbalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <path d="M 50 20 L 50 80 M 30 40 Q 50 30, 50 50 Q 50 30, 70 40" stroke="url(#herbalGrad)" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="35" cy="35" r="6" fill="url(#herbalGrad)" />
        <circle cx="65" cy="35" r="6" fill="url(#herbalGrad)" />
        <path d="M 50 50 Q 40 60, 50 70 Q 60 60, 50 50" fill="url(#herbalGrad)" opacity="0.6" />
        <ellipse cx="50" cy="65" rx="8" ry="12" fill="url(#herbalGrad)" />
      </svg>
    ),
  },
  {
    name: 'ผลิตภัณฑ์ทำความสะอาด',
    description: 'น้ำยาทำความสะอาดอเนกประสงค์คุณภาพสูง',
    slug: 'cleaning',
    gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
    bgGradient: 'from-blue-50 via-cyan-50 to-indigo-50',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="cleaningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <rect x="35" y="30" width="30" height="50" rx="4" fill="url(#cleaningGrad)" />
        <rect x="40" y="35" width="20" height="35" rx="2" fill="white" opacity="0.3" />
        <circle cx="50" cy="25" r="8" fill="url(#cleaningGrad)" />
        <path d="M 45 25 L 50 20 L 55 25" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="50" cy="50" r="4" fill="white" opacity="0.6" />
        <circle cx="50" cy="60" r="3" fill="white" opacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'ผลิตภัณฑ์สำหรับสัตว์เลี้ยง',
    description: 'ผลิตภัณฑ์ดูแลสัตว์เลี้ยงอย่างอ่อนโยนและปลอดภัย',
    slug: 'pet-care',
    gradient: 'from-purple-500 via-violet-500 to-fuchsia-500',
    bgGradient: 'from-purple-50 via-violet-50 to-fuchsia-50',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="petGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="45" r="20" fill="url(#petGrad)" />
        <circle cx="45" cy="42" r="3" fill="white" />
        <circle cx="55" cy="42" r="3" fill="white" />
        <path d="M 45 50 Q 50 55, 55 50" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="50" cy="60" rx="8" ry="6" fill="url(#petGrad)" />
        <path d="M 35 50 Q 30 45, 25 50" stroke="url(#petGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 65 50 Q 70 45, 75 50" stroke="url(#petGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProductCategories() {
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
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4" />
            <span>หมวดหมู่สินค้า</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            ค้นหาผลิตภัณฑ์ที่
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">
              เหมาะกับคุณ
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            เลือกจากหลากหลายหมวดหมู่ผลิตภัณฑ์คุณภาพสูง
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((category, index) => (
            <Link key={index} href={`/products/${category.slug}`}>
              <motion.div
                className="group relative h-full"
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className={`relative h-full rounded-3xl overflow-hidden bg-gradient-to-br ${category.bgGradient} p-8 border border-transparent group-hover:border-white/50 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />

                  {/* SVG Icon Container */}
                  <motion.div
                    className="relative w-24 h-24 mb-6 mx-auto"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <div className="absolute inset-0 bg-white/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${category.gradient} p-4 shadow-lg flex items-center justify-center`}>
                      {category.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <motion.h3
                      className={`text-2xl font-bold mb-3 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {category.name}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground text-sm leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {category.description}
                    </motion.p>

                    <motion.div
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${category.gradient} text-white text-sm font-semibold shadow-md group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      <span>ดูสินค้า</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}

