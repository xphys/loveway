'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Heart, Leaf, Shield } from 'lucide-react';

interface BannerProps {
  text: string;
  variant?: 'green' | 'blue';
  backgroundImage?: string;
}

export default function Banner({ text, variant = 'green', backgroundImage }: BannerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const isGreen = variant === 'green';
  
  const gradientFrom = isGreen 
    ? 'from-emerald-400 via-green-500 to-teal-500'
    : 'from-blue-400 via-cyan-500 to-sky-500';
  
  const gradientTo = isGreen
    ? 'to-emerald-600'
    : 'to-blue-600';

  const iconColors = isGreen
    ? { primary: 'text-emerald-500', secondary: 'text-green-400', bg: 'bg-emerald-500/10' }
    : { primary: 'text-blue-500', secondary: 'text-cyan-400', bg: 'bg-blue-500/10' };

  const icons = [
    { Icon: Leaf, delay: 0 },
    { Icon: Heart, delay: 0.2 },
    { Icon: Shield, delay: 0.4 },
    { Icon: Sparkles, delay: 0.6 },
  ];

  return (
    <section 
      className="relative py-12 md:py-16 overflow-hidden"
      ref={ref}
    >
      {/* Background image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      {/* Animated gradient background - only show when no background image */}
      {!backgroundImage && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-20`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Floating gradient orbs */}
          <motion.div
            className={`absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br ${gradientFrom} rounded-full blur-3xl opacity-30`}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className={`absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl ${gradientFrom} rounded-full blur-3xl opacity-30`}
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
        </div>
      )}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Icon row */}
          <motion.div
            className="flex justify-center items-center gap-3 flex-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {icons.map(({ Icon, delay }, idx) => (
              <motion.div
                key={idx}
                className={`p-2.5 rounded-xl ${iconColors.bg} backdrop-blur-sm border border-white/20 shadow-lg`}
                initial={{ opacity: 0, y: 20, rotate: -10 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0, 
                  rotate: 0 
                } : { 
                  opacity: 0, 
                  y: 20, 
                  rotate: -10 
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3 + delay,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  y: -5
                }}
              >
                <Icon className={`h-4 w-4 ${iconColors.primary}`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Main text */}
          <motion.h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r ${gradientFrom} bg-clip-text text-transparent bg-[length:200%_auto]`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              animation: 'shimmer 3s linear infinite',
            }}
          >
            {text}
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className={`h-px w-12 bg-gradient-to-r transparent ${isGreen ? 'via-emerald-500' : 'via-blue-500'} to-transparent`} />
            <motion.div
              className={`w-1.5 h-1.5 rounded-full ${isGreen ? 'bg-emerald-500' : 'bg-blue-500'}`}
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className={`h-px w-12 bg-gradient-to-l transparent ${isGreen ? 'via-emerald-500' : 'via-blue-500'} to-transparent`} />
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

