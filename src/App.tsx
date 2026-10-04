import { useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation, useNavigationType, Link } from "react-router-dom";
import { Navbar, Footer } from "./components/Layout";
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
    const label =
      project?.title ||
      (pathname === "/contacto"
        ? "Contacto"
        : pathname === "/proyectos"
          ? "Proyectos"
          : "");
    document.title =
      (label ? label + " | " : "") + "Wuidevs — Soluciones Tecnológicas";
    const description =
      project?.description ||
      "Informática, desarrollo e IoT para resolver problemas reales.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <RouteEffects />
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <div className="route-surface" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
          <Route path="/contacto" element={<Contact />} />
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
        </div>
      </main>
      <Footer />
    </>
  );
}
