import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { Navbar, Footer } from "./components/Layout";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import { projects } from "./data/projects";
function RouteEffects() {
  const { pathname, hash } = useLocation();
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
      (label ? label + " | " : "") + "ST — Soluciones Tecnológicas";
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
    if (hash) {
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Ir al contenido
      </a>
      <RouteEffects />
      <Navbar />
      <main id="contenido" tabIndex={-1}>
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
      </main>
      <Footer />
    </>
  );
}
