'use client';

import React, { useCallback, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';

interface GalleryItem {
  src: string;
  alt: string;
  span: string;
}

const ITEMS: GalleryItem[] = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_11c05f051-1772250211690.png",
  alt: 'Central courtyard of a Fès riad with arched colonnade',
  span: 'col-span-2 row-span-2'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b809cd90-1776442523565.png",
  alt: 'Suite bedroom with carved wooden ceiling and warm lamplight',
  span: 'col-span-1 row-span-1'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_18f63ddf4-1772062834433.png",
  alt: 'Detail of hand-cut zellige tile mosaic in green and ivory',
  span: 'col-span-1 row-span-1'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_12c94734a-1777055497176.png",
  alt: 'Traditional Moroccan tagine served with olives and preserved lemon',
  span: 'col-span-1 row-span-2'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1c36a4f75-1772149908177.png",
  alt: 'Rooftop terrace with Medina skyline at golden hour',
  span: 'col-span-1 row-span-1'
},
{
  src: "https://images.unsplash.com/photo-1649137389613-48fa246cc1e2",
  alt: 'Lantern-lit alley in the old Medina of Fès',
  span: 'col-span-2 row-span-1'
}];


/*
  Bento cell map (gallery, 4 cols desktop / 2 cols mobile)
  Array has 6 cards: Courtyard(cs-2 rs-2), Suite, Zellige, Tagine(rs-2), Terrace, Alley(cs-2)
  Row 1: [col-1: Courtyard] [col-2: Courtyard] [col-3: Suite] [col-4: Zellige]
  Row 2: [col-1: Courtyard] [col-2: Courtyard] [col-3: Tagine rs-2] [col-4: Terrace]
  Row 3: [col-1: Alley cs-2] [col-2: Alley] [col-3: Tagine] [col-4: Terrace? filled by auto flow]
  Placed 6/6 — Row 3 col-4 receives auto-flow gap guard via grid-auto-flow: dense with Terrace rs-1; see layout below.
*/

export default function GallerySection() {
  const { t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => i === null ? i : (i + ITEMS.length - 1) % ITEMS.length),
    []
  );
  const next = useCallback(
    () => setActive((i) => i === null ? i : (i + 1) % ITEMS.length),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close, prev, next]);

  return (
    <section id="gallery" className="relative bg-secondary pb-16 pt-14 md:pb-24 md:pt-20 opacity-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-[13px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              {t.gallery.eyebrow}
            </span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-3xl font-display text-display-lg font-medium text-primary">
            {t.gallery.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 [grid-auto-flow:dense] md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {ITEMS.map((item, i) =>
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`${t.gallery.open}: ${item.alt}`}
            className={`group relative overflow-hidden border border-accent/40 bg-primary ${item.span}`}>
            
              <AppImage
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-[1400ms] ease-royal group-hover:scale-110" />
            
              <span className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/35" />
              <span className="absolute bottom-3 end-3 flex h-11 w-11 items-center justify-center border border-accent bg-primary/80 text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Icon name="ArrowsPointingOutIcon" size={20} />
              </span>
            </button>
          )}
        </div>
      </div>

      {active !== null &&
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/95 p-4 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label={ITEMS[active].alt}>
        
          <button
          type="button"
          onClick={close}
          aria-label={t.gallery.close}
          className="absolute end-4 top-4 inline-flex h-12 w-12 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground">
          
            <Icon name="XMarkIcon" size={26} />
          </button>
          <button
          type="button"
          onClick={prev}
          aria-label={t.gallery.prev}
          className="absolute start-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground md:start-8">
          
            <Icon name="ChevronLeftIcon" size={26} className="rtl:rotate-180" />
          </button>
          <div className="relative h-[75vh] w-full max-w-5xl">
            <AppImage
            src={ITEMS[active].src}
            alt={ITEMS[active].alt}
            fill
            sizes="90vw"
            className="object-contain" />
          
          </div>
          <button
          type="button"
          onClick={next}
          aria-label={t.gallery.next}
          className="absolute end-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-accent text-accent transition-colors hover:bg-accent hover:text-accent-foreground md:end-8">
          
            <Icon name="ChevronRightIcon" size={26} className="rtl:rotate-180" />
          </button>
        </div>
      }
    </section>);

}