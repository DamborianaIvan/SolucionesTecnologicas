import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useInView } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import ContactAction from "./ContactAction";
export default function Hero() {
  const reduced = useReducedMotion();
  const section = useRef<HTMLElement>(null);
  const visible = useInView(section);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -85]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const word = (delay: number) => ({ initial: { y: reduced ? 0 : 12, opacity: 1 }, animate: { y: 0, opacity: 1 }, transition: { duration: reduced ? 0 : .6, delay: reduced ? 0 : delay, ease: [.22, 1, .36, 1] as const } });
  return (
    <section className="hero hero-editorial" id="inicio" ref={section}>
      <motion.div className="hero-glow" aria-hidden="true" style={{ y: reduced ? 0 : glowY }} />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> WUIDEVS / TECNOLOGÍA APLICADA</p>
          <motion.h1 style={{ y: reduced ? 0 : titleY }} aria-label="Crear. Conectar. Resolver.">
            <span className="hero-word-mask" aria-hidden="true"><motion.span className="hero-word" {...word(0)}>Crear.</motion.span></span>{" "}
            <span className="hero-word-mask" aria-hidden="true"><motion.span className="hero-word" {...word(.08)}>Conectar.</motion.span></span><br />
            <span className="hero-word-mask hero-accent" aria-hidden="true"><motion.span className="hero-word" {...word(.16)}>Resolver.</motion.span></span>
            <motion.span className="hero-asterisk" aria-hidden="true" animate={{ rotate: !reduced && visible ? 360 : 0 }} transition={{ duration: reduced ? 0 : 24, repeat: !reduced && visible ? Infinity : 0, ease: "linear" }}>✳</motion.span>
          </motion.h1>
          <div className="hero-intro"><p className="hero-description">Sistemas a medida para comercios y restaurantes.<br />Mantenimiento de PC en Balcarce, con retiro y entrega coordinados.</p>
            <div className="service-actions"><ContactAction service="sistemas" location="hero">Consultar por un sistema <ArrowUpRight size={20} /></ContactAction><ContactAction service="pc" location="hero">Consultar por mi PC</ContactAction></div>
          </div>
        </div>
        <div className="hero-bottom"><span>SOFTWARE / HARDWARE / IOT</span><a href="#manifiesto">Seguí explorando <ArrowDown size={16} /></a></div>
      </div>
    </section>
  );
}
