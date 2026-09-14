import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import "./ProjectCard.css";

export type ProjectCardProps = Pick<
  Project,
  | "title"
  | "description"
  | "image"
  | "tags"
  | "type"
  | "href"
  | "external"
  | "cta"
>;

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  type,
  href,
  external,
  cta,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <img
          src={image}
          alt={`Ilustración conceptual de ${title}`}
          width="640"
          height="440"
          loading="lazy"
        />
        <span className="project-type">
          {type === "project" ? "PROYECTO INTERNO" : "WEB APP"}
        </span>
      </div>
      <div className="project-content">
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        {href ? (
          external ? (
            <a
              className="card-link"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta}
              <ArrowUpRight size={18} />
            </a>
          ) : (
            <Link className="card-link" to={href}>
              {cta}
              <ArrowRight size={18} />
            </Link>
          )
        ) : (
          <div className="card-link pending">
            <span>{cta}</span>
            <span className="soon">Próximamente</span>
          </div>
        )}
      </div>
    </article>
  );
}
