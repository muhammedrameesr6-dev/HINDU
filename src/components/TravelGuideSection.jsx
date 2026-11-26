import React from 'react';
import { Car, ChevronRight, MapPin, Navigation, Plane, TrainFront } from 'lucide-react';
import { LotusDividerIcon } from './LotusIcon';

const ARRIVAL_OPTIONS = [
  {
    mode: 'Thalikettu · 8:00 AM – 8:30 AM',
    title: 'Guruvayoor',
    note: 'Morning wedding ceremony venue',
    icon: MapPin,
    href: 'https://www.google.com/maps/search/?api=1&query=Guruvayoor+Temple+Kerala',
  },
  {
    mode: 'By train',
    title: 'Kuttippuram / Thrissur Junction',
    note: 'Rail access to Changaramkulam & Guruvayoor',
    icon: TrainFront,
    href: 'https://www.google.com/maps/dir/?api=1&origin=Kuttippuram+Railway+Station&destination=FLG+Auditorium+Changaramkulam',
  },
  {
    mode: 'By air & road',
    title: 'Calicut / Cochin Airport',
    note: 'Open live directions to FLG Auditorium',
    icon: Plane,
    href: 'https://www.google.com/maps/dir/?api=1&destination=FLG+Auditorium+Changaramkulam',
  },
];

export function TravelGuideSection() {
  return (
    <section id="travel-guide" className="journey-guide journey-guide--minimal">
      <div className="journey-guide__inner">
        <header className="journey-guide__header">
          <p className="journey-guide__eyebrow">A little help along the way</p>
          <h2>
            Your journey
            <br />
            to our celebration
          </h2>
          <div className="journey-guide__lotus" aria-hidden="true">
            <i />
            <LotusDividerIcon />
            <i />
          </div>
        </header>

        <a
          className="journey-guide__destination"
          href="https://www.google.com/maps/search/?api=1&query=FLG+Auditorium+Changaramkulam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="journey-guide__pin" aria-hidden="true">
            <MapPin size={22} />
          </span>
          <span>
            <small>Reception venue</small>
            <strong>FLG Auditorium</strong>
            <span>Changaramkulam</span>
          </span>
          <ChevronRight size={18} aria-hidden="true" />
        </a>

        <ul className="journey-guide__arrivals">
          {ARRIVAL_OPTIONS.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.mode}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <span className="journey-guide__arrival-icon" aria-hidden="true">
                    <IconComponent size={17} />
                  </span>
                  <span className="journey-guide__arrival-copy">
                    <small>{item.mode}</small>
                    <strong>{item.title}</strong>
                    <em>{item.note}</em>
                  </span>
                  <ChevronRight size={17} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          className="journey-guide__primary"
          href="https://www.google.com/maps/dir/?api=1&destination=FLG+Auditorium+Changaramkulam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navigation size={15} aria-hidden="true" />
          <span>Directions to FLG Auditorium</span>
        </a>
      </div>
    </section>
  );
}
