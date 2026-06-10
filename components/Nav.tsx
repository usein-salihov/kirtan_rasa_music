'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const locale = pathname.split('/')[1] || 'en';

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/music`, label: t('music') },
    { href: `/${locale}/events`, label: t('events') },
    { href: `/${locale}/connect`, label: t('connect') },
  ];

  function switchLocale() {
    const newLocale = locale === 'en' ? 'bg' : 'en';
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-14"
      style={{
        height: 80,
        background: 'rgba(251,247,240,0.96)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(13,110,110,0.08)',
      }}
    >
      {/* Logo */}
      <Link href={`/${locale}`} style={{ display: 'block', flexShrink: 0 }}>
        <img
          src="/images/logo.png"
          alt="Kirtan Rasa Music"
          style={{ height: '72px', width: 'auto', display: 'block', objectFit: 'contain' }}
        />
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center" style={{ gap: 40 }}>
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-josefin)',
                fontSize: 11,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--teal)' : 'var(--mid)',
                fontWeight: 300,
                textDecoration: 'none',
                paddingBottom: isActive ? 2 : undefined,
                borderBottom: isActive ? '1px solid var(--teal)' : undefined,
              }}
            >
              {label}
            </Link>
          );
        })}

        <button
          onClick={switchLocale}
          style={{
            fontFamily: 'var(--font-josefin)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            border: '1px solid rgba(13,110,110,0.25)',
            borderRadius: 3,
            color: 'var(--teal)',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          {locale === 'en' ? 'БГ' : 'EN'}
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ display: 'block', width: 22, height: 2, backgroundColor: 'var(--teal)' }}
          />
        ))}
      </button>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute left-0 right-0"
          style={{
            top: 80,
            backgroundColor: 'rgba(251,247,240,0.98)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'block',
                padding: '16px 32px',
                borderBottom: '1px solid rgba(13,110,110,0.06)',
                fontFamily: 'var(--font-josefin)',
                fontSize: 12,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: pathname === href ? 'var(--teal)' : 'var(--dark)',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => { switchLocale(); setIsMenuOpen(false); }}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '16px 32px',
              fontFamily: 'var(--font-josefin)',
              fontSize: 12,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--teal)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {locale === 'en' ? 'Български' : 'English'}
          </button>
        </div>
      )}
    </nav>
  );
}
