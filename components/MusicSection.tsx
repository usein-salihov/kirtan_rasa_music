'use client';

import { ALBUMS, TOP_TRACKS, STATS, SOCIAL_LINKS } from '@/lib/data';

export default function MusicSection() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6" style={{ backgroundColor: '#0A0704' }}>
      {/* Stats bar */}
      <div
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px mb-20 rounded-2xl overflow-hidden"
        style={{ border: '1px solid rgba(201,168,76,0.15)' }}
      >
        {STATS.map(({ num, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center py-8 px-4"
            style={{ backgroundColor: '#110D07' }}
          >
            <div
              className="font-cormorant font-semibold leading-none mb-2"
              style={{ color: '#C9A84C', fontSize: 'clamp(32px, 5vw, 48px)' }}
            >
              {num}
            </div>
            <div className="font-dm text-xs tracking-widest uppercase" style={{ color: '#8A7A60' }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Albums section */}
      <div className="max-w-[1100px] mx-auto mb-24">
        <h2
          className="font-cinzel text-center mb-3"
          style={{ color: '#E8DCC8', fontSize: 'clamp(22px, 3vw, 32px)' }}
        >
          Discography
        </h2>
        <p className="font-cormorant italic text-center mb-12 text-lg" style={{ color: '#8A7A60' }}>
          Five albums of sacred sound
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALBUMS.map((album) => (
            <a
              key={album.title}
              href={album.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{
                backgroundColor: '#110D07',
                border: '1px solid rgba(201,168,76,0.1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.1)';
              }}
            >
              {/* TODO: replace with real album cover images */}
              {/* Art area */}
              <div
                className={`relative w-full aspect-square bg-gradient-to-br ${album.gradient} flex items-center justify-center`}
              >
                <span style={{ fontSize: 72 }}>{album.emoji}</span>
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl"
                    style={{ backgroundColor: '#1DB954' }}
                  >
                    ▶
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="font-cormorant font-semibold text-xl mb-1" style={{ color: '#E8DCC8' }}>
                  {album.title}
                </div>
                <div className="font-dm text-xs" style={{ color: '#8A7A60' }}>
                  {album.type} · {album.year}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Top Tracks */}
      <div className="max-w-[1100px] mx-auto">
        <h2
          className="font-cinzel text-center mb-3"
          style={{ color: '#E8DCC8', fontSize: 'clamp(22px, 3vw, 32px)' }}
        >
          Top Tracks
        </h2>
        <p className="font-cormorant italic text-center mb-10 text-lg" style={{ color: '#8A7A60' }}>
          Most listened devotional songs
        </p>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#110D07', border: '1px solid rgba(201,168,76,0.15)' }}
        >
          {TOP_TRACKS.map((track, idx) => (
            <a
              key={track.title}
              href={SOCIAL_LINKS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 px-6 py-4 transition-colors duration-150 hover:bg-white/5"
              style={{
                borderBottom: idx < TOP_TRACKS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}
            >
              {/* Rank */}
              <div
                className="font-cormorant font-semibold text-xl w-6 text-center flex-shrink-0"
                style={{ color: '#8A7A60' }}
              >
                {track.rank}
              </div>

              {/* Thumbnail */}
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-br ${track.gradient} flex-shrink-0`}
              />

              {/* Track info */}
              <div className="flex-1 min-w-0">
                <div className="font-dm font-medium text-sm truncate" style={{ color: '#E8DCC8' }}>
                  {track.title}
                </div>
                <div className="font-dm text-xs truncate" style={{ color: '#8A7A60' }}>
                  {track.album}
                </div>
              </div>

              {/* Plays */}
              <div className="font-cormorant text-base flex-shrink-0" style={{ color: '#C9A84C' }}>
                {track.plays}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
