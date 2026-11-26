import React, { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2027-01-10T08:00:00+05:30').getTime();

function getTimeRemaining() {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: String(days),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
}

export function HeroSection({ isRevealed }) {
  const [countdown, setCountdown] = useState(getTimeRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getTimeRemaining());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    const parentsEl = document.getElementById('parents');
    if (parentsEl) {
      parentsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`invitation-hero hero-v2 hero-v2--lotus hero-south ${
        isRevealed ? 'is-revealed' : ''
      }`}
    >
      <img
        src="/hero-tamil-dawn.webp"
        alt="Carved South Indian temple gopuram at dawn"
        className="invitation-hero__photo"
      />
      <div className="hero-v2__shade" aria-hidden="true" />

      <div className="hero-v2__petals" aria-hidden="true">
        <i style={{ left: '18%', animationDelay: '0s', animationDuration: '10.5s' }} />
        <i style={{ left: '52%', animationDelay: '3.2s', animationDuration: '12s' }} />
        <i style={{ left: '79%', animationDelay: '6.1s', animationDuration: '9.5s' }} />
      </div>

      <div className="hero-v2__content">
        <div className="hero-v2__names is-visible">
          <h1>Shibin</h1>
          <div>
            <span />
            Weds
            <span />
          </div>
          <h2>Archana</h2>
        </div>

        <div className="hero-v2__days is-visible" aria-label="Wedding countdown">
          <div>
            <strong>{countdown.days}</strong>
            <span>Days</span>
          </div>
          <div>
            <strong>{countdown.hours}</strong>
            <span>Hours</span>
          </div>
          <div>
            <strong>{countdown.minutes}</strong>
            <span>Min</span>
          </div>
          <div>
            <strong>{countdown.seconds}</strong>
            <span>Sec</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero-v2__scroll"
        onClick={handleScrollDown}
        aria-label="Scroll to Our Families section"
      >
        <span>Scroll</span>
        <span className="hero-v2__chevrons" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
    </section>
  );
}
