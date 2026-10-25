'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';

const ROOM_IMAGES = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf78b66d-1784052318574.png",
  alt: 'Suite with carved wooden ceiling, warm lamplight and traditional Moroccan bedding'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf78b66d-1784052318574.png",
  alt: 'Guest room with painted cedar woodwork and a traditional rug'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_4da9785d5-1792946792782.png",
  alt: 'Quiet rooftop room with view toward Medina terraces at dusk'
}];


export default function RoomsSection() {
  const { t } = useLanguage();

  return (
    <section id="rooms" className="relative bg-primary pb-20 pt-16 md:pb-24 md:pt-20 opacity-100">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-[1440px] px-4 md:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.35em] text-accent">
                {t?.rooms?.eyebrow}
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-display-lg font-light text-primary-foreground">
              {t?.rooms?.title}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
              {t?.rooms?.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col gap-14 lg:col-span-8">
            {t?.rooms?.items?.map((room, i) =>
            <Reveal key={room?.name} delay={i * 80}>
                <article
                className={`group grid items-center gap-6 md:grid-cols-5 md:gap-8 ${
                i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`
                }>
                
                  <div className="relative aspect-[4/5] overflow-hidden border border-accent/40 bg-foreground md:col-span-3 md:aspect-[5/6]">
                    <AppImage
                    src={ROOM_IMAGES?.[i]?.src}
                    alt={ROOM_IMAGES?.[i]?.alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 45vw"
                    className="object-cover transition-transform duration-[1400ms] ease-royal group-hover:scale-105" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                    <span className="absolute start-5 top-5 border border-accent bg-primary/80 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.25em] text-accent">
                      {room?.tag}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-display text-5xl font-light text-accent">0{i + 1}</p>
                    <h3 className="mt-3 font-display text-3xl font-medium text-primary-foreground md:text-4xl">
                      {room?.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-primary-foreground/75">{room?.text}</p>
                    <a
                    href="#booking"
                    className="mt-6 inline-flex min-h-[44px] items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent transition-all duration-500 ease-royal hover:gap-5">
                    
                      {t?.rooms?.cta}
                      <Icon name="ArrowLongRightIcon" size={22} className="rtl:rotate-180" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal delay={150}>
                <div className="flex h-full flex-col justify-between gap-8 border border-accent/60 bg-primary p-8 md:p-10">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-accent">
                      {t?.rooms?.statLabel}
                    </p>
                    <p className="mt-4 font-display text-numeral font-light text-primary-foreground">
                      {t?.rooms?.statValue}
                    </p>
                  </div>
                  <div className="gold-rule" />
                  <p className="text-sm leading-relaxed text-primary-foreground/70">{t?.rooms?.statNote}</p>
                  <p className="text-sm italic leading-relaxed text-accent">{t?.rooms?.verifyNote}</p>
                  <a
                    href="#booking"
                    className="inline-flex min-h-[48px] items-center justify-center bg-accent px-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-colors duration-500 hover:bg-secondary">
                    
                    {t?.rooms?.cta}
                  </a>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </div>
    </section>);

}