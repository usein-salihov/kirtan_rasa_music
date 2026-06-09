'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';

export default function HeroSection() {
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

      {/* Layer 2 — overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(13,40,40,0.5) 0%, rgba(13,40,40,0.2) 35%, rgba(13,40,40,0.3) 65%, rgba(251,247,240,1) 100%)',
        }}
      />

      {/* Layer 3 — content */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ marginTop: -40 }}
      >
        {/* Overtitle */}
        <p
          className="font-josefin font-light uppercase mb-5"
          style={{
            fontSize: 10,
            letterSpacing: '0.55em',
            color: 'rgba(168,212,212,0.9)',
          }}
        >
          Sacred Devotional Music
        </p>

        {/* H1 */}
        <h1
          className="font-philosopher font-bold leading-none"
          style={{
            fontSize: 'clamp(60px, 9vw, 108px)',
            color: 'white',
            letterSpacing: '0.04em',
            textShadow: '0 4px 32px rgba(0,0,0,0.25)',
          }}
        >
          KIRTAN
          <br />
          <span style={{ color: 'var(--teal-light)' }}>RASA</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-lora italic mt-4"
          style={{
            fontSize: 'clamp(16px, 2.2vw, 22px)',
            color: 'rgba(255,255,255,0.82)',
            textShadow: '0 1px 12px rgba(0,0,0,0.2)',
          }}
        >
          Where ancient mantra meets the modern heart
        </p>

        {/* Divider */}
        <div
          className="my-7 mx-auto"
          style={{ width: 64, height: 1, backgroundColor: 'rgba(168,212,212,0.5)' }}
        />

        {/* Spotify card */}
        <a
          href={SOCIAL_LINKS.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mb-7 px-5 py-3 rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: 'rgba(251,247,240,0.95)',
            border: '1px solid rgba(13,110,110,0.12)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          }}
        >
          <div
            className="flex items-center justify-center rounded-lg flex-shrink-0 bg-gradient-to-br from-[#3D2B0F] via-[#7B5520] to-[#C9A84C]"
            style={{ width: 44, height: 44 }}
          >
            <span style={{ fontSize: 20 }}>🎵</span>
          </div>
          <div className="text-left">
            <div className="font-lora font-medium" style={{ fontSize: 13, color: 'var(--text-dark)' }}>
              KAJI KAJI
            </div>
            <div
              className="font-josefin"
              style={{ fontSize: 11, color: 'var(--text-dim)', letterSpacing: '0.05em' }}
            >
              350K plays · Listen on Spotify
            </div>
          </div>
          <div
            className="flex items-center justify-center rounded-full flex-shrink-0 text-white"
            style={{ width: 36, height: 36, backgroundColor: '#1DB954', fontSize: 13 }}
          >
            ▶
          </div>
        </a>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/music"
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
            Explore Music
          </Link>
          <Link
            href="/events"
            className="font-josefin font-light uppercase transition-all duration-200"
            style={{
              border: '1px solid rgba(255,255,255,0.6)',
              color: 'white',
              padding: '14px 36px',
              borderRadius: 2,
              fontSize: 11,
              letterSpacing: '0.28em',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.15)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
}
