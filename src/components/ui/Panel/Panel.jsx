import Reveal from '../Reveal/Reveal';
import './Panel.css';

/** Panel de vidrio con encabezado opcional (etiqueta chica + título). */
export default function Panel({ etiqueta, titulo, id, className = '', children }) {
  return (
    <Reveal as="div" id={id} className={`panel vidrio ${className}`}>
      {(etiqueta || titulo) && (
        <header className="panel__encabezado">
          {etiqueta && <span className="panel__etiqueta">{etiqueta}</span>}
          {titulo && <h2 className="panel__titulo">{titulo}</h2>}
        </header>
      )}
      {children}
    </Reveal>
  );
}
