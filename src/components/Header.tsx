'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { useLanguage } from '@/context/LanguageContext';
import type { Lang } from '@/content/translations';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
];

export default function Header() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#discover', label: t.nav.discover },
    { href: '#rooms', label: t.nav.rooms },
    { href: '#cuisine', label: t.nav.cuisine },
    { href: '#experiences', label: t.nav.experiences },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#contact', label: t.nav.contact },
  ];

  const barSurface = scrolled
    ? 'bg-primary/95 backdrop-blur-md border-b border-accent/30 py-3' :'bg-transparent py-6';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-royal ${barSurface}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 md:px-12">
        <a href="/" className="flex min-h-[44px] flex-col justify-center leading-none" aria-label="Dar El Ghalia">
          <span className="font-display text-xl font-semibold tracking-[0.28em] text-primary-foreground md:text-2xl">
            DAR EL GHALIA
          </span>
          <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.32em] text-accent">
            {t.nav.location}
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-primary-foreground/85 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <div className="flex items-center gap-1" role="group" aria-label="Language">
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`min-h-[44px] min-w-[36px] px-1.5 text-sm font-semibold tracking-wider transition-colors ${
                  lang === l.code ? 'text-accent' : 'text-primary-foreground/70 hover:text-primary-foreground'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="#booking"
            className="hidden min-h-[44px] items-center border border-accent bg-accent px-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent-foreground transition-all duration-500 ease-royal hover:bg-transparent hover:text-accent md:inline-flex"
          >
            {t.nav.book}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-primary-foreground xl:hidden"
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={28} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-primary/95 px-6 pb-10 pt-28 backdrop-blur-xl xl:hidden">
          <nav className="flex flex-1 flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-accent/20 py-4 font-display text-3xl text-primary-foreground transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex min-h-[48px] items-center justify-center bg-accent px-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground"
          >
            {t.nav.book}
          </a>
        </div>
      )}
    </header>
  );
}