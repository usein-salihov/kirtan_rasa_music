'use client';

import Image from 'next/image';
import { ALBUMS } from '@/lib/data';

export default function MusicSection() {

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

    </section>
  );
}
