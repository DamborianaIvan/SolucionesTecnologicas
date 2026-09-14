import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ImageIcon, Film } from "lucide-react";
import { projects } from "../data/projects";
import CTA from "../components/CTA";
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug && p.type === "project");
  if (!project)
    return (
      <section className="container section">
        <h1>Proyecto no encontrado.</h1>
        <Link className="text-link" to="/proyectos">
          Ver todos los proyectos →
        </Link>
      </section>
    );
  return (
    <>
      <section className="page-heading detail-heading">
        <div className="container">
          <Link className="text-link back-link" to="/proyectos">
            <ArrowLeft size={17} />
            Todos los proyectos
          </Link>
          <p className="eyebrow">ST / PROYECTO INTERNO</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <figure className="detail-visual">
          <img
            src={project.image}
            alt={`Representación conceptual de ${project.title}`}
            width="640"
            height="440"
          />
          <figcaption>
            Representación conceptual · No es una fotografía del dispositivo.
          </figcaption>
        </figure>
        <div className="detail-body">
          <aside>
            <p className="eyebrow">EL PROYECTO</p>
            <a href="#problema">El problema</a>
            <a href="#solucion">La solución</a>
            <a href="#funcionamiento">Cómo funciona</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#galeria">Galería y videos</a>
          </aside>
          <div>
            {[
              ["problema", "El problema", project.problem],
              ["solucion", "La solución", project.solution],
              ["funcionamiento", "Cómo funciona", project.operation],
            ].map(([id, title, body]) => (
              <section id={id} key={id} className="detail-section">
                <h2>{title}</h2>
                <p className={body ? "" : "placeholder"}>
                  {body || "Información pendiente de incorporar."}
                </p>
              </section>
            ))}
            <section id="tecnologias" className="detail-section">
              <h2>Tecnologías</h2>
              {project.technologies?.length ? (
                <ul>
                  {project.technologies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              ) : (
                <p className="placeholder">
                  Las tecnologías y especificaciones técnicas se publicarán
                  cuando estén confirmadas.
                </p>
              )}
            </section>
            <section className="detail-section">
              <h2>Características</h2>
              {project.features?.length ? (
                <ul>
                  {project.features.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              ) : (
                <p className="placeholder">
                  Características pendientes de incorporar.
                </p>
              )}
            </section>
            <section className="detail-section" id="galeria">
              <h2>Galería</h2>
              {project.gallery?.length ? (
                <div className="gallery">
                  {project.gallery.map((img) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                    />
                  ))}
                </div>
              ) : (
                <div className="media-placeholder">
                  <ImageIcon />
                  <p>Fotografías del proyecto próximamente.</p>
                </div>
              )}
              <h3>Videos</h3>
              {project.videos?.length ? (
                project.videos.map((v) => (
                  <figure key={v.src}>
                    <video
                      controls
                      preload="metadata"
                      aria-label={v.title}
                      src={v.src}
                    />
                    <figcaption>{v.title}</figcaption>
                  </figure>
                ))
              ) : (
                <div className="media-placeholder">
                  <Film />
                  <p>Videos del funcionamiento próximamente.</p>
                </div>
              )}
            </section>
            <section className="detail-section">
              <h2>Links</h2>
              {project.links?.length ? (
                project.links.map((l) => (
                  <a
                    className="text-link"
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                    <ArrowUpRight size={18} />
                  </a>
                ))
              ) : (
                <p className="placeholder">
                  Enlaces del proyecto pendientes de incorporar.
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
