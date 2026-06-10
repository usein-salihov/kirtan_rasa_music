import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ConnectSection from '@/components/ConnectSection';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'connect' });
  return { title: `${t('pageTitle')} — Kirtan Rasa Music` };
}

export default async function ConnectPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'connect' });

  return (
    <>
      {/* Page header */}
      <div
        className="px-6 pt-28 pb-0 md:px-[72px]"
        style={{
          backgroundColor: 'var(--ivory)',
          marginTop: 80,
        }}
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
          {t('pageTitle')}
        </h1>
        <div style={{ width: 40, height: 1, backgroundColor: 'var(--teal-light)' }} />
      </div>

      <ConnectSection />
    </>
  );
}
