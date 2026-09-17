import { Monitor, Code2, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";

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

export default function Services() {
  return (
    <>
      <section className="page-heading">
        <div className="container">
          <Link className="text-link back-link" to="/">
            ← Volver al inicio
          </Link>
          <p className="eyebrow">03 / TECNOLOGÍA APLICADA</p>
          <h1>¿Qué hacemos?</h1>
          <p>Soluciones tecnológicas para problemas reales.</p>
        </div>
      </section>

      <section className="section container">
        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <article className={`service service-${i}`} key={service.name}>
                <div className="service-top">
                  <div className="service-icon" aria-hidden="true">
                    <Icon size={33} strokeWidth={1.5} />
                  </div>
                  <span>0{i + 1}</span>
                </div>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <p className="service-baseline">
          Reparación de PC's <span>·</span> Software y Hardware <span>·</span>
          Automatización <span>·</span> Sistemas
        </p>
      </section>

      <CTA />
    </>
  );
}
