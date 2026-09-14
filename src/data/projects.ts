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
    slug: "petfeeder",
    title: "PetFeeder",
    description: "Alimentador inteligente para mascotas.",
    image: "/art/petfeeder.svg",
    tags: ["IoT", "Hardware", "Firmware", "Web"],
    type: "project",
    href: "/proyectos/petfeeder",
    external: false,
    cta: "Ver proyecto",
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
  {
    slug: "poker-study",
    title: "Poker Study Site",
    description: "Biblioteca de estudio de poker para equipos y jugadores.",
    image: "/art/poker-study.png",
    tags: ["Poker", "Estudio", "Biblioteca"],
    type: "project",
    href: "https://poker-study-eight.vercel.app/",
    external: true,
    cta: "Visitar proyecto",

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
    slug: "the-pet-feeder",
    title: "ThePetFeeder Site",
    description:
      "WebApp para controlar y gestionar remotamente el dispositivo IoT ThePetFeeder.",
    image: "/art/the-pet-feeder.png",
    tags: ["IoT", "Web"],
    type: "app",
    href: "https://the-pet-feeder.vercel.app",
    external: true,
    cta: "Abrir aplicación",

    problem:
      "Controlar un dispositivo IoT de alimentación para mascotas de forma remota requiere una interfaz que permita gestionar su funcionamiento sin necesidad de interactuar físicamente con el equipo.",

    solution:
      "ThePetFeeder incorpora una WebApp desarrollada específicamente para controlar y gestionar remotamente el dispositivo IoT, conectando la experiencia de usuario con el alimentador inteligente.",

    operation:
      "El usuario accede a la WebApp y utiliza su interfaz para interactuar remotamente con el dispositivo ThePetFeeder.",

    features: [
      "Control remoto del dispositivo IoT",
      "Interfaz web de gestión",
      "Acceso mediante autenticación",
      "Integración con ThePetFeeder",
    ],

    links: [
      {
        label: "Abrir ThePetFeeder",
        href: "https://the-pet-feeder.vercel.app",
      },
    ],
  },
];
