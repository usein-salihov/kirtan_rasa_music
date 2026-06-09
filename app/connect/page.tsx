import type { Metadata } from 'next';
import { SOCIAL_LINKS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Connect — Kirtan Rasa Music',
  description: 'Connect with Kirtan Rasa Music on Spotify, Instagram, and Facebook.',
};

const PLATFORMS = [
  {
    key: 'spotify' as const,
    emoji: '🎵',
    name: 'Spotify',
    description: 'Stream our full discography and add to your playlists',
    stat: '7.5K',
    statLabel: 'Monthly Listeners',
  },
  {
    key: 'instagram' as const,
    emoji: '📸',
    name: 'Instagram',
    description: 'Behind the scenes and devotional moments',
    stat: '@kirtanrasamusic',
    statLabel: 'Follow Us',
  },
  {
    key: 'facebook' as const,
    emoji: '🌐',
    name: 'Facebook',
    description: 'Events, community and live announcements',
    stat: '@kirtanrasamusic',
    statLabel: 'Like Our Page',
  },
];

export default function ConnectPage() {
  return (
    <div
      style={{
        backgroundColor: 'var(--ivory)',
        padding: '128px 80px 80px',
      }}
    >
      {/* Section header */}
      <div className="text-center mb-12">
        <p
          className="font-josefin uppercase mb-3"
          style={{ fontSize: 9, letterSpacing: '0.5em', color: 'var(--saffron)' }}
        >
          Find Us
        </p>
        <h1
          className="font-philosopher font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: 'var(--text-dark)' }}
        >
          Connect
        </h1>
        <div
          className="mx-auto mb-5"
          style={{ width: 48, height: 2, backgroundColor: 'var(--teal-light)' }}
        />
        <p
          className="font-lora italic mx-auto"
          style={{ fontSize: 18, color: 'var(--text-mid)', maxWidth: 400 }}
        >
          Join our community and stay connected with the latest releases and events.
        </p>
      </div>

      {/* Platform cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mb-16"
        style={{ maxWidth: 800 }}
      >
        {PLATFORMS.map((p) => (
          <a
            key={p.key}
            href={SOCIAL_LINKS[p.key]}
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card block rounded-lg text-center"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(13,110,110,0.08)',
              padding: 40,
              textDecoration: 'none',
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
              className="font-lora mb-5"
              style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.6 }}
            >
              {p.description}
            </p>
            <div
              className="font-philosopher"
              style={{ fontSize: 22, color: 'var(--text-dark)' }}
            >
              {p.stat}
            </div>
            <div
              className="font-josefin uppercase mt-1"
              style={{ fontSize: 10, color: 'var(--text-dim)' }}
            >
              {p.statLabel}
            </div>
          </a>
        ))}
      </div>

      {/* Quote strip */}
      <div
        className="relative rounded-lg text-center mx-auto"
        style={{
          maxWidth: 672,
          backgroundColor: 'var(--warm-white)',
          border: '1px solid rgba(13,110,110,0.1)',
          padding: 48,
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 rounded-t-lg"
          style={{ height: 3, backgroundColor: 'var(--teal-deep)' }}
        />
        <blockquote
          className="font-lora italic leading-relaxed mb-6"
          style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', color: 'var(--text-dark)' }}
        >
          &ldquo;Kirtan is not just music — it is a{' '}
          <span style={{ color: 'var(--teal-deep)' }}>conversation with the Divine</span>, a
          vibration that awakens what is already within.&rdquo;
        </blockquote>
        <div
          className="font-josefin uppercase"
          style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--text-dim)' }}
        >
          — Kirtan Rasa Music
        </div>
      </div>
    </div>
  );
}
