import { useEffect, useRef } from 'react';
import './StarTrail.css';

const MAX_ESTRELLAS = 90;
const DISTANCIA_MINIMA = 10; // px que hay que mover el mouse para soltar otra estrella

/** Estela de estrellitas que sigue al mouse. Usa un solo <canvas> y se apaga sola cuando no hay estrellas. */
export default function StarTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conMouse = window.matchMedia('(pointer: fine)').matches;
    if (sinMovimiento || !conMouse) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const estilos = getComputedStyle(document.documentElement);
    const colores = ['--aurora-rosa', '--aurora-violeta', '--aurora-turquesa', '--texto-claro'].map((v) =>
      estilos.getPropertyValue(v).trim()
    );

    const estrellas = [];
    let ultimo = { x: -999, y: -999 };
    let cuadro = null;

    const ajustarTamano = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const dibujarEstrella = (x, y, radio, rotacion) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotacion);
      const c = radio * 0.18; // qué tan "finitas" son las puntas
      ctx.beginPath();
      ctx.moveTo(0, -radio);
      ctx.quadraticCurveTo(c, -c, radio, 0);
      ctx.quadraticCurveTo(c, c, 0, radio);
      ctx.quadraticCurveTo(-c, c, -radio, 0);
      ctx.quadraticCurveTo(-c, -c, 0, -radio);
      ctx.fill();
      ctx.restore();
    };

    const animar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = estrellas.length - 1; i >= 0; i--) {
        const e = estrellas[i];
        e.vida -= 0.02;
        if (e.vida <= 0) {
          estrellas.splice(i, 1);
          continue;
        }
        e.x += e.vx;
        e.y += e.vy;
        e.vy += 0.015; // caen suave
        e.rotacion += e.giro;
        const radio = e.tamano * (0.4 + e.vida * 0.6);
        ctx.fillStyle = e.color;
        ctx.globalAlpha = e.vida * 0.25; // halo
        dibujarEstrella(e.x, e.y, radio * 2, e.rotacion);
        ctx.globalAlpha = e.vida;
        dibujarEstrella(e.x, e.y, radio, e.rotacion);
      }
      if (estrellas.length) {
        cuadro = requestAnimationFrame(animar);
      } else {
        cuadro = null;
        canvas.classList.remove('estela-estrellas--activa'); // en reposo no consume nada
      }
    };

    const alMover = (evento) => {
      const { clientX: x, clientY: y } = evento;
      if (Math.hypot(x - ultimo.x, y - ultimo.y) < DISTANCIA_MINIMA) return;
      ultimo = { x, y };
      if (estrellas.length >= MAX_ESTRELLAS) estrellas.shift();
      estrellas.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.6,
        tamano: 4 + Math.random() * 5,
        rotacion: Math.random() * Math.PI,
        giro: (Math.random() - 0.5) * 0.1,
        vida: 1,
        color: colores[Math.floor(Math.random() * colores.length)],
      });
      if (!cuadro) {
        canvas.classList.add('estela-estrellas--activa');
        cuadro = requestAnimationFrame(animar);
      }
    };

    ajustarTamano();
    window.addEventListener('resize', ajustarTamano);
    window.addEventListener('pointermove', alMover, { passive: true });
    return () => {
      window.removeEventListener('resize', ajustarTamano);
      window.removeEventListener('pointermove', alMover);
      if (cuadro) cancelAnimationFrame(cuadro);
    };
  }, []);

  return <canvas ref={canvasRef} className="estela-estrellas" aria-hidden="true" />;
}
