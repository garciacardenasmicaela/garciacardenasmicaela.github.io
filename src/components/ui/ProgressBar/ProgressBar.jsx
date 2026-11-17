import { useReveal } from '../../../hooks/useReveal';
import './ProgressBar.css';

const etiquetaNivel = (nivel) => (nivel >= 80 ? 'Avanzado' : nivel >= 60 ? 'Sólido' : 'En progreso');

/** Barra de nivel animada. nivel: 0-100 · color: 'rosa' | 'violeta' | 'turquesa' */
export default function ProgressBar({ nombre, nivel, color = 'violeta' }) {
  const [ref, visible] = useReveal();

  return (
    <div className={`barra tinte-${color}`} ref={ref}>
      <div className="barra__fila">
        <span>{nombre}</span>
        <span className="barra__nivel">{etiquetaNivel(nivel)}</span>
      </div>
      <div className="barra__pista" role="progressbar" aria-valuenow={nivel} aria-valuemin={0} aria-valuemax={100} aria-label={nombre}>
        <div className="barra__relleno" style={{ transform: `translate3d(${visible ? nivel - 100 : -100}%, 0, 0)` }} />
      </div>
    </div>
  );
}
