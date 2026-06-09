import { STATS } from '@/lib/data';

export default function AboutSection() {
  return (
    <section
      className="px-6 py-16 md:px-20 md:py-20"
      style={{
        backgroundColor: 'var(--warm-white)',
        borderTop: '1px solid rgba(13,110,110,0.08)',
        borderBottom: '1px solid rgba(13,110,110,0.08)',
      }}
    >
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        style={{ maxWidth: 1000 }}
      >
        {/* Left column */}
        <div>
          <p
            className="font-josefin uppercase mb-3"
            style={{ fontSize: 9, letterSpacing: '0.5em', color: 'var(--saffron)' }}
          >
            Our Story
          </p>
          <h2
            className="font-philosopher font-bold mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-dark)' }}
          >
            Devotion through sacred sound
          </h2>
          <div
            style={{ width: 48, height: 2, backgroundColor: 'var(--teal-light)', marginBottom: 24 }}
          />
          <p
            className="font-lora italic"
            style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--text-mid)' }}
          >
            Kirtan is not just music — it is a conversation with the Divine,
            a vibration that awakens what is already within.
            We gather to chant, to dissolve, to remember.
          </p>
        </div>

        {/* Right column — 2×2 stats */}
        <div className="grid grid-cols-2 gap-4">
          {STATS.map(({ num, label }) => (
            <div
              key={label}
              className="rounded-lg text-center"
              style={{
                backgroundColor: 'white',
                border: '1px solid rgba(13,110,110,0.08)',
                padding: 24,
              }}
            >
              <div
                className="font-philosopher"
                style={{ fontSize: 40, color: 'var(--teal-deep)', lineHeight: 1 }}
              >
                {num}
              </div>
              <div
                className="font-josefin uppercase mt-1"
                style={{ fontSize: 9, letterSpacing: '0.3em', color: 'var(--text-dim)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
