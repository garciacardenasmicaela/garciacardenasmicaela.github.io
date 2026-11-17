import Panel from '../../components/ui/Panel/Panel';
import ProjectCard from '../../components/cards/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section>
      <Panel id="proyectos" etiqueta="Trabajo" titulo="Proyectos destacados">
        <div className="catalogo">
          {projects.map(({ id, ...proyecto }) => (
            <ProjectCard key={id} {...proyecto} />
          ))}
        </div>
      </Panel>
    </section>
  );
}
