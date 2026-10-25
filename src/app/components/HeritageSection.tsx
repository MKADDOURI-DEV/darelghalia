'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';

export default function HeritageSection() {
  const { t } = useLanguage();

  return (
    <section id="discover" className="relative overflow-hidden bg-background pb-20 pt-16 md:pb-28 md:pt-24 opacity-100">
      <div className="zellige-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-4 md:px-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="arch-top relative aspect-[3/4] overflow-hidden border border-accent/60 bg-secondary">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1f01e49fd-1772210725810.png"
                  alt="Carved plaster and zellige mosaic archway inside a historic Fès residence"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover transition-transform duration-[1500ms] ease-royal hover:scale-105" />
                
              </div>
              <div className="float-slow absolute -bottom-6 end-[-12px] hidden w-44 border border-accent bg-primary p-5 md:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                  {t?.heritage?.factLabel}
                </p>
                <p className="mt-2 font-display text-5xl font-light text-primary-foreground">
                  {t?.heritage?.factValue}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-between lg:col-span-7">
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-accent" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.35em] text-accent-foreground/70 text-muted-foreground">
                  {t?.heritage?.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-display-lg font-medium text-primary">
                {t?.heritage?.title}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
                {t?.heritage?.p1}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {t?.heritage?.p2}
              </p>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="mt-12 grid items-end gap-8 border-t border-accent/50 pt-8 sm:grid-cols-2">
              <blockquote className="font-display text-2xl italic leading-snug text-primary md:text-3xl">
                “{t?.heritage?.quote}”
              </blockquote>
              <div>
                <p className="text-numeral font-display font-light text-accent">{t?.heritage?.factValue}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t?.heritage?.factNote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}