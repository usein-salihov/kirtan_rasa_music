import { getTranslations } from 'next-intl/server';
import { EVENTS } from '@/lib/data';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'events' });
  return {
    title: `${t('pageTitle')} — Kirtan Rasa Music`,
    description: t('subtitle'),
  };
}

export default async function EventsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'events' });
  const isBg = locale === 'bg';

  return (
    <>
      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{
          height: 280,
          background: 'linear-gradient(135deg, #1a2820, #0D2020)',
        }}
      >
        {/* Warm radial at right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(196,129,58,0.1), transparent)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-20 flex flex-col justify-center h-full pt-24">
          {/* Saffron pill */}
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(196,129,58,0.15)',
              border: '1px solid rgba(196,129,58,0.3)',
              width: 'fit-content',
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
              className="font-josefin font-light uppercase"
              style={{ fontSize: 10, letterSpacing: '0.4em', color: 'var(--saffron)' }}
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

      {/* Events content */}
      <div
        className="px-6 py-16 md:px-20 md:py-20"
        style={{ backgroundColor: 'var(--ivory)' }}
      >
        {/* Events list */}
        <div className="mx-auto flex flex-col gap-5" style={{ maxWidth: 720 }}>
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="event-row flex items-center gap-7 rounded-lg px-8 py-6"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(13,110,110,0.1)',
              }}
            >
              {/* Date */}
              <div className="text-center" style={{ minWidth: 44 }}>
                <div
                  className="font-philosopher"
                  style={{ fontSize: 'clamp(24px, 6vw, 36px)', color: 'var(--teal-deep)', lineHeight: 1 }}
                >
                  {event.day}
                </div>
                <div
                  className="font-josefin uppercase mt-1"
                  style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--text-dim)' }}
                >
                  {isBg ? event.monthBg : event.month}
                </div>
              </div>

              {/* Vertical divider */}
              <div
                className="hidden md:block"
                style={{ width: 1, height: 52, backgroundColor: 'rgba(13,110,110,0.12)' }}
              />

              {/* Info */}
              <div className="flex-1">
                <div
                  className="font-philosopher mb-1"
                  style={{ fontSize: 20, color: 'var(--text-dark)' }}
                >
                  {isBg ? event.nameBg : event.name}
                </div>
                <div
                  className="font-josefin"
                  style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: '0.05em' }}
                >
                  {isBg ? event.locationBg : event.location}
                </div>
              </div>

              {/* Tag */}
              <div
                className="font-josefin uppercase flex-shrink-0"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  color: event.tagColor === 'teal' ? 'var(--teal-deep)' : 'var(--saffron)',
                  padding: '6px 14px',
                  border: `1px solid ${event.tagColor === 'teal' ? 'rgba(13,110,110,0.3)' : 'rgba(196,129,58,0.3)'}`,
                  borderRadius: 999,
                }}
              >
                {t(event.tag)}
              </div>

              {/* Right arrow */}
              <div
                className="font-josefin flex-shrink-0"
                style={{ fontSize: 14, color: 'var(--teal-deep)', opacity: 0.4 }}
              >
                →
              </div>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <div className="mx-auto mt-16" style={{ maxWidth: 720 }}>
          <h2
            className="font-philosopher mb-4"
            style={{ fontSize: 22, color: 'var(--text-dim)' }}
          >
            {t('pastEvents')}
          </h2>
          <p
            className="font-lora italic"
            style={{ fontSize: 16, color: 'var(--text-dim)' }}
          >
            {t('noPastEvents')}
          </p>
        </div>
      </div>
    </>
  );
}
