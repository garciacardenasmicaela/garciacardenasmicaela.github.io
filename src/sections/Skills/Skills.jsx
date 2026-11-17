import Panel from '../../components/ui/Panel/Panel';
import ProgressBar from '../../components/ui/ProgressBar/ProgressBar';
import Chip from '../../components/ui/Chip/Chip';
import { skills, herramientas } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <Panel id="habilidades" etiqueta="Stack" titulo="Habilidades">
      <div className="habilidades">
        {skills.map((s) => (
          <ProgressBar key={s.nombre} {...s} />
        ))}
      </div>
      <div className="habilidades__herramientas">
        {herramientas.map((h) => (
          <Chip key={h.texto} color={h.color}>{h.texto}</Chip>
        ))}
      </div>
    </Panel>
  );
}
