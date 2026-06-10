import { getTranslations } from 'next-intl/server';
import { STATS } from '@/lib/data';

const STAT_KEYS = ['stat1Label', 'stat2Label', 'stat3Label', 'stat4Label'] as const;
const STAT_TARGETS = [7500, 5, 350000, 718];

export default async function AboutSection() {
  const t = await getTranslations('about');

  return (
    <section
      className="reveal px-6 py-16 md:px-20 md:py-20"
      style={{
        backgroundColor: 'var(--ivory)',
        borderBottom: '1px solid rgba(13,110,110,0.06)',
      }}
    >
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        style={{ maxWidth: 1000 }}
      >
        {/* Left column */}
        <div>
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
          <h2
            style={{
              fontFamily: 'var(--font-philosopher)',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              color: 'var(--dark)',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {t('title')}
          </h2>
          <div style={{ width: 40, height: 1, backgroundColor: 'var(--teal-light)', marginBottom: 28 }} />
          <p
            style={{
              fontFamily: 'var(--font-lora)',
              fontStyle: 'italic',
              fontSize: 17,
              lineHeight: 1.85,
              color: 'var(--mid)',
            }}
          >
            {t('quote')}
          </p>
        </div>

        {/* Right column — 2×2 stats */}
        <div className="grid grid-cols-2 gap-3">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-box rounded-md text-center"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(13,110,110,0.08)',
                padding: 24,
              }}
            >
              <div
                data-target={STAT_TARGETS[i]}
                style={{
                  fontFamily: 'var(--font-philosopher)',
                  fontSize: 36,
                  color: 'var(--teal)',
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-josefin)',
                  fontSize: 9,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--dim)',
                  marginTop: 6,
                }}
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
