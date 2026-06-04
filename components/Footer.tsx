import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';

export default function Footer() {
  return (
    <footer
      className="px-12 py-12"
      style={{
        backgroundColor: 'var(--forest)',
        borderTop: '3px solid var(--teal-deep)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div
            className="font-philosopher text-lg font-bold"
            style={{ color: 'rgba(248,244,236,0.9)' }}
          >
            Kirtan Rasa
          </div>
          <div
            className="font-josefin text-xs mt-1 tracking-[0.2em] uppercase"
            style={{ color: 'rgba(248,244,236,0.45)' }}
          >
            Sacred Devotional Music
          </div>
        </div>

        <div
          className="font-josefin"
          style={{ fontSize: 10, letterSpacing: '0.15em', color: 'rgba(248,244,236,0.5)' }}
        >
          © 2026 KIRTAN RASA MUSIC. ALL RIGHTS RESERVED.
        </div>

        <div className="flex items-center gap-6">
          {(['spotify', 'instagram', 'facebook'] as const).map((platform) => (
            <Link
              key={platform}
              href={SOCIAL_LINKS[platform]}
              target="_blank"
              rel="noopener noreferrer"
              className="font-josefin capitalize tracking-[0.1em] text-xs transition-colors duration-200 hover:text-white"
              style={{ color: 'rgba(248,244,236,0.6)' }}
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
