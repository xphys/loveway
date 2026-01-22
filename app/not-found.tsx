'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootNotFound() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to English home page by default
    router.replace('/en');
  }, [router]);

  // Show nothing while redirecting
  return null;
}
