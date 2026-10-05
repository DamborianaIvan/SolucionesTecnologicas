import { track } from "../lib/analytics";
import RevealTitle from "../components/RevealTitle";
import { Mail, MessageCircle, Instagram, ArrowUpRight } from "lucide-react";
import { site } from "../config/site";
export default function Contact() {
  return (
    <section className="container section contact-page">
      <p className="eyebrow"><span className="status-dot" /> WUIDEVS / CONTACTO</p>
      <RevealTitle as="h1">Contanos tu idea.</RevealTitle>
      <p className="contact-lead">Puede ser algo que todavía no existe.<br />Puede ser un problema que todavía no encontraste cómo resolver.</p>
      <p className="contact-invite">Atención desde Balcarce. Para PC, contanos el síntoma y tu localidad; para sistemas, qué negocio tenés y qué necesitás mejorar.</p>
      <div className="contact-options">
        {site.socials.Instagram && <article><Instagram size={27} /><h2>Por Instagram</h2><a className="text-link" onClick={() => track("click_instagram", { button_location: "contact" })} href={site.socials.Instagram} target="_blank" rel="noopener noreferrer">@wuidevs.stecnologicas<ArrowUpRight size={18} /></a></article>}
        {site.email && <article><Mail size={27} /><h2>Por email</h2><a className="text-link" href={"mailto:" + site.email}>{site.email}<ArrowUpRight size={18} /></a></article>}
        {site.whatsapp && <article><MessageCircle size={27} /><h2>Por WhatsApp</h2><a className="text-link" href={"https://wa.me/" + site.whatsapp} onClick={() => track("click_whatsapp", { service: "general", button_location: "contact" })} target="_blank" rel="noopener noreferrer">Iniciar conversación<ArrowUpRight size={18} /></a></article>}
      </div>
    </section>
  );
}
