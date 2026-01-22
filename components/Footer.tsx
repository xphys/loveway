'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="relative bg-gradient-to-br from-secondary via-background to-secondary border-t border-border py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="relative h-11 w-11 rounded-full overflow-hidden"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <Image
                  src="/logo.png"
                  alt="Love Way Logo"
                  width={44}
                  height={44}
                  className="object-cover rounded-full"
                />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">Love Way</span>
            </div>
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{t('address')}</p>
            <p className="text-muted-foreground text-sm mb-2">{t('phone')}: 092 332 3421</p>
            <p className="text-muted-foreground text-sm mb-6">{t('email')}: info@loveway.com</p>

            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.facebook.com/lovewayprobiotics"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-accent/50 text-foreground/60 hover:text-primary hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>

              <motion.a
                href="https://www.tiktok.com/@loveway.official"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-accent/50 text-foreground/60 hover:text-primary hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://lin.ee/rPMbwbP"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-accent/50 text-foreground/60 hover:text-primary hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/footer/line.png"
                  alt="LINE"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-foreground mb-6 text-lg">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t('home')}</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t('products')}</span>
                </Link>
              </li>
              <li>
                <a href="#product-categories" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t('categories')}</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/lovewayprobiotics" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t('contact')}</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-foreground mb-6 text-lg">{t('productCategories')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products?category=skincare" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t('skincare')}</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=herbal" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t('herbal')}</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=cleaning" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t('cleaning')}</span>
                </Link>
              </li>
              <li>
                <Link href="/products?category=pet-care" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-200">{t('petCare')}</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-border/60 pt-8 mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm">{t('copyright')}</p>
        </motion.div>
      </div>
    </footer>
  );
}

