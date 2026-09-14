import { Link } from "react-router-dom";
import {
  ArrowRight,
  Monitor,
  Code2,
  Workflow,
  Cpu,
  Wrench,
  Sparkles,
} from "lucide-react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import CTA from "../components/CTA";
import { projects } from "../data/projects";
import { site } from "../config/site";
const services = [
  {
    name: "Informática",
    icon: Monitor,
    description: "Hardware y software, desde el diagnóstico hasta la solución.",
    items: [
      "Reparación de PC",
      "Mantenimiento y optimización",
      "Diagnóstico de hardware",
      "Instalación y configuración de software",
      "Resolución de problemas informáticos",
    ],
  },
  {
    name: "Desarrollo",
    icon: Code2,
    description: "Sistemas y aplicaciones pensados para necesidades concretas.",
    items: [
      "Desarrollo de sistemas",
      "Aplicaciones web",
      "Automatización",
      "Integraciones",
      "Soluciones personalizadas",
    ],
  },
  {
    name: "IoT",
    icon: Workflow,
    description: "Dispositivos que conectan el mundo físico con el digital.",
    items: [
      "Dispositivos inteligentes",
      "Sensores y actuadores",
      "Automatización",
      "Monitoreo",
      "Sistemas conectados",
    ],
  },
];
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
            Nos gusta
            <br />
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
            Nos gusta entender cómo funcionan las cosas, encontrar dónde está el
            problema y pensar cómo podemos mejorarlo.
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
          <p className="muted">De eso se trata ST.</p>
        </div>
      </section>
      <section className="projects-section section" id="proyectos">
        <div className="container">
          <p className="eyebrow">02 / DE LA IDEA A LA REALIDAD</p>
          <div className="section-heading">
            <h2>
              Lo que hacemos,
              <br />
              habla por nosotros.
            </h2>
            <p>
              Algunos de los proyectos
              <br />
              que desarrollamos.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
          <div className="projects-more">
            <span>Software, hardware y muchas ganas de construir.</span>
            <Link className="text-link" to="/proyectos">
              Ver todos los proyectos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section container" id="servicios">
        <p className="eyebrow">03 / TECNOLOGÍA APLICADA</p>
        <div className="section-heading">
          <h2>¿Qué hacemos?</h2>
          <p>
            Soluciones tecnológicas
            <br />
            para problemas reales.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <article className={"service service-" + i} key={s.name}>
              <div className="service-top">
                <div className="service-icon" aria-hidden="true">
                  <s.icon size={33} strokeWidth={1.5} />
                </div>
                <span>0{i + 1}</span>
              </div>
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="service-baseline">
          Reparación de PC's <span>·</span> Software y Hardware <span>·</span>{" "}
          Automatización <span>·</span> Sistemas
        </p>
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
      <section className="section container about" id="sobre-st">
        <div className="about-visual">
          {site.aboutPhoto ? (
            <img
              src={site.aboutPhoto}
              alt="Espacio de trabajo de ST"
              loading="lazy"
            />
          ) : (
            <>
              <div className="about-grid" aria-hidden="true" />
              <div className="about-mark" aria-hidden="true">
                <span>crear.</span>
                <span>conectar.</span>
                <span>
                  resolver<span className="spark">.</span>
                </span>
              </div>
              <span className="about-caption">
                <Sparkles size={15} /> LA CURIOSIDAD ES EL PUNTO DE PARTIDA.
              </span>
            </>
          )}
        </div>
        <div>
          <p className="eyebrow">05 / DETRÁS DE ST</p>
          <h2>¿Qué es ST?</h2>
          <p className="about-lead">
            ST — Soluciones Tecnológicas — es un espacio dedicado al desarrollo
            de tecnología aplicada.
          </p>
          <p>
            Nace de una pasión por crear, experimentar y encontrar nuevas formas
            de resolver problemas.
          </p>
          <p>
            Desarrollamos proyectos propios y soluciones a medida combinando
            software, hardware, IoT, automatización e inteligencia artificial.
          </p>
          <div className="about-signature">
            <span className="status-dot" /> Tecnología con propósito.
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
