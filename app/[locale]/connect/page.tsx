import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ConnectSection from '@/components/ConnectSection';

export const metadata: Metadata = {
  title: 'Connect — Kirtan Rasa Music',
  description: 'Connect with Kirtan Rasa Music on Spotify, Instagram, and Facebook.',
};

export default async function ConnectPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'connect' });

  return (
    <>
      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{
          minHeight: 300,
          background: 'linear-gradient(135deg, #1E3535, #0D2B2B)',
        }}
      >
        {/* Teal radial at left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(168,212,212,0.1), transparent)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-20 flex flex-col justify-center h-full pt-32">
          {/* Teal pill */}
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(168,212,212,0.15)',
              border: '1px solid rgba(168,212,212,0.3)',
              width: 'fit-content',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'var(--teal-light)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span
              className="font-josefin font-light uppercase"
              style={{ fontSize: 10, letterSpacing: '0.4em', color: 'var(--teal-light)' }}
            >
              {t('label')}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-philosopher font-bold mb-3"
            style={{ fontSize: 56, color: 'white' }}
          >
            {t('pageTitle')}
          </h1>

          {/* Subtitle */}
          <p
            className="font-lora italic"
            style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: 'rgba(255,255,255,0.6)' }}
          >
            {t('pageSubtitle')}
          </p>
        </div>
      </div>

      <ConnectSection />
    </>
  );
}
