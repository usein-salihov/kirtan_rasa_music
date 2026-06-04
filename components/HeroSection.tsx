'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', backgroundColor: '#0A0704' }}
    >
      {/* Hero background image */}
      <Image
        src="/images/hero-performance.jpg"
        alt="Kirtan Rasa live performance"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Dark overlay over photo */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,7,4,0.55), rgba(10,7,4,0.85))',
        }}
      />

      {/* Radial gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 70%, rgba(180,100,20,0.06) 0%, transparent 60%)',
        }}
      />

      {/* SVG Mandala */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.05 }}
      >
        <svg
          width="700"
          height="700"
          viewBox="0 0 700 700"
          style={{ animation: 'spin 60s linear infinite' }}
        >
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 350 350)`}>
              <ellipse cx="350" cy="180" rx="18" ry="60" fill="#C9A84C" />
              <ellipse cx="350" cy="130" rx="10" ry="35" fill="#C9A84C" />
              <circle cx="350" cy="95" r="8" fill="#C9A84C" />
            </g>
          ))}
          {[80, 130, 180, 230, 280].map((r) => (
            <circle key={r} cx="350" cy="350" r={r} stroke="#C9A84C" strokeWidth="1" fill="none" />
          ))}
          <circle cx="350" cy="350" r="20" fill="#C9A84C" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ maxWidth: 700 }}>
        {/* Overtitle */}
        <p
          className="font-dm tracking-[0.3em] uppercase mb-6 text-sm"
          style={{ color: '#C9A84C' }}
        >
          Sacred Devotional Music
        </p>

        {/* H1 */}
        <h1
          className="font-cinzel font-bold leading-none mb-6"
          style={{ fontSize: 'clamp(52px, 10vw, 100px)', color: '#E8DCC8' }}
        >
          KIRTAN
          <br />
          <span style={{ color: '#C9A84C' }}>RASA</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-cormorant italic mb-8 text-xl leading-relaxed"
          style={{ color: '#B8A880', fontSize: 'clamp(18px, 2.5vw, 24px)' }}
        >
          Where ancient mantra meets the modern heart
        </p>

        {/* Gold divider */}
        <div
          className="mb-8 w-40 h-px"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
        />

        {/* Spotify mini-card */}
        <Link
          href={SOCIAL_LINKS.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 mb-10 px-5 py-3 rounded-xl transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(201,168,76,0.2)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
            style={{ backgroundColor: '#1DB954' }}
          >
            ▶
          </div>
          <div className="text-left">
            <div className="font-dm font-medium text-sm" style={{ color: '#E8DCC8' }}>
              KAJI KAJI
            </div>
            <div className="font-dm text-xs" style={{ color: '#8A7A60' }}>
              350K plays · Listen on Spotify
            </div>
          </div>
        </Link>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/music"
            className="font-dm font-medium px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8D08A)',
              color: '#0A0704',
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
            }}
          >
            Explore Music
          </Link>
          <Link
            href="/connect"
            className="font-dm font-medium px-8 py-3 rounded-full transition-all duration-200 hover:bg-white/5"
            style={{
              border: '1px solid rgba(201,168,76,0.5)',
              color: '#C9A84C',
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
            }}
          >
            Connect With Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{ animation: 'float 2.5s ease-in-out infinite', color: '#8A7A60' }}
      >
        <style>{`@keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(8px); } }`}</style>
        <div className="text-xs tracking-widest uppercase font-dm" style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}>
          Scroll
        </div>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="6" y="0" width="4" height="14" rx="2" fill="currentColor" opacity="0.4" />
          <path d="M3 16 L8 22 L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    </section>
  );
}
