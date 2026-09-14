# ST — Soluciones Tecnológicas

Webapp React + TypeScript + Vite. Interfaz en español argentino, identidad visual basada en el logo oficial suministrado.

## Ejecutar

Requiere Node.js 20.19+ o 22.12+ y npm.

```sh
npm ci
npm run dev
```

## Compilar

```sh
npm run build
npm run preview
```

El resultado queda en `dist/`. Configurar el alojamiento con fallback SPA a `index.html` para todas las rutas de aplicación. No se incluye backend.

## Contenido y configuración

- `src/config/site.ts`: email, WhatsApp (formato internacional, solo dígitos), redes, URL de ST Command y fotografía real de Sobre ST. Los valores pendientes son `null`; no producen enlaces falsos ni simulan envíos.
- `src/data/projects.ts`: proyectos, rutas, imágenes, textos, tecnologías, características, galería, videos y links. Añadir proyectos a este archivo permite mostrarlos en el listado y generar sus páginas internas sin duplicar componentes.
- `src/components/ProjectCard.tsx`: tarjeta reutilizable, soporta rutas internas y aplicaciones externas con protección `noopener noreferrer`.
- `src/pages/ProjectDetail.tsx`: ficha reutilizable con marcadores explícitos para información faltante. No se atribuyen especificaciones sin confirmar.
- `src/styles/globals.css`: tokens de color, tipografía, radios, sombras y transiciones.
- `public/logo.png`: logo oficial original. Los SVG en `public/art` son representaciones conceptuales; reemplazarlos por fotografías reales cuando estén disponibles.

## Rutas

`/`, `/proyectos`, `/proyectos/petfeeder`, `/proyectos/smart-access`, `/contacto` y estado de página no encontrada. Servicios y Sobre ST se navegan con anclas en Home; pueden migrarse a páginas dedicadas desde `App.tsx` y `Layout.tsx`.

## Accesibilidad y movimiento

Enlace para saltar al contenido, navegación semántica, foco visible, menú móvil con Escape, texto alternativo y reducción de movimiento según preferencia del sistema. El contenido usa una sola familia tipográfica con fallback del sistema. No hay animaciones constantes.

## Publicación

Sites respondió que no está habilitado en este espacio. El proyecto está preparado para publicar su carpeta `dist` en un alojamiento compatible con SPA. La publicación y los canales reales de contacto siguen pendientes; el sitio no envía mensajes mientras no se configuren.
