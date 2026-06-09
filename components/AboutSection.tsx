'use client';

import { useTranslations } from 'next-intl';
import { STATS } from '@/lib/data';

const STAT_KEYS = ['stat1Label', 'stat2Label', 'stat3Label', 'stat4Label'] as const;

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section
      className="px-6 py-16 md:px-20 md:py-20"
      style={{
        backgroundColor: 'var(--warm-white)',
        borderTop: '1px solid rgba(13,110,110,0.08)',
        borderBottom: '1px solid rgba(13,110,110,0.08)',
      }}
    >
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        style={{ maxWidth: 1000 }}
      >
        {/* Left column */}
        <div>
          {/* Saffron pill tag */}
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(196,129,58,0.1)',
              border: '1px solid rgba(196,129,58,0.3)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'var(--saffron)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              className="font-josefin uppercase"
              style={{ fontSize: 10, letterSpacing: '0.4em', color: 'var(--saffron)' }}
            >
              {t('label')}
            </span>
          </div>

          <h2
            className="font-philosopher font-bold mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-dark)' }}
          >
            {t('title')}
          </h2>
          <div
            style={{ width: 48, height: 2, backgroundColor: 'var(--teal-light)', marginBottom: 24 }}
          />
          <p
            className="font-lora italic"
            style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--text-mid)' }}
          >
            {t('quote')}
          </p>
        </div>

        {/* Right column — 2×2 stats */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-lg text-center"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(13,110,110,0.08)',
                padding: 24,
              }}
            >
              <div
                className="font-philosopher"
                style={{ fontSize: 40, color: 'var(--teal-deep)', lineHeight: 1 }}
              >
                {stat.num}
              </div>
              <div
                className="font-josefin uppercase mt-1"
                style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--text-dim)' }}
              >
                {t(STAT_KEYS[i])}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
