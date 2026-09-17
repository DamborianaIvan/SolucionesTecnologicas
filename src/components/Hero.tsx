import { ArrowRight, ArrowUpRight } from "lucide-react";
export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> INFORMÁTICA / DESARROLLO / IOT</p>
          <h1>Tecnología que funciona.<br /><span>Soluciones que sirven.</span></h1>
          <p className="hero-description">Informática, desarrollo e IoT para resolver problemas reales,<br className="desktop-break" /> desde una PC hasta un sistema completo.</p>
          <div className="hero-actions">
            <a className="button" href="#proyectos">Ver proyectos <ArrowUpRight size={19} /></a>
            <a className="text-link" href="#sobre-wuidevs">Conocé Wuidevs <ArrowRight size={18} /></a>
          </div>
        </div>
        <div className="hero-logo-wrap" aria-hidden="true"><div className="hero-orbit" /><img src="/logo.png" alt="" width="520" height="520" /></div>
        <div className="hero-bottom">
          <span>IDEAS QUE SE CONECTAN. SOLUCIONES QUE COBRAN VIDA.</span>
          <a href="#manifiesto">Explorá Wuidevs ↓</a>
        </div>
      </div>
    </section>
  );
}
