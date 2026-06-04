import type { Metadata } from 'next';
import { Philosopher, Lora, Josefin_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

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
      className={`${philosopher.variable} ${lora.variable} ${josefinSans.variable}`}
    >
      <body
        className="antialiased font-josefin"
        style={{ backgroundColor: 'var(--ivory)', color: 'var(--text-dark)' }}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
