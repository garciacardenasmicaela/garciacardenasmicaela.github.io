import { useId } from 'react';
import './GemIcon.css';

/**
 * Ícono propio de Micaela: gema-corazón facetada con una M.
 * flotar: activa la animación de flotar · size: ancho en px o cualquier unidad CSS
 */
export default function GemIcon({ size = 64, flotar = false, className = '' }) {
  const id = useId();
  const brillo = `brillo-${id}`;
  const sombra = `sombra-${id}`;

  return (
    <svg
      className={`gema ${flotar ? 'gema--flotar' : ''} ${className}`}
      style={{ width: size }}
      viewBox="0 0 120 112"
      role="img"
      aria-label="Ícono de Micaela"
    >
      <defs>
        <linearGradient id={brillo} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--rosa-algodon)" />
          <stop offset=".55" stopColor="var(--rosa-chicle)" />
          <stop offset="1" stopColor="var(--rosa-frutilla)" />
        </linearGradient>
        <linearGradient id={sombra} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--rosa-frutilla)" />
          <stop offset="1" stopColor="var(--rosa-frambuesa)" />
        </linearGradient>
      </defs>
      <path d="M60 106 L10 52 L18 20 L40 8 L60 22 L80 8 L102 20 L110 52 Z" fill={`url(#${brillo})`} stroke="var(--logo-contorno)" strokeWidth="5" strokeLinejoin="round" />
      <path d="M60 106 L36 52 L60 22 L84 52 Z" fill="#FFE4F0" opacity=".55" />
      <path d="M10 52 L36 52 L60 106 Z" fill={`url(#${sombra})`} opacity=".55" />
      <path d="M110 52 L84 52 L60 106 Z" fill={`url(#${sombra})`} opacity=".8" />
      <path d="M18 20 L40 8 L36 52 L10 52 Z" fill="#fff" opacity=".35" />
      <path d="M36 52 L84 52" stroke="var(--logo-contorno)" strokeWidth="2.5" opacity=".35" />
      {/* M: blanca con contorno frambuesa, más suave que el azul */}
      <path d="M42 66 V38 L60 56 L78 38 V66" fill="none" stroke="var(--rosa-frambuesa)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 66 V38 L60 56 L78 38 V66" fill="none" stroke="var(--blanco-nube)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="30" cy="26" rx="7" ry="4" fill="#fff" opacity=".9" transform="rotate(-30 30 26)" />
    </svg>
  );
}
