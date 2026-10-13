export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageOrientation?: "portrait";
  cardImage?: string;
  tags: string[];
  type: "project" | "app";
  href: string | null;
  external: boolean;
  cta: string;
  problem?: string;
  solution?: string;
  operation?: string;
  features?: string[];
  credits?: string;
  gallery?: { src: string; alt: string; caption?: string; orientation?: "portrait" }[];
  videos?: { src: string; title: string; orientation?: "portrait"; poster?: string }[];
  links?: { label: string; href: string }[];
  relatedProject?: { label: string; href: string; title: string; description: string };
}
export const projects: Project[] = [
  {
    slug: "pepes-napoletana",
    credits: "Desarrollo en colaboración: Agustina Di Natale e Ivan Damboriana.",
    title: "Pepe's Napoletana",
    description: "Organizá pedidos, cocina, mesas, cobros y stock desde un mismo sistema.",
    image: "/art/pepes/inicio.png",
    cardImage: "/art/pepes/logo.png",
    tags: ["Restaurantes", "Gestión"],
    type: "app",
    href: "/proyectos/pepes-napoletana",
    external: false,
    cta: "Ver proyecto",
    problem:
      "Un restaurante necesita coordinar los pedidos de salón, para llevar y delivery entre la atención, la cocina y la caja, y mantener el control de mesas, insumos y ventas.",
    solution:
      "Desarrollamos un sistema que reúne estos circuitos en una sola aplicación, con pantallas y permisos según el trabajo de cada integrante del equipo.",
    operation:
      "El equipo registra pedidos de salón, para llevar o delivery; cocina los prepara y actualiza su estado; caja cobra, aplica descuentos, divide pagos por medio y emite tickets. La administración gestiona mesas, recetas, stock, usuarios, reportes y auditoría.",
    features: [
      "Pedidos de salón, para llevar y delivery",
      "Vista de cocina y seguimiento del estado de los pedidos",
      "Plano de mesas y liberación al cerrar pedidos de salón",
      "Caja con descuentos, pagos por distintos medios, tickets y arqueo",
      "Stock de ingredientes y recetas",
      "Reportes de ventas, caja y stock",
      "Usuarios con permisos por función y registro de actividad",
    ],
    gallery: [
      { src: "/art/pepes/mesas.png", alt: "Plano del salón con una mesa ocupada y las demás disponibles", caption: "01 · Estado de las mesas" },
      { src: "/art/pepes/pedido.png", alt: "Creación de un pedido de salón con tres pizzas y el total calculado", caption: "02 · Armado de pedidos" },
      { src: "/art/pepes/cocina.png", alt: "Vista de cocina con pedidos de salón, para llevar y delivery", caption: "03 · Preparación en cocina" },
      { src: "/art/pepes/caja.png", alt: "Caja con pedidos por cobrar, descuento aplicado y opción de imprimir ticket", caption: "04 · Cobros y tickets" },
      { src: "/art/pepes/recetas.png", alt: "Recetas de pizzas con ingredientes y cantidades configuradas", caption: "05 · Recetas e inventario" },
      { src: "/art/pepes/reportes.png", alt: "Resumen de ingresos, ventas y gráfico de evolución del período", caption: "06 · Reportes de ventas" },
      { src: "/art/pepes/auditoria.png", alt: "Historial de operaciones registradas en la aplicación", caption: "07 · Registro de actividad" },
    ],
  },
  {
    slug: "the-pet-feeder",
    title: "ThePetFeeder",
    description: "Comedero inteligente conectado a internet para programar horarios y consultar la alimentación de tu mascota a distancia.",
    image: "/art/the-pet-feeder/dispositivo-abierto.jpg",
    imageOrientation: "portrait",
    tags: ["Mascotas", "Alimentación automática"],
    type: "project",
    href: "/proyectos/the-pet-feeder",
    external: false,
    cta: "Ver proyecto",
    problem:
      "La alimentación de una mascota necesita una forma de programarse y consultarse incluso cuando la persona no está junto al comedero.",
    solution:
      "ThePetFeeder reúne un comedero conectado y una aplicación web para administrar el dispositivo, configurar horarios y consultar su actividad a distancia.",
    operation:
      "El usuario inicia sesión en la aplicación, agrega su comedero y gestiona sus horarios. El dispositivo se conecta por WiFi y la aplicación permite consultar los comederos y el historial de alimentación.",
    features: [
      "Dispositivo conectado por WiFi",
      "Administración de comederos desde la aplicación",
      "Programación de horarios de alimentación",
      "Consulta del historial de alimentación",
      "Uso desde el celular o la computadora",
    ],
    gallery: [
      {
        src: "/art/the-pet-feeder/dispositivo-dispensando.jpg",
        alt: "Comedero ThePetFeeder cargado, con alimento en los dos platos",
        caption: "Dispositivo y platos de alimentación",
        orientation: "portrait",
      },
      {
        src: "/art/the-pet-feeder/dispositivo-cerrado.jpg",
        alt: "Comedero ThePetFeeder con la tapa colocada",
        caption: "Diseño del comedero",
        orientation: "portrait",
      },
    ],
    videos: [
      {
        src: "/art/the-pet-feeder/funcionamiento.mp4",
        title: "Demostración del comedero desde la aplicación",
        orientation: "portrait",
        poster: "/art/the-pet-feeder/video-portada.jpg",
      },
    ],
    links: [
      { label: "Ver la aplicación", href: "/proyectos/the-pet-feeder-webapp" },
      { label: "Abrir aplicación", href: "https://the-pet-feeder.vercel.app" },
    ],
    relatedProject: {
      label: "Conocer ThePetFeeder · Aplicación",
      href: "/proyectos/the-pet-feeder-webapp",
      title: "La aplicación web",
      description: "Conocé las pantallas de gestión, los horarios programados y el historial de alimentación en la ficha de la aplicación.",
    },
  },
  {
    slug: "poker-study",
    title: "Poker Study Site",
    description: "Biblioteca de estudio de poker para equipos y jugadores.",
    image: "/art/poker-study.png",
    tags: ["Capacitación", "Equipos"],
    type: "app",
    href: "https://poker-study-eight.vercel.app/",
    external: true,
    cta: "Abrir aplicación",
    problem:
      "Un equipo de poker necesita organizar y centralizar material de estudio para poder acceder fácilmente a sus recursos.",
    solution:
      "Poker Study funciona como una biblioteca de estudio de poker utilizada por un equipo, centralizando el material necesario para el aprendizaje y análisis.",
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
    title: "ThePetFeeder · Aplicación",
    description:
      "Administrá tus comederos y consultá su actividad desde el celular o la computadora.",
    image: "/art/the-pet-feeder-webapp.png",
    tags: ["Mascotas", "Control a distancia"],
    type: "app",
    href: "/proyectos/the-pet-feeder-webapp",
    external: false,
    cta: "Ver proyecto",
    problem:
      "Quien usa ThePetFeeder necesita consultar y administrar sus comederos sin estar junto a ellos.",
    solution:
      "Desarrollamos una aplicación para reunir los comederos en una cuenta, configurar sus horarios y consultar el historial de alimentación a distancia.",
    operation:
      "Con tu cuenta podés agregar comederos, administrar sus horarios y revisar la alimentación desde el celular o la computadora.",
    features: [
      "Acceso con tu cuenta",
      "Panel de control del dispositivo",
      "Gestión remota de ThePetFeeder",
      "Visualización del estado del dispositivo",
      "Uso desde el celular o la computadora",
      "Configuración de horarios e historial de alimentación",
    ],
    gallery: [
      {
        src: "/art/the-pet-feeder-webapp-01-login.jpeg",
        alt: "Pantalla de inicio de sesión de ThePetFeeder · Aplicación",
        caption: "01 · Inicio de sesión",
        orientation: "portrait",
      },
      {
        src: "/art/the-pet-feeder-webapp-02-agregar.jpeg",
        alt: "Pantalla para agregar un comedero a ThePetFeeder · Aplicación",
        caption: "02 · Agregar comedero",
        orientation: "portrait",
      },
      {
        src: "/art/the-pet-feeder-webapp-03-comederos.jpeg",
        alt: "Listado de comederos de ThePetFeeder · Aplicación",
        caption: "03 · Mis comederos",
        orientation: "portrait",
      },
      {
        src: "/art/the-pet-feeder-webapp-04-administracion.jpeg",
        alt: "Pantalla de administración de un comedero ThePetFeeder",
        caption: "04 · Administración del comedero",
        orientation: "portrait",
      },
      {
        src: "/art/the-pet-feeder-webapp-05-hora.jpeg",
        alt: "Configuración de horarios programados de ThePetFeeder",
        caption: "05 · Horarios programados · Configuración",
        orientation: "portrait",
      },
      {
        src: "/art/the-pet-feeder-webapp-06-hora.jpeg",
        alt: "Configuración avanzada de horarios programados de ThePetFeeder",
        caption: "06 · Horarios programados · Continuación",
        orientation: "portrait",
      },
      {
        src: "/art/the-pet-feeder-webapp-07-historial.jpeg",
        alt: "Historial de alimentación de ThePetFeeder",
        caption: "07 · Historial de alimentación",
        orientation: "portrait",
      },
    ],
    links: [
      {
        label: "Abrir aplicación",
        href: "https://the-pet-feeder.vercel.app",
      },
    ],
    relatedProject: {
      label: "Ver proyecto completo de ThePetFeeder",
      href: "/proyectos/the-pet-feeder",
      title: "El comedero y su aplicación",
      description: "Conocé el comedero inteligente y cómo funciona junto con la aplicación que permite controlarlo.",
    },
  },
  {
    slug: "cotizador-alimento",
    title: "Cotizador de Alimento",
    description:
      "Aplicación web para calcular la ración diaria de alimento para perros y gatos según sus características y necesidades.",
    image: "/art/cotizador-alimento.png",
    tags: ["Mascotas", "Alimentación"],
    type: "app",
    href: "https://cotizador-alimento.vercel.app",
    external: true,
    cta: "Abrir aplicación",
    problem:
      "Determinar una ración diaria de alimento requiere considerar diferentes características de cada mascota, por lo que realizar el cálculo manualmente puede resultar poco práctico.",
    solution:
      "Se desarrolló una aplicación web que centraliza los datos de la mascota y permite estimar la ración diaria, la cantidad de comidas y los gramos por comida.",
    operation:
      "El usuario ingresa el nombre, especie, peso, tamaño, etapa de vida, nivel de actividad y condición corporal. La aplicación procesa estos datos y genera una recomendación de alimentación junto con distintos planes posibles.",
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
    ],
  },
];
