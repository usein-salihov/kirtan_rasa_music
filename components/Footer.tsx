import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';

export default function Footer() {
  return (
    <footer
      className="px-12 py-10"
      style={{ borderTop: '1px solid rgba(201,168,76,0.1)', backgroundColor: '#0A0704' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-cinzel text-lg font-semibold" style={{ color: '#C9A84C' }}>
            Kirtan Rasa
          </div>
          <div className="text-xs mt-1" style={{ color: '#8A7A60' }}>
            Sacred Devotional Music
          </div>
        </div>

        <div className="text-sm" style={{ color: '#8A7A60' }}>
          © 2026 Kirtan Rasa Music. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <Link
            href={SOCIAL_LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-[#C9A84C]"
            style={{ color: '#B8A880' }}
          >
            Spotify
          </Link>
          <Link
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-[#C9A84C]"
            style={{ color: '#B8A880' }}
          >
            Instagram
          </Link>
          <Link
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors duration-200 hover:text-[#C9A84C]"
            style={{ color: '#B8A880' }}
          >
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
}
