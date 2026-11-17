import { useReveal } from '../../../hooks/useReveal';
import './Reveal.css';

/** Envuelve contenido para que aparezca con animación al hacer scroll. */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`revelar ${visible ? 'revelar--visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
