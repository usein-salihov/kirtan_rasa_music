import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'bg' }];
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = params.locale === 'en';
  return {
    title: {
      default: isEn
        ? 'Kirtan Rasa Music — Sacred Devotional Kirtan from Bulgaria'
        : 'Кirtан Раса Музика — Свещена Предана Музика от България',
      template: isEn
        ? '%s — Kirtan Rasa Music'
        : '%s — Кirtан Раса Музика',
    },
    description: isEn
      ? 'Kirtan Rasa is a Bulgarian devotional music collective. Listen to sacred kirtan music, explore our albums on Spotify, and join us at live events.'
      : 'Кirtан Раса е български колектив за предана музика. Слушай свещена киртан музика, разгледай албумите ни в Spotify и се присъедини на живите ни събития.',
    keywords: isEn
      ? ['kirtan', 'devotional music', 'mantra', 'sacred music', 'Bulgarian kirtan', 'bhajan', 'Kirtan Rasa', 'spiritual music', 'chanting']
      : ['киртан', 'предана музика', 'мантра', 'свещена музика', 'български киртан', 'бхаджан', 'Кirtан Раса', 'духовна музика'],
    authors: [{ name: 'Kirtan Rasa Music' }],
    creator: 'Kirtan Rasa Music',
    metadataBase: new URL('https://kirtanrasamusic.com'),
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        'en': '/en',
        'bg': '/bg',
      },
    },
    openGraph: {
      title: isEn
        ? 'Kirtan Rasa Music — Sacred Devotional Kirtan'
        : 'Кirtан Раса Музика — Свещена Предана Музика',
      description: isEn
        ? 'A Bulgarian devotional music collective. Listen on Spotify.'
        : 'Български колектив за предана музика. Слушай в Spotify.',
      url: `https://kirtanrasamusic.com/${params.locale}`,
      siteName: 'Kirtan Rasa Music',
      images: [
        {
          url: '/images/hero-performance.jpg',
          width: 1200,
          height: 630,
          alt: 'Kirtan Rasa Music performing live',
        },
      ],
      locale: isEn ? 'en_US' : 'bg_BG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn
        ? 'Kirtan Rasa Music — Sacred Devotional Kirtan'
        : 'Кirtан Раса Музика',
      description: isEn
        ? 'A Bulgarian devotional music collective. Listen on Spotify.'
        : 'Български колектив за предана музика.',
      images: ['/images/hero-performance.jpg'],
    },
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
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <StructuredData />
      <Nav />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
