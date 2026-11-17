import './Sparkle.css';

/** Destellito animado. style permite posicionarlo (top/left/right/bottom) y delay. */
export default function Sparkle({ style }) {
  return (
    <span className="destello" style={style} aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path
          d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z"
          fill="var(--texto-claro)"
          stroke="none"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  );
}
