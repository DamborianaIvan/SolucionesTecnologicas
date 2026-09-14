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
  whatsapp: null, // PENDIENTE: número internacional, solo dígitos
  socials: { Instagram: null, LinkedIn: null, GitHub: null },
  apps: { stCommand: null },
  aboutPhoto: null, // PENDIENTE: fotografía real del espacio Wuidevs
};
