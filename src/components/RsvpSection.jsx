import React, { useEffect, useState } from 'react';
import { Heart, Send, Sparkles, User } from 'lucide-react';

const STORAGE_KEY = 'shibin_archana_rsvp_v1';

export function RsvpSection() {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('attending');
  const [guests, setGuests] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.name) {
          setName(parsed.name);
          setAttendance(parsed.attendance || 'attending');
          setGuests(parsed.guests || 1);
          setSubmittedRecord(parsed);
        }
      }
    } catch {
      // Ignore storage read errors
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setErrorMsg('Please enter your name before confirming.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    window.setTimeout(() => {
      const record = {
        name: trimmed,
        attendance,
        guests: attendance === 'attending' ? guests : 0,
        submittedAt: new Date().toISOString(),
      };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
      } catch {
        // Ignore storage write errors
      }
      setIsSubmitting(false);
      setSubmittedRecord(record);
    }, 450);
  };

  return (
    <div className="shared-rsvp-background">
      <section id="rsvp" className="wishes-section rsvp-section">
        <header className="rsvp-section__header">
          <p>With love, we invite you</p>
          <h2>
            Grace us with
            <br />
            your presence
          </h2>
        </header>

        <form className="rsvp-card rsvp-card--minimal" onSubmit={handleSubmit}>
          <div className="rsvp-card__topline">
            <span aria-hidden="true" />
            <i>Kindly respond</i>
            <span aria-hidden="true" />
          </div>

          <label className="rsvp-field">
            <span>Your name</span>
            <div className="rsvp-input">
              <User size={16} aria-hidden="true" />
              <input
                type="text"
                name="name"
                required
                maxLength={120}
                autoComplete="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
              />
            </div>
          </label>

          <div className="rsvp-toggle" role="radiogroup" aria-label="Attendance response">
            <label className={attendance === 'attending' ? 'is-selected' : undefined}>
              <input
                type="radio"
                name="attendance"
                value="attending"
                checked={attendance === 'attending'}
                onChange={() => setAttendance('attending')}
              />
              <Sparkles size={14} aria-hidden="true" />
              <span>Joyfully accept</span>
            </label>

            <label className={attendance === 'not_attending' ? 'is-selected' : undefined}>
              <input
                type="radio"
                name="attendance"
                value="not_attending"
                checked={attendance === 'not_attending'}
                onChange={() => setAttendance('not_attending')}
              />
              <Heart size={14} aria-hidden="true" />
              <span>Regretfully decline</span>
            </label>
          </div>

          {attendance === 'attending' && (
            <div className="rsvp-count">
              <span>Guests</span>
              <div className="rsvp-counter__controls">
                <button
                  type="button"
                  aria-label="Decrease guests"
                  disabled={guests <= 1}
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                >
                  −
                </button>
                <output aria-live="polite">{guests}</output>
                <button
                  type="button"
                  aria-label="Increase guests"
                  disabled={guests >= 10}
                  onClick={() => setGuests((g) => Math.min(10, g + 1))}
                >
                  +
                </button>
              </div>
            </div>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Sparkles size={15} className="animate-spin" aria-hidden="true" />
                <span>Sending</span>
              </>
            ) : (
              <>
                <Send size={15} aria-hidden="true" />
                <span>Confirm attendance</span>
              </>
            )}
          </button>

          {errorMsg && (
            <div className="rsvp-error" role="alert">
              {errorMsg}
            </div>
          )}

          {submittedRecord && !errorMsg && (
            <p className="rsvp-success mt-3 text-center" role="status">
              {submittedRecord.attendance === 'attending'
                ? `Thank you, ${submittedRecord.name}! We look forward to celebrating with ${submittedRecord.guests} ${
                    submittedRecord.guests === 1 ? 'guest' : 'guests'
                  }.`
                : `Thank you for letting us know, ${submittedRecord.name}. You will be missed!`}
            </p>
          )}
        </form>

        <p className="rsvp-section__closing">
          Your presence and blessings will make our celebration complete
        </p>
      </section>
    </div>
  );
}
