'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/music', label: 'Music' },
  { href: '/events', label: 'Events' },
  { href: '/connect', label: 'Connect' },
];

export default function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY >= 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(251,247,240,0.96)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        boxShadow: isScrolled ? '0 1px 20px rgba(13,110,110,0.08)' : 'none',
      }}
    >
      {/* Main nav row */}
      <div
        className="flex items-center justify-between"
        style={{ padding: '16px 56px', alignItems: 'center' }}
      >
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Kirtan Rasa Music"
            style={{
              height: 'clamp(60px, 10vw, 140px)',
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
              marginTop: 'clamp(-10px, -2vw, -20px)',
              marginBottom: 'clamp(-10px, -2vw, -20px)',
              filter: isScrolled ? 'none' : 'brightness(0) invert(1)',
            }}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 items-center">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="font-josefin font-light uppercase transition-colors duration-200"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.28em',
                  color: isScrolled
                    ? isActive ? 'var(--teal-deep)' : 'var(--text-mid)'
                    : isActive ? 'white' : 'rgba(255,255,255,0.9)',
                  textShadow: isScrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.3)',
                  paddingBottom: 3,
                  borderBottom: isActive
                    ? `1px solid ${isScrolled ? 'var(--teal-deep)' : 'rgba(255,255,255,0.6)'}`
                    : '1px solid transparent',
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 22,
                height: 2,
                backgroundColor: isScrolled ? 'var(--teal-deep)' : 'white',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div
          className="md:hidden flex flex-col"
          style={{
            backgroundColor: 'rgba(251,247,240,0.98)',
            backdropFilter: 'blur(8px)',
            borderTop: '1px solid rgba(13,110,110,0.08)',
          }}
        >
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="font-josefin uppercase transition-colors duration-200"
                style={{
                  fontSize: 12,
                  letterSpacing: '0.25em',
                  color: isActive ? 'var(--teal-deep)' : 'var(--text-dark)',
                  padding: '16px 32px',
                  borderBottom: '1px solid rgba(13,110,110,0.08)',
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
