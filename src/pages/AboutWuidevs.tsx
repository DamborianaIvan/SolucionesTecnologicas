import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../config/site";
import CTA from "../components/CTA";

export default function AboutWuidevs() {
  return (
    <>
      <section className="page-heading">
        <div className="container">
          <Link className="text-link back-link" to="/">
            ← Volver al inicio
          </Link>
          <p className="eyebrow">05 / DETRÁS DE WUIDEVS</p>
          <h1>¿Qué es Wuidevs?</h1>
          <p>Un espacio dedicado al desarrollo de tecnología aplicada.</p>
        </div>
      </section>

      <section className="section container about">
        <div className="about-visual">
          {site.aboutPhoto ? (
            <img
              src={site.aboutPhoto}
              alt="Espacio de trabajo de Wuidevs"
              loading="lazy"
            />
          ) : (
            <>
              <div className="about-grid" aria-hidden="true" />
              <div className="about-mark" aria-hidden="true">
                <span>crear.</span>
                <span>conectar.</span>
                <span>
                  resolver<span className="spark">.</span>
                </span>
              </div>
              <span className="about-caption">
                <Sparkles size={15} /> LA CURIOSIDAD ES EL PUNTO DE PARTIDA.
              </span>
            </>
          )}
        </div>

        <div>
          <p className="eyebrow">WUIDEVS — SOLUCIONES TECNOLÓGICAS</p>
          <h2>Crear, experimentar y resolver.</h2>
          <p className="about-lead">
            Wuidevs — Soluciones Tecnológicas — es un espacio dedicado al
            desarrollo de tecnología aplicada.
          </p>
          <p>
            Nace de una pasión por crear, experimentar y encontrar nuevas
            formas de resolver problemas.
          </p>
          <p>
            Desarrollamos proyectos propios y soluciones a medida combinando
            software, hardware, IoT, automatización e inteligencia artificial.
          </p>
          <div className="about-signature">
            <span className="status-dot" /> Tecnología con propósito.
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
