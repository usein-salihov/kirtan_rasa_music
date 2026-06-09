'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { ALBUMS, SOCIAL_LINKS } from '@/lib/data';

export default function FeaturedMusicSection() {
  const t = useTranslations('music');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const previewAlbums = ALBUMS.slice(0, 3);

  return (
    <section className="px-6 py-16 md:px-20 md:py-20" style={{ backgroundColor: 'var(--ivory)' }}>
      <div className="mx-auto" style={{ maxWidth: 1000 }}>
        {/* Header */}
        <p
          className="font-josefin uppercase mb-3"
          style={{ fontSize: 9, letterSpacing: '0.5em', color: 'var(--saffron)' }}
        >
          {t('featuredLabel')}
        </p>
        <h2
          className="font-philosopher font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-dark)' }}
        >
          {t('featuredTitle')}
        </h2>
        <div style={{ width: 48, height: 2, backgroundColor: 'var(--teal-light)', marginBottom: 40 }} />

        {/* Featured track card */}
        <div
          className="flex items-center gap-6 rounded-xl"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(13,110,110,0.08)',
            padding: 28,
            maxWidth: 520,
            boxShadow: '0 2px 20px rgba(13,110,110,0.06)',
          }}
        >
          <div className="relative w-[72px] h-[72px] rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/images/albums/songs_of_devotion.jpg"
              alt="Songs of Devotion"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="font-philosopher" style={{ fontSize: 22, color: 'var(--text-dark)' }}>
              KAJI KAJI
            </div>
            <div
              className="font-josefin mt-1"
              style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: '0.1em' }}
            >
              Songs of Devotion
            </div>
            <div className="font-philosopher mt-2" style={{ fontSize: 14, color: 'var(--teal-mid)' }}>
              350,182 {t('playsLabel')}
            </div>
          </div>
          <a
            href={SOCIAL_LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full flex-shrink-0 text-white transition-opacity duration-200 hover:opacity-85"
            style={{ width: 48, height: 48, backgroundColor: '#1DB954', fontSize: 16 }}
          >
            ▶
          </a>
        </div>

        {/* Albums preview grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mt-12">
          {previewAlbums.map((album) => (
            <a
              key={album.id}
              href={album.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden card-hover"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(13,110,110,0.08)',
              }}
            >
              <div className="relative w-full" style={{ paddingTop: '100%' }}>
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="font-lora" style={{ fontSize: 15, color: 'var(--text-dark)' }}>
                  {album.title}
                </div>
                <div className="font-josefin mt-1" style={{ fontSize: 10, color: 'var(--text-dim)' }}>
                  {album.year}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All button */}
        <div className="mt-7">
          <Link
            href={`/${locale}/music`}
            className="font-josefin font-light uppercase inline-block transition-all duration-200 hover:opacity-85"
            style={{
              backgroundColor: 'var(--teal-deep)',
              color: 'white',
              padding: '14px 36px',
              borderRadius: 2,
              fontSize: 11,
              letterSpacing: '0.28em',
            }}
          >
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
