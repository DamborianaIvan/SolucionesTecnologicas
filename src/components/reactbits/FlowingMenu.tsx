// Adapted from DavidHDev/react-bits, FlowingMenu (TS-CSS). See LICENSE.md.
// Image-free project rows, router links, keyboard/touch support and scoped GSAP cleanup.
import { useEffect, useRef, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
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
  const tween = useRef<gsap.core.Timeline | null>(null);
  const enabled = useRef(false);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      enabled.current = true;
      return () => {
        enabled.current = false;
        tween.current?.kill();
        gsap.set([overlay.current, track.current], { clearProps: "transform" });
      };
    }, row);
    return () => { tween.current?.kill(); media.revert(); };
  }, []);
  const animate = (event: MouseEvent<HTMLAnchorElement>, entering: boolean) => {
    if (!enabled.current || !row.current) return;
    const bounds = row.current.getBoundingClientRect();
    const direction = event.clientY - bounds.top < bounds.height / 2 ? -101 : 101;
    tween.current?.kill();
    const timeline = gsap.timeline({ defaults: { duration: .45, ease: "expo.out" } });
    tween.current = timeline;
    if (entering) {
      timeline.set(overlay.current, { yPercent: direction, y: 0 })
        .set(track.current, { yPercent: -direction, y: 0 })
        .to([overlay.current, track.current], { yPercent: 0 }, 0);
    } else {
      timeline.to(overlay.current, { yPercent: direction }, 0)
        .to(track.current, { yPercent: -direction }, 0);
    }
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
    onMouseEnter: (event: MouseEvent<HTMLAnchorElement>) => animate(event, true),
    onMouseLeave: (event: MouseEvent<HTMLAnchorElement>) => animate(event, false),
  };
  return <li ref={row} className="rb-project-row">
    {!project.href ? <div className="rb-project-link">{content}</div> : project.external ?
      <a {...props} href={project.href} target="_blank" rel="noopener noreferrer">{content}<span className="rb-sr-only"> (abre en otra pestaña)</span></a> :
      <Link {...props} to={project.href}>{content}</Link>}
  </li>;
}
