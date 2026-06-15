import type { Metadata } from 'next';
import ConnectSection from '@/components/ConnectSection';


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const isEn = params.locale === 'en';
  return {
    title: isEn ? 'Connect — Social & Community' : 'Контакти и Общност',
    description: isEn
      ? 'Follow Kirtan Rasa Music on Spotify, Instagram, Facebook, and YouTube. Join our devotional music community.'
      : 'Последвай Кirtан Раса Музика в Spotify, Instagram, Facebook и YouTube. Присъедини се към нашата общност.',
    alternates: {
      canonical: `/${params.locale}/connect`,
      languages: { 'en': '/en/connect', 'bg': '/bg/connect' },
    },
  };
}

export default async function ConnectPage() {
  return <ConnectSection />;
}
