import Panel from '../../components/ui/Panel/Panel';
import Button from '../../components/ui/Button/Button';
import GemIcon from '../../components/ui/GemIcon/GemIcon';
import { profile } from '../../data/profile';
import './Contact.css';

export default function Contact() {
  const { email, linkedin, github } = profile.contacto;

  return (
    <section>
      <Panel id="contacto" className="contacto">
        <GemIcon size={56} />
        <h2 className="contacto__titulo">¿Armamos algo juntos?</h2>
        <p className="contacto__texto">Disponible para trabajo freelance y oportunidades laborales.</p>
        <div className="contacto__botones">
          <Button href={`mailto:${email}`}>Escribirme</Button>
          <Button href={linkedin} variante="vidrio" target="_blank" rel="noopener noreferrer">LinkedIn</Button>
          <Button href={github} variante="vidrio" target="_blank" rel="noopener noreferrer">GitHub</Button>
        </div>
      </Panel>
    </section>
  );
}
