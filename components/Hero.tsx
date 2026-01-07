'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShoppingBag, Leaf, Heart, TrendingUp } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};


export default function Hero() {
  return (
    <section className="relative min-h-screen -mt-16 pt-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
      {/* Enhanced Animated Background */}
      <AnimatedBackground />

      {/* Dynamic gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/40 via-cyan-400/30 to-transparent rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-cyan-400/40 via-blue-400/30 to-transparent rounded-full blur-[140px]"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-300/25 via-blue-300/20 to-transparent rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-blue-200/60 text-blue-700 text-sm font-semibold shadow-lg shadow-blue-500/10"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>ผลิตภัณฑ์คุณภาพสูงจากธรรมชาติ</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="font-extrabold tracking-tight text-foreground leading-[1.1]"
              variants={itemVariants}
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl mb-3">
                จากแรงบันดาลใจ
              </span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite]">
                แห่งศรัทธา
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <p className="text-xl sm:text-2xl text-foreground/90 leading-relaxed font-medium max-w-xl">
                สู่ผลิตภัณฑ์ที่มอบความสะอาด สุขภาพดี และความสงบใจ
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                ผลิตภัณฑ์คุณภาพสูงจากธรรมชาติ เพื่อชีวิตที่ดีขึ้นของทุกคน
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              {[
                { icon: Leaf, text: '100% ธรรมชาติ' },
                { icon: Heart, text: 'อ่อนโยนต่อผิว' },
                { icon: TrendingUp, text: 'คุณภาพสูง' },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-blue-100/50 text-sm font-medium text-foreground/80 shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                >
                  <feature.icon className="h-4 w-4 text-blue-600" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <Link href="/products">
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-2xl shadow-xl shadow-blue-500/30 overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    ดูสินค้าทั้งหมด
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('product-categories');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-8 py-4 bg-white/80 backdrop-blur-md border-2 border-blue-200 text-blue-700 font-semibold rounded-2xl shadow-lg hover:bg-white transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                เรียนรู้เพิ่มเติม
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Floating Product Cards */}
            <div className="relative h-[600px]">
              {/* Card 1 */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-80 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-100/50 overflow-hidden"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ zIndex: 3 }}
              >
                <Image
                  src="/hero/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_12.jpg"
                  alt="Hero image 1"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="absolute top-32 left-0 w-64 h-80 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-100/50 overflow-hidden"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{ zIndex: 2 }}
              >
                <Image
                  src="/hero/LINE_ALBUM_ภาพแอด สกินแคร์ 12  ตัว_260107_2.jpg"
                  alt="Hero image 2"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="absolute bottom-0 right-1/4 w-64 h-80 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-indigo-100/50 overflow-hidden"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                style={{ zIndex: 1 }}
              >
                <Image
                  src="/hero/LINE_ALBUM_ภาพแอดและรายละเอียดสินค้าสำหรับสัตว์_260108_4.jpg"
                  alt="Hero image 3"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs text-muted-foreground font-medium">เลื่อนลง</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-blue-300/50 flex items-start justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-blue-500"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
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
