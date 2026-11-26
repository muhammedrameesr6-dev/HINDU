import React, { useState } from 'react';
import { LotusDividerIcon } from './LotusIcon';

export function GateIntro({ onOpenComplete, onStartOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    onStartOpen?.();
    window.setTimeout(() => {
      onOpenComplete?.();
    }, 2150);
  };

  return (
    <div
      className={`gate-intro ${isOpening ? 'is-opening' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation entrance"
      onClick={handleOpen}
    >
      <div className="gate-intro__fill" aria-hidden="true" />
      <div className="gate-intro__scene">
        <div className="gate-intro__stage">
          <div className="gate-intro__leaf gate-intro__leaf--left" aria-hidden="true" />
          <div className="gate-intro__leaf gate-intro__leaf--right" aria-hidden="true" />
          <div className="gate-intro__light" aria-hidden="true" />
          <div className="gate-intro__frame" aria-hidden="true" />

          <div className="gate-intro__title">
            <p className="gate-intro__kicker">
              <span>Inviting you to</span>
              <span>Our Wedding</span>
            </p>
            <div className="gate-intro__divider" aria-hidden="true">
              <span />
              <LotusDividerIcon />
              <span />
            </div>
          </div>

          <button
            type="button"
            className="gate-intro__touch"
            aria-label="Tap to open wedding invitation"
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
          >
            <span className="gate-intro__ring" aria-hidden="true" />
            <span className="gate-intro__ring gate-intro__ring--late" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="gate-intro__hint"
            onClick={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
          >
            <span className="gate-intro__invitation-label">A little magic awaits</span>
            <span className="gate-intro__invitation-cue">Tap to open</span>
          </button>
        </div>
      </div>
    </div>
  );
}
