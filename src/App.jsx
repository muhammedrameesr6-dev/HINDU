import React, { useEffect, useRef, useState } from 'react';
import { GateIntro } from './components/GateIntro';
import { MusicToggle } from './components/MusicToggle';
import { HeroSection } from './components/HeroSection';
import { FamiliesSection } from './components/FamiliesSection';
import { GratefulHeartsSection } from './components/GratefulHeartsSection';
import { VenueSection } from './components/VenueSection';
import { SaveTheDateSection } from './components/SaveTheDateSection';
import { TravelGuideSection } from './components/TravelGuideSection';
import { ThankYouFooter } from './components/ThankYouFooter';

function isDirectInvitationMode() {
  if (typeof window === 'undefined') return true;
  const params = new URLSearchParams(window.location.search);
  if (params.get('mobile-view') === '1') return true;
  if (window.self !== window.top) return true;
  return window.matchMedia('(max-width: 600px) and (orientation: portrait)').matches;
}

export default function App() {
  const [directMode, setDirectMode] = useState(isDirectInvitationMode);
  const [gateDismissed, setGateDismissed] = useState(false);
  const [heroRevealed, setHeroRevealed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.classList.add('is-ready');
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 600px) and (orientation: portrait)');
    const updateMode = () => setDirectMode(isDirectInvitationMode());
    mq.addEventListener('change', updateMode);
    return () => mq.removeEventListener('change', updateMode);
  }, []);

  // Lock body scroll while entrance gate is closed
  useEffect(() => {
    if (!directMode) return;
    document.documentElement.classList.add('mobile-invitation-document');
    document.body.style.overflow = gateDismissed ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [directMode, gateDismissed]);

  // Trigger scroll motion animations for [data-motion] elements
  useEffect(() => {
    if (!directMode) return;
    const targets = Array.from(document.querySelectorAll('[data-motion]'));
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('is-motion-in');
            window.setTimeout(() => {
              el.classList.add('is-motion-settled');
            }, 2200);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [directMode, gateDismissed]);

  // Allow mouse drag-to-scroll inside the desktop phone frame
  useEffect(() => {
    if (!directMode) return;
    let isDown = false;
    let startY = 0;
    let startScroll = 0;

    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      if (e.target.closest('button, a, input, textarea, select, label')) return;
      isDown = true;
      startY = e.clientY;
      startScroll = window.scrollY;
      document.documentElement.classList.add('is-drag-scrolling');
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      window.scrollTo({ top: startScroll - (e.clientY - startY), behavior: 'instant' });
    };

    const onMouseUp = () => {
      if (!isDown) return;
      isDown = false;
      document.documentElement.classList.remove('is-drag-scrolling');
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseleave', onMouseUp);
    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseleave', onMouseUp);
    };
  }, [directMode]);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.volume = 0.45;
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      await startMusic();
    }
  };

  if (!directMode) {
    return (
      <div className="mobile-presentation">
        <div className="mobile-presentation__device">
          <iframe
            className="mobile-presentation__screen"
            src="/?mobile-view=1"
            title="Wedding invitation"
            allow="autoplay; fullscreen"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1A100B]">
      <audio ref={audioRef} src="/ghar-more-pardesiya.mp3" loop preload="auto" />

      {!gateDismissed && (
        <GateIntro
          onStartOpen={() => {
            setHeroRevealed(true);
            startMusic();
          }}
          onOpenComplete={() => setGateDismissed(true)}
        />
      )}

      {gateDismissed && (
        <MusicToggle isPlaying={isPlaying} onToggle={toggleMusic} />
      )}

      <main className="invitation-shell relative w-full max-w-md mx-auto min-h-screen overflow-x-clip bg-[#FAF6F0] border-x border-[#C9A46A]/30 shadow-[0_0_80px_rgba(74,57,47,0.15)]">
        <HeroSection isRevealed={heroRevealed} />
        <FamiliesSection />
        <GratefulHeartsSection />
        <VenueSection />
        <SaveTheDateSection />
        <TravelGuideSection />
        <ThankYouFooter />
      </main>
    </div>
  );
}
