'use client';

import React, { useRef, useState } from 'react';

export default function VideoWidget() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      className="fixed bottom-20 end-5 z-50 w-[min(72vw,288px)] overflow-hidden border border-accent/70 bg-primary/95 shadow-2xl backdrop-blur"
      role="complementary"
      aria-label="Vidéo Dar El Ghalia"
    >
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
          Dar El Ghalia
        </span>
        <button
          type="button"
          onClick={() => {
            videoRef.current?.pause();
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
      <video
        ref={videoRef}
        src="/video/dar-el-ghalia.mp4"
        poster="/video/poster.jpg"
        controls
        playsInline
        preload="none"
        className="block w-full bg-black"
        onPlay={() => window.dispatchEvent(new Event('dar-video-play'))}
        onPause={() => window.dispatchEvent(new Event('dar-video-stop'))}
        onEnded={() => window.dispatchEvent(new Event('dar-video-stop'))}
      />
    </div>
  );
}
