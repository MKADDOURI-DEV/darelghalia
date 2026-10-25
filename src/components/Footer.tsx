'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  const explore = [
    { href: '#discover', label: t?.nav?.discover },
    { href: '#rooms', label: t?.nav?.rooms },
    { href: '#cuisine', label: t?.nav?.cuisine },
  ];
  const stay = [
    { href: '#experiences', label: t?.nav?.experiences },
    { href: '#gallery', label: t?.nav?.gallery },
    { href: '#booking', label: t?.nav?.book },
  ];

  const linkClass =
    'text-[15px] font-medium text-primary-foreground/75 transition-colors hover:text-accent';

  return (
    <footer className="border-t border-accent/30 bg-primary">
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-12 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-2xl font-semibold tracking-[0.26em] text-primary-foreground">
              DAR EL GHALIA
            </p>
            <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.3em] text-accent">
              {t?.nav?.location}
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {explore?.map((l) => (
              <li key={l?.href}>
                <a href={l?.href} className={`${linkClass} inline-flex min-h-[32px] items-center`}>
                  {l?.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3">
            {stay?.map((l) => (
              <li key={l?.href}>
                <a href={l?.href} className={`${linkClass} inline-flex min-h-[32px] items-center`}>
                  {l?.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <li>
              <a href="tel:+212535634167" className={`${linkClass} inline-flex min-h-[32px] items-center`} dir="ltr">
                +212 5 35 63 41 67
              </a>
            </li>
            <li>
              <a href="tel:+212661351740" className={`${linkClass} inline-flex min-h-[32px] items-center`} dir="ltr">
                +212 6 61 35 17 40
              </a>
            </li>
            <li>
              <a href="mailto:resa@riadelghalia.com" className={`${linkClass} inline-flex min-h-[32px] items-center`}>
                resa@riadelghalia.com
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-accent/20 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[14px] text-primary-foreground/65">
            © {year} Dar El Ghalia. {t?.footer?.rights}
          </p>
          <div className="flex items-center gap-6">
            <a href="#discover" className={`${linkClass} inline-flex min-h-[32px] items-center`}>
              {t?.footer?.privacy}
            </a>
            <a href="#discover" className={`${linkClass} inline-flex min-h-[32px] items-center`}>
              {t?.footer?.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}