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
];
