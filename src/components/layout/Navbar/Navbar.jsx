import GemIcon from '../../ui/GemIcon/GemIcon';
import { secciones } from '../../../data/navigation';
import { profile } from '../../../data/profile';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__barra vidrio">
        <a className="navbar__marca" href="#inicio">
          <GemIcon size={34} />
          {profile.nombre}
        </a>

        <ul className="navbar__pestanas">
          {secciones.map(({ id, texto }) => (
            <li key={id}>
              <a className="navbar__pestana" href={`#${id}`}>{texto}</a>
            </li>
          ))}
        </ul>

        <span className="navbar__estado">
          <span className="navbar__punto" />
          Disponible
        </span>
      </nav>
    </header>
  );
}
