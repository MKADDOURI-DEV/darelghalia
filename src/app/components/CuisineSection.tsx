'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';

export default function CuisineSection() {
  const { t } = useLanguage();

  return (
    <section id="cuisine" className="relative overflow-hidden bg-secondary pb-16 pt-14 md:pb-24 md:pt-20 opacity-100">
      <div className="zellige-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-[1440px] items-stretch gap-10 px-4 md:px-12 lg:grid-cols-12 lg:gap-0">
        <div className="relative z-10 flex flex-col justify-center lg:col-span-6 lg:pe-16">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                {t?.cuisine?.eyebrow}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-display-lg font-medium text-primary">{t?.cuisine?.title}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-base leading-relaxed text-foreground/85 md:text-lg">{t?.cuisine?.p1}</p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{t?.cuisine?.p2}</p>
          </Reveal>
          <Reveal delay={400}>
            <a
              href="#contact"
              className="mt-10 inline-flex min-h-[52px] w-fit items-center justify-center border border-primary px-9 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-500 ease-royal hover:bg-primary hover:text-primary-foreground">
              
              {t?.cuisine?.cta}
            </a>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <Reveal>
            <div className="grid h-full grid-cols-5 gap-4">
              <div className="relative col-span-3 aspect-[3/4] overflow-hidden border border-accent/60 lg:aspect-auto lg:min-h-[560px]">
                <AppImage
                  src="https://images.unsplash.com/photo-1674637840293-243ae319f7ca"
                  alt="Slow-cooked Moroccan tagine with preserved lemon and olives on a rustic table"
                  fill
                  sizes="(max-width: 1024px) 60vw, 28vw"
                  className="object-cover transition-transform duration-[1400ms] ease-royal hover:scale-105" />
                
              </div>
              <div className="col-span-2 flex flex-col gap-4">
                <div className="relative aspect-square overflow-hidden border border-accent/60">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1b1bf229b-1772768377008.png"
                    alt="Fresh Moroccan spices in small bowls under warm light"
                    fill
                    sizes="(max-width: 1024px) 40vw, 18vw"
                    className="object-cover transition-transform duration-[1400ms] ease-royal hover:scale-105" />
                  
                </div>
                <div className="relative flex-1 overflow-hidden border border-accent/60 bg-primary p-5">
                  <p className="font-display text-3xl italic leading-tight text-accent md:text-4xl">
                    {t?.cuisine?.eyebrow}
                  </p>
                  <div className="gold-rule mt-4" />
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">Fès · المغرب · Maroc</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}