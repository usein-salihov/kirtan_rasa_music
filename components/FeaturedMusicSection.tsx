import Link from 'next/link';
import { ALBUMS, SOCIAL_LINKS } from '@/lib/data';

export default function FeaturedMusicSection() {
  const previewAlbums = ALBUMS.slice(0, 3);

  return (
    <section style={{ backgroundColor: 'var(--ivory)', padding: '80px' }}>
      <div className="mx-auto" style={{ maxWidth: 1000 }}>
        {/* Header */}
        <p
          className="font-josefin uppercase mb-3"
          style={{ fontSize: 9, letterSpacing: '0.5em', color: 'var(--saffron)' }}
        >
          Featured
        </p>
        <h2
          className="font-philosopher font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-dark)' }}
        >
          Latest Music
        </h2>
        <div style={{ width: 48, height: 2, backgroundColor: 'var(--teal-light)', marginBottom: 40 }} />

        {/* Featured track card */}
        <div
          className="flex items-center gap-6 rounded-xl"
          style={{
            backgroundColor: 'white',
            border: '1px solid rgba(13,110,110,0.08)',
            padding: 28,
            maxWidth: 520,
            boxShadow: '0 2px 20px rgba(13,110,110,0.06)',
          }}
        >
          <div
            className="rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#3D2B0F] via-[#7B5520] to-[#C9A84C]"
            style={{ width: 72, height: 72 }}
          >
            <span style={{ fontSize: 32 }}>🕉</span>
          </div>
          <div className="flex-1">
            <div className="font-philosopher" style={{ fontSize: 22, color: 'var(--text-dark)' }}>
              KAJI KAJI
            </div>
            <div
              className="font-josefin mt-1"
              style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: '0.1em' }}
            >
              Songs of Devotion
            </div>
            <div className="font-philosopher mt-2" style={{ fontSize: 14, color: 'var(--teal-mid)' }}>
              350,182 plays
            </div>
          </div>
          <a
            href={SOCIAL_LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full flex-shrink-0 text-white transition-opacity duration-200 hover:opacity-85"
            style={{ width: 48, height: 48, backgroundColor: '#1DB954', fontSize: 16 }}
          >
            ▶
          </a>
        </div>

        {/* Albums preview grid */}
        <div className="grid grid-cols-3 gap-5 mt-12">
          {previewAlbums.map((album) => (
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
              <div
                className={`w-full aspect-square bg-gradient-to-br ${album.gradient} flex items-center justify-center`}
              >
                <span style={{ fontSize: 52 }}>{album.emoji}</span>
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
            href="/music"
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
            View All Albums
          </Link>
        </div>
      </div>
    </section>
  );
}
