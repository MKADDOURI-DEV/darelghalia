'use client';

import React, { useEffect, useRef, useState } from 'react';

// Pour la vidéo complète en qualité maximale : mettre l'ID YouTube (vidéo "non répertoriée").
// Tant que c'est vide, l'extrait local de 50 s est utilisé.
const YOUTUBE_ID = '';

export default function VideoWidget() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [open, setOpen] = useState(true);
  const [big, setBig] = useState(false);

  // YouTube: detect play/pause so the background music can step aside.
  useEffect(() => {
    if (!YOUTUBE_ID) return;
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
  }, []);

  if (!open) return null;

  return (
    <div
      className={`fixed bottom-20 end-5 z-50 overflow-hidden border border-accent/70 bg-primary/95 shadow-2xl backdrop-blur transition-all duration-500 ${
        big ? 'w-[min(92vw,680px)]' : 'w-[min(72vw,288px)]'
      }`}
      role="complementary"
      aria-label="Vidéo Dar El Ghalia"
    >
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
          Dar El Ghalia
        </span>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setBig((v) => !v)}
            aria-label={big ? 'Réduire la vidéo' : 'Agrandir la vidéo'}
            className="flex h-7 w-7 items-center justify-center text-primary-foreground/80 transition-colors hover:text-accent"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {big ? <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" /> : <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />}
            </svg>
          </button>
          <button
            type="button"
            onClick={() => {
              videoRef.current?.pause();
              iframeRef.current?.contentWindow?.postMessage(
                JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }), '*');
              setOpen(false);
            }}
            aria-label="Fermer la vidéo"
            className="flex h-7 w-7 items-center justify-center text-primary-foreground/80 transition-colors hover:text-accent"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </div>
      {YOUTUBE_ID ? (
        <iframe
          ref={iframeRef}
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          title="Dar El Ghalia"
          allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
          className="block aspect-[4/3] w-full bg-black"
          onLoad={() =>
            iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'listening', id: 1 }), '*')
          }
        />
      ) : (
        <video
          ref={videoRef}
          src="/video/dar-el-ghalia-full.mp4"
          poster="/video/poster.jpg"
          controls
          playsInline
          preload="none"
          className="block w-full bg-black"
          onPlay={() => window.dispatchEvent(new Event('dar-video-play'))}
          onPause={() => window.dispatchEvent(new Event('dar-video-stop'))}
          onEnded={() => window.dispatchEvent(new Event('dar-video-stop'))}
        />
      )}
    </div>
  );
}
