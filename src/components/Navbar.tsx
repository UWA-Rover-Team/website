'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Goals', href: '#goals' },
  { label: 'The Rover', href: '#rover' },
  { label: 'Competition', href: '#competition' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Team', href: '#team' },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.theme = next ? 'dark' : 'light';
    } catch {
      // localStorage unavailable (private browsing) — theme still toggles for this visit
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-10 w-10 items-center justify-center rounded-md text-white/70 transition-colors hover:text-white"
    >
      {dark ? (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-shell">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <a href="#hero" aria-label="Back to top">
          <Image
            src="/logos/header-dark.png"
            alt="UWA Rover Project"
            width={220}
            height={88}
            className="h-12 w-auto md:h-16"
            priority
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-body-sm text-white/70 transition-colors hover:text-white focus-visible:text-white"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-body-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile: theme toggle + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-shell md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-body text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-2 text-center text-body-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
