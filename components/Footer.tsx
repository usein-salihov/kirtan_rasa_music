import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';

export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
      style={{
        backgroundColor: 'var(--forest)',
        borderTop: '3px solid var(--teal-deep)',
        padding: '40px 80px',
      }}
    >
      <div
        className="font-philosopher"
        style={{ fontSize: 16, color: 'rgba(248,244,236,0.85)' }}
      >
        <span style={{ whiteSpace: 'nowrap' }}>Kirtan Rasa Music</span>
      </div>

      <div
        className="font-josefin uppercase"
        style={{ fontSize: 10, letterSpacing: '0.15em', color: 'rgba(248,244,236,0.4)' }}
      >
        © 2026 Kirtan Rasa Music
      </div>

      <div className="flex items-center gap-6">
        {(['spotify', 'instagram', 'facebook'] as const).map((p) => (
          <Link
            key={p}
            href={SOCIAL_LINKS[p]}
            target="_blank"
            rel="noopener noreferrer"
            className="font-josefin uppercase transition-colors duration-200 hover:text-white"
            style={{ fontSize: 11, letterSpacing: '0.15em', color: 'rgba(248,244,236,0.5)' }}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </Link>
        ))}
      </div>
    </footer>
  );
}
