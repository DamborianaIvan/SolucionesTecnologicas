import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "../config/site";
const nav = [
  ["Inicio", "/"],
  ["Proyectos", "/proyectos"],
  ["Servicios", "/#servicios"],
  ["Sobre Wuidevs", "/#sobre-wuidevs"],
  ["Contacto", "/contacto"],
];
export function Navbar() {
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
            <Link key={label} to={href} aria-current={location.pathname + location.hash === href ? "page" : undefined} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button nav-cta" to="/contacto">Hablemos <ArrowUpRight size={17} /></Link>
        <button id="menu-toggle" className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="main-nav">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Link className="footer-brand" to="/"><img src="/logo.png" alt="" width="66" height="66" /><span>WUIDEVS<small>Soluciones tecnológicas</small></span></Link>
          <p className="muted">Tecnología que funciona.<br />Soluciones que sirven.</p>
        </div>
        <nav aria-label="Pie de página">
          {nav.map(([label, href]) => <Link key={label} to={href}>{label}</Link>)}
        </nav>
        <div className="social-links">
          <span className="eyebrow">CONECTEMOS</span>
          {Object.entries(site.socials).filter(([, url]) => Boolean(url)).map(([name, url]) => (
            <a key={name} href={url!} target="_blank" rel="noopener noreferrer">{name} ↗</a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Wuidevs — Soluciones Tecnológicas</span>
        <span>Hecho con curiosidad. Y tecnología. <span className="spark">✦</span></span>
      </div>
    </footer>
  );
}
