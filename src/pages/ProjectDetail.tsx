import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ImageIcon, Film, Layers3 } from "lucide-react";
import { projects } from "../data/projects";
import CTA from "../components/CTA";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="container section">
        <h1>Proyecto no encontrado.</h1>
        <Link className="text-link" to="/proyectos">
          Ver todos los proyectos →
        </Link>
      </section>
    );
  }

  const detailSections = [
    ["problema", "El problema", project.problem],
    ["solucion", "La solución", project.solution],
    ["funcionamiento", "Cómo funciona", project.operation],
  ] as const;

  return (
    <>
      <section className="page-heading detail-heading">
        <div className="container">
          <Link className="text-link back-link" to="/proyectos">
            <ArrowLeft size={17} />
            Todos los proyectos
          </Link>
          <p className="eyebrow">
            WUIDEVS / {project.type === "project" ? "PROYECTO INTERNO" : "WEB APP"}
          </p>
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
            {project.architecture?.length ? <a href="#arquitectura">Arquitectura</a> : null}
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#galeria">Galería y videos</a>
          </aside>

          <div>
            {detailSections.map(([id, title, body]) => (
              <section id={id} key={id} className="detail-section">
                <h2>{title}</h2>
                <p className={body ? "" : "placeholder"}>
                  {body || "Información pendiente de incorporar."}
                </p>
              </section>
            ))}

            {project.architecture?.length ? (
              <section id="arquitectura" className="detail-section">
                <div className="detail-section-heading">
                  <Layers3 size={22} />
                  <h2>Arquitectura</h2>
                </div>
                <div className="architecture-grid">
                  {project.architecture.map((layer) => (
                    <article className="architecture-card" key={layer.layer}>
                      <p className="eyebrow">CAPA</p>
                      <h3>{layer.layer}</h3>
                      <div className="tags">
                        {layer.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            <section id="funcionalidades" className="detail-section">
              <h2>Funcionalidades</h2>
              {project.features?.length ? (
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <p className="placeholder">Características pendientes de incorporar.</p>
              )}
            </section>

            <section id="tecnologias" className="detail-section">
              <h2>Tecnologías</h2>
              {project.technologies?.length ? (
                <ul>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              ) : (
                <p className="placeholder">
                  Las tecnologías y especificaciones técnicas se publicarán cuando estén confirmadas.
                </p>
              )}
            </section>

            <section className="detail-section" id="galeria">
              <h2>Galería</h2>
              {project.gallery?.length ? (
                <div className="gallery">
                  {project.gallery.map((img) => (
                    <figure key={img.src} className="gallery-item">
                      <img src={img.src} alt={img.alt} loading="lazy" />
                      <figcaption>{img.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="media-placeholder">
                  <ImageIcon />
                  <p>Fotografías del proyecto próximamente.</p>
                </div>
              )}

              {project.videos?.length ? <h3>Videos</h3> : null}
              {project.videos?.length ? (
                project.videos.map((video) => (
                  <figure key={video.src}>
                    <video
                      controls
                      preload="metadata"
                      aria-label={video.title}
                      src={video.src}
                    />
                    <figcaption>{video.title}</figcaption>
                  </figure>
                ))
              ) : null}
              {!project.gallery?.length && !project.videos?.length ? (
                <div className="media-placeholder">
                  <Film />
                  <p>Contenido audiovisual del proyecto próximamente.</p>
                </div>
              ) : null}
            </section>

            {project.relatedProject ? (
              <section className="detail-section related-project">
                <p className="eyebrow">PROYECTO RELACIONADO</p>
                <h2>El ecosistema ThePetFeeder</h2>
                <p>
                  Esta WebApp forma parte de un sistema IoT más amplio. El proyecto completo reúne el dispositivo,
                  firmware, backend y aplicación web.
                </p>
                <Link className="text-link" to={project.relatedProject.href}>
                  {project.relatedProject.label}
                  <ArrowUpRight size={18} />
                </Link>
              </section>
            ) : null}

            <section className="detail-section">
              <h2>Links</h2>
              {project.links?.length ? (
                <div className="detail-links">
                  {project.links.map((link) => {
                    const isInternal = link.href.startsWith("/");

                    return isInternal ? (
                      <Link className="text-link" key={link.href} to={link.href}>
                        {link.label}
                        <ArrowUpRight size={18} />
                      </Link>
                    ) : (
                      <a
                        className="text-link"
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <ArrowUpRight size={18} />
                      </a>
                    );
                  })}
                </div>
              ) : (
                <p className="placeholder">Enlaces del proyecto pendientes de incorporar.</p>
              )}
            </section>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
