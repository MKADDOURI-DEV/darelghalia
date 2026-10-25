'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';

export default function CourtyardSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-background opacity-100">
      <div className="relative isolate min-h-[70vh] overflow-hidden bg-primary">
        <div className="absolute inset-0 -z-10">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1a7e4a4f8-1783858393331.png"
            alt="Moroccan courtyard with central fountain, zellige floor and carved cedar balconies"
            fill
            sizes="100vw"
            className="object-cover" />
          
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/70 to-primary/20 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/60 to-transparent" />

        <div className="mx-auto flex min-h-[70vh] max-w-[1440px] items-center px-4 py-20 md:px-12">
          <div className="max-w-xl">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-accent" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.35em] text-accent">
                  {t?.courtyard?.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-display-md font-light text-primary-foreground">
                {t?.courtyard?.title}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                {t?.courtyard?.p1}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-0 px-0 md:grid-cols-12 md:px-12">
        <div className="relative aspect-[16/10] md:col-span-7 md:aspect-auto md:min-h-[420px]">
          <AppImage
            src="https://images.unsplash.com/photo-1668938455453-7bac2d89423f"
            alt="Rooftop terrace overlooking Medina rooftops at golden hour"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover" />
          
        </div>
        <div className="flex flex-col justify-center border border-accent/40 bg-card p-8 md:col-span-5 md:p-14">
          <Reveal>
            <h3 className="font-display text-4xl font-medium text-primary md:text-5xl">
              {t?.courtyard?.terraceTitle}
            </h3>
            <div className="gold-rule my-6" />
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t?.courtyard?.terraceText}
            </p>
          </Reveal>
        </div>
      </div>
    </section>);

}