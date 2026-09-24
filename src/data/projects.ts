export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: "project" | "app";
  href: string | null;
  external: boolean;
  cta: string;
  problem?: string;
  solution?: string;
  operation?: string;
  technologies?: string[];
  features?: string[];
  architecture?: { layer: string; items: string[] }[];
  gallery?: { src: string; alt: string; caption?: string }[];
  videos?: { src: string; title: string }[];
  links?: { label: string; href: string }[];
  relatedProject?: { label: string; href: string; title: string; description: string };
}
export const projects: Project[] = [
  {
    slug: "pepes-napoletana",
    title: "Pepe's Napoletana",
    description: "Sistema de gestión interna para la operación diaria de un restaurante.",
    image: "/art/pepes/inicio.png",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Gastronomía"],
    type: "app",
    href: "/proyectos/pepes-napoletana",
    external: false,
    cta: "Ver proyecto",
    problem:
      "Un restaurante necesita coordinar los pedidos de salón, para llevar y delivery entre la atención, la cocina y la caja, y mantener el control de mesas, insumos y ventas.",
    solution:
      "Agustina Di Natale e Ivan Damboriana desarrollaron un sistema de gestión interna que reúne estos circuitos en una sola aplicación, con pantallas y permisos según el trabajo de cada integrante del equipo.",
    operation:
      "El equipo registra pedidos de salón, takeaway o delivery; cocina los prepara y actualiza su estado; caja cobra, aplica descuentos, divide pagos por medio y emite tickets. La administración gestiona mesas, recetas, stock, usuarios, reportes y auditoría.",
    technologies: ["React", "TypeScript", "Vite", "Material UI", "Node.js", "Express", "MongoDB"],
    features: [
      "Pedidos de salón, takeaway y delivery",
      "Vista de cocina y seguimiento del estado de los pedidos",
      "Plano de mesas y liberación al cerrar pedidos de salón",
      "Caja con descuentos, pagos por distintos medios, tickets y arqueo",
      "Stock de ingredientes y recetas",
      "Reportes de ventas, caja y stock",
      "Usuarios con permisos por función y registro de actividad",
    ],
    architecture: [
      { layer: "Panel operativo", items: ["React", "TypeScript", "Vite", "Material UI"] },
      { layer: "API", items: ["Node.js", "Express", "JWT"] },
      { layer: "Datos", items: ["MongoDB", "Mongoose"] },
    ],
    gallery: [
      { src: "/art/pepes/mesas.png", alt: "Plano del salón con una mesa ocupada y las demás disponibles", caption: "01 · Estado de las mesas" },
      { src: "/art/pepes/pedido.png", alt: "Creación de un pedido de salón con tres pizzas y el total calculado", caption: "02 · Armado de pedidos" },
      { src: "/art/pepes/cocina.png", alt: "Vista de cocina con pedidos de salón, takeaway y delivery", caption: "03 · Preparación en cocina" },
      { src: "/art/pepes/caja.png", alt: "Caja con pedidos por cobrar, descuento aplicado y opción de imprimir ticket", caption: "04 · Cobros y tickets" },
      { src: "/art/pepes/recetas.png", alt: "Recetas de pizzas con ingredientes y cantidades configuradas", caption: "05 · Recetas e inventario" },
      { src: "/art/pepes/reportes.png", alt: "Resumen de ingresos, ventas y gráfico de evolución del período", caption: "06 · Reportes de ventas" },
      { src: "/art/pepes/auditoria.png", alt: "Historial de operaciones registradas en la aplicación", caption: "07 · Registro de actividad" },
    ],
    links: [
      { label: "Ver repositorio", href: "https://github.com/DamborianaIvan/pepes-napoli" },
    ],
  },
  {
    slug: "the-pet-feeder",
    title: "ThePetFeeder",
    description: "Sistema IoT de alimentación para mascotas que conecta un dispositivo físico con una aplicación web.",
    image: "/art/petfeeder.svg",
    tags: ["IoT", "ESP8266", "WiFi", "WebApp"],
    type: "project",
    href: "/proyectos/the-pet-feeder",
    external: false,
    cta: "Ver proyecto",
    problem:
      "La alimentación de una mascota necesita una forma de programarse y consultarse incluso cuando la persona no está junto al comedero.",
    solution:
      "ThePetFeeder reúne un comedero conectado y una aplicación web para administrar el dispositivo, configurar horarios y consultar su actividad a distancia.",
    operation:
      "El usuario inicia sesión en la WebApp, agrega su comedero y gestiona sus horarios. El dispositivo se conecta por WiFi y la aplicación permite consultar los comederos y el historial de alimentación.",
    technologies: ["ESP8266", "WiFi", "Motor paso a paso", "React", "TypeScript", "Express", "MongoDB"],
    features: [
      "Dispositivo conectado por WiFi",
      "Administración de comederos desde la WebApp",
      "Programación de horarios de alimentación",
      "Consulta del historial de alimentación",
      "Control del sistema desde una interfaz web",
    ],
    architecture: [
      { layer: "Aplicación web", items: ["React", "TypeScript", "Vite"] },
      { layer: "Backend / API", items: ["Node.js", "Express", "MongoDB"] },
      { layer: "Dispositivo", items: ["ESP8266", "WiFi", "Motor paso a paso"] },
    ],
    gallery: [
      {
        src: "/art/the-pet-feeder-webapp-03-comederos.jpeg",
        alt: "Listado de comederos en la aplicación de ThePetFeeder",
        caption: "01 · WebApp: mis comederos",
      },
      {
        src: "/art/the-pet-feeder-webapp-05-hora.jpeg",
        alt: "Configuración de horarios de alimentación en ThePetFeeder",
        caption: "02 · WebApp: horarios programados",
      },
      {
        src: "/art/the-pet-feeder-webapp-07-historial.jpeg",
        alt: "Historial de alimentación en ThePetFeeder",
        caption: "03 · WebApp: historial de alimentación",
      },
    ],
    links: [
      { label: "Ver la WebApp", href: "/proyectos/the-pet-feeder-webapp" },
      { label: "Abrir WebApp", href: "https://the-pet-feeder.vercel.app" },
    ],
    relatedProject: {
      label: "Conocer ThePetFeeder WebApp",
      href: "/proyectos/the-pet-feeder-webapp",
      title: "La aplicación web",
      description: "Conocé las pantallas de gestión, los horarios programados y el historial de alimentación en la ficha de la WebApp.",
    },
  },
  {
    slug: "poker-study",
    title: "Poker Study Site",
    description: "Biblioteca de estudio de poker para equipos y jugadores.",
    image: "/art/poker-study.png",
    tags: ["Web"],
    type: "app",
    href: "https://poker-study-eight.vercel.app/",
    external: true,
    cta: "Abrir aplicación",
    problem:
      "Un equipo de poker necesita organizar y centralizar material de estudio para poder acceder fácilmente a sus recursos.",
    solution:
      "Poker Study funciona como una biblioteca de estudio de poker utilizada por un team, centralizando el material necesario para el aprendizaje y análisis.",
    operation:
      "Los integrantes del equipo utilizan la plataforma como espacio de consulta para acceder al contenido de estudio de poker.",
    features: [
      "Biblioteca de material de estudio",
      "Organización de contenido de poker",
      "Acceso compartido para el equipo",
    ],
    links: [
      {
        label: "Visitar Poker Study",
        href: "https://poker-study-eight.vercel.app/",
      },
    ],
  },
  {
    slug: "the-pet-feeder-webapp",
    title: "ThePetFeeder WebApp",
    description:
      "Aplicación web desarrollada para gestionar y controlar remotamente el dispositivo IoT ThePetFeeder.",
    image: "/art/the-pet-feeder-webapp.png",
    tags: ["React", "TypeScript", "Vite", "Web", "IoT"],
    type: "app",
    href: "/proyectos/the-pet-feeder-webapp",
    external: false,
    cta: "Ver proyecto",
    problem:
      "ThePetFeeder necesita una interfaz que permita al usuario interactuar con el dispositivo de forma sencilla, consultar su estado y gestionar sus funciones sin necesidad de acceder físicamente al hardware.",
    solution:
      "Se desarrolló una WebApp específica para ThePetFeeder que funciona como interfaz de interacción entre el usuario y el dispositivo IoT, permitiendo gestionar sus funciones de forma remota desde una aplicación web.",
    operation:
      "El usuario accede a la WebApp mediante autenticación y desde su panel puede interactuar con las funcionalidades disponibles de ThePetFeeder. La aplicación actúa como la capa de usuario del sistema IoT.",
    technologies: ["React", "TypeScript", "Express.js", "MongoDB", "IoT"],
    features: [
      "Autenticación de usuarios",
      "Panel de control del dispositivo",
      "Gestión remota de ThePetFeeder",
      "Visualización del estado del dispositivo",
      "Interfaz web responsive",
      "Integración con el sistema ThePetFeeder",
    ],
    architecture: [
      {
        layer: "Frontend",
        items: ["React", "TypeScript", "Vite", "React Router"],
      },
      {
        layer: "Backend / API",
        items: ["Node.js", "Express", "MongoDB", "REST API"],
      },
      {
        layer: "Dispositivo IoT",
        items: ["ESP8266", "WiFi", "Motor paso a paso"],
      },
    ],
    gallery: [
      {
        src: "/art/the-pet-feeder-webapp-01-login.jpeg",
        alt: "Pantalla de inicio de sesión de ThePetFeeder WebApp",
        caption: "01 · Inicio de sesión",
      },
      {
        src: "/art/the-pet-feeder-webapp-02-agregar.jpeg",
        alt: "Pantalla para agregar un comedero a ThePetFeeder WebApp",
        caption: "02 · Agregar comedero",
      },
      {
        src: "/art/the-pet-feeder-webapp-03-comederos.jpeg",
        alt: "Listado de comederos de ThePetFeeder WebApp",
        caption: "03 · Mis comederos",
      },
      {
        src: "/art/the-pet-feeder-webapp-04-administracion.jpeg",
        alt: "Pantalla de administración de un comedero ThePetFeeder",
        caption: "04 · Administración del comedero",
      },
      {
        src: "/art/the-pet-feeder-webapp-05-hora.jpeg",
        alt: "Configuración de horarios programados de ThePetFeeder",
        caption: "05 · Horarios programados · Configuración",
      },
      {
        src: "/art/the-pet-feeder-webapp-06-hora.jpeg",
        alt: "Configuración avanzada de horarios programados de ThePetFeeder",
        caption: "06 · Horarios programados · Continuación",
      },
      {
        src: "/art/the-pet-feeder-webapp-07-historial.jpeg",
        alt: "Historial de alimentación de ThePetFeeder",
        caption: "07 · Historial de alimentación",
      },
    ],
    links: [
      {
        label: "Abrir WebApp",
        href: "https://the-pet-feeder.vercel.app",
      },
    ],
    relatedProject: {
      label: "Ver proyecto completo de ThePetFeeder",
      href: "/proyectos/the-pet-feeder",
      title: "El ecosistema ThePetFeeder",
      description: "Esta WebApp forma parte de un sistema IoT más amplio. El proyecto completo reúne el dispositivo, firmware, backend y aplicación web.",
    },
  },
  {
    slug: "cotizador-alimento",
    title: "Cotizador de Alimento",
    description:
      "Aplicación web para calcular la ración diaria de alimento para perros y gatos según sus características y necesidades.",
    image: "/art/cotizador-alimento.png",
    tags: ["React", "Vite", "JavaScript", "Pet Tech", "Web"],
    type: "app",
    href: "https://cotizador-alimento.vercel.app",
    external: true,
    cta: "Abrir aplicación",
    problem:
      "Determinar una ración diaria de alimento requiere considerar diferentes características de cada mascota, por lo que realizar el cálculo manualmente puede resultar poco práctico.",
    solution:
      "Se desarrolló una aplicación web que centraliza los datos de la mascota y utiliza una lógica de cálculo para estimar la ración diaria, la cantidad de comidas y los gramos por comida.",
    operation:
      "El usuario ingresa el nombre, especie, peso, tamaño, etapa de vida, nivel de actividad y condición corporal. La aplicación procesa estos datos y genera una recomendación de alimentación junto con distintos planes posibles.",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    features: [
      "Cálculo de ración diaria",
      "Soporte para perros y gatos",
      "Consideración de peso y tamaño",
      "Consideración de etapa de vida",
      "Ajuste según nivel de actividad",
      "Ajuste según condición corporal",
      "Cálculo de comidas por día",
      "Cálculo de gramos por comida",
      "Generación de planes de alimentación",
      "Validación de datos ingresados",
    ],
    links: [
      {
        label: "Abrir aplicación",
        href: "https://cotizador-alimento.vercel.app",
      },
      {
        label: "Ver repositorio",
        href: "https://github.com/DamborianaIvan/CotizadorAlimento",
      },
    ],
  },
];
