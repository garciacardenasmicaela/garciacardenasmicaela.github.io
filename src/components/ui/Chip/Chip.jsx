import './Chip.css';

/** Etiqueta de vidrio con un punto de color. color: 'rosa' | 'violeta' | 'turquesa' | 'durazno' */
export default function Chip({ children, color = 'violeta' }) {
  return (
    <span className={`chip tinte-${color}`}>
      <span className="chip__punto" aria-hidden="true" />
      {children}
    </span>
  );
}
