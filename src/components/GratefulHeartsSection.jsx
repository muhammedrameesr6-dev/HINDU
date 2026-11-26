import React, { useState } from 'react';

const LOTUS_PETALS = [
  { left: '8%', delay: '0s', duration: '4.8s', sway: '22px', tilt: '-18deg', spin: '120deg', size: 28, opacity: 0.9, deep: '#9c2235', mid: '#d87083', light: '#f6c8d1' },
  { left: '16%', delay: '0.4s', duration: '5.2s', sway: '-28px', tilt: '20deg', spin: '-140deg', size: 22, opacity: 0.85, deep: '#b8374a', mid: '#e28897', light: '#fae0e5' },
  { left: '25%', delay: '0.15s', duration: '4.4s', sway: '18px', tilt: '-8deg', spin: '95deg', size: 32, opacity: 0.92, deep: '#8a1c2d', mid: '#cc5d72', light: '#f4bec8' },
  { left: '34%', delay: '0.7s', duration: '5.5s', sway: '-20px', tilt: '12deg', spin: '-110deg', size: 20, opacity: 0.8, deep: '#c04458', mid: '#e896a4', light: '#fce5e9' },
  { left: '44%', delay: '0.25s', duration: '4.6s', sway: '26px', tilt: '-25deg', spin: '150deg', size: 30, opacity: 0.95, deep: '#9c2235', mid: '#d87083', light: '#f6c8d1' },
  { left: '53%', delay: '0.9s', duration: '5.1s', sway: '-24px', tilt: '16deg', spin: '-130deg', size: 24, opacity: 0.88, deep: '#ab2c40', mid: '#de7c8d', light: '#f9d4dc' },
  { left: '62%', delay: '0.1s', duration: '4.9s', sway: '20px', tilt: '-14deg', spin: '105deg', size: 28, opacity: 0.9, deep: '#8a1c2d', mid: '#cc5d72', light: '#f4bec8' },
  { left: '71%', delay: '0.55s', duration: '5.3s', sway: '-22px', tilt: '24deg', spin: '-125deg', size: 22, opacity: 0.86, deep: '#b8374a', mid: '#e28897', light: '#fae0e5' },
  { left: '80%', delay: '0.3s', duration: '4.7s', sway: '25px', tilt: '-10deg', spin: '135deg', size: 29, opacity: 0.9, deep: '#9c2235', mid: '#d87083', light: '#f6c8d1' },
  { left: '88%', delay: '0.8s', duration: '5.0s', sway: '-18px', tilt: '15deg', spin: '-100deg', size: 24, opacity: 0.84, deep: '#c04458', mid: '#e896a4', light: '#fce5e9' },
  { left: '39%', delay: '1.2s', duration: '4.5s', sway: '15px', tilt: '-20deg', spin: '115deg', size: 25, opacity: 0.88, deep: '#ab2c40', mid: '#de7c8d', light: '#f9d4dc' },
  { left: '67%', delay: '1.1s', duration: '5.4s', sway: '-26px', tilt: '18deg', spin: '-145deg', size: 26, opacity: 0.88, deep: '#9c2235', mid: '#d87083', light: '#f6c8d1' },
];

export function GratefulHeartsSection() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section id="invitation-note" className="hidden-invite hidden-invite--cream">
      <div className="hidden-invite__pearls" aria-hidden="true">
        <span className="hidden-invite__strand hidden-invite__strand--1">
          <img src="/grateful-pearl-strand-1.webp" alt="" />
        </span>
        <span className="hidden-invite__strand hidden-invite__strand--2">
          <img src="/grateful-pearl-strand-2.webp" alt="" />
        </span>
        <span className="hidden-invite__strand hidden-invite__strand--3">
          <img src="/grateful-pearl-strand-3.webp" alt="" />
        </span>
      </div>

      {isOpened && (
        <div className="lotus-shower" aria-hidden="true">
          {LOTUS_PETALS.map((petal, index) => (
            <span
              key={index}
              className="lotus-shower__drop"
              style={{
                left: petal.left,
                width: `${petal.size}px`,
                animationDelay: petal.delay,
                animationDuration: petal.duration,
                '--lotus-sway': petal.sway,
                '--lotus-tilt': petal.tilt,
                '--lotus-spin': petal.spin,
                '--lotus-opacity': petal.opacity,
                '--lotus-deep': petal.deep,
                '--lotus-mid': petal.mid,
                '--lotus-light': petal.light,
              }}
            >
              <span>
                <svg viewBox="0 0 64 46" fill="none">
                  <path
                    className="lotus-bloom__outer"
                    d="M32 6C26 14 23 23 23 31C23 36 27 40 32 40C37 40 41 36 41 31C41 23 38 14 32 6Z"
                  />
                  <path
                    className="lotus-bloom__inner"
                    d="M23 32C16 29 10 23 8 15C15 17 20 21 24 27Z"
                  />
                  <path
                    className="lotus-bloom__inner"
                    d="M41 32C48 29 54 23 56 15C49 17 44 21 40 27Z"
                  />
                  <path
                    className="lotus-bloom__centre"
                    d="M32 14C29 20 28 26 28 31C28 34 29.8 36 32 36C34.2 36 36 34 36 31C36 26 35 20 32 14Z"
                  />
                </svg>
              </span>
            </span>
          ))}
        </div>
      )}

      <div className="hidden-invite__content">
        <p className="hidden-invite__eyebrow">A moment made complete by you</p>
        <h2>With Grateful Hearts</h2>
        <img src="/grateful-divider.webp" alt="" className="hidden-invite__divider" />

        <div className={`hidden-invite__reveal ${isOpened ? 'is-revealed' : ''}`}>
          <button
            type="button"
            className="hidden-invite__cover"
            aria-label="Tap to open our message"
            onClick={() => setIsOpened(true)}
          >
            <img
              src="/grateful-envelope-art.webp"
              alt=""
              className="hidden-invite__envelope-art"
            />
            <span className="hidden-invite__caption">
              <b>A note from our hearts</b>
              <span>Tap to break the seal</span>
            </span>
          </button>

          <div className="hidden-invite__message" aria-live="polite">
            <span>Dear family &amp; friends</span>
            <p>
              Join us as we begin our forever. Your presence and blessings will make
              our wedding complete.
            </p>
          </div>
        </div>

        <img src="/grateful-diya.webp" alt="" className="hidden-invite__diya" />
      </div>
    </section>
  );
}
