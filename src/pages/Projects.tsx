import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";
import { projects } from "../data/projects";
export default function ProjectsPage() {
  return (
    <>
      <section className="page-heading"><div className="container"><p className="eyebrow">WUIDEVS / PROYECTOS</p><h1>Lo que hacemos,<br /><span>habla por nosotros.</span></h1><p>Algunos de los proyectos que desarrollamos.</p></div></section>
      <section className="section container project-list"><div className="projects-grid">{projects.map((p) => <ProjectCard key={p.slug} {...p} />)}</div><p className="art-note">Las imágenes son representaciones conceptuales. Las fotografías reales se incorporarán a cada proyecto.</p></section>
      <CTA />
    </>
  );
}
