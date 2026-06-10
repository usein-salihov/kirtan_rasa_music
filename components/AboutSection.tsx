import { getTranslations } from 'next-intl/server';
import { STATS } from '@/lib/data';

const STAT_KEYS = ['stat1Label', 'stat2Label', 'stat3Label', 'stat4Label'] as const;
const STAT_TARGETS = [7500, 5, 350000, 718];

export default async function AboutSection() {
  const t = await getTranslations('about');

  return (
    <section
      className="reveal px-6 md:px-20 py-20"
      style={{
        backgroundColor: 'var(--ivory)',
        borderBottom: '1px solid rgba(13,110,110,0.06)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
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
          <div className="mx-auto" style={{ width: 40, height: 1, backgroundColor: 'var(--teal-light)', marginBottom: 28 }} />
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
    </section>
  );
}
