import Panel from '../../components/ui/Panel/Panel';
import Chip from '../../components/ui/Chip/Chip';
import { profile } from '../../data/profile';
import './About.css';

export default function About() {
  return (
    <Panel id="ficha" etiqueta="Sobre mí" titulo="Perfil">
      <div className="ficha">
        <div className="ficha__avatar">{profile.nombre[0]}</div>
        <div>
          <h3 className="ficha__nombre">{profile.nombreCompleto}</h3>
          <p className="ficha__carrera">{profile.carrera}</p>
        </div>
      </div>

      <div className="ficha__rasgos">
        {profile.rasgos.map((r) => (
          <Chip key={r.texto} color={r.color}>{r.texto}</Chip>
        ))}
      </div>

      <p className="ficha__texto">{profile.sobreMi}</p>
      <p className="ficha__objetivo">
        <strong>Objetivo</strong>
        {profile.aspiracion}
      </p>
    </Panel>
  );
}
