import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
export default function Hero() {
  const reduced = useReducedMotion();
  const word = (delay: number) => ({ initial: { y: reduced ? 0 : "115%", opacity: reduced ? 1 : 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: reduced ? 0 : 1, delay: reduced ? 0 : delay, ease: [.22, 1, .36, 1] as const } });
  return (
    <section className="hero hero-editorial" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> WUIDEVS / TECNOLOGÍA APLICADA</p>
          <h1 aria-label="Crear. Conectar. Resolver.">
            <span className="hero-word-mask" aria-hidden="true"><motion.span className="hero-word" {...word(0.15)}>Crear.</motion.span></span>{" "}
            <span className="hero-word-mask" aria-hidden="true"><motion.span className="hero-word" {...word(0.35)}>Conectar.</motion.span></span><br />
            <span className="hero-word-mask hero-accent" aria-hidden="true"><motion.span className="hero-word" {...word(0.55)}>Resolver.</motion.span></span>
            <span className="hero-asterisk" aria-hidden="true">✳</span>
          </h1>
          <div className="hero-intro"><p className="hero-description">Tecnología que funciona. Soluciones que sirven.<br />Informática, desarrollo e IoT para problemas reales.</p>
            <a className="button" href="#proyectos">Explorá los proyectos <ArrowUpRight size={20} /></a>
          </div>
        </div>
        <div className="hero-bottom"><span>SOFTWARE / HARDWARE / IOT</span><a href="#manifiesto">Seguí explorando <ArrowDown size={16} /></a></div>
      </div>
    </section>
  );
}
