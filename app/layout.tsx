import type { Metadata } from 'next';
import { Philosopher, Lora, Josefin_Sans } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import './globals.css';

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-philosopher',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-josefin',
});

export const metadata: Metadata = {
  title: 'Kirtan Rasa Music',
  description: 'Sacred devotional kirtan music from the heart.',
  icons: {
    icon: '/icon.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={`${philosopher.variable} ${lora.variable} ${josefinSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
