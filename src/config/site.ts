const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5492494282057";

// Completar únicamente con datos y URLs oficiales confirmados.
// Los valores null no generan enlaces ni envíos ficticios.
export const site: {
  name: string;
  description: string;
  email: string | null;
  whatsapp: string | null;
  socials: Record<string, string | null>;
  apps: { stCommand: string | null };
  aboutPhoto: string | null;
} = {
  name: "Wuidevs — Soluciones Tecnológicas",
  description: "Informática, desarrollo e IoT para resolver problemas reales.",
  email: null, // PENDIENTE: correo oficial
  whatsapp: /^\d{8,15}$/.test(whatsappNumber) ? whatsappNumber : null, // Número oficial confirmado
  socials: { Instagram: "https://www.instagram.com/wuidevs.stecnologicas/" },
  apps: { stCommand: null },
  aboutPhoto: null, // PENDIENTE: fotografía real del espacio Wuidevs
};
