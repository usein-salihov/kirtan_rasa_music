import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cinzel',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Kirtan Rasa Music',
  description: 'Sacred devotional kirtan music. Listen on Spotify.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${dmSans.variable}`}
      style={{ backgroundColor: '#0A0704' }}
    >
      <body className="antialiased font-dm" style={{ backgroundColor: '#0A0704', color: '#E8DCC8' }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
