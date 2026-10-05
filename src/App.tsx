import { motion, MotionConfig, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation, useNavigationType, Link } from "react-router-dom";
import { Navbar, Footer } from "./components/Layout";
import Service from "./pages/Service";
import { services } from "./data/services";
import { track, trackPage } from "./lib/analytics";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import { projects } from "./data/projects";
import { scrollToSection } from "./components/SectionLink";
import { usePageMotion } from "./hooks/usePageMotion";
import "./styles/motion.css";

function RouteEffects() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map<string, number>());
  const previousPath = useRef(pathname);
  const firstVisit = useRef(true);
  usePageMotion(pathname);
  useEffect(() => {
    const previous = history.scrollRestoration;
    history.scrollRestoration = "manual";
    return () => { history.scrollRestoration = previous; };
  }, []);
  useLayoutEffect(() => {
    const changedPage = previousPath.current !== pathname;
    const initial = firstVisit.current;
    previousPath.current = pathname;
    firstVisit.current = false;
    if (changedPage) document.getElementById("contenido")?.focus({ preventScroll: true });
    let applied = false;
    const frame = requestAnimationFrame(() => {
      applied = true;
      const savedPosition = positions.current.get(key);
      if (navigationType === "POP" && savedPosition !== undefined) {
        window.scrollTo({ top: savedPosition, behavior: "instant" });
      } else if (hash) {
        scrollToSection(hash);
      } else if (changedPage || initial) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => {
      cancelAnimationFrame(frame);
      if (applied) positions.current.set(key, window.scrollY);
    };
  }, [pathname, hash, key, navigationType]);
  useEffect(() => {
    const project = projects.find((p) => p.href === pathname);
    const service = services.find(s => pathname === `/servicios/${s.slug}`);
    const label =
      project?.title ||
      (pathname === "/contacto"
        ? "Contacto"
        : pathname === "/proyectos"
          ? "Proyectos"
          : "");
    document.title =
      service?.title || (pathname === "/" ? "Wuidevs | Sistemas a medida y mantenimiento PC en Balcarce" : (label ? label + " | " : "") + "Wuidevs — Soluciones Tecnológicas");
    const description =
      service?.description || project?.description ||
      "Sistemas a medida para comercios y restaurantes. Mantenimiento de PC en Balcarce con retiro y entrega coordinados.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    const canonical = document.querySelector('link[rel="canonical"]') || document.head.appendChild(document.createElement("link"));
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", "https://wuidevs-stecnologicas.vercel.app" + pathname);
    trackPage(pathname);
    if (service) track("view_service", { service: service.key });
  }, [pathname]);
  return null;
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  const reduced = useReducedMotion();
  return <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: reduced ? scrollYProgress : scaleX }} />;
}
export default function App() {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <RouteEffects />
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <motion.div className="route-surface" key={pathname} initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: .3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/servicios/:slug" element={<Service />} />
          <Route
            path="*"
            element={
              <section className="container section">
                <p className="eyebrow">404 / PÁGINA NO ENCONTRADA</p>
                <h1>Por acá no hay conexión.</h1>
                <Link className="button" to="/">
                  Volver al inicio →
                </Link>
              </section>
            }
          />
        </Routes>
        </motion.div>
      </main>
      <Footer />
    </MotionConfig>
  );
}
