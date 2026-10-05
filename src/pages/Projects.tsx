import RevealTitle from "../components/RevealTitle";
import FlowingMenu from "../components/reactbits/FlowingMenu";
import CTA from "../components/CTA";
import { projects } from "../data/projects";
export default function ProjectsPage() {
  return (
    <>
      <section className="page-heading"><div className="container"><p className="eyebrow">WUIDEVS / PROYECTOS</p><RevealTitle as="h1">Lo que hacemos, habla por nosotros.</RevealTitle><p>Algunos de los proyectos que desarrollamos.</p></div></section>
      <section className="section container project-list"><FlowingMenu items={projects} /></section>
      <CTA />
    </>
  );
}
