'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Extract locale from pathname (e.g., /en/invalid-page -> en)
    const locale = pathname?.split('/')[1] || 'en';

    // Redirect to home page with the current locale
    router.replace(`/${locale}`);
  }, [router, pathname]);

  // Show nothing while redirecting
  return null;
}
