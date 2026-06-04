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
    <section
      className="min-h-screen pt-32 pb-24 px-6"
      style={{ backgroundColor: 'var(--ivory)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <p
          className="font-josefin uppercase text-center mb-4"
          style={{ fontSize: 9, letterSpacing: '0.5em', color: 'var(--saffron)' }}
        >
          Find Us Online
        </p>
        <h1
          className="font-philosopher font-bold text-center mb-4"
          style={{ color: 'var(--text-dark)', fontSize: 'clamp(28px, 4vw, 48px)' }}
        >
          Connect With Us
        </h1>
        <p
          className="font-lora italic text-center mb-16"
          style={{ fontSize: 18, color: 'var(--text-mid)' }}
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
              className="block p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(13,110,110,0.08)',
                borderRadius: 8,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--teal-mid)';
                el.style.boxShadow = '0 8px 40px rgba(13,110,110,0.12)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(13,110,110,0.08)';
                el.style.boxShadow = 'none';
              }}
            >
              <div className="text-4xl mb-5">{p.emoji}</div>
              <div
                className="font-philosopher mb-3"
                style={{ fontSize: 18, color: 'var(--teal-deep)' }}
              >
                {p.name}
              </div>
              <p
                className="font-lora leading-relaxed mb-5"
                style={{ fontSize: 13, color: 'var(--text-mid)' }}
              >
                {p.description}
              </p>
              <div
                className="font-philosopher"
                style={{ fontSize: 22, color: 'var(--text-dark)' }}
              >
                {p.stat}
              </div>
            </a>
          ))}
        </div>

        {/* Quote strip */}
        <div
          className="px-10 py-12 text-center"
          style={{
            backgroundColor: 'var(--warm-white)',
            border: '1px solid rgba(13,110,110,0.1)',
            borderRadius: 8,
            borderTop: '3px solid var(--teal-deep)',
          }}
        >
          <blockquote
            className="font-lora italic leading-relaxed"
            style={{ color: 'var(--text-dark)', fontSize: 'clamp(18px, 2.5vw, 26px)' }}
          >
            &ldquo;Kirtan is not just music — it is a{' '}
            <span style={{ color: 'var(--teal-deep)' }}>conversation with the Divine</span>, a
            vibration that awakens what is already within.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
