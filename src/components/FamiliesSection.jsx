import React from 'react';
import { LotusBotanicalMark } from './LotusIcon';

export function FamiliesSection() {
  return (
    <section id="parents" className="family-story family-story--maroon">
      <div className="family-story__content">
        <header className="family-story__header">
          <p
            className="family-story__eyebrow"
            data-motion="rise"
            style={{ '--motion-delay': '0ms' }}
          >
            With the blessings of
          </p>
          <h2 data-motion="ink" style={{ '--motion-delay': '120ms' }}>
            Our Families
          </h2>
          <div
            className="family-story__header-mark"
            data-motion="thread"
            style={{ '--motion-delay': '240ms' }}
          >
            <LotusBotanicalMark />
          </div>
          <p
            className="family-story__intro"
            data-motion="rise"
            style={{ '--motion-delay': '340ms' }}
          >
            <span>With joyful hearts, we invite you</span>
            <span>to celebrate our wedding</span>
          </p>
        </header>

        <div className="family-story__profiles">
          <article
            className="family-story__profile"
            data-motion="rise"
            style={{ '--motion-delay': '460ms' }}
          >
            <span className="family-story__role">The Groom</span>
            <h3 className="family-story__name">Shibin T.S.</h3>
            <div className="family-story__family">
              <p className="family-story__relation">Son of</p>
              <p className="family-story__parents">
                Mr. Sreenivasan <span>&amp;</span> Mrs. Sheela Sreenivasan
              </p>
              <p className="family-story__place">
                Thanik(k)al House, Kallurima, Mannam
              </p>
              <p className="family-story__place">
                <a
                  href="tel:8086505586"
                  className="text-[#efc16a] hover:underline underline-offset-4"
                >
                  +91 80865 05586
                </a>
              </p>
            </div>
          </article>

          <div
            className="family-story__and"
            data-motion="rise"
            style={{ '--motion-delay': '620ms' }}
            aria-hidden="true"
          >
            <span />
            <b>And</b>
            <span />
          </div>

          <article
            className="family-story__profile"
            data-motion="rise"
            style={{ '--motion-delay': '760ms' }}
          >
            <span className="family-story__role">The Bride</span>
            <h3 className="family-story__name">Archana</h3>
            <div className="family-story__family">
              <p className="family-story__relation">Daughter of</p>
              <p className="family-story__parents">
                Mr. Prakashan <span>&amp;</span> Mrs. Sajitha Prakashan
              </p>
              <p className="family-story__place">
                Variyath Valappil, Muthoor, Vattamkulam
              </p>
              <p className="family-story__place">
                <a
                  href="tel:8086086424"
                  className="text-[#efc16a] hover:underline underline-offset-4"
                >
                  +91 80860 86424
                </a>
              </p>
            </div>
          </article>
        </div>

        <div
          className="family-story__closing"
          data-motion="thread"
          style={{ '--motion-delay': '940ms' }}
        >
          <LotusBotanicalMark />
        </div>
      </div>
    </section>
  );
}
