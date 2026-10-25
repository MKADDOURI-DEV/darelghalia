'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const layerBack = useRef<HTMLDivElement>(null);
  const layerMid = useRef<HTMLDivElement>(null);
  const layerContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (layerBack.current) layerBack.current.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
        if (layerMid.current) layerMid.current.style.transform = `translate3d(0, ${y * 0.5}px, 0)`;
        if (layerContent.current) layerContent.current.style.opacity = String(Math.max(0, 1 - y / 700));
      });
    };
    const onMove = (e: MouseEvent) => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 2;
      const my = (e.clientY / window.innerHeight - 0.5) * 2;
      if (layerMid.current) {
        layerMid.current.style.setProperty('--mx', `${mx * 24}px`);
        layerMid.current.style.setProperty('--my', `${my * 18}px`);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-primary opacity-100" aria-label="Hero">
      <div ref={layerBack} className="absolute inset-0 -z-10 will-change-transform">
        <div className="hero-zoom absolute inset-0">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_448ad6292-1790935445838.png"
            alt="Moroccan riad courtyard with carved arches and zellige tilework in warm evening light"
            fill
            priority
            sizes="100vw"
            className="object-cover" />
          
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-primary/55 to-primary/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/70 via-primary/25 to-transparent rtl:bg-gradient-to-l" />

      <div ref={layerMid} className="pointer-events-none absolute inset-0 -z-10 will-change-transform">
        <div className="blob-gold drift-blob absolute -top-20 start-[8%] h-[28rem] w-[28rem]" />
        <div className="blob-green drift-blob absolute bottom-0 end-[5%] h-[32rem] w-[32rem]" />
      </div>

      <div className="grain absolute inset-0 -z-10" />

      <div
        ref={layerContent}
        className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-4 pb-24 pt-40 md:px-12 md:pb-32">
        
        <div className="hero-enter max-w-5xl opacity-0">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-14 bg-accent" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.35em] text-accent">
              {t.nav.location}
            </span>
          </div>

          <h1 className="font-display text-hero-xl font-light tracking-tight text-primary-foreground">
            <span className="block">{t.hero.line1}</span>
            <span className="block italic text-accent">{t.hero.line2}</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            {t.hero.sub}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#discover"
              className="inline-flex min-h-[52px] items-center justify-center border border-accent bg-accent px-9 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-all duration-500 ease-royal hover:bg-transparent hover:text-accent">
              
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#rooms"
              className="inline-flex min-h-[52px] items-center justify-center border border-primary-foreground/50 px-9 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all duration-500 ease-royal hover:border-accent hover:text-accent">
              
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <a
        href="#discover"
        className="absolute bottom-8 start-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-primary-foreground/70 rtl:translate-x-1/2"
        aria-label={t.hero.scroll}>
        
        <span className="text-[11px] font-semibold uppercase tracking-[0.35em]">{t.hero.scroll}</span>
        <span className="relative h-14 w-px overflow-hidden bg-primary-foreground/20">
          <span className="scroll-line absolute inset-0 bg-accent" />
        </span>
      </a>
    </section>);

}