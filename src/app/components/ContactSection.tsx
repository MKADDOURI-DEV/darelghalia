'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';

const MAP_SRC =
  'https://www.openstreetmap.org/export/embed.html?bbox=-4.9930%2C34.0550%2C-4.9730%2C34.0690&layer=mapnik&marker=34.0620%2C-4.9830';

export default function ContactSection() {
  const { t } = useLanguage();

  const rowClass = 'flex items-start gap-4 border-b border-accent/30 py-5';
  const labelClass = 'text-[12px] font-semibold uppercase tracking-[0.25em] text-muted-foreground';
  const linkClass =
    'mt-1 inline-flex min-h-[44px] items-center text-lg font-medium text-primary transition-colors hover:text-accent';

  return (
    <section id="contact" className="relative bg-background pb-16 pt-14 md:pb-24 md:pt-20 opacity-100">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 md:px-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="font-display text-display-md font-medium text-primary">{t?.contact?.title}</h2>
            <div className="gold-rule mt-6" />
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-4">
              <li className={rowClass}>
                <Icon name="MapPinIcon" size={26} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className={labelClass}>{t?.contact?.addressLabel}</p>
                  <p className="mt-1 text-lg leading-relaxed text-foreground">{t?.contact?.address}</p>
                </div>
              </li>
              <li className={rowClass}>
                <Icon name="PhoneIcon" size={26} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className={labelClass}>{t?.contact?.phoneLabel}</p>
                  <a href="tel:+212535634167" dir="ltr" className={linkClass}>
                    +212 5 35 63 41 67
                  </a>
                  <br />
                  <a href="tel:+212661351740" dir="ltr" className={linkClass}>
                    +212 6 61 35 17 40
                  </a>
                </div>
              </li>
              <li className={rowClass}>
                <Icon name="EnvelopeIcon" size={26} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className={labelClass}>{t?.contact?.emailLabel}</p>
                  <a href="mailto:resa@riadelghalia.com" className={linkClass}>
                    resa@riadelghalia.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 py-5">
                <Icon name="InformationCircleIcon" size={26} className="mt-1 shrink-0 text-accent" />
                <div>
                  <p className={labelClass}>{t?.contact?.accessTitle}</p>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{t?.contact?.accessText}</p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <div className="relative h-full min-h-[360px] overflow-hidden border border-accent/60 bg-secondary">
              <iframe
                title={t?.contact?.mapTitle}
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}