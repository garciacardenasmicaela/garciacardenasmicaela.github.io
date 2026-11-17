import { useEffect, useRef, useState } from 'react';

/** Devuelve [ref, enPantalla]: true mientras el elemento se ve (a diferencia de useReveal, se actualiza siempre). */
export function useEnPantalla() {
  const ref = useRef(null);
  const [enPantalla, setEnPantalla] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setEnPantalla(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, enPantalla];
}
