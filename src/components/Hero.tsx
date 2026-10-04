import { ArrowDown, ArrowUpRight } from "lucide-react";
export default function Hero() {
  return (
    <section className="hero hero-editorial" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> WUIDEVS / TECNOLOGÍA APLICADA</p>
          <h1>Crear. Conectar.<br /><span>Resolver.</span><span className="hero-asterisk" aria-hidden="true">✳</span></h1>
          <div className="hero-intro"><p className="hero-description">Tecnología que funciona. Soluciones que sirven.<br />Informática, desarrollo e IoT para problemas reales.</p>
            <a className="button" href="#proyectos">Explorá los proyectos <ArrowUpRight size={20} /></a>
          </div>
        </div>
        <div className="hero-bottom"><span>SOFTWARE / HARDWARE / IOT</span><a href="#manifiesto">Seguí explorando <ArrowDown size={16} /></a></div>
      </div>
    </section>
  );
}
