import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Film, Layers3 } from "lucide-react";
import { projects, type Project } from "../data/projects";
import CTA from "../components/CTA";
import "../styles/project-detail.css";

function ProjectMedia({ project }: { project: Project }) {
  const [selected, setSelected] = useState(0);
  const media: { src: string; alt: string; caption: string; kind: "image" | "video"; orientation?: "portrait"; poster?: string }[] = [
    { src: project.image, alt: `Vista general de ${project.title}`, caption: "Vista general", kind: "image" as const, orientation: project.imageOrientation },
    ...(project.gallery ?? []).map((item) => ({
      ...item,
      caption: (item.caption || item.alt).replace(/^\d{2} · /, ""),
      kind: "image" as const,
    })),
    ...(project.videos ?? []).map((item) => ({ ...item, alt: item.title, caption: item.title, kind: "video" as const })),
  ];
  const active = media[selected];

  return (
    <section className="project-media" id="galeria" aria-label={`Galería de ${project.title}`}>
      <div className="project-media-heading">
        <div>
          <p className="eyebrow">EXPLORÁ EL PROYECTO</p>
          <h2>{media.length > 1 ? "Un recorrido visual" : "Vista del proyecto"}</h2>
        </div>
        {media.length > 1 && <span className="media-count">{String(selected + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}</span>}
      </div>

      <figure className="media-feature">
        <div className={`media-feature-frame${active.orientation === "portrait" ? " is-portrait" : ""}`}>
          {active.kind === "video" ? (
            <video key={active.src} controls preload="metadata" playsInline poster={active.poster} aria-label={active.alt} src={active.src} />
          ) : (
            <img key={active.src} src={active.src} alt={active.alt} />
          )}
        </div>
        <figcaption aria-live="polite">{active.caption}</figcaption>
      </figure>

      {media.length > 1 && (
        <div className="media-navigation">
          <button className="media-arrow" type="button" onClick={() => setSelected((selected - 1 + media.length) % media.length)} aria-label="Ver elemento anterior"><ChevronLeft size={22} /></button>
          <div className="media-thumbnails" role="group" aria-label="Elegir imagen o video">
            {media.map((item, index) => (
              <button
                key={`${item.kind}-${item.src}`}
                type="button"
                className={`media-thumbnail${selected === index ? " is-active" : ""}${item.orientation === "portrait" ? " is-portrait" : ""}`}
                onClick={() => setSelected(index)}
                aria-label={`Ver ${item.caption}`}
                aria-pressed={selected === index}
              >
                <span className="media-thumbnail-preview">
                  {item.kind === "video" ? (item.poster ? <img src={item.poster} alt="" loading="lazy" /> : <Film size={26} aria-hidden="true" />) : <img src={item.src} alt="" loading="lazy" />}
                </span>
                <span className="media-thumbnail-label">{item.caption}</span>
              </button>
            ))}
          </div>
          <button className="media-arrow" type="button" onClick={() => setSelected((selected + 1) % media.length)} aria-label="Ver elemento siguiente"><ChevronRight size={22} /></button>
        </div>
      )}
    </section>
  );
}

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
        <ProjectMedia key={project.slug} project={project} />

        <div className="detail-body">
          <aside>
            <p className="eyebrow">EL PROYECTO</p>
            <a href="#galeria">Galería</a>
            <a href="#problema">El problema</a>
            <a href="#solucion">La solución</a>
            <a href="#funcionamiento">Cómo funciona</a>
            {project.architecture?.length ? <a href="#arquitectura">Arquitectura</a> : null}
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#tecnologias">Tecnologías</a>
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

            {project.relatedProject ? (
              <section className="detail-section related-project">
                <p className="eyebrow">PROYECTO RELACIONADO</p>
                <h2>{project.relatedProject.title}</h2>
                <p>{project.relatedProject.description}</p>
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
