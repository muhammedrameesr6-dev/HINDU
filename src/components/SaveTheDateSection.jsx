import React from 'react';
import { Calendar } from 'lucide-react';

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const EMPTY_LEADING_DAYS = Array.from({ length: 5 }, (_, i) => i);
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

const GOOGLE_CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Shibin%20%26%20Archana%27s%20Wedding&dates=20270110T080000/20270110T150000&location=FLG%20Auditorium%2C%20Changaramkulam&details=Thalikettu%20at%20Guruvayoor%20(8%3A00%20AM%20%E2%80%93%208%3A30%20AM)%20followed%20by%20Reception%20at%20FLG%20Auditorium%2C%20Changaramkulam.';

export function SaveTheDateSection() {
  return (
    <section className="std-wrap">
      <img
        src="/std-lotus-burgundy.webp"
        alt=""
        className="std-wrap__lotus std-wrap__lotus--left"
      />
      <img
        src="/std-lotus-burgundy.webp"
        alt=""
        className="std-wrap__lotus std-wrap__lotus--right"
      />

      <div id="save-the-date" className="std">
        <div className="std__inner">
          <img src="/grateful-divider.webp" alt="" className="std__ornament" />
          <p className="std__eyebrow">Mark your calendar</p>
          <h2 className="std__title">Save the Date</h2>

          <div className="std__card" role="group" aria-label="January 2027 calendar">
            <div className="std__card-head">
              <span className="std__month">January</span>
              <span className="std__year">2027</span>
            </div>

            <div className="std__weekdays" aria-hidden="true">
              {WEEKDAYS.map((day, idx) => (
                <span key={idx}>{day}</span>
              ))}
            </div>

            <div className="std__grid">
              {EMPTY_LEADING_DAYS.map((idx) => (
                <span key={`empty-${idx}`} aria-hidden="true" />
              ))}
              {DAYS.map((day) => (
                <span
                  key={day}
                  className={day === 10 ? 'is-wedding' : undefined}
                  aria-label={day === 10 ? 'January 10, Wedding Day' : undefined}
                >
                  {day}
                </span>
              ))}
            </div>
          </div>

          <div className="std__actions">
            <a
              className="std__btn std__btn--solid"
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar size={14} aria-hidden="true" />
              <span>Google Calendar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
