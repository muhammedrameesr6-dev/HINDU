import React from 'react';

export function ThankYouFooter() {
  return (
    <section className="thanks thanks--temple">
      <div className="thanks__content">
        <h2 className="thanks__title is-motion-settled">Thank You</h2>
        <blockquote className="thanks__quote">
          <p>
            “Like a lamp that lights another without losing its glow, love only
            grows when it is shared.”
          </p>
        </blockquote>
        <span className="thanks__rule" aria-hidden="true" />
        <p className="thanks__signoff">With love,</p>
        <p className="thanks__names">
          Shibin <em>&amp;</em> Archana
        </p>
      </div>
    </section>
  );
}
