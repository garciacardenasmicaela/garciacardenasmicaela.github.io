import Button from '../../components/ui/Button/Button';
import GemIcon from '../../components/ui/GemIcon/GemIcon';
import Sparkle from '../../components/ui/Sparkle/Sparkle';
import Reveal from '../../components/ui/Reveal/Reveal';
import { profile } from '../../data/profile';
import { useEnPantalla } from '../../hooks/useEnPantalla';
import './Hero.css';

const destellos = [
  { top: '12%', left: '14%' },
  { top: '20%', right: '10%', animationDelay: '.8s' },
  { bottom: '16%', left: '22%', animationDelay: '1.4s' },
  { bottom: '10%', right: '22%', animationDelay: '.4s' },
];

export default function Hero() {
  const [ref, enPantalla] = useEnPantalla();

  return (
    <section ref={ref} className={`hero ${enPantalla ? '' : 'hero--pausado'}`} id="inicio">
      <Reveal>
        <span className="hero__insignia vidrio">
          <span className="hero__insignia-punto" />
          {profile.insignia}
        </span>
        <h1 className="hero__titulo">
          Hola, soy <span>{profile.nombre}</span>.<br />
          {profile.titular}
        </h1>
        <p className="hero__bajada">{profile.bajada}</p>
        <div className="hero__botones">
          <Button href="#proyectos">Ver proyectos</Button>
          <Button href="#contacto" variante="vidrio">Contactarme</Button>
          <Button href={profile.cv} variante="vidrio" download>Descargar CV</Button>
        </div>
      </Reveal>

      <Reveal className="hero__escenario" aria-hidden="true">
        <div className="hero__aura" />
        <div className="hero__anillo" />
        <GemIcon size="62%" flotar />
        {destellos.map((estilo, i) => (
          <Sparkle key={i} style={estilo} />
        ))}
      </Reveal>
    </section>
  );
}
