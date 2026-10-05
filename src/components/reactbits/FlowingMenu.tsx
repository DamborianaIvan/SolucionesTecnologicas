// Adapted from DavidHDev/react-bits, FlowingMenu (TS-CSS). See LICENSE.md.
// Image-free project rows, router links, keyboard/touch support and Motion hover transitions.
import { useEffect, useRef, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { animate } from "motion";
import { useReducedMotion } from "motion/react";
import type { Project } from "../../data/projects";
import "./FlowingMenu.css";

export default function FlowingMenu({ items }: { items: Project[] }) {
  return <ul className="rb-project-menu" aria-label="Proyectos de Wuidevs">
    {items.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}
  </ul>;
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const row = useRef<HTMLLIElement>(null);
  const overlay = useRef<HTMLSpanElement>(null);
  const track = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const controls = useRef<ReturnType<typeof animate>[]>([]);
  useEffect(() => () => controls.current.forEach(control => control.stop()), []);
  const run = (event: MouseEvent<HTMLAnchorElement>, entering: boolean) => {
    if (reduced || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || !row.current || !overlay.current || !track.current) return;
    const bounds = row.current.getBoundingClientRect();
    const direction = event.clientY - bounds.top < bounds.height / 2 ? -101 : 101;
    controls.current.forEach(control => control.stop());
    controls.current = [
      animate(overlay.current, { y: entering ? [`${direction}%`, "0%"] : `${direction}%` }, { duration: .45, ease: [.22, 1, .36, 1] }),
      animate(track.current, { y: entering ? [`${-direction}%`, "0%"] : `${-direction}%` }, { duration: .45, ease: [.22, 1, .36, 1] }),
    ];
  };
  const content = <>
    <span className="rb-project-number">{String(index + 1).padStart(2, "0")}</span>
    <span className="rb-project-copy"><span className="rb-project-name">{project.title}</span><span className="rb-project-description">{project.description}</span></span>
    <span className="rb-project-category">{project.tags.slice(0, 2).join(" / ")}</span>
    <ArrowUpRight className="rb-project-arrow" aria-hidden="true" />
    <span className="rb-project-marquee" ref={overlay} aria-hidden="true">
      <span className="rb-project-track" ref={track}>
        <span className="rb-project-loop">{[0, 1].map(group =>
          <span className="rb-project-loop-group" key={group}>{[0, 1].map(part =>
            <span className="rb-project-repeat" key={part}>{project.title}<ArrowUpRight /><span className="rb-project-marquee-cta">VER PROYECTO</span><span>✳</span></span>
          )}</span>
        )}</span>
      </span>
    </span>
  </>;
  const props = {
    className: "rb-project-link",
    onMouseEnter: (event: MouseEvent<HTMLAnchorElement>) => run(event, true),
    onMouseLeave: (event: MouseEvent<HTMLAnchorElement>) => run(event, false),
  };
  return <li ref={row} className="rb-project-row">
    {!project.href ? <div className="rb-project-link">{content}</div> : project.external ?
      <a {...props} href={project.href} target="_blank" rel="noopener noreferrer">{content}<span className="rb-sr-only"> (abre en otra pestaña)</span></a> :
      <Link {...props} to={project.href}>{content}</Link>}
  </li>;
}
