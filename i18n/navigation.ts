import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { locales } from '../i18n';

export const routing = defineRouting({
  locales,
  defaultLocale: 'th',
  localePrefix: 'always'
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

