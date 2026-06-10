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
    <section
      className="reveal px-6 md:px-20 py-16"
      style={{ backgroundColor: 'var(--warm)' }}
    >
      {/* Section header */}
      <div style={{ marginBottom: 40 }}>
        <p
          className="font-josefin"
          style={{
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
          className="font-philosopher"
          style={{
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

      {/* Albums grid */}
      <div className="grid grid-cols-3 gap-5 mt-10">
        {featuredAlbums.map((album) => (
          <div
            key={album.id}
            className="rounded-lg overflow-hidden cursor-pointer transition-all duration-200"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(13,110,110,0.07)',
            }}
            onClick={() => window.open(album.spotifyUrl, '_blank')}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = '0 6px 24px rgba(13,110,110,0.12)';
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
                sizes="(max-width: 768px) 33vw, 25vw"
              />
            </div>
            <div style={{ padding: 16 }}>
              <div
                className="font-lora"
                style={{ fontSize: 15, color: 'var(--dark)', marginBottom: 4 }}
              >
                {album.title}
              </div>
              <div
                className="font-josefin"
                style={{ fontSize: 10, color: 'var(--dim)', letterSpacing: '0.08em' }}
              >
                {album.year}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View link */}
      <Link
        href={`/${locale}/music`}
        className="inline-flex items-center gap-2 group font-josefin font-light transition-all duration-200"
        style={{
          fontSize: 11,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--teal)',
          textDecoration: 'none',
          marginTop: 32,
          display: 'inline-flex',
        }}
      >
        <span>{t('viewAll')}</span>
        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
      </Link>
    </section>
  );
}
