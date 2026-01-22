import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'th'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request - requestLocale is async in App Router
  let locale = await requestLocale;

  // Validate and fallback to default
  if (!locale || !locales.includes(locale as any)) {
    locale = 'th';
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

