# Portfolio · Micaela García Cárdenas

Portfolio personal con estética glassmorphism, hecho con **React + Vite** y CSS propio.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí la dirección que muestra la terminal (normalmente http://localhost:5173).

## Estructura

```
src/
├── components/
│   ├── ui/          → piezas reutilizables (Button, Chip, Panel, ProgressBar, GemIcon, Sparkle, Reveal)
│   ├── cards/       → tarjetas (ProjectCard)
│   ├── effects/     → efectos visuales (StarTrail: estrellas en el mouse)
│   └── layout/      → Navbar y Footer
├── sections/        → secciones de la página (Hero, About, Skills, Projects, Contact)
├── data/            → todo el contenido editable (perfil, skills, proyectos, navegación)
├── hooks/           → lógica reutilizable (useReveal)
└── styles/          → variables.css (paleta), animations.css y global.css
```

## Cómo editar

- **Textos y datos:** todo está en `src/data/`. No hace falta tocar componentes.
- **Agregar un proyecto:** sumá un objeto en `src/data/projects.js`. Para poner una captura, guardala en `public/` y completá `imagen: '/nombre.png'`.
- **Colores:** están en `src/styles/variables.css` con nombre propio (`--noche-profunda`, `--aurora-rosa`, `--aurora-violeta`, `--aurora-turquesa`, `--aurora-durazno`…). Usá siempre las variables.
- **Vidrio:** la clase `.vidrio` aplica el efecto glassmorphism a cualquier elemento.
- **Colores en componentes:** `Chip`, `ProgressBar` y `ProjectCard` reciben `color="rosa" | "violeta" | "turquesa" | "durazno"`. `Button` recibe `variante="primario" | "vidrio"`.

## Publicar

```bash
npm run build
```

Subí el repo a GitHub e importalo en [Vercel](https://vercel.com): detecta Vite solo.
