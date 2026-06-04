'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/music', label: 'Music' },
  { href: '/connect', label: 'Connect' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex items-center justify-between"
      style={{
        background: 'linear-gradient(to bottom, rgba(10,7,4,0.95) 0%, rgba(10,7,4,0) 100%)',
      }}
    >
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Kirtan Rasa Music"
          width={120}
          height={80}
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
              className="font-dm text-sm tracking-wide transition-colors duration-200"
              style={{
                color: isActive ? '#C9A84C' : '#B8A880',
                fontWeight: isActive ? 500 : 300,
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
