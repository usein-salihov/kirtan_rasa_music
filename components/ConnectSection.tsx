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
    color: '#1DB954',
  },
  {
    key: 'instagram' as const,
    emoji: '📸',
    stat: '@kirtanrasamusic',
    descKey: 'instagramDesc' as const,
    statLabelKey: 'instagramStatLabel' as const,
    color: '#E1306C',
  },
  {
    key: 'facebook' as const,
    emoji: '🌐',
    stat: '@kirtanrasamusic',
    descKey: 'facebookDesc' as const,
    statLabelKey: 'facebookStatLabel' as const,
    color: '#1877F2',
  },
  {
    key: 'youtube' as const,
    emoji: '🎬',
    stat: '@kirtanrasamusic',
    descKey: 'youtubeDesc' as const,
    statLabelKey: 'youtubeStatLabel' as const,
    color: '#FF0000',
  },
];

export default function ConnectSection() {
  const t = useTranslations('connect');

  return (
    <div
      className="px-6 pt-32 pb-14 md:px-20 md:pb-20"
      style={{ backgroundColor: 'var(--ivory)' }}
    >
      {/* Section header */}
      <div style={{ marginBottom: 48 }}>
        <p
          style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 9,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--saffron)',
            marginBottom: 12,
          }}
        >
          {t('label')}
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-philosopher)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            color: 'var(--dark)',
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          {t('title')}
        </h1>
        <div style={{ width: 40, height: 1, backgroundColor: 'var(--teal-light)', marginBottom: 12 }} />
        <p
          style={{
            fontFamily: 'var(--font-lora)',
            fontStyle: 'italic',
            fontSize: 16,
            color: 'var(--mid)',
          }}
        >
          {t('subtitle')}
        </p>
      </div>

      {/* Platform cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 mx-auto"
        style={{ maxWidth: 1100 }}
      >
        {PLATFORMS.map((p) => (
          <a
            key={p.key}
            href={SOCIAL_LINKS[p.key]}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg text-center relative overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(13,110,110,0.08)',
              padding: 32,
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-4px)';
              el.style.boxShadow = '0 8px 32px rgba(13,110,110,0.12)';
              el.style.borderColor = 'rgba(13,110,110,0.2)';
              const bar = el.querySelector('[data-bar]') as HTMLElement;
              if (bar) bar.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
              el.style.borderColor = 'rgba(13,110,110,0.08)';
              const bar = el.querySelector('[data-bar]') as HTMLElement;
              if (bar) bar.style.opacity = '0';
            }}
          >
            {/* Color bar */}
            <div
              data-bar="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                backgroundColor: p.color,
                opacity: 0,
                transition: 'opacity 0.3s',
              }}
            />

            <div style={{ fontSize: 36, marginBottom: 16, display: 'block' }}>{p.emoji}</div>
            <div
              style={{
                fontFamily: 'var(--font-philosopher)',
                fontSize: 18,
                color: 'var(--teal)',
                marginBottom: 8,
              }}
            >
              {p.key.charAt(0).toUpperCase() + p.key.slice(1)}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-lora)',
                fontSize: 13,
                color: 'var(--mid)',
                lineHeight: 1.6,
                marginBottom: 0,
              }}
            >
              {t(p.descKey)}
            </p>
            <div
              style={{
                fontFamily: 'var(--font-philosopher)',
                fontSize: 22,
                color: 'var(--dark)',
                marginTop: 16,
              }}
            >
              {p.stat}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-josefin)',
                fontSize: 10,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                marginTop: 4,
              }}
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
          backgroundColor: 'var(--warm)',
          border: '1px solid rgba(13,110,110,0.08)',
          padding: 48,
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 rounded-t-lg"
          style={{ height: 3, backgroundColor: 'var(--teal)' }}
        />
        <blockquote
          style={{
            fontFamily: 'var(--font-lora)',
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            color: 'var(--dark)',
            lineHeight: 1.6,
            marginBottom: 24,
          }}
        >
          &ldquo;{t('quote').split(t('quoteHighlight'))[0]}
          <span style={{ color: 'var(--teal)' }}>{t('quoteHighlight')}</span>
          {t('quote').split(t('quoteHighlight'))[1]}&rdquo;
        </blockquote>
        <div
          style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 10,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--dim)',
          }}
        >
          {t('quoteSource')}
        </div>
      </div>
    </div>
  );
}
