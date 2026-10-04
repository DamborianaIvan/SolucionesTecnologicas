import { ArrowDown, ArrowUpRight, Code2, Cpu, Wrench } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero hero-studio" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> ESTUDIO DE TECNOLOGÍA APLICADA</p>
          <h1>Ideas reales.<br />Tecnología<br /><span>sin límites.</span></h1>
          <p className="hero-description">Creamos, conectamos y resolvemos.<br />Desde una PC hasta tu próximo gran sistema.</p>
          <div className="hero-actions">
            <a className="button" href="#proyectos">Explorá nuestro trabajo <ArrowUpRight size={19} /></a>
            <a className="text-link" href="#sobre-wuidevs">El universo Wuidevs <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <div className="tech-system" aria-hidden="true">
          <div className="system-coordinate">W / SISTEMAS CONECTADOS</div>
          <div className="system-orbit orbit-outer" />
          <div className="system-orbit orbit-inner" />
          <div className="system-axis" />
          <div className="system-core"><img src="/logo.png" alt="" width="180" height="180" /></div>
          <div className="system-node node-code"><Code2 size={22} /><span>SOFTWARE</span></div>
          <div className="system-node node-hardware"><Wrench size={22} /><span>HARDWARE</span></div>
          <div className="system-node node-iot"><Cpu size={22} /><span>IOT</span></div>
          <div className="system-caption"><span className="status-dot" /> DE LA IDEA A LO TANGIBLE</div>
        </div>
        <div className="hero-bottom">
          <span>SOFTWARE <i>/</i> HARDWARE <i>/</i> INTERNET DE LAS COSAS</span>
          <a href="#manifiesto">Seguí explorando <ArrowDown size={16} /></a>
        </div>
      </div>
    </section>
  );
}
