'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/context/LanguageContext';

interface FormState {
  arrival: string;
  departure: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  arrival: '',
  departure: '',
  guests: '2',
  name: '',
  email: '',
  phone: '',
  message: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d\s.-]{7,20}$/;

export default function BookingSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.arrival) e.arrival = t.booking.errRequired;
    if (!form.departure) e.departure = t.booking.errRequired;
    if (form.arrival && form.departure && form.departure <= form.arrival) e.departure = t.booking.errDates;
    if (!form.name.trim()) e.name = t.booking.errRequired;
    if (!form.email.trim()) e.email = t.booking.errRequired;
    else if (!EMAIL_RE.test(form.email)) e.email = t.booking.errEmail;
    if (!form.phone.trim()) e.phone = t.booking.errRequired;
    else if (!PHONE_RE.test(form.phone)) e.phone = t.booking.errPhone;
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setDone(true);
    }
  };

  const mailto = `mailto:resa@riadelghalia.com?subject=${encodeURIComponent(
    'Dar El Ghalia — ' + form.name
  )}&body=${encodeURIComponent(
    `${t.booking.arrival}: ${form.arrival}\n${t.booking.departure}: ${form.departure}\n${t.booking.guests}: ${form.guests}\n${t.booking.phone}: ${form.phone}\n\n${form.message}`
  )}`;

  const fieldClass = (hasError: boolean) =>
    `w-full min-h-[48px] border bg-card px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted-foreground focus:border-accent ${
      hasError ? 'border-destructive' : 'border-input'
    }`;

  const labelClass = 'mb-2 block text-[13px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/80';

  return (
    <section id="booking" className="relative isolate overflow-hidden bg-primary pb-16 pt-14 md:pb-24 md:pt-20 opacity-100">
      <div className="zellige-bg pointer-events-none absolute inset-0 -z-10 opacity-20" />
      <div className="blob-gold drift-blob pointer-events-none absolute -top-24 end-0 -z-10 h-[30rem] w-[30rem]" />

      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 md:px-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col justify-between gap-10 lg:col-span-5">
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-accent" />
                <span className="text-[13px] font-semibold uppercase tracking-[0.35em] text-accent">
                  {t.booking.eyebrow}
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-display-lg font-light text-primary-foreground">
                {t.booking.title}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                {t.booking.sub}
              </p>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <p className="border-s-2 border-accent ps-5 text-sm italic leading-relaxed text-primary-foreground/70">
              {t.booking.noteNoLive}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <div className="border border-accent/60 bg-primary p-6 md:p-10">
              {done ? (
                <div role="status" className="flex flex-col gap-6">
                  <Icon name="CheckCircleIcon" size={44} className="text-accent" />
                  <h3 className="font-display text-3xl text-primary-foreground">{t.booking.successTitle}</h3>
                  <p className="text-base leading-relaxed text-primary-foreground/80">{t.booking.successText}</p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={mailto}
                      className="inline-flex min-h-[48px] items-center justify-center bg-accent px-7 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground"
                    >
                      resa@riadelghalia.com
                    </a>
                    <a
                      href="tel:+212535634167"
                      dir="ltr"
                      className="inline-flex min-h-[48px] items-center justify-center border border-accent px-7 text-sm font-semibold tracking-[0.15em] text-accent"
                    >
                      +212 5 35 63 41 67
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="arrival" className={labelClass}>{t.booking.arrival}</label>
                    <input
                      id="arrival"
                      type="date"
                      value={form.arrival}
                      onChange={(e) => update('arrival', e.target.value)}
                      aria-invalid={Boolean(errors.arrival)}
                      aria-describedby={errors.arrival ? 'err-arrival' : undefined}
                      className={fieldClass(Boolean(errors.arrival))}
                    />
                    {errors.arrival && <p id="err-arrival" className="mt-2 text-sm text-accent">{errors.arrival}</p>}
                  </div>
                  <div>
                    <label htmlFor="departure" className={labelClass}>{t.booking.departure}</label>
                    <input
                      id="departure"
                      type="date"
                      value={form.departure}
                      onChange={(e) => update('departure', e.target.value)}
                      aria-invalid={Boolean(errors.departure)}
                      aria-describedby={errors.departure ? 'err-departure' : undefined}
                      className={fieldClass(Boolean(errors.departure))}
                    />
                    {errors.departure && <p id="err-departure" className="mt-2 text-sm text-accent">{errors.departure}</p>}
                  </div>
                  <div>
                    <label htmlFor="guests" className={labelClass}>{t.booking.guests}</label>
                    <select
                      id="guests"
                      value={form.guests}
                      onChange={(e) => update('guests', e.target.value)}
                      className={fieldClass(false)}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className={labelClass}>{t.booking.name}</label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      className={fieldClass(Boolean(errors.name))}
                    />
                    {errors.name && <p id="err-name" className="mt-2 text-sm text-accent">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>{t.booking.email}</label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      className={fieldClass(Boolean(errors.email))}
                    />
                    {errors.email && <p id="err-email" className="mt-2 text-sm text-accent">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>{t.booking.phone}</label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                      className={fieldClass(Boolean(errors.phone))}
                    />
                    {errors.phone && <p id="err-phone" className="mt-2 text-sm text-accent">{errors.phone}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>{t.booking.message}</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className={fieldClass(false)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[52px] w-full items-center justify-center border border-accent bg-accent px-9 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-all duration-500 ease-royal hover:bg-transparent hover:text-accent sm:w-auto"
                    >
                      {t.booking.submit}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}