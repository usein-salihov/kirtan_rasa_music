'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/music', label: 'Music' },
  { href: '/connect', label: 'Connect' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-12 py-4 flex items-center justify-between transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(251,247,240,0.97)' : 'rgba(251,247,240,0.85)',
        borderBottom: '1px solid rgba(13,110,110,0.1)',
        boxShadow: scrolled ? '0 2px 24px rgba(13,110,110,0.08)' : 'none',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Kirtan Rasa Music"
          width={100}
          height={65}
          className="object-contain"
          priority
        />
      </Link>

      <div className="flex items-center gap-8">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="font-josefin uppercase tracking-[0.25em] transition-colors duration-200 relative"
              style={{
                fontSize: 11,
                color: isActive ? 'var(--teal-deep)' : 'var(--text-mid)',
              }}
            >
              {label}
              {isActive && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: 'var(--teal-deep)' }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
