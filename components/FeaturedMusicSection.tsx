'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { ALBUMS } from '@/lib/data';

export default function FeaturedMusicSection() {
  const t = useTranslations('music');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const featuredAlbums = [ALBUMS[0], ALBUMS[4], ALBUMS[1]];

  return (
    <section className="px-6 py-16 md:px-20 md:py-20" style={{ backgroundColor: 'var(--ivory)' }}>
      <div className="mx-auto" style={{ maxWidth: 1000 }}>
        {/* Featured pill tag */}
        <div
          className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
          style={{
            backgroundColor: 'rgba(13,110,110,0.08)',
            border: '1px solid rgba(13,110,110,0.2)',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: 'var(--teal-deep)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span
            className="font-josefin uppercase"
            style={{ fontSize: 10, letterSpacing: '0.4em', color: 'var(--teal-deep)' }}
          >
            {t('featuredLabel')}
          </span>
        </div>

        <h2
          className="font-philosopher font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-dark)' }}
        >
          {t('featuredTitle')}
        </h2>
        <div style={{ width: 48, height: 2, backgroundColor: 'var(--teal-light)', marginBottom: 32 }} />

        {/* Discography saffron pill */}
        <div
          className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
          style={{
            backgroundColor: 'rgba(196,129,58,0.1)',
            border: '1px solid rgba(196,129,58,0.3)',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: 'var(--saffron)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span
            className="font-josefin uppercase"
            style={{ fontSize: 10, letterSpacing: '0.4em', color: 'var(--saffron)' }}
          >
            {t('discographyLabel')}
          </span>
        </div>

        {/* Albums preview grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {featuredAlbums.map((album) => (
            <a
              key={album.id}
              href={album.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden transition-all duration-200"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(13,110,110,0.08)',
                borderTop: '3px solid transparent',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderTop = '3px solid var(--teal-deep)';
                el.style.borderRight = '1px solid rgba(13,110,110,0.2)';
                el.style.borderBottom = '1px solid rgba(13,110,110,0.2)';
                el.style.borderLeft = '1px solid rgba(13,110,110,0.2)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 8px 32px rgba(13,110,110,0.12)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderTop = '3px solid transparent';
                el.style.borderRight = '1px solid rgba(13,110,110,0.08)';
                el.style.borderBottom = '1px solid rgba(13,110,110,0.08)';
                el.style.borderLeft = '1px solid rgba(13,110,110,0.08)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
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
