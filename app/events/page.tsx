import type { Metadata } from 'next';
import { EVENTS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Events — Kirtan Rasa Music',
  description: 'Join Kirtan Rasa Music live — kirtan sessions, festivals, and sacred sound journeys.',
};

export default function EventsPage() {
  return (
    <div
      className="px-6 pt-24 pb-16 md:px-20 md:pt-32 md:pb-20"
      style={{ backgroundColor: 'var(--ivory)' }}
    >
      {/* Section header */}
      <div className="text-center mb-12">
        <p
          className="font-josefin uppercase mb-3"
          style={{ fontSize: 9, letterSpacing: '0.5em', color: 'var(--saffron)' }}
        >
          Live
        </p>
        <h1
          className="font-philosopher font-bold mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: 'var(--text-dark)' }}
        >
          Upcoming Events
        </h1>
        <div
          className="mx-auto mb-5"
          style={{ width: 48, height: 2, backgroundColor: 'var(--teal-light)' }}
        />
        <p
          className="font-lora italic mx-auto"
          style={{ fontSize: 18, color: 'var(--text-mid)', maxWidth: 480 }}
        >
          Join us for live kirtan sessions, festivals, and sacred sound journeys.
        </p>
      </div>

      {/* Events list */}
      <div className="mx-auto flex flex-col gap-5" style={{ maxWidth: 720 }}>
        {EVENTS.map((event) => (
          <div
            key={event.id}
            className="event-row flex items-center gap-7 rounded-lg px-4 py-4 md:px-8 md:py-6"
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
                {event.month}
              </div>
            </div>

            {/* Vertical divider */}
            <div
              className="hidden md:block"
              style={{ width: 1, height: 52, backgroundColor: 'rgba(13,110,110,0.12)' }}
            />

            {/* Info */}
            <div className="flex-1">
              <div className="font-lora mb-1" style={{ fontSize: 'clamp(15px, 4vw, 20px)', color: 'var(--text-dark)' }}>
                {event.name}
              </div>
              <div
                className="font-josefin"
                style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: '0.05em' }}
              >
                {event.location}
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
              {event.tag}
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
          Past Events
        </h2>
        <p
          className="font-lora italic"
          style={{ fontSize: 16, color: 'var(--text-dim)' }}
        >
          No past events to show yet.
        </p>
      </div>
    </div>
  );
}
