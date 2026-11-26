import React from 'react';

const PALETTE = [
  { name: 'Maroon', hex: '#7A1F2E' },
  { name: 'Gold', hex: '#D4A44A' },
  { name: 'Ivory', hex: '#F6ECD8' },
  { name: 'Emerald', hex: '#2F6B4F' },
  { name: 'Rose', hex: '#C76D7D' },
];

export function DressCodeSection() {
  return (
    <section className="attire-section">
      <div className="attire-section__backdrop" aria-hidden="true" />

      <div className="attire-section__content">
        <header className="attire-section__header attire-section__header--combined">
          <p>Inspired by tradition</p>
          <h2>Dress Code</h2>
          <h3 className="attire-section__subtitle">
            <span>Traditional</span>
            <span>Indian Attire</span>
          </h3>
        </header>

        <div className="attire-section__illustration-space" aria-hidden="true" />

        <div className="attire-section__ideas">
          <p className="attire-section__palette-label">Colours of the evening</p>
          <ul className="attire-section__palette">
            {PALETTE.map((swatch, index) => (
              <li key={swatch.name}>
                <i
                  style={{
                    backgroundColor: swatch.hex,
                    '--swatch-index': index,
                  }}
                  aria-hidden="true"
                />
                <span>{swatch.name}</span>
              </li>
            ))}
          </ul>

          <p className="attire-section__line">
            Silk sarees, lehengas, veshtis &amp; kurtas.
            <em>Wear the traditional look you love.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
