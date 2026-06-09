'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { EVENTS } from '@/lib/data';

export default function EventsPreviewSection() {
  const t = useTranslations('events');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const isBg = locale === 'bg';

  return (
    <section className="px-6 py-16 md:px-20 md:py-20" style={{ backgroundColor: 'var(--forest)' }}>
      <div className="mx-auto" style={{ maxWidth: 1000 }}>
        {/* Teal-light pill tag */}
        <div
          className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
          style={{
            backgroundColor: 'rgba(168,212,212,0.1)',
            border: '1px solid rgba(168,212,212,0.2)',
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
            className="font-josefin uppercase"
            style={{ fontSize: 10, letterSpacing: '0.4em', color: 'var(--teal-light)' }}
          >
            {t('label')}
          </span>
        </div>

        <h2
          className="font-philosopher font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'white' }}
        >
          {t('previewTitle')}
        </h2>
        <div style={{ width: 48, height: 2, backgroundColor: 'var(--teal-light)', marginBottom: 32 }} />

        {/* Events list */}
        <div className="flex flex-col gap-4 mt-2">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="event-row flex items-center gap-7 rounded-lg px-4 py-4 md:px-7 md:py-5"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(168,212,212,0.12)',
              }}
            >
              {/* Date */}
              <div className="text-center" style={{ minWidth: 44 }}>
                <div
                  className="font-philosopher"
                  style={{ fontSize: 'clamp(24px, 6vw, 32px)', color: 'var(--teal-light)', lineHeight: 1 }}
                >
                  {event.day}
                </div>
                <div
                  className="font-josefin uppercase mt-0.5"
                  style={{ fontSize: 10, letterSpacing: '0.3em', color: 'rgba(168,212,212,0.6)' }}
                >
                  {isBg ? event.monthBg : event.month}
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden md:block" style={{ width: 1, height: 48, backgroundColor: 'rgba(168,212,212,0.15)' }} />

              {/* Info */}
              <div className="flex-1">
                <div
                  className="font-lora mb-1"
                  style={{ fontSize: 'clamp(15px, 4vw, 18px)', color: 'white' }}
                >
                  {isBg ? event.nameBg : event.name}
                </div>
                <div
                  className="font-josefin"
                  style={{ fontSize: 12, color: 'rgba(168,212,212,0.7)', letterSpacing: '0.05em' }}
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
                  color: 'var(--teal-light)',
                  padding: '4px 12px',
                  border: '1px solid rgba(168,212,212,0.3)',
                  borderRadius: 999,
                }}
              >
                {t(event.tag)}
              </div>

              {/* Right arrow */}
              <div
                className="font-josefin flex-shrink-0"
                style={{ fontSize: 14, color: 'var(--teal-light)', opacity: 0.5 }}
              >
                →
              </div>
            </div>
          ))}
        </div>

        {/* All Events link */}
        <div className="mt-8">
          <Link
            href={`/${locale}/events`}
            className="font-josefin font-light uppercase inline-block transition-all duration-200 hover:opacity-80"
            style={{
              color: 'var(--teal-light)',
              border: '1px solid rgba(168,212,212,0.4)',
              padding: '14px 36px',
              borderRadius: 2,
              fontSize: 11,
              letterSpacing: '0.28em',
            }}
          >
            {t('allEvents')}
          </Link>
        </div>
      </div>
    </section>
  );
}
