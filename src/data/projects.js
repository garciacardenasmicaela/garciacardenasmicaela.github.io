// Para sumar un proyecto, agregá un objeto acá. La tarjeta se arma sola.
// color: 'rosa' | 'violeta' | 'turquesa' | 'durazno' · imagen: ruta en /public (opcional)
export const projects = [
  {
    id: 'club-sharks',
    titulo: 'ClubSharks',
    descripcion: 'Plataforma del club: socios, puntos, premios y gestión en tiempo real.',
    etiqueta: 'En producción',
    color: 'turquesa',
    stack: ['Angular', 'Firebase', 'Cloud Functions'],
    link: { texto: 'Ver sitio', url: 'https://clubsharks.com.ar' },
    imagen: null,
  },
  {
    id: 'desafio-sharks',
    titulo: 'Desafío Sharks',
    descripcion: 'App multiplataforma de desafíos deportivos con integración de wearables.',
    etiqueta: 'App móvil',
    color: 'violeta',
    stack: ['Ionic', 'TypeScript', 'Firebase'],
    link: null,
    imagen: null,
  },
  {
    id: 'casarecce',
    titulo: 'Casarecce Dulces y Pastas',
    descripcion: 'Sitio web y catálogo online para una fábrica de pastas frescas.',
    etiqueta: 'Web + catálogo',
    color: 'rosa',
    stack: ['Node.js', 'MySQL'],
    link: { texto: 'Ver código', url: 'https://github.com/garciacardenasmicaela/casarecce-web' },
    imagen: null,
  },
];
