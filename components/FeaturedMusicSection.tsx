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

  const miniAlbums = [ALBUMS[0], ALBUMS[4], ALBUMS[1]];

  return (
    <section
      className="reveal px-6 md:px-20 py-20"
      style={{
        backgroundColor: 'var(--warm)',
        borderBottom: '1px solid rgba(13,110,110,0.06)',
      }}
    >
      <div>
        {/* Section header */}
        <p
          style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 9,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--saffron)',
            marginBottom: 12,
          }}
        >
          {t('featuredLabel')}
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-philosopher)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            color: 'var(--dark)',
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          {t('featuredTitle')}
        </h2>
        <div style={{ width: 40, height: 1, backgroundColor: 'var(--teal-light)', marginBottom: 40 }} />

        {/* Featured track card */}
        <div
          className="w-full flex items-center gap-5 transition-all duration-200"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(13,110,110,0.08)',
            borderRadius: 8,
            padding: 24,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = '0 8px 32px rgba(13,110,110,0.12)';
            el.style.borderColor = 'rgba(13,110,110,0.2)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.boxShadow = 'none';
            el.style.borderColor = 'rgba(13,110,110,0.08)';
          }}
        >
          {/* Album art */}
          <div
            className="relative rounded-md overflow-hidden flex-shrink-0"
            style={{ width: 64, height: 64 }}
          >
            <Image
              src="/images/albums/govinda.png"
              alt="Govinda"
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>

          {/* Track info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: 'var(--font-philosopher)',
                fontSize: 20,
                color: 'var(--dark)',
              }}
            >
              Govinda
            </div>
            <div
              style={{
                fontFamily: 'var(--font-josefin)',
                fontSize: 11,
                color: 'var(--dim)',
                letterSpacing: '0.08em',
                marginTop: 4,
              }}
            >
              Govinda · Kirtan Rasa
            </div>
          </div>

          {/* Play button */}
          <button
            onClick={() => window.open(SOCIAL_LINKS.spotify, '_blank')}
            className="flex items-center justify-center flex-shrink-0 transition-all duration-200"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: '#1DB954',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'scale(1.08)';
              el.style.boxShadow = '0 4px 16px rgba(29,185,84,0.4)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'scale(1)';
              el.style.boxShadow = 'none';
            }}
            aria-label="Play on Spotify"
          >
            <svg width="14" height="16" viewBox="0 0 14 16" fill="white">
              <path d="M2 1L13 8L2 15V1Z" />
            </svg>
          </button>
        </div>

        {/* Latest Albums label */}
        <p
          style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 9,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--saffron)',
            marginTop: 40,
            marginBottom: 16,
          }}
        >
          {t('discographyLabel')}
        </p>

        {/* 3-column album grid */}
        <div className="grid grid-cols-3 gap-5 mt-4">
          {miniAlbums.map((album) => (
            <div
              key={album.id}
              className="rounded-md overflow-hidden cursor-pointer transition-all duration-200"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(13,110,110,0.07)',
              }}
              onClick={() => window.open(album.spotifyUrl, '_blank')}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = '1px solid rgba(13,110,110,0.25)';
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 4px 16px rgba(13,110,110,0.12)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = '1px solid rgba(13,110,110,0.07)';
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
                  sizes="200px"
                />
              </div>
              <div style={{ padding: 12 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-lora)',
                    fontSize: 13,
                    color: 'var(--dark)',
                  }}
                >
                  {album.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 10,
                    color: 'var(--dim)',
                    letterSpacing: '0.08em',
                    marginTop: 2,
                  }}
                >
                  {album.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Discography link */}
        <Link
          href={`/${locale}/music`}
          className="inline-flex items-center gap-2 group transition-all duration-200"
          style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--teal)',
            textDecoration: 'none',
            marginTop: 24,
          }}
        >
          <span>{t('viewAll')}</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </section>
  );
}
