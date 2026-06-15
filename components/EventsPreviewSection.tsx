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
    <section
      className="reveal px-6 md:px-20 py-20"
      style={{ backgroundColor: 'var(--forest)' }}
    >
      <div className="mx-auto" style={{ maxWidth: 1000 }}>
        {/* Header */}
        <p
          style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 9,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'var(--teal-light)',
            marginBottom: 12,
          }}
        >
          {t('label')}
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-philosopher)',
            fontSize: 36,
            color: 'white',
            marginBottom: 12,
          }}
        >
          {t('previewTitle')}
        </h2>
        <div
          style={{
            width: 40,
            height: 1,
            backgroundColor: 'rgba(168,212,212,0.3)',
            marginBottom: 8,
          }}
        />

        {/* Event rows */}
        <div className="flex flex-col mt-2" style={{ gap: 2 }}>
          {EVENTS.map((event) => {
            const tagBadge = (
              <div
                style={{
                  fontFamily: 'var(--font-josefin)',
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--teal-light)',
                  border: '1px solid rgba(168,212,212,0.2)',
                  borderRadius: 999,
                  padding: '4px 14px',
                  flexShrink: 0,
                }}
              >
                {t(event.tag)}
              </div>
            );

            const row = (
              <div
                key={event.id}
                className="rounded-sm cursor-pointer transition-all duration-200"
                style={{
                  padding: '16px 20px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderLeft: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = 'rgba(168,212,212,0.06)';
                  el.style.borderLeftColor = 'var(--teal-light)';
                  el.style.paddingLeft = '28px';
                  const arrow = el.querySelector('[data-arrow]') as HTMLElement;
                  if (arrow) {
                    arrow.style.color = 'var(--teal-light)';
                    arrow.style.transform = 'translateX(4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  el.style.borderLeftColor = 'transparent';
                  el.style.paddingLeft = '20px';
                  const arrow = el.querySelector('[data-arrow]') as HTMLElement;
                  if (arrow) {
                    arrow.style.color = 'rgba(168,212,212,0.25)';
                    arrow.style.transform = 'translateX(0)';
                  }
                }}
              >
                {/* Mobile layout */}
                <div className="md:hidden">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-philosopher text-2xl"
                        style={{ color: 'var(--teal-light)', lineHeight: 1 }}
                      >
                        {event.day}
                      </span>
                      <span
                        className="font-josefin text-[9px] tracking-[0.3em] uppercase"
                        style={{ color: 'rgba(168,212,212,0.5)' }}
                      >
                        {isBg ? event.monthBg : event.month}
                      </span>
                    </div>
                    {tagBadge}
                  </div>
                  <div
                    className="font-philosopher text-base mb-1"
                    style={{ color: 'white' }}
                  >
                    {isBg ? event.nameBg : event.name}
                  </div>
                  <div
                    className="font-josefin text-[11px]"
                    style={{ color: 'rgba(168,212,212,0.6)' }}
                  >
                    {isBg ? event.locationBg : event.location}
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex items-center gap-8 w-full">
                  {/* Date */}
                  <div className="text-center" style={{ minWidth: 52 }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-philosopher)',
                        fontSize: 28,
                        color: 'var(--teal-light)',
                        lineHeight: 1,
                      }}
                    >
                      {event.day}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-josefin)',
                        fontSize: 9,
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'rgba(168,212,212,0.5)',
                        marginTop: 2,
                      }}
                    >
                      {isBg ? event.monthBg : event.month}
                    </div>
                  </div>

                  {/* Separator */}
                  <div style={{ width: 1, height: 40, backgroundColor: 'rgba(168,212,212,0.1)', flexShrink: 0 }} />

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-philosopher)',
                        fontSize: 18,
                        color: 'white',
                        marginBottom: 2,
                      }}
                    >
                      {isBg ? event.nameBg : event.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-josefin)',
                        fontSize: 11,
                        color: 'rgba(168,212,212,0.6)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {isBg ? event.locationBg : event.location}
                    </div>
                  </div>

                  {tagBadge}

                  {/* Arrow */}
                  <span
                    data-arrow="true"
                    style={{
                      fontSize: 14,
                      color: 'rgba(168,212,212,0.25)',
                      marginLeft: 4,
                      flexShrink: 0,
                      transition: 'color 0.2s, transform 0.2s',
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            );
            return event.link ? (
              <a key={event.id} href={event.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                {row}
              </a>
            ) : row;
          })}
        </div>

        {/* All events button */}
        <div style={{ marginTop: 32 }}>
          <Link
            href={`/${locale}/events`}
            className="inline-block transition-all duration-200"
            style={{
              fontFamily: 'var(--font-josefin)',
              fontSize: 11,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--teal-light)',
              backgroundColor: 'transparent',
              border: '1px solid rgba(168,212,212,0.25)',
              borderRadius: 2,
              padding: '14px 32px',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = 'rgba(168,212,212,0.08)';
              el.style.borderColor = 'rgba(168,212,212,0.4)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = 'transparent';
              el.style.borderColor = 'rgba(168,212,212,0.25)';
            }}
          >
            {t('allEvents')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
