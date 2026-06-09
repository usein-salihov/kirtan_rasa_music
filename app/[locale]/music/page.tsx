import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import MusicSection from '@/components/MusicSection';

export const metadata: Metadata = {
  title: 'Music — Kirtan Rasa Music',
  description: 'Explore the full discography of Kirtan Rasa — five albums of sacred devotional music.',
};

export default async function MusicPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'music' });

  const albumCircles = [
    { src: '/images/albums/divine_nectar.png', alt: 'Divine Nectar' },
    { src: '/images/albums/songs_of_devotion.jpg', alt: 'Songs of Devotion' },
    { src: '/images/albums/govinda.png', alt: 'Govinda' },
  ];

  return (
    <>
      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{
          minHeight: 300,
          background: 'linear-gradient(135deg, #2A3A35 0%, #1a2820 60%, #0D2020 100%)',
        }}
      >
        {/* Background radial */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(13,110,110,0.2), transparent)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-20 flex flex-col justify-center h-full pt-32">
          {/* Teal pill */}
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(168,212,212,0.15)',
              border: '1px solid rgba(168,212,212,0.3)',
              width: 'fit-content',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'var(--teal-light)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              className="font-josefin font-light uppercase"
              style={{ fontSize: 10, letterSpacing: '0.4em', color: 'var(--teal-light)' }}
            >
              {t('discographyLabel')}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-philosopher font-bold mb-3"
            style={{ fontSize: 56, color: 'white' }}
          >
            {t('pageTitle')}
          </h1>

          {/* Subtitle */}
          <p
            className="font-lora italic"
            style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: 'rgba(255,255,255,0.6)' }}
          >
            {t('pageSubtitle')}
          </p>
        </div>

        {/* Overlapping album art circles */}
        <div
          className="hidden md:flex absolute items-center"
          style={{ right: 80, top: '50%', transform: 'translateY(-50%)' }}
        >
          {albumCircles.map((album, i) => (
            <div
              key={album.src}
              className="relative overflow-hidden flex-shrink-0"
              style={{
                width: 110,
                height: 110,
                borderRadius: '50%',
                opacity: 0.7,
                border: '2px solid rgba(255,255,255,0.15)',
                marginLeft: i > 0 ? -24 : 0,
                zIndex: i,
              }}
            >
              <Image
                src={album.src}
                alt={album.alt}
                fill
                className="object-cover"
                sizes="120px"
              />
            </div>
          ))}
        </div>
      </div>

      <MusicSection />
    </>
  );
}
