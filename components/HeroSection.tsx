'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', backgroundColor: 'var(--ivory)' }}
    >
      {/* Hero background image */}
      <Image
        src="/images/hero-performance.jpg"
        alt="Kirtan Rasa live performance"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Ivory fade overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(251,247,240,0.15) 0%, rgba(251,247,240,0.6) 50%, rgba(251,247,240,0.97) 100%)',
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ maxWidth: 680 }}
      >
        {/* Overtitle */}
        <p
          className="font-josefin uppercase mb-7"
          style={{
            fontSize: 10,
            letterSpacing: '0.5em',
            color: 'var(--teal-deep)',
          }}
        >
          Sacred Devotional Music
        </p>

        {/* H1 */}
        <h1
          className="font-philosopher font-bold leading-none mb-6"
          style={{
            fontSize: 'clamp(56px, 8vw, 96px)',
            color: 'var(--text-dark)',
            letterSpacing: '0.05em',
          }}
        >
          KIRTAN
          <br />
          <span style={{ color: 'var(--teal-deep)' }}>RASA</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-lora italic mb-8"
          style={{ fontSize: 20, color: 'var(--text-mid)', lineHeight: 1.6 }}
        >
          Where ancient mantra meets the modern heart
        </p>

        {/* Divider */}
        <div
          className="mb-8"
          style={{
            width: 80,
            height: 1,
            backgroundColor: 'var(--teal-light)',
            margin: '0 auto 32px',
          }}
        />

        {/* Spotify mini-card */}
        <Link
          href={SOCIAL_LINKS.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 mb-10 px-5 py-3 rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: '#FBF7F0',
            border: '1px solid rgba(13,110,110,0.15)',
            borderRadius: 12,
            boxShadow: '0 4px 24px rgba(13,110,110,0.1)',
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0"
            style={{ backgroundColor: '#1DB954', color: 'white' }}
          >
            ▶
          </div>
          <div className="text-left">
            <div
              className="font-lora font-medium text-sm"
              style={{ color: 'var(--text-dark)' }}
            >
              KAJI KAJI
            </div>
            <div
              className="font-josefin text-xs"
              style={{ color: 'var(--text-dim)', letterSpacing: '0.05em' }}
            >
              350K plays · Listen on Spotify
            </div>
          </div>
        </Link>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/music"
            className="font-josefin uppercase transition-all duration-200 hover:opacity-85"
            style={{
              backgroundColor: 'var(--teal-deep)',
              color: 'white',
              padding: '14px 36px',
              borderRadius: 3,
              fontSize: 11,
              letterSpacing: '0.25em',
            }}
          >
            Explore Music
          </Link>
          <Link
            href="/connect"
            className="font-josefin uppercase transition-all duration-200 hover:bg-teal-50"
            style={{
              border: '1px solid var(--teal-deep)',
              color: 'var(--teal-deep)',
              padding: '14px 36px',
              borderRadius: 3,
              fontSize: 11,
              letterSpacing: '0.25em',
            }}
          >
            Connect With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
