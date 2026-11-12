'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

// Pour la vidéo complète en qualité maximale : mettre l'ID YouTube (vidéo "non répertoriée").
// Tant que c'est vide, l'extrait local de 50 s est utilisé.
const YOUTUBE_ID = '';

export default function VideoWidget() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    videoRef.current?.pause();
    setOpen(false);
    window.dispatchEvent(new Event('dar-video-stop'));
  }, []);

  // Lecture dès l'ouverture (l'ouverture est un clic, donc autorisé par le navigateur).
  useEffect(() => {
    if (open && !YOUTUBE_ID) videoRef.current?.play().catch(() => {});
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  // YouTube: detect play/pause so the background music can step aside.
  useEffect(() => {
    if (!YOUTUBE_ID || !open) return;
    const onMsg = (e: MessageEvent) => {
      if (!String(e.origin).includes('youtube')) return;
      let d: any = e.data;
      try { if (typeof d === 'string') d = JSON.parse(d); } catch { return; }
      const state = d?.event === 'onStateChange' ? d.info : d?.info?.playerState;
      if (state === 1) window.dispatchEvent(new Event('dar-video-play'));
      else if (state === 0 || state === 2) window.dispatchEvent(new Event('dar-video-stop'));
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [open]);

  return (
    <>
      {/* Petite vignette flottante */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Voir la vidéo de Dar El Ghalia"
          className="group fixed bottom-20 end-5 z-50 h-[76px] w-[96px] overflow-hidden border border-accent/70 bg-primary shadow-xl sm:h-[96px] sm:w-[120px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/video/poster.jpg" alt="" className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </span>
        </button>
      )}

      {/* Fenêtre vidéo centrée */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Vidéo Dar El Ghalia"
          onClick={close}
        >
          <div
            className="w-full max-w-[760px] border border-accent/70 bg-primary shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">Dar El Ghalia</span>
              <button
                type="button"
                onClick={close}
                aria-label="Fermer la vidéo"
                className="flex h-8 w-8 items-center justify-center text-primary-foreground/80 transition-colors hover:text-accent"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            </div>
            {YOUTUBE_ID ? (
              <iframe
                ref={iframeRef}
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1&autoplay=1`}
                title="Dar El Ghalia"
                allow="autoplay; accelerometer; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="block aspect-[4/3] w-full bg-black"
                onLoad={() =>
                  iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'listening', id: 1 }), '*')
                }
              />
            ) : (
              <video
                ref={videoRef}
                src="/video/dar-el-ghalia.mp4"
                poster="/video/poster.jpg"
                controls
                playsInline
                preload="metadata"
                className="block aspect-[684/564] max-h-[70vh] w-full bg-black"
                onPlay={() => window.dispatchEvent(new Event('dar-video-play'))}
                onPause={() => window.dispatchEvent(new Event('dar-video-stop'))}
                onEnded={() => window.dispatchEvent(new Event('dar-video-stop'))}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
