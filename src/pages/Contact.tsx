import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
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
        <article><Mail size={27} /><h2>Por email</h2>{site.email ? <a className="text-link" href={"mailto:" + site.email}>{site.email}<ArrowUpRight size={18} /></a> : <p>El correo de contacto estará disponible próximamente.</p>}</article>
        <article><MessageCircle size={27} /><h2>Por WhatsApp</h2>{site.whatsapp ? <a className="text-link" href={"https://wa.me/" + site.whatsapp} target="_blank" rel="noopener noreferrer">Iniciar conversación<ArrowUpRight size={18} /></a> : <p>El canal de WhatsApp estará disponible próximamente.</p>}</article>
      </div>
      {!site.email && !site.whatsapp && <p className="contact-notice">Estamos preparando nuestros canales de contacto. Mientras tanto, podés conocer lo que hacemos.</p>}
      <Link className="text-link" to="/proyectos">Explorá nuestros proyectos →</Link>
    </section>
  );
}
