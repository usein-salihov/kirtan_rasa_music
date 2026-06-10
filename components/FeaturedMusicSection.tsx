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
      className="reveal px-6 md:px-20 py-16"
      style={{ backgroundColor: 'var(--warm)' }}
    >
      <div style={{ maxWidth: '56rem' }}>
        {/* 1. Section header */}
        <div style={{ marginBottom: 32 }}>
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
            FEATURED
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-philosopher)',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              color: 'var(--dark)',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {t('featuredTitle')}
          </h2>
          <div style={{ width: 40, height: 1, backgroundColor: 'var(--teal-light)' }} />
        </div>

        {/* 2. Featured track card */}
        <div
          className="transition-all duration-200"
          style={{
            maxWidth: 560,
            backgroundColor: 'white',
            border: '1px solid rgba(13,110,110,0.08)',
            borderRadius: 8,
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 32,
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
          <div
            className="relative rounded-md overflow-hidden flex-shrink-0"
            style={{ width: 56, height: 56 }}
          >
            <Image
              src="/images/albums/govinda.png"
              alt="Govinda"
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-philosopher)', fontSize: 18, color: 'var(--dark)' }}>
              Govinda
            </div>
            <div
              style={{
                fontFamily: 'var(--font-josefin)',
                fontSize: 11,
                color: 'var(--dim)',
                marginTop: 4,
              }}
            >
              Govinda · Kirtan Rasa
            </div>
          </div>

          <button
            onClick={() => window.open(SOCIAL_LINKS.spotify, '_blank')}
            className="flex items-center justify-center flex-shrink-0 transition-all duration-200"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              backgroundColor: '#1DB954',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
            aria-label="Play on Spotify"
          >
            <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
              <path d="M1 1L11 7L1 13V1Z" />
            </svg>
          </button>
        </div>

        {/* 3. Discography label */}
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
          {t('discographyLabel')}
        </p>

        {/* 4. Album grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            maxWidth: 560,
          }}
        >
          {miniAlbums.map((album) => (
            <div
              key={album.id}
              className="transition-all duration-200"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(13,110,110,0.07)',
                borderRadius: 6,
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => window.open(album.spotifyUrl, '_blank')}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 4px 16px rgba(13,110,110,0.12)';
                el.style.borderColor = 'rgba(13,110,110,0.2)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
                el.style.borderColor = 'rgba(13,110,110,0.07)';
              }}
            >
              <div className="relative w-full overflow-hidden" style={{ paddingTop: '100%' }}>
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div style={{ padding: '10px 12px' }}>
                <div style={{ fontFamily: 'var(--font-lora)', fontSize: 13, color: 'var(--dark)' }}>
                  {album.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 10,
                    color: 'var(--dim)',
                    marginTop: 2,
                  }}
                >
                  {album.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. View link */}
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
            marginTop: 20,
            display: 'inline-flex',
          }}
        >
          <span>{t('viewAll')}</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </section>
  );
}
