import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MusicSection from '@/components/MusicSection';

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

  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: 'calc(100vh - 80px)' }}>
      {/* Section header */}
      <div
        className="px-6 pt-32 pb-0 md:px-[72px]"
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
    </div>
  );
}
