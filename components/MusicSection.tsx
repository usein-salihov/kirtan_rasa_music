'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { ALBUMS, TOP_TRACKS, SOCIAL_LINKS } from '@/lib/data';

const albumImageMap: Record<string, string> = {
  'Songs of Devotion': '/images/albums/songs_of_devotion.jpg',
  'Songs of Devotion 2': '/images/albums/songs_of_devotion_2.jpg',
  'Divine Nectar': '/images/albums/divine_nectar.png',
  'Govinda': '/images/albums/govinda.png',
  'Golden Tears': '/images/albums/golden_tears.jpg',
};

export default function MusicSection() {
  const tMusic = useTranslations('music');

  useEffect(() => {
    function countUp(el: HTMLElement, target: number) {
      const duration = 1800;
      const start = performance.now();
      const fmt = (v: number) => {
        if (target >= 100000) return Math.round(v / 1000) + 'K';
        if (target >= 1000) return (v / 1000).toFixed(1) + 'K';
        return String(Math.round(v));
      };
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = fmt(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = Number(el.dataset.target);
            if (target) {
              countUp(el, target);
              observer.unobserve(el);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('[data-target]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="px-6 py-10 md:px-20 md:py-16"
      style={{ backgroundColor: 'var(--ivory)' }}
    >
      {/* Albums grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-6xl mx-auto">
        {ALBUMS.map((album) => (
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
              el.style.boxShadow = '0 8px 24px rgba(13,110,110,0.14)';
              el.style.borderColor = 'rgba(13,110,110,0.2)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
              el.style.borderColor = 'rgba(13,110,110,0.07)';
            }}
          >
            <div className="relative w-full" style={{ paddingTop: '100%' }}>
              <Image
                src={album.image}
                alt={album.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
            </div>
            <div style={{ padding: 16 }}>
              <div
                style={{
                  fontFamily: 'var(--font-josefin)',
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--teal)',
                  marginBottom: 4,
                }}
              >
                {album.type}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-lora)',
                  fontSize: 15,
                  color: 'var(--dark)',
                  marginBottom: 4,
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
                }}
              >
                {album.year}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Tracks */}
      <div className="max-w-2xl mx-auto mt-16">
        <div className="flex justify-between items-center" style={{ marginBottom: 4 }}>
          <h2
            style={{
              fontFamily: 'var(--font-philosopher)',
              fontSize: 18,
              color: 'var(--teal)',
            }}
          >
            {tMusic('topTracks')}
          </h2>
          <div className="flex items-center gap-1.5">
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#1DB954' }} />
            <span
              style={{
                fontFamily: 'var(--font-josefin)',
                fontSize: 10,
                color: 'var(--dim)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {tMusic('onSpotify')}
            </span>
          </div>
        </div>

        <div style={{ height: 1, backgroundColor: 'rgba(13,110,110,0.08)', marginBottom: 8 }} />

        {TOP_TRACKS.map((track) => (
          <div
            key={track.title}
            className="flex items-center gap-4 rounded-md cursor-pointer transition-colors duration-150"
            style={{ padding: '14px 20px' }}
            onClick={() => window.open(SOCIAL_LINKS.spotify, '_blank')}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(13,110,110,0.04)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            <div
              className="text-center"
              style={{
                fontFamily: 'var(--font-josefin)',
                fontSize: 12,
                color: 'var(--dim)',
                width: 24,
                flexShrink: 0,
              }}
            >
              {track.rank}
            </div>
            <div
              className="relative rounded-sm overflow-hidden flex-shrink-0"
              style={{ width: 40, height: 40 }}
            >
              <Image
                src={albumImageMap[track.album] ?? '/images/albums/govinda.png'}
                alt={track.album}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: 'var(--font-lora)',
                  fontSize: 14,
                  color: 'var(--dark)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {track.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-josefin)',
                  fontSize: 11,
                  color: 'var(--dim)',
                  marginTop: 2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {track.album}
              </div>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-josefin)',
                fontSize: 12,
                color: 'var(--mid)',
                fontVariantNumeric: 'tabular-nums',
                flexShrink: 0,
              }}
            >
              {track.plays}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
