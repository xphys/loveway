'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useState, useTransition } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (locale: string) => {
    setIsOpen(false);
    startTransition(() => {
      // Get pathname without locale and use push instead of replace
      const pathWithoutLocale = pathname.startsWith(`/${currentLocale}`)
        ? pathname.slice(`/${currentLocale}`.length) || '/'
        : pathname;
      router.push(pathWithoutLocale, { locale: locale as 'en' | 'th' });
    });
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2.5 text-foreground/60 hover:text-foreground rounded-xl hover:bg-accent/50 transition-all duration-200"
        whileHover={{ scale: 1.08, y: -1 }}
        whileTap={{ scale: 0.92 }}
      >
        <Languages className="h-5 w-5" />
        <span className="text-sm font-semibold uppercase">{currentLocale}</span>
      </motion.button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <motion.div
            className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => handleLocaleChange('en')}
              disabled={isPending}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-accent transition-colors duration-200 flex items-center gap-2 ${
                currentLocale === 'en' ? 'bg-accent/50 font-semibold' : ''
              }`}
            >
              <span className="text-lg">🇬🇧</span>
              <span>English</span>
            </button>
            <button
              onClick={() => handleLocaleChange('th')}
              disabled={isPending}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-accent transition-colors duration-200 flex items-center gap-2 ${
                currentLocale === 'th' ? 'bg-accent/50 font-semibold' : ''
              }`}
            >
              <span className="text-lg">🇹🇭</span>
              <span>ไทย</span>
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
}
