import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MusicSection from '@/components/MusicSection';
import { STATS } from '@/lib/data';

const STAT_TARGETS = [7500, 5, 350000, 718];
const STAT_KEYS = ['stat1Label', 'stat2Label', 'stat3Label', 'stat4Label'] as const;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'music' });
  return { title: `${t('pageTitle')} — Kirtan Rasa Music` };
}

export default async function MusicPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const tMusic = await getTranslations({ locale, namespace: 'music' });
  const tAbout = await getTranslations({ locale, namespace: 'about' });

  return (
    <>
      {/* Stats bar */}
      <div
        className="flex justify-center flex-wrap gap-8 md:gap-12 px-6 py-8 md:px-[72px]"
        style={{
          marginTop: 80,
          backgroundColor: 'var(--warm)',
          borderBottom: '1px solid rgba(13,110,110,0.06)',
        }}
      >
        {STATS.map((stat, i) => (
          <div key={stat.label} className="text-center">
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
              {tAbout(STAT_KEYS[i])}
            </div>
          </div>
        ))}
      </div>

      {/* Section header */}
      <div
        className="px-6 pt-14 pb-0 md:px-[72px]"
        style={{ backgroundColor: 'var(--ivory)' }}
      >
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
          {tMusic('discographyLabel')}
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
          {tMusic('pageTitle')}
        </h1>
        <div style={{ width: 40, height: 1, backgroundColor: 'var(--teal-light)' }} />
      </div>

      <MusicSection />
    </>
  );
}
