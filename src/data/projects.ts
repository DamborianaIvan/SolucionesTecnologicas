import { site } from "../config/site";
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
  gallery?: { src: string; alt: string }[];
  videos?: { src: string; title: string }[];
  links?: { label: string; href: string }[];
}
export const projects: Project[] = [
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

    technologies: ["React", "TypeScript", "Vite", "HTML", "CSS", "IoT"],

    features: [
      "Autenticación de usuarios",
      "Panel de control del dispositivo",
      "Gestión remota de ThePetFeeder",
      "Visualización del estado del dispositivo",
      "Interfaz web responsive",
      "Integración con el sistema ThePetFeeder",
    ],

    gallery: [
      {
        src: "/art/the-pet-feeder-webapp-login.png",
        alt: "Pantalla de inicio de sesión de ThePetFeeder WebApp",
      },
      {
        src: "/art/the-pet-feeder-webapp-dashboard.png",
        alt: "Panel principal de ThePetFeeder WebApp",
      },
      {
        src: "/art/the-pet-feeder-webapp-control.png",
        alt: "Panel de control remoto de ThePetFeeder",
      },
    ],

    links: [
      {
        label: "Abrir WebApp",
        href: "https://the-pet-feeder.vercel.app/login",
      },
      {
        label: "Ver repositorio",
        href: "https://github.com/DamborianaIvan/ThePetFeeder",
      },
    ],
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
  {
    slug: "the-pet-feeder",
    title: "ThePetFeeder",
    description:
      "Sistema IoT de alimentación inteligente para mascotas, diseñado para automatizar y gestionar la alimentación de forma remota.",
    image: "/art/petfeeder.svg",
    tags: ["IoT", "Hardware", "Firmware", "Electrónica", "Web"],
    type: "project",
    href: "/proyectos/the-pet-feeder",
    external: false,
    cta: "Ver proyecto",

    problem:
      "La alimentación de una mascota puede requerir supervisión y regularidad, especialmente cuando el usuario no se encuentra en el hogar. Esto plantea la necesidad de automatizar el proceso y disponer de mecanismos para supervisar y controlar el dispositivo de forma remota.",

    solution:
      "ThePetFeeder es un sistema IoT desarrollado para automatizar la alimentación de mascotas mediante un dispositivo físico conectado, firmware de control y una plataforma web que permite gestionar y supervisar su funcionamiento.",

    operation:
      "El dispositivo ejecuta las tareas de alimentación programadas y puede interactuar con el usuario mediante su sistema de control. La arquitectura integra hardware, firmware y conectividad IoT, mientras que la WebApp permite gestionar el dispositivo remotamente.",

    technologies: [
      "IoT",
      "Electrónica",
      "Microcontroladores",
      "Firmware",
      "C++",
      "Web",
      "React",
      "TypeScript",
    ],

    features: [
      "Alimentación automatizada",
      "Control mediante hardware",
      "Programación de alimentación",
      "Conectividad IoT",
      "Monitoreo del dispositivo",
      "Control remoto",
      "Firmware propio",
      "Integración con WebApp",
      "Arquitectura hardware + software",
    ],

    gallery: [
      {
        src: "/art/the-pet-feeder-device.png",
        alt: "Dispositivo físico ThePetFeeder",
      },
      {
        src: "/art/the-pet-feeder-hardware.png",
        alt: "Hardware y componentes electrónicos de ThePetFeeder",
      },
      {
        src: "/art/the-pet-feeder-firmware.png",
        alt: "Sistema de firmware de ThePetFeeder",
      },
      {
        src: "/art/the-pet-feeder-system.png",
        alt: "Arquitectura general del sistema ThePetFeeder",
      },
    ],

    links: [
      {
        label: "Ver WebApp",
        href: "/proyectos/the-pet-feeder-webapp",
      },
      {
        label: "Abrir WebApp",
        href: "https://the-pet-feeder.vercel.app/login",
      },
      {
        label: "Ver repositorio",
        href: "https://github.com/DamborianaIvan/ThePetFeeder",
      },
    ],
  },
  {
    slug: "smart-access",
    title: "Smart Access",
    description: "Sistema inteligente de control de acceso.",
    image: "/art/smart-access.svg",
    tags: ["IoT", "Electrónica", "Software"],
    type: "project",
    href: "/proyectos/smart-access",
    external: false,
    cta: "Ver proyecto",
  },
  {
    slug: "st-command",
    title: "ST Command",
    description: "Control inteligente mediante comandos.",
    image: "/art/st-command.svg",
    tags: ["IA", "Software", "Automatización"],
    type: "app",
    href: site.apps.stCommand,
    external: true,
    cta: "Abrir aplicación",
  },
];
