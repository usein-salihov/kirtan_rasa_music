'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { SOCIAL_LINKS } from '@/lib/data';

export default function HeroSection() {
  const t = useTranslations('hero');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '100vh', minHeight: 600 }}
    >
      {/* Layer 1 — photo */}
      <Image
        src="/images/hero-performance.jpg"
        alt="Kirtan Rasa live performance"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
      />

      {/* Layer 2 — directional overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(10,30,30,0.78) 0%, rgba(10,30,30,0.45) 45%, rgba(10,30,30,0.1) 70%, rgba(10,30,30,0.05) 100%)',
        }}
      />

      {/* Layer 3 — bottom fade to ivory */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: 200,
          background: 'linear-gradient(to top, rgba(251,247,240,1) 0%, transparent 100%)',
        }}
      />

      {/* Layer 4 — content */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-20"
        style={{ paddingTop: 80, paddingBottom: 160 }}
      >
        <div style={{ maxWidth: 600 }}>
          {/* Pill tag */}
          <div
            className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(168,212,212,0.15)',
              border: '1px solid rgba(168,212,212,0.3)',
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
              {t('overtitle')}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-philosopher font-bold"
            style={{
              fontSize: 'clamp(56px, 8vw, 104px)',
              color: 'white',
              lineHeight: 0.9,
              letterSpacing: '0.03em',
              textShadow: '0 4px 40px rgba(0,0,0,0.2)',
            }}
          >
            {t('title1')}
            <br />
            <span style={{ color: 'var(--teal-light)' }}>{t('title2')}</span>
          </h1>

          {/* Description */}
          <p
            className="font-lora italic"
            style={{
              fontSize: 'clamp(15px, 1.8vw, 19px)',
              color: 'rgba(255,255,255,0.75)',
              marginTop: 20,
              marginBottom: 36,
              maxWidth: '28rem',
            }}
          >
            {t('description')}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/music`}
              className="font-josefin font-light uppercase transition-all duration-200 hover:opacity-85"
              style={{
                backgroundColor: 'var(--teal-deep)',
                color: 'white',
                padding: '14px 36px',
                borderRadius: 2,
                fontSize: 11,
                letterSpacing: '0.28em',
              }}
            >
              {t('btnMusic')}
            </Link>
            <Link
              href={`/${locale}/events`}
              className="font-josefin font-light uppercase transition-all duration-200"
              style={{
                border: '1px solid rgba(255,255,255,0.5)',
                color: 'white',
                padding: '14px 36px',
                borderRadius: 2,
                fontSize: 11,
                letterSpacing: '0.28em',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              }}
            >
              {t('btnConnect')}
            </Link>
          </div>
        </div>
      </div>

      {/* Layer 5 — bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between pb-5 px-6 md:pb-7 md:px-20">
        {/* Now Playing widget */}
        <a
          href={SOCIAL_LINKS.spotify}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div
            className="font-josefin uppercase mb-1.5"
            style={{ fontSize: 9, letterSpacing: '0.35em', color: 'rgba(168,212,212,0.7)' }}
          >
            Now Playing
          </div>
          <div className="flex items-center gap-3">
            <div
              className="relative rounded-lg overflow-hidden flex-shrink-0"
              style={{ width: 48, height: 48 }}
            >
              <Image
                src="/images/albums/govinda.png"
                alt="Govinda"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <div className="font-lora" style={{ fontSize: 15, color: 'white' }}>
                Govinda
              </div>
              <div
                className="font-josefin mt-0.5"
                style={{ fontSize: 11, color: 'rgba(168,212,212,0.7)' }}
              >
                Govinda · Kirtan Rasa
              </div>
            </div>
            <div
              className="flex items-center justify-center rounded-full flex-shrink-0 text-white"
              style={{ width: 36, height: 36, backgroundColor: '#1DB954', fontSize: 13 }}
            >
              ▶
            </div>
          </div>
        </a>

        {/* Scroll hint */}
        <div
          className="flex flex-col items-center gap-1.5 animate-bounce"
          style={{ opacity: 0.6 }}
        >
          <div
            className="font-josefin uppercase"
            style={{ fontSize: 9, letterSpacing: '0.35em', color: 'rgba(255,255,255,0.6)' }}
          >
            Scroll
          </div>
          <div
            style={{
              width: 1,
              height: 32,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
