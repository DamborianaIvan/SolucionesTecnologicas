import { Mail, MessageCircle, Instagram, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../config/site";
export default function Contact() {
  return (
    <section className="container section contact-page">
      <p className="eyebrow"><span className="status-dot" /> WUIDEVS / CONTACTO</p>
      <h1>Contanos<br />tu idea<span className="spark">.</span></h1>
      <p className="contact-lead">Puede ser algo que todavía no existe.<br />Puede ser un problema que todavía no encontraste cómo resolver.</p>
      <p className="contact-invite">Hablemos.</p>
      <div className="contact-options">
        {site.socials.Instagram && <article><Instagram size={27} /><h2>Por Instagram</h2><a className="text-link" href={site.socials.Instagram} target="_blank" rel="noopener noreferrer">@wuidevs.stecnologicas<ArrowUpRight size={18} /></a></article>}
        {site.email && <article><Mail size={27} /><h2>Por email</h2><a className="text-link" href={"mailto:" + site.email}>{site.email}<ArrowUpRight size={18} /></a></article>}
        {site.whatsapp && <article><MessageCircle size={27} /><h2>Por WhatsApp</h2><a className="text-link" href={"https://wa.me/" + site.whatsapp} target="_blank" rel="noopener noreferrer">Iniciar conversación<ArrowUpRight size={18} /></a></article>}
      </div>
      <Link className="text-link" to="/proyectos">Explorá nuestros proyectos →</Link>
    </section>
  );
}
