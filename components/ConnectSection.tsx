'use client';

import { useTranslations } from 'next-intl';
import { SOCIAL_LINKS } from '@/lib/data';

const PLATFORMS = [
  {
    key: 'spotify' as const,
    emoji: '🎵',
    stat: '7.5K',
    descKey: 'spotifyDesc' as const,
    statLabelKey: 'spotifyStatLabel' as const,
    hoverColor: '#1DB954',
  },
  {
    key: 'instagram' as const,
    emoji: '📸',
    stat: '@kirtanrasamusic',
    descKey: 'instagramDesc' as const,
    statLabelKey: 'instagramStatLabel' as const,
    hoverColor: '#E1306C',
  },
  {
    key: 'facebook' as const,
    emoji: '🌐',
    stat: '@kirtanrasamusic',
    descKey: 'facebookDesc' as const,
    statLabelKey: 'facebookStatLabel' as const,
    hoverColor: '#1877F2',
  },
  {
    key: 'youtube' as const,
    emoji: '🎬',
    stat: '@kirtanrasamusic',
    descKey: 'youtubeDesc' as const,
    statLabelKey: 'youtubeStatLabel' as const,
    hoverColor: '#FF0000',
  },
];

export default function ConnectSection() {
  const t = useTranslations('connect');

  return (
    <div
      className="px-6 py-12 md:px-20 md:py-16"
      style={{ backgroundColor: 'var(--ivory)' }}
    >
      {/* Section header */}
      <div className="text-center mb-12">
        <p
          className="font-josefin uppercase mb-3"
          style={{ fontSize: 9, letterSpacing: '0.5em', color: 'var(--saffron)' }}
        >
          {t('label')}
        </p>
        <h1
          className="font-philosopher font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: 'var(--text-dark)' }}
        >
          {t('title')}
        </h1>
        <div
          className="mx-auto mb-5"
          style={{ width: 48, height: 2, backgroundColor: 'var(--teal-light)' }}
        />
        <p
          className="font-lora italic mx-auto"
          style={{ fontSize: 18, color: 'var(--text-mid)', maxWidth: 400 }}
        >
          {t('subtitle')}
        </p>
      </div>

      {/* Platform cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto mb-16"
        style={{ maxWidth: 1100 }}
      >
        {PLATFORMS.map((p) => (
          <a
            key={p.key}
            href={SOCIAL_LINKS[p.key]}
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card block rounded-lg text-center transition-all duration-200"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(13,110,110,0.08)',
              borderTop: '3px solid transparent',
              padding: 32,
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderTop = `3px solid ${p.hoverColor}`;
              el.style.borderRight = '1px solid rgba(13,110,110,0.2)';
              el.style.borderBottom = '1px solid rgba(13,110,110,0.2)';
              el.style.borderLeft = '1px solid rgba(13,110,110,0.2)';
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = '0 8px 32px rgba(13,110,110,0.12)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderTop = '3px solid transparent';
              el.style.borderRight = '1px solid rgba(13,110,110,0.08)';
              el.style.borderBottom = '1px solid rgba(13,110,110,0.08)';
              el.style.borderLeft = '1px solid rgba(13,110,110,0.08)';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
            }}
          >
            <div className="text-4xl mb-5">{p.emoji}</div>
            <div
              className="font-philosopher mb-3"
              style={{ fontSize: 20, color: 'var(--teal-deep)' }}
            >
              {p.key.charAt(0).toUpperCase() + p.key.slice(1)}
            </div>
            <p
              className="font-lora mb-5"
              style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.6 }}
            >
              {t(p.descKey)}
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
              {t(p.statLabelKey)}
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
          &ldquo;{t('quote').split(t('quoteHighlight'))[0]}
          <span style={{ color: 'var(--teal-deep)' }}>{t('quoteHighlight')}</span>
          {t('quote').split(t('quoteHighlight'))[1]}&rdquo;
        </blockquote>
        <div
          className="font-josefin uppercase"
          style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--text-dim)' }}
        >
          {t('quoteSource')}
        </div>
      </div>
    </div>
  );
}
