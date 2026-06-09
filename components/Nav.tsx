'use client';

import Image from 'next/image';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300"
      style={{
        padding: '20px 56px',
        backgroundColor: scrolled ? 'rgba(251,247,240,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 1px 20px rgba(13,110,110,0.08)' : 'none',
      }}
    >
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Kirtan Rasa Music"
          width={130}
          height={52}
          className="object-contain"
          priority
          style={{
            height: 52,
            width: 'auto',
            filter: scrolled ? 'none' : 'brightness(0) invert(1)',
          }}
        />
      </Link>

      <div className="flex items-center gap-8">
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
                color: scrolled
                  ? isActive ? 'var(--teal-deep)' : 'var(--text-mid)'
                  : isActive ? 'white' : 'rgba(255,255,255,0.9)',
                textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.3)',
                paddingBottom: 3,
                borderBottom: isActive
                  ? `1px solid ${scrolled ? 'var(--teal-deep)' : 'rgba(255,255,255,0.6)'}`
                  : '1px solid transparent',
              }}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
