import './Button.css';

/**
 * Botón con brillo. Si recibe `href` se renderiza como link.
 * variante: 'primario' (degradado) | 'vidrio' (glass)
 */
export default function Button({ children, href, variante = 'primario', className = '', ...rest }) {
  const clases = `boton boton--${variante} ${className}`;
  if (href) {
    return (
      <a className={clases} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={clases} {...rest}>
      {children}
    </button>
  );
}
