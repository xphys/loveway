# Language Switching Bug - Solution Documentation

## Problem
Language switching was not working properly. When accessing `/th`, the page displayed English content instead of Thai. The language switcher component was also not functioning correctly.

## Root Causes

### 1. Wrong i18n Configuration (Primary Issue)
**File:** `i18n.ts`

The configuration was using the deprecated `locale` parameter instead of `requestLocale`:

```typescript
// ❌ WRONG - Old way
export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale || 'en';
  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});
```

**Problem:** In Next.js App Router with next-intl, the `locale` parameter doesn't work correctly. It was always undefined or defaulting to 'en', causing all routes to show English content.

### 2. Incorrect Router Imports
**File:** `components/LanguageSwitcher.tsx`

The component was importing router hooks from the wrong location:

```typescript
// ❌ WRONG
import { usePathname, useRouter } from 'next/navigation';
```

**Problem:** Using standard Next.js router hooks instead of i18n-aware hooks caused the language switching to create incorrect URLs like `/th/th` or `/en/en`.

### 3. Manual Path Manipulation
**File:** `components/LanguageSwitcher.tsx`

The code was manually stripping locale prefixes:

```typescript
// ❌ WRONG
const pathWithoutLocale = pathname.replace(/^\/(en|th)/, '') || '/';
router.replace(`/${locale}${pathWithoutLocale}`);
```

**Problem:** This approach was error-prone and didn't work with the i18n routing system.

## Solutions Applied

### Fix 1: Update i18n Configuration
**File:** `i18n.ts`

Changed to use `requestLocale` parameter which is async in App Router:

```typescript
// ✅ CORRECT
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
```

**Key Changes:**
- Use `requestLocale` instead of `locale`
- Await the `requestLocale` promise
- Proper validation before fallback
- Default to 'th' (Thai) instead of 'en'

### Fix 2: Use i18n-Aware Router Hooks
**File:** `components/LanguageSwitcher.tsx`

Import router hooks from the i18n navigation configuration:

```typescript
// ✅ CORRECT
import { usePathname, useRouter } from '@/i18n/navigation';
```

### Fix 3: Simplify Locale Switching Logic
**File:** `components/LanguageSwitcher.tsx`

Use the proper i18n router API:

```typescript
// ✅ CORRECT
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
```

**Key Changes:**
- Strip current locale prefix correctly
- Use `router.push()` with `{ locale }` option
- Let the i18n router handle URL construction

## Important Notes

### Next.js 16 Uses proxy.ts Instead of middleware.ts
In Next.js 16, the middleware file convention changed to proxy.ts. The project already has `proxy.ts` configured with next-intl middleware:

```typescript
// proxy.ts
import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'th',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
```

**Do NOT create middleware.ts** - it will conflict with proxy.ts.

## Verification Steps

### 1. Test Thai Language
```bash
curl -s http://localhost:3000/th | grep -o "ผลิตภัณฑ์คุณภาพสูงจากธรรมชาติ"
```
Should output: `ผลิตภัณฑ์คุณภาพสูงจากธรรมชาติ`

### 2. Test English Language
```bash
curl -s http://localhost:3000/en | grep -o "Premium Quality Products from Nature"
```
Should output: `Premium Quality Products from Nature`

### 3. Test Language Switcher in Browser
1. Open http://localhost:3000/th
2. Verify Thai content displays
3. Click language switcher button (shows "TH")
4. Select "English" (🇬🇧)
5. Verify URL changes to `/en` and content is in English
6. Click language switcher again, select "ไทย" (🇹🇭)
7. Verify URL changes to `/th` and content is in Thai

### 4. Check Server Logs
Both routes should return 200:
```
GET /th 200 in XXms
GET /en 200 in XXms
```

No 404 errors like `/th/th` or `/en/en` should appear.

## File Structure Reference

```
loveway/
├── i18n.ts                    # Main i18n configuration
├── i18n/
│   └── navigation.ts          # i18n-aware routing hooks
├── proxy.ts                   # Next.js 16 middleware (NOT middleware.ts)
├── messages/
│   ├── en.json               # English translations
│   └── th.json               # Thai translations
├── components/
│   └── LanguageSwitcher.tsx  # Language switcher component
└── app/
    └── [locale]/             # Localized routes
        ├── layout.tsx
        └── page.tsx
```

## Common Issues & Troubleshooting

### Issue: Still seeing English on /th
**Solution:** Restart the dev server completely. Changes to i18n configuration require a full restart:
```bash
# Kill the server
Ctrl+C

# Start again
npm run dev
```

### Issue: Getting /th/th or /en/en URLs
**Solution:** Make sure you're importing router hooks from `@/i18n/navigation` NOT from `next/navigation`.

### Issue: Both middleware.ts and proxy.ts exist
**Solution:** Delete middleware.ts. Next.js 16 only uses proxy.ts:
```bash
rm middleware.ts
```

## Summary

The language switching bug was fixed by:
1. ✅ Updating i18n.ts to use `requestLocale` (async in App Router)
2. ✅ Using i18n-aware router hooks from `@/i18n/navigation`
3. ✅ Simplifying locale change logic to use proper i18n API
4. ✅ Ensuring proxy.ts is used (not middleware.ts)

The application now correctly:
- Shows Thai content on `/th` routes
- Shows English content on `/en` routes
- Switches languages properly with the language switcher component
- Maintains the correct URL structure without duplication
