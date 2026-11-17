import GemIcon from '../../ui/GemIcon/GemIcon';
import './ProjectCard.css';

/** Tarjeta de proyecto estilo catálogo. Recibe un objeto de data/projects.js */
export default function ProjectCard({ titulo, descripcion, etiqueta, color, stack, link, imagen }) {
  return (
    <article className={`tarjeta vidrio tinte-${color}`}>
      <div className={`tarjeta__portada tinte-${color}`}>
        {etiqueta && <span className="tarjeta__etiqueta">{etiqueta}</span>}
        {imagen ? (
          <img className="tarjeta__imagen" src={imagen} alt={`Captura de ${titulo}`} loading="lazy" />
        ) : (
          <GemIcon size={64} />
        )}
      </div>

      <div className="tarjeta__cuerpo">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <ul className="tarjeta__stack">
          {stack.map((tec) => (
            <li key={tec}>{tec}</li>
          ))}
        </ul>
      </div>

      {link ? (
        <a className="tarjeta__accion" href={link.url} target="_blank" rel="noopener noreferrer">
          {link.texto} →
        </a>
      ) : (
        <span className="tarjeta__accion tarjeta__accion--pronto">Próximamente</span>
      )}
    </article>
  );
}
