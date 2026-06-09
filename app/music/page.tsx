import type { Metadata } from 'next';
import Image from 'next/image';
import { ALBUMS, TOP_TRACKS, STATS, SOCIAL_LINKS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Music — Kirtan Rasa Music',
  description: 'Explore the full discography of Kirtan Rasa — five albums of sacred devotional music.',
};

export default function MusicPage() {
  return (
    <div style={{ backgroundColor: 'var(--ivory)' }}>
      {/* Stats bar */}
      <div
        className="flex justify-center gap-12"
        style={{
          backgroundColor: 'var(--warm-white)',
          borderBottom: '1px solid rgba(13,110,110,0.1)',
          padding: '96px 0 32px',
        }}
      >
        {STATS.map(({ num, label }) => (
          <div key={label} className="text-center">
            <div
              className="font-philosopher"
              style={{ fontSize: 40, color: 'var(--teal-deep)' }}
            >
              {num}
            </div>
            <div
              className="font-josefin uppercase mt-1"
              style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--text-dim)' }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ padding: '64px 80px' }}>
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="font-josefin uppercase mb-3"
            style={{ fontSize: 9, letterSpacing: '0.5em', color: 'var(--saffron)' }}
          >
            Discography
          </p>
          <h1
            className="font-philosopher font-bold mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: 'var(--text-dark)' }}
          >
            Albums
          </h1>
          <div
            className="mx-auto"
            style={{ width: 48, height: 2, backgroundColor: 'var(--teal-light)' }}
          />
        </div>

        {/* Albums grid */}
        <div
          className="grid gap-6 mx-auto"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            maxWidth: 1000,
            marginBottom: 80,
          }}
        >
          {ALBUMS.map((album) => (
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
                <div
                  className="font-josefin uppercase mb-1"
                  style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--teal-deep)' }}
                >
                  {album.type}
                </div>
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

        {/* Top Tracks */}
        <div className="mx-auto" style={{ maxWidth: 640 }}>
          <div className="flex items-center gap-3 mb-6">
            <h2
              className="font-philosopher"
              style={{ fontSize: 28, color: 'var(--teal-deep)' }}
            >
              Top Tracks
            </h2>
            <div
              className="rounded-full"
              style={{ width: 10, height: 10, backgroundColor: '#1DB954' }}
            />
          </div>
          <div
            className="rounded-lg overflow-hidden"
            style={{ border: '1px solid rgba(13,110,110,0.08)' }}
          >
            {TOP_TRACKS.map((track, idx) => (
              <a
                key={track.rank}
                href={SOCIAL_LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="track-row"
                style={{
                  backgroundColor: 'white',
                  borderBottom:
                    idx < TOP_TRACKS.length - 1 ? '1px solid rgba(13,110,110,0.05)' : 'none',
                  gap: '20px',
                  padding: '16px 24px',
                }}
              >
                <div
                  className="font-josefin text-center flex-shrink-0"
                  style={{ fontSize: 12, color: 'var(--text-dim)', width: 20 }}
                >
                  {track.rank}
                </div>
                <div
                  className={`rounded flex-shrink-0 bg-gradient-to-br ${track.gradient}`}
                  style={{ width: 40, height: 40 }}
                />
                <div className="flex-1 min-w-0">
                  <div
                    className="font-lora truncate"
                    style={{ fontSize: 14, color: 'var(--text-dark)' }}
                  >
                    {track.title}
                  </div>
                  <div
                    className="font-josefin truncate mt-0.5"
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
    </div>
  );
}
