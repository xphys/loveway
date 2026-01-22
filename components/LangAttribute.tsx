'use client';

import { useEffect } from 'react';

interface LangAttributeProps {
  locale: string;
}

export function LangAttribute({ locale }: LangAttributeProps) {
  useEffect(() => {
    // Set the lang attribute on the HTML element
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
