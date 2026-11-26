import React from 'react';

export function LotusDividerIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 7C27.5 14 25.5 22 25.5 29C25.5 33.5 28.4 37 32 37C35.6 37 38.5 33.5 38.5 29C38.5 22 36.5 14 32 7Z"
      />
      <path
        d="M25.5 30C19.5 27.5 14.5 22 12.5 15.5C18.5 16.5 23.5 20.5 26 26"
      />
      <path
        d="M38.5 30C44.5 27.5 49.5 22 51.5 15.5C45.5 16.5 40.5 20.5 38 26"
      />
      <path
        d="M22.5 34.5C15.5 34.5 9.5 31 6.5 25.5C12.5 25 18 27 22 31"
      />
      <path
        d="M41.5 34.5C48.5 34.5 54.5 31 57.5 25.5C51.5 25 46 27 42 31"
      />
      <path d="M21 38.5H43" strokeLinecap="round" />
    </svg>
  );
}

export function LotusBotanicalMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 90 30"
      className={`family-story__botanical family-story__botanical--large ${className}`}
      aria-hidden="true"
    >
      <path d="M8 15H33" />
      <path d="M57 15H82" />
      <path d="M45 4C42 9 41 14 41 18C41 21 42.8 23 45 23C47.2 23 49 21 49 18C49 14 48 9 45 4Z" />
      <path d="M41 19C36.5 17.5 33.5 14 32.5 9.5C36.5 10.5 39.5 13 41.2 16.5" />
      <path d="M49 19C53.5 17.5 56.5 14 57.5 9.5C53.5 10.5 50.5 13 48.8 16.5" />
      <path d="M36 23.5H54" />
    </svg>
  );
}
