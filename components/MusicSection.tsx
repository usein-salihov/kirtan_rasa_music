'use client';

import Image from 'next/image';
import { ALBUMS, TOP_TRACKS, STATS, SOCIAL_LINKS } from '@/lib/data';

export default function MusicSection() {
  return (
    <section className="min-h-screen pb-24" style={{ backgroundColor: 'var(--ivory)' }}>
      {/* Stats bar */}
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{
          backgroundColor: 'var(--warm-white)',
          borderBottom: '1px solid rgba(13,110,110,0.1)',
        }}
      >
        {STATS.map(({ num, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center py-10 px-4"
          >
            <div
              className="font-philosopher leading-none mb-2"
              style={{ fontSize: 40, color: 'var(--teal-deep)' }}
            >
              {num}
            </div>
            <div
              className="font-josefin uppercase"
              style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--text-dim)' }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 pt-20">
        {/* Albums section */}
        <div className="max-w-[1100px] mx-auto mb-24">
          <p
            className="font-josefin uppercase text-center mb-3"
            style={{ fontSize: 9, letterSpacing: '0.5em', color: 'var(--saffron)' }}
          >
            Discography
          </p>
          <h2
            className="font-philosopher font-bold text-center mb-4"
            style={{ color: 'var(--text-dark)', fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            Our Albums
          </h2>
          <div
            className="mx-auto mb-12"
            style={{ width: 60, height: 1, backgroundColor: 'var(--teal-light)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALBUMS.map((album) => (
              <a
                key={album.id}
                href={album.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(13,110,110,0.08)',
                  borderRadius: 8,
                  boxShadow: '0 2px 16px rgba(13,110,110,0.06)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(13,110,110,0.3)';
                  el.style.boxShadow = '0 8px 40px rgba(13,110,110,0.15)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(13,110,110,0.08)';
                  el.style.boxShadow = '0 2px 16px rgba(13,110,110,0.06)';
                }}
              >
                {/* Art area */}
                <div className="relative w-full" style={{ paddingTop: '100%' }}>
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  {/* Play overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-lg"
                      style={{ backgroundColor: '#1DB954', color: 'white' }}
                    >
                      ▶
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div
                    className="font-josefin uppercase mb-1"
                    style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--teal-deep)' }}
                  >
                    {album.type}
                  </div>
                  <div
                    className="font-lora mb-1"
                    style={{ fontSize: 17, color: 'var(--text-dark)' }}
                  >
                    {album.title}
                  </div>
                  <div
                    className="font-josefin"
                    style={{ fontSize: 11, color: 'var(--text-dim)' }}
                  >
                    {album.year}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Top Tracks */}
        <div className="max-w-[1100px] mx-auto">
          <p
            className="font-josefin uppercase text-center mb-3"
            style={{ fontSize: 9, letterSpacing: '0.5em', color: 'var(--saffron)' }}
          >
            Streaming
          </p>
          <h2
            className="font-philosopher font-bold text-center mb-4"
            style={{ color: 'var(--text-dark)', fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            Top Tracks
          </h2>
          <div
            className="mx-auto mb-12"
            style={{ width: 60, height: 1, backgroundColor: 'var(--teal-light)' }}
          />

          <div
            className="overflow-hidden"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(13,110,110,0.08)',
              borderRadius: 8,
            }}
          >
            {/* Table header */}
            <div
              className="grid px-6 py-3 text-left"
              style={{
                gridTemplateColumns: '2rem 2.5rem 1fr auto',
                gap: '1.25rem',
                borderBottom: '1px solid rgba(13,110,110,0.08)',
              }}
            >
              <div className="font-philosopher text-sm" style={{ color: 'var(--teal-deep)' }}>#</div>
              <div />
              <div className="font-philosopher text-sm" style={{ color: 'var(--teal-deep)' }}>Title</div>
              <div className="font-philosopher text-sm" style={{ color: 'var(--teal-deep)' }}>Plays</div>
            </div>

            {TOP_TRACKS.map((track, idx) => (
              <a
                key={track.title}
                href={SOCIAL_LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="grid items-center px-6 py-4 transition-colors duration-150"
                style={{
                  gridTemplateColumns: '2rem 2.5rem 1fr auto',
                  gap: '1.25rem',
                  borderBottom:
                    idx < TOP_TRACKS.length - 1 ? '1px solid rgba(13,110,110,0.05)' : 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(13,110,110,0.04)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                <div
                  className="font-josefin text-sm text-center"
                  style={{ color: 'var(--text-dim)' }}
                >
                  {track.rank}
                </div>
                <div
                  className={`w-10 h-10 rounded bg-gradient-to-br ${track.gradient} flex-shrink-0`}
                />
                <div className="min-w-0">
                  <div
                    className="font-lora truncate"
                    style={{ fontSize: 14, color: 'var(--text-dark)' }}
                  >
                    {track.title}
                  </div>
                  <div
                    className="font-josefin truncate"
                    style={{ fontSize: 11, color: 'var(--text-dim)' }}
                  >
                    {track.album}
                  </div>
                </div>
                <div
                  className="font-josefin flex-shrink-0"
                  style={{ fontSize: 12, color: 'var(--text-mid)' }}
                >
                  {track.plays}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
