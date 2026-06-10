import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { EVENTS } from '@/lib/data';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'events' });
  return { title: `${t('pageTitle')} — Kirtan Rasa Music` };
}

export default async function EventsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'events' });
  const isBg = locale === 'bg';

  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100vh' }}>
      {/* Page header */}
      <div
        className="px-6 pt-32 pb-12 md:px-[72px]"
        style={{ borderBottom: '1px solid rgba(13,110,110,0.06)' }}
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
            fontSize: 'clamp(36px, 5vw, 60px)',
            color: 'var(--dark)',
            lineHeight: 1.05,
          }}
        >
          {t('pageTitle')}
        </h1>
        <div style={{ width: 40, height: 1, backgroundColor: 'var(--teal-light)', margin: '16px 0' }} />
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

      {/* Events list + past events */}
      <div className="max-w-3xl mx-auto px-6 md:px-0">
      <div className="py-12">
        <div className="flex flex-col" style={{ gap: 2 }}>
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="flex items-center gap-8 rounded-sm"
              style={{
                padding: '24px 32px',
                backgroundColor: 'white',
                border: '1px solid rgba(13,110,110,0.08)',
                borderRadius: 8,
                marginBottom: 8,
              }}
            >
              {/* Date */}
              <div className="text-center" style={{ minWidth: 52 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-philosopher)',
                    fontSize: 'clamp(24px, 5vw, 36px)',
                    color: 'var(--teal)',
                    lineHeight: 1,
                  }}
                >
                  {event.day}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 10,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--dim)',
                    marginTop: 4,
                  }}
                >
                  {isBg ? event.monthBg : event.month}
                </div>
              </div>

              {/* Divider */}
              <div
                className="hidden md:block"
                style={{ width: 1, height: 52, backgroundColor: 'rgba(13,110,110,0.1)', flexShrink: 0 }}
              />

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-philosopher)',
                    fontSize: 20,
                    color: 'var(--dark)',
                    marginBottom: 4,
                  }}
                >
                  {isBg ? event.nameBg : event.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 12,
                    color: 'var(--dim)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {isBg ? event.locationBg : event.location}
                </div>
              </div>

              {/* Tag */}
              <div
                style={{
                  fontFamily: 'var(--font-josefin)',
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: event.tagColor === 'teal' ? 'var(--teal)' : 'var(--saffron)',
                  border: `1px solid ${event.tagColor === 'teal' ? 'rgba(13,110,110,0.3)' : 'rgba(196,129,58,0.3)'}`,
                  borderRadius: 999,
                  padding: '6px 14px',
                  flexShrink: 0,
                }}
              >
                {t(event.tag)}
              </div>

              {/* Arrow */}
              <span
                style={{
                  fontSize: 14,
                  color: 'var(--teal)',
                  opacity: 0.4,
                  flexShrink: 0,
                }}
              >
                →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Past events */}
      <div style={{ paddingBottom: 80 }}>
        <h2
          style={{
            fontFamily: 'var(--font-philosopher)',
            fontSize: 22,
            color: 'var(--dim)',
            marginBottom: 16,
          }}
        >
          {t('pastEvents')}
        </h2>
        <div
          style={{
            padding: 40,
            textAlign: 'center',
            border: '1px dashed rgba(13,110,110,0.12)',
            borderRadius: 8,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-philosopher)',
              fontSize: 18,
              color: 'var(--dim)',
              fontStyle: 'italic',
            }}
          >
            {t('noPastEvents')}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-josefin)',
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--dim)',
              marginTop: 8,
              opacity: 0.6,
            }}
          >
            Check back soon
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
