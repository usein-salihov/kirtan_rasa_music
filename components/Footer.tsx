'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { SOCIAL_LINKS } from '@/lib/data';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-8 md:px-[72px]"
      style={{
        backgroundColor: 'var(--forest)',
        borderTop: '2px solid var(--teal)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-philosopher)',
          fontSize: 15,
          color: 'rgba(248,244,236,0.8)',
          whiteSpace: 'nowrap',
        }}
      >
        Kirtan Rasa Music
      </div>

      <div
        style={{
          fontFamily: 'var(--font-josefin)',
          fontSize: 10,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'rgba(248,244,236,0.35)',
        }}
      >
        {t('copyright')}
      </div>

      <div className="flex items-center gap-6">
        {(['spotify', 'instagram', 'facebook', 'youtube'] as const).map((p) => (
          <Link
            key={p}
            href={SOCIAL_LINKS[p]}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-josefin)',
              fontSize: 10,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(248,244,236,0.45)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--teal-light)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(248,244,236,0.45)'; }}
          >
            {t(p)}
          </Link>
        ))}
      </div>
    </footer>
  );
}
