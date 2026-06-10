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
      {/* Section header */}
      <div style={{ marginBottom: 40 }}>
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

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT — featured track + view link */}
        <div>
          {/* Track card */}
          <div
            className="flex items-center gap-4 w-full transition-all duration-200"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(13,110,110,0.08)',
              borderRadius: 8,
              padding: 20,
              marginBottom: 24,
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
              style={{ width: 52, height: 52 }}
            >
              <Image
                src="/images/albums/govinda.png"
                alt="Govinda"
                fill
                className="object-cover"
                sizes="52px"
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
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
              aria-label="Play on Spotify"
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
                <path d="M1 1L11 7L1 13V1Z" />
              </svg>
            </button>
          </div>

          {/* View link */}
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
            }}
          >
            <span>{t('viewAll')}</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        {/* RIGHT — discography label + album grid */}
        <div>
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

          <div className="grid grid-cols-3 gap-3">
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
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                </div>
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontFamily: 'var(--font-lora)', fontSize: 12, color: 'var(--dark)' }}>
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
        </div>

      </div>
    </section>
  );
}
