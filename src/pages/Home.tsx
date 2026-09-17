import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Wrench, Code2 } from "lucide-react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";
import { projects } from "../data/projects";

const process = [
  ["Idea", "Entendemos qué querés resolver."],
  ["Diseño", "Definimos cómo debería funcionar."],
  ["Desarrollo", "Construimos la solución."],
  ["Pruebas", "La ponemos a prueba, encontramos problemas y mejoramos."],
  ["Implementación", "La solución llega al mundo real."],
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section container manifesto" id="manifiesto">
        <div>
          <p className="eyebrow">01 / NUESTRA FORMA DE PENSAR</p>
          <h2>
            Nos gusta<br />
            crear cosas<span className="spark">.</span>
          </h2>
          <div className="maker-symbol" aria-hidden="true">
            <Wrench />
            <span />
            <Code2 />
            <span />
            <Cpu />
          </div>
        </div>
        <div className="manifesto-copy">
          <p className="manifesto-lead">
            Nos gusta entender cómo funcionan las cosas, encontrar dónde está
            el problema y pensar cómo podemos mejorarlo.
          </p>
          <div className="manifesto-examples">
            <p>A veces la solución es reparar una PC.</p>
            <p>A veces es desarrollar un sistema.</p>
            <p>
              A veces es conectar sensores, automatizar un proceso o construir
              un dispositivo desde cero.
            </p>
          </div>
          <p className="manifesto-statement">
            La tecnología cambia. El objetivo no: hacer que las cosas funcionen
            mejor.
          </p>
          <p className="muted">De eso se trata Wuidevs.</p>
        </div>
      </section>

      <section className="projects-section section" id="proyectos">
        <div className="container">
          <p className="eyebrow">02 / DE LA IDEA A LA REALIDAD</p>
          <div className="section-heading">
            <h2>
              Lo que hacemos,<br />
              habla por nosotros.
            </h2>
            <p>
              Algunos de los proyectos
              <br />
              que desarrollamos.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((p) => <ProjectCard key={p.slug} {...p} />)}
          </div>
          <div className="projects-more">
            <span>Software, hardware y muchas ganas de construir.</span>
            <Link className="text-link" to="/proyectos">
              Ver todos los proyectos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="process-section section">
        <div className="container">
          <p className="eyebrow">04 / CÓMO TRABAJAMOS</p>
          <h2>De una idea a algo que funciona.</h2>
          <ol className="process-list">
            {process.map(([name, description], i) => (
              <li key={name}>
                <span className="process-node">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container home-links">
        <p className="eyebrow">EXPLORÁ WUIDEVS</p>
        <div className="section-heading">
          <h2>
            Conocé más<br />
            sobre nosotros<span className="spark">.</span>
          </h2>
          <p>
            Descubrí nuestros servicios y la historia detrás de Wuidevs.
          </p>
        </div>
        <div className="home-links-actions">
          <Link className="button" to="/servicios">
            Ver servicios <ArrowRight size={18} />
          </Link>
          <Link className="text-link" to="/sobre-wuidevs">
            Sobre Wuidevs <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
