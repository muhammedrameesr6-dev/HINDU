import React from 'react';
import { Navigation } from 'lucide-react';

export function VenueSection() {
  return (
    <div className="shared-family-background">
      <section id="venue" className="wedding-details wedding-details-v3">
        <div className="wedding-details__card">
          <div className="celebration-invite__paper">
            <div className="celebration-invite__groups">
              <div className="celebration-invite__group celebration-invite__group--wedding">
                <div className="wedding-letter">
                  <p className="wedding-letter__eyebrow">Together with our families</p>
                  <h3 className="wedding-letter__title">
                    Celebrate
                    <br />
                    our wedding
                  </h3>
                  <p className="wedding-letter__welcome !mt-3">
                    We invite you to share in the joy
                    <br />
                    of our beautiful beginning.
                  </p>

                  <time
                    dateTime="2027-01-10T08:00:00+05:30"
                    className="wedding-letter__date !mt-5"
                  >
                    <span className="wedding-letter__weekday">Sunday</span>
                    <div className="wedding-letter__date-line">
                      <span className="wedding-letter__number">10</span>
                      <div className="wedding-letter__month-year">
                        <span>January</span>
                        <span>2027</span>
                      </div>
                    </div>
                  </time>

                  <div className="wedding-letter__venue !mt-5">
                    <p className="wedding-letter__eyebrow">Wedding Ceremony · Thalikettu</p>
                    <p className="wedding-letter__venue-name !text-[24px]">Guruvayoor</p>
                  </div>

                  <div className="wedding-letter__venue !mt-5">
                    <p className="wedding-letter__eyebrow">Reception</p>
                    <p className="wedding-letter__venue-name !text-[25px]">FLG Auditorium</p>
                    <p className="wedding-letter__address">Changaramkulam</p>
                    <div className="wedding-letter__time !mt-1">
                      5:00 PM – 9:00 PM
                    </div>

                    <div className="mt-3 mb-1 w-full max-w-[260px] mx-auto overflow-hidden rounded-[10px] border border-[#b98a45]/75 shadow-[0_10px_24px_rgba(72,19,33,0.22)]">
                      <img
                        src="/flg-auditorium.jpg"
                        alt="FLG Auditorium, Changaramkulam"
                        className="w-full aspect-[16/10] object-cover block"
                      />
                    </div>

                    <a
                      className="wedding-letter__directions !mt-4"
                      href="https://www.google.com/maps/search/?api=1&query=FLG+Auditorium+Changaramkulam"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation size={14} aria-hidden="true" />
                      <span>Find the venue</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
