'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';

const CARD_META = [
{
  icon: 'MapIcon',
  span: 'lg:col-span-4 lg:row-span-2',
  image: "https://images.unsplash.com/photo-1656262937559-3b6ed04e4801",
  imageAlt: 'Narrow lantern-lit alley in the old Medina of Fès'
},
{ icon: 'SparklesIcon', span: 'lg:col-span-4', image: '', imageAlt: '' },
{ icon: 'TruckIcon', span: 'lg:col-span-4', image: '', imageAlt: '' },
{ icon: 'SunIcon', span: 'lg:col-span-4', image: '', imageAlt: '' },
{ icon: 'HeartIcon', span: 'lg:col-span-4', image: '', imageAlt: '' }];


export default function ExperiencesSection() {
  const { t } = useLanguage();
  /*
    Bento cell map (lg: 12 cols)
    Array has 5 cards: Medina, Cuisine, Visits, Terrace, Hammam
    Row 1: [col-1..4: Medina cs-4 rs-2] [col-5..8: Cuisine cs-4] [col-9..12: Visits cs-4]
    Row 2: [col-1..4: Medina (row-span)] [col-5..8: Terrace cs-4] [col-9..12: Hammam cs-4]
    Placed 5/5 cards ✓
    md (2 cols): Medina cs-2, then pairs: Cuisine+Visits, Terrace+Hammam. Placed 5/5 ✓
  */
  return (
    <section id="experiences" className="relative bg-background pb-16 pt-14 md:pb-24 md:pt-20 opacity-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-accent" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  {t.experiences.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-display-lg font-medium text-primary">
                {t.experiences.title}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={200}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{t.experiences.intro}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {t.experiences.items.map((item, i) => {
            const meta = CARD_META[i];
            const isImage = Boolean(meta.image);
            const col = i === 0 ? 'md:col-span-2' : '';
            return (
              <Reveal key={item.title} delay={i * 80} className={`${meta.span} ${col}`}>
                <article
                  className={`group relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden border border-accent/50 p-7 transition-colors duration-500 ${
                  isImage ? 'bg-foreground' : 'bg-card hover:bg-secondary'} ${
                  i === 0 ? 'lg:min-h-[480px]' : ''}`}>
                  
                  {isImage &&
                  <>
                      <AppImage
                      src={meta.image}
                      alt={meta.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1400ms] ease-royal group-hover:scale-105" />
                    
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/45 to-transparent" />
                    </>
                  }
                  <div className="relative">
                    <Icon
                      name={meta.icon as 'MapIcon'}
                      size={30}
                      variant="outline"
                      className={isImage ? 'text-accent' : 'text-primary'} />
                    
                    <h3
                      className={`mt-4 font-display text-3xl font-medium ${
                      isImage ? 'text-background' : 'text-primary'}`
                      }>
                      
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 text-base leading-relaxed ${
                      isImage ? 'text-background/85' : 'text-muted-foreground'}`
                      }>
                      
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>);

          })}
        </div>

        <p className="mt-8 text-sm italic text-muted-foreground">{t.experiences.confirmNote}</p>
      </div>
    </section>);

}