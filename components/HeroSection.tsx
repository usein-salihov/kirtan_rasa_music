'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { SOCIAL_LINKS } from '@/lib/data';

interface Particle {
  x: number; y: number; r: number;
  dx: number; dy: number;
  alpha: number; alphaDir: number;
  wobble: number; wobbleSpeed: number;
}

export default function HeroSection() {
  const t = useTranslations('hero');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  // Suppress unused var — SOCIAL_LINKS used for spotify link
  void SOCIAL_LINKS;

  useEffect(() => {
    let animId = 0;
    let handleResize = () => {};

    // 1. Particle animation
    const canvasEl = document.getElementById('particleCanvas');
    if (canvasEl instanceof HTMLCanvasElement) {
      const canvas = canvasEl;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        const particles: Particle[] = Array.from({ length: 55 }, () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.8 + 0.3,
          dx: (Math.random() - 0.5) * 0.2,
          dy: -(Math.random() * 0.4 + 0.15),
          alpha: Math.random() * 0.4 + 0.1,
          alphaDir: Math.random() > 0.5 ? 0.003 : -0.003,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: Math.random() * 0.008 + 0.003,
        }));

        const loop = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (const p of particles) {
            p.wobble += p.wobbleSpeed;
            p.x += p.dx + Math.sin(p.wobble) * 0.25;
            p.y += p.dy;
            p.alpha += p.alphaDir;
            if (p.alpha <= 0.05) p.alphaDir = 0.003;
            if (p.alpha >= 0.45) p.alphaDir = -0.003;
            if (p.y < -10) { p.y = canvas.height; p.x = Math.random() * canvas.width; }
            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(168,212,212,${p.alpha})`;
            ctx.fill();

            const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
            grd.addColorStop(0, `rgba(168,212,212,${p.alpha * 0.3})`);
            grd.addColorStop(1, 'rgba(168,212,212,0)');
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
          }
          animId = requestAnimationFrame(loop);
        };
        animId = requestAnimationFrame(loop);
      }
    }

    // 2. Parallax on scroll
    const handleScroll = () => {
      const photo = document.getElementById('heroPhoto');
      if (photo) photo.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', handleScroll);

    // 3. Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // 4. Count-up for data-target elements
    function countUp(el: HTMLElement, target: number) {
      const duration = 1800;
      const start = performance.now();
      const fmt = (v: number) => {
        if (target >= 100000) return Math.round(v / 1000) + 'K';
        if (target >= 1000) return (v / 1000).toFixed(1) + 'K';
        return String(Math.round(v));
      };
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = fmt(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = Number(el.dataset.target);
            if (target) {
              countUp(el, target);
              statObserver.unobserve(el);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('[data-target]').forEach((el) => statObserver.observe(el));

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      statObserver.disconnect();
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ height: 'calc(100vh - 80px)', marginTop: 80 }}
    >
      {/* Layer 1 — photo with parallax */}
      <div
        id="heroPhoto"
        style={{ position: 'absolute', top: -60, left: 0, right: 0, bottom: -60, willChange: 'transform' }}
      >
        <Image
          src="/images/hero-performance.jpg"
          alt="Kirtan Rasa Music performing live kirtan"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
      </div>

      {/* Layer 2 — directional overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(100deg, rgba(10,28,28,0.82) 0%, rgba(10,28,28,0.5) 40%, rgba(10,28,28,0.08) 70%, transparent 100%)',
        }}
      />

      {/* Layer 3 — bottom ivory fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '12rem',
          background: 'linear-gradient(to top, var(--ivory), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Layer 4 — particle canvas */}
      <canvas
        id="particleCanvas"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
      />

      {/* Layer 5 — content */}
      <div className="relative px-6 md:px-[72px]" style={{ zIndex: 2, maxWidth: 600 }}>
        <p
          style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 10,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'rgba(168,212,212,0.85)',
            marginBottom: 24,
            fontWeight: 300,
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeUp 0.9s ease forwards 0.3s',
          }}
        >
          {t('overtitle')}
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-philosopher)',
            fontSize: 'clamp(64px, 8vw, 108px)',
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: '0.02em',
            textShadow: '0 2px 30px rgba(0,0,0,0.15)',
            margin: 0,
          }}
        >
          <span
            style={{
              display: 'block',
              color: 'white',
              opacity: 0,
              transform: 'translateY(20px)',
              animation: 'fadeUp 1s ease forwards 0.6s',
            }}
          >
            {t('title1')}
          </span>
          <span
            style={{
              display: 'block',
              color: 'var(--teal-light)',
              opacity: 0,
              transform: 'translateY(20px)',
              animation: 'fadeUp 1s ease forwards 0.85s',
            }}
          >
            {t('title2')}
          </span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-lora)',
            fontStyle: 'italic',
            fontSize: 18,
            color: 'rgba(255,255,255,0.72)',
            marginTop: 20,
            marginBottom: 36,
            lineHeight: 1.6,
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeUp 0.9s ease forwards 1.1s',
          }}
        >
          {t('description')}
        </p>

        <div
          style={{
            display: 'flex',
            gap: 14,
            flexWrap: 'wrap',
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeUp 0.9s ease forwards 1.3s',
          }}
        >
          <Link
            href={`/${locale}/music`}
            style={{
              backgroundColor: 'var(--teal)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: 2,
              fontFamily: 'var(--font-josefin)',
              fontSize: 11,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 300,
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0A5555'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--teal)'; }}
          >
            {t('btnMusic')}
          </Link>
          <Link
            href={`/${locale}/connect`}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '14px 32px',
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.4)',
              fontFamily: 'var(--font-josefin)',
              fontSize: 11,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 300,
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.08)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
          >
            {t('btnConnect')}
          </Link>
        </div>
      </div>

      {/* Layer 6 — scroll indicator */}
      <div
        className="absolute bottom-8 left-6 md:left-[72px] z-10 hidden md:flex items-center gap-3"
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
          animation: 'fadeUp 0.9s ease forwards 1.6s',
        }}
      >
        <div
          style={{
            width: 40,
            height: 1,
            background: 'linear-gradient(to right, rgba(168,212,212,0.6), transparent)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'rgba(168,212,212,0.8)',
              animation: 'scanline 2.5s ease-in-out infinite 2s',
            }}
          />
        </div>
        <span
          style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 9,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(168,212,212,0.6)',
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
