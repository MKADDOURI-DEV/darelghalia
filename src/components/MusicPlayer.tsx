'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

const KEY = 'dar-el-ghalia-music';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const play = useCallback(async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      a.volume = 0.35;
      await a.play();
      setPlaying(true);
      try { localStorage.setItem(KEY, 'on'); } catch {}
    } catch {
      setPlaying(false);
    }
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setPlaying(false);
    try { localStorage.setItem(KEY, 'off'); } catch {}
  }, []);

  // Browsers block autoplay: start on the first user gesture unless the visitor muted it.
  useEffect(() => {
    let pref: string | null = null;
    try { pref = localStorage.getItem(KEY); } catch {}
    if (pref === 'off') return;
    const start = () => {
      play();
      cleanup();
    };
    const events = ['pointerdown', 'keydown', 'touchstart'] as const;
    const cleanup = () => events.forEach((e) => window.removeEventListener(e, start));
    events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    return cleanup;
  }, [play]);

  return (
    <>
      <audio ref={audioRef} src="/audio/ambiance.mp3" loop preload="none" />
      <button
        type="button"
        onClick={playing ? pause : play}
        aria-label={playing ? 'Couper la musique' : 'Activer la musique'}
        aria-pressed={playing}
        className="fixed bottom-5 start-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-accent/70 bg-primary/85 text-accent backdrop-blur transition-colors duration-500 hover:bg-accent hover:text-accent-foreground"
      >
        {playing ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            <path d="m16 9 5 6" />
            <path d="m21 9-5 6" />
          </svg>
        )}
      </button>
    </>
  );
}
