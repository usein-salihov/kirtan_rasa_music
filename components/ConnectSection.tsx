'use client';

import { SOCIAL_LINKS } from '@/lib/data';

const PLATFORMS = [
  {
    key: 'spotify' as const,
    emoji: '🎵',
    name: 'Spotify',
    description: 'Stream our full discography and add to your playlists',
    stat: '7.5K Monthly Listeners',
  },
  {
    key: 'instagram' as const,
    emoji: '📸',
    name: 'Instagram',
    description: 'Behind-the-scenes, practice sessions, and kirtan moments',
    stat: 'Follow the Journey',
  },
  {
    key: 'facebook' as const,
    emoji: '🌐',
    name: 'Facebook',
    description: 'Event announcements, live recordings, and community',
    stat: 'Join the Community',
  },
];

export default function ConnectSection() {
  return (
    <section className="min-h-screen pt-32 pb-24 px-6" style={{ backgroundColor: '#0A0704' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <p
          className="font-dm tracking-[0.3em] uppercase text-sm text-center mb-4"
          style={{ color: '#C9A84C' }}
        >
          Find Us Online
        </p>
        <h1
          className="font-cinzel text-center mb-4"
          style={{ color: '#E8DCC8', fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          Connect With Us
        </h1>
        <p
          className="font-cormorant italic text-center text-xl mb-16"
          style={{ color: '#8A7A60' }}
        >
          Join the community wherever you are
        </p>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {PLATFORMS.map((p) => (
            <a
              key={p.key}
              href={SOCIAL_LINKS[p.key]}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2"
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
              <div className="text-5xl mb-5">{p.emoji}</div>
              <div className="font-cinzel text-xl mb-3" style={{ color: '#C9A84C' }}>
                {p.name}
              </div>
              <p className="font-dm text-sm leading-relaxed mb-5" style={{ color: '#8A7A60' }}>
                {p.description}
              </p>
              <div
                className="font-cormorant text-lg font-semibold"
                style={{ color: '#E8DCC8' }}
              >
                {p.stat}
              </div>
            </a>
          ))}
        </div>

        {/* Quote strip */}
        <div
          className="rounded-2xl px-10 py-12 text-center"
          style={{
            borderTop: '3px solid #C9A84C',
            backgroundColor: '#110D07',
          }}
        >
          <blockquote
            className="font-cormorant italic leading-relaxed"
            style={{ color: '#B8A880', fontSize: 'clamp(18px, 2.5vw, 26px)' }}
          >
            &ldquo;Kirtan is not just music — it is a{' '}
            <span style={{ color: '#C9A84C' }}>conversation with the Divine</span>, a vibration
            that awakens what is already within.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
