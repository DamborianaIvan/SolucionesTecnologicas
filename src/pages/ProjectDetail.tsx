import ImageViewer from "../components/ImageViewer";
import RevealTitle from "../components/RevealTitle";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Film, Maximize2 } from "lucide-react";
import { projects, type Project } from "../data/projects";
import CTA from "../components/CTA";
import "../styles/project-detail.css";

function ProjectMedia({ project }: { project: Project }) {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
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
            <motion.video initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: .4 }} key={active.src} controls preload="metadata" playsInline poster={active.poster} aria-label={active.alt} src={active.src} />
          ) : (
            <button className="media-expand" type="button" onClick={() => setViewerOpen(true)} aria-label={`Abrir ${active.caption} en pantalla completa`}>
            <motion.img initial={{ opacity: reduced ? 1 : 0, scale: reduced ? 1 : .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .4 }} key={active.src} src={active.src} alt={active.alt} />
            <span className="media-expand-hint"><Maximize2 size={18} /> Ampliar captura</span>
            </button>
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
      {viewerOpen && active.kind === "image" && <ImageViewer
        images={media.filter(item => item.kind === "image")}
        initialIndex={media.filter(item => item.kind === "image").findIndex(item => item.src === active.src)}
        onClose={() => setViewerOpen(false)}
      />}
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
    ["problema", "Qué necesitaba resolver", project.problem],
    ["solucion", "Qué solución desarrollamos", project.solution],
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
            WUIDEVS / PROYECTO
          </p>
          <RevealTitle as="h1">{project.title}</RevealTitle>
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
            {project.problem && <a href="#problema">La necesidad</a>}
            {project.solution && <a href="#solucion">La solución</a>}
            <a href="#funcionalidades">Qué permite hacer</a>
          </aside>

          <div>
            {detailSections.filter(([, , body]) => body).map(([id, title, body]) => (
              <section id={id} key={id} className="detail-section">
                <RevealTitle>{title}</RevealTitle>
                <p>{body}</p>
              </section>
            ))}

            <section id="funcionalidades" className="detail-section">
              <RevealTitle>Qué permite hacer</RevealTitle>
              {project.operation && <p>{project.operation}</p>}
              {project.features?.length ? (
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              ) : null}
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

            {project.links?.length ? <section className="detail-section">
              <h2>Conocé la aplicación</h2>
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
            </section> : null}
            {project.credits && <p className="muted">{project.credits}</p>}
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
