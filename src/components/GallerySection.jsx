import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { LotusDividerIcon } from './LotusIcon';

const SLIDES = [
  { src: '/four.webp', label: 'Forever', alt: 'Shibin and Archana — Forever' },
  { src: '/one.webp', label: 'Love', alt: 'Shibin and Archana — Love' },
  { src: '/two.webp', label: 'Happiness', alt: 'Shibin and Archana — Happiness' },
  { src: '/three.webp', label: 'Together', alt: 'Shibin and Archana — Together' },
  { src: '/five.webp', label: 'Joy', alt: 'Shibin and Archana — Joy' },
];

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const total = SLIDES.length;
  const activeSlide = SLIDES[activeIndex];

  const showPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const showNext = () => setActiveIndex((prev) => (prev + 1) % total);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + total) % total);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % total);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, total]);

  return (
    <section id="gallery" className="memory-gallery">
      <div className="memory-gallery__border" aria-hidden="true" />

      <header className="memory-gallery__header">
        <div className="memory-gallery__flower" aria-hidden="true">
          <i />
          <LotusDividerIcon />
          <i />
        </div>
        <h2>Our Story</h2>
      </header>

      <div className="memory-gallery__album">
        <div className="memory-gallery__picture">
          <div className="memory-gallery__slide">
            <img src={activeSlide.src} alt={activeSlide.alt} />
          </div>

          <button
            type="button"
            className="memory-gallery__expand"
            aria-label={`View ${activeSlide.label} fullscreen`}
            onClick={() => setIsLightboxOpen(true)}
          >
            <Maximize2 size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="memory-gallery__navigation">
          <button
            type="button"
            aria-label="Previous photo"
            onClick={showPrev}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <span aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')}
            <i aria-hidden="true" />
            {String(total).padStart(2, '0')}
          </span>

          <button
            type="button"
            aria-label="Next photo"
            onClick={showNext}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="memory-gallery__thumbnails" role="tablist" aria-label="Gallery photos">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`Show ${slide.label}`}
              className={idx === activeIndex ? 'is-selected' : undefined}
              onClick={() => setActiveIndex(idx)}
            >
              <img src={slide.src} alt="" />
              <span>{slide.label}</span>
            </button>
          ))}
        </div>
      </div>

      {isLightboxOpen &&
        createPortal(
          <div
            className="memory-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery lightbox"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              type="button"
              className="memory-lightbox__close"
              aria-label="Close lightbox"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={20} aria-hidden="true" />
            </button>

            <figure onClick={(e) => e.stopPropagation()}>
              <img src={activeSlide.src} alt={activeSlide.alt} />
              <figcaption>
                <strong>{activeSlide.label}</strong>
                <span>
                  {activeIndex + 1} / {total}
                </span>
              </figcaption>
            </figure>

            <div
              className="memory-lightbox__navigation"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Previous photo"
                onClick={showPrev}
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={showNext}
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
