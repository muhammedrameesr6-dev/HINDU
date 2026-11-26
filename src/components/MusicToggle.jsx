import React from 'react';

export function MusicToggle({ isPlaying, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle Background Music"
      aria-pressed={isPlaying}
      className="background-music-button fixed top-3 right-3 sm:top-4 sm:right-4 z-50 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FDFBF7]/90 backdrop-blur-md border border-[#C9A46A]/50 shadow-sm text-[#4A392F] cursor-pointer transition-transform hover:scale-105 active:scale-95"
    >
      <span className="flex items-end gap-[2.5px] h-3.5" aria-hidden="true">
        <span
          className={`w-[2px] rounded-full bg-[#5C1520] transition-all duration-300 ${
            isPlaying ? 'h-3 animate-[pulse_0.9s_ease-in-out_infinite]' : 'h-2'
          }`}
        />
        <span
          className={`w-[2px] rounded-full bg-[#5C1520] transition-all duration-300 ${
            isPlaying ? 'h-3.5 animate-[pulse_0.7s_ease-in-out_0.2s_infinite]' : 'h-3'
          }`}
        />
        <span
          className={`w-[2px] rounded-full bg-[#5C1520] transition-all duration-300 ${
            isPlaying ? 'h-2.5 animate-[pulse_1.1s_ease-in-out_0.4s_infinite]' : 'h-1.5'
          }`}
        />
      </span>
    </button>
  );
}
