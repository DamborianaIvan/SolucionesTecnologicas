import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import SectionLink from "./SectionLink";
import { site } from "../config/site";
const nav = [
  ["Inicio", "/#inicio"],
  ["Proyectos", "/#proyectos"],
  ["Servicios", "/#servicios"],
  ["Sobre Wuidevs", "/#sobre-wuidevs"],
  ["Contacto", "/contacto"],
];
export function Navbar() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    if (open) document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className={"navbar" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Wuidevs — Soluciones Tecnológicas — Inicio">
          <img src="/logo.png" alt="" width="56" height="56" />
          <span><strong>WUIDEVS</strong><small>Soluciones tecnológicas</small></span>
        </Link>
        <nav id="main-nav" className={open ? "nav-links is-open" : "nav-links"} aria-label="Principal">
          {nav.map(([label, href]) => (
            <SectionLink key={label} to={href} aria-current={location.pathname + location.hash === href ? "page" : undefined} onClick={() => setOpen(false)}>
              {label}
            </SectionLink>
          ))}
        </nav>
        <Link className="button nav-cta" to="/contacto">Hablemos <ArrowUpRight size={17} /></Link>
        <motion.button whileTap={reduced ? undefined : { scale: .9 }} id="menu-toggle" className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="main-nav">
          {open ? <X /> : <Menu />}
        </motion.button>
      </div>
    </header>
  );
}
export function Footer() {
  const reduced = useReducedMotion();
  return (
    <footer className="footer">
      <motion.div className="container footer-top" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} animate={reduced ? { opacity: 1, y: 0 } : undefined} viewport={{ once: true }} transition={{ duration: .6 }}>
        <div>
          <Link className="footer-brand" to="/"><img src="/logo.png" alt="" width="66" height="66" /><span>WUIDEVS<small>Soluciones tecnológicas</small></span></Link>
          <p className="muted">Tecnología que funciona.<br />Soluciones que sirven.</p>
        </div>
        <nav aria-label="Pie de página">
          {nav.map(([label, href]) => <SectionLink key={label} to={href}>{label}</SectionLink>)}
        </nav>
        <div className="social-links">
          <span className="eyebrow">CONECTEMOS</span>
          {Object.entries(site.socials).filter(([, url]) => Boolean(url)).map(([name, url]) => (
            <a key={name} href={url!} target="_blank" rel="noopener noreferrer">{name} ↗</a>
          ))}
        </div>
      </motion.div>
      <div className="container footer-bottom">
        <span>© 2026 Wuidevs — Soluciones Tecnológicas</span>
        <span>Hecho con curiosidad. Y tecnología. <span className="spark">✦</span></span>
      </div>
    </footer>
  );
}
