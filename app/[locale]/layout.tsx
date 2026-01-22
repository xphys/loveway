import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from "next-intl/server";
import { StructuredData, organizationSchema, websiteSchema } from "@/components/StructuredData";
import { LangAttribute } from "@/components/LangAttribute";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const title = t("metadata.title");
  const description = t("metadata.description");
  const siteName = t("metadata.siteName");
  const ogImage = t("metadata.ogImage");

  return {
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    applicationName: siteName,

    // Open Graph
    openGraph: {
      title,
      description,
      url: `https://loveway.co.th/${locale}`,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
      locale: locale === 'th' ? 'th_TH' : 'en_US',
      type: 'website',
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },

    // Viewport and theme
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    themeColor: '#3B82F6', // Blue theme color

    // Charset (UTF-8 is default but explicit)
    // Note: charset is automatically set to UTF-8 in Next.js

    // Alternates for hreflang and canonical
    alternates: {
      canonical: `https://loveway.co.th/${locale}`,
      languages: {
        'en': 'https://loveway.co.th/en',
        'th': 'https://loveway.co.th/th',
      },
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <>
      <LangAttribute locale={locale} />
      <StructuredData data={[organizationSchema, websiteSchema]} />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
