'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { ChevronRight } from 'lucide-react';
import type { Product } from '@/types/product';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
  categoryFilter?: string;
  onProductClick?: (product: Product) => void;
}

export default function ProductCarousel({ title, products, categoryFilter, onProductClick }: ProductCarouselProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState<string>('calc((100% - 6rem) / 4)');
  const [cardWidthPx, setCardWidthPx] = useState<number>(0);

  // Calculate card width based on container
  useEffect(() => {
    const calculateCardWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gap = 32; // 2rem = 32px
        const width = (containerWidth - (3 * gap)) / 4;
        setCardWidthPx(width);
        setCardWidth(`${width}px`);
      }
    };

    calculateCardWidth();
    window.addEventListener('resize', calculateCardWidth);
    return () => window.removeEventListener('resize', calculateCardWidth);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, products.length - 4);
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-18 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          className="flex items-center justify-between mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{title}</h2>
          {categoryFilter && (
            <Link
              href={`/products?category=${categoryFilter}`}
              className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors duration-300 group"
            >
              <span>ดูทั้งหมด</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          )}
        </motion.div>

        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex gap-8"
            animate={{
              x: cardWidthPx > 0 ? `-${currentIndex * (cardWidthPx + 32)}px` : `-${currentIndex * (100 / 4)}%`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                onClick={() => onProductClick?.(product)}
                className="group relative bg-card rounded-2xl border border-border hover:border-primary/30 shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col flex-shrink-0"
                style={{ 
                  width: cardWidth,
                  height: '360px'
                }}
              >
                {/* Image Container */}
                <div className="relative h-52 bg-gradient-to-br from-secondary to-muted overflow-hidden flex-shrink-0">
                  <Image
                    src={product.image.startsWith('/') ? product.image : `/noimage.jpg`}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized={product.image.startsWith('/')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Brand Badge (if exists) */}
                  {product.brand && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground/80">
                      {product.brand}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-5 pt-4 pb-5 flex flex-col">
                  <h3 className="font-bold text-card-foreground mb-1.5 text-base group-hover:text-primary transition-colors duration-300 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-snug">
                    {product.description}
                  </p>
                </div>

                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Carousel indicators */}
        <motion.div
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          {Array.from({ length: Math.max(1, products.length - 3) }).map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
