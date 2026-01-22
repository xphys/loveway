'use client';

import { Menu } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('header');

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/40 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            className="relative h-9 w-9 rounded-full overflow-hidden"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Image
              src="/logo.png"
              alt="Love Way Logo"
              width={36}
              height={36}
              className="object-cover rounded-full"
              priority
            />
          </motion.div>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-cyan-600 transition-all duration-300">
            Love Way
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors duration-200 relative group py-1"
          >
            {t('home')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
          <Link
            href="/products"
            className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors duration-200 relative group py-1"
          >
            {t('products')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
          <a
            href="#product-categories"
            className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors duration-200 relative group py-1"
          >
            {t('categories')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full" />
          </a>
          <a
            href="https://www.facebook.com/lovewayprobiotics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors duration-200 relative group py-1"
          >
            {t('contact')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full" />
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="md:hidden p-2.5 text-foreground/60 hover:text-foreground rounded-xl hover:bg-accent/50 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          className="md:hidden border-t border-border/40 bg-background/40 backdrop-blur-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link href="/" className="text-sm font-semibold text-foreground/70 hover:text-foreground hover:translate-x-1 transition-all duration-200">
              {t('home')}
            </Link>
            <Link href="/products" className="text-sm font-semibold text-foreground/70 hover:text-foreground hover:translate-x-1 transition-all duration-200">
              {t('products')}
            </Link>
            <a href="#product-categories" className="text-sm font-semibold text-foreground/70 hover:text-foreground hover:translate-x-1 transition-all duration-200">
              {t('categories')}
            </a>
            <a href="https://www.facebook.com/lovewayprobiotics" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground/70 hover:text-foreground hover:translate-x-1 transition-all duration-200">
              {t('contact')}
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
