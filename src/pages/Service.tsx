import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
import ContactAction from "../components/ContactAction";
export default function Service() {
 const { slug } = useParams(); const service = services.find(s => s.slug === slug);
 if (!service) return <section className="container section"><h1>Servicio no encontrado</h1><Link to="/">Volver al inicio</Link></section>;
 return <section className="container section service-page"><p className="eyebrow">WUIDEVS / {service.key === "pc" ? "BALCARCE" : "SISTEMAS"}</p><h1>{service.h1}</h1><p className="contact-lead">{service.intro}</p><ContactAction service={service.key} location="service_intro">{service.cta}</ContactAction><h2>Qué podemos resolver</h2><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><h2>Cómo trabajamos</h2><p>{service.process}</p><h2>Antes de consultar</h2><p>{service.faq}</p>{service.key === "sistemas" && <><h2>Un sistema para la operación de un restaurante</h2><p>Pepe’s Napoletana integra pedidos, cocina, caja, mesas y stock. Conocé el problema y la solución implementada.</p><Link className="text-link" to="/proyectos/pepes-napoletana">Ver el proyecto Pepe’s Napoletana →</Link></>}<p><ContactAction service={service.key} location="service_footer">{service.cta}</ContactAction></p><Link className="text-link" to={service.key === "pc" ? "/servicios/sistemas-a-medida" : "/servicios/mantenimiento-pc-balcarce"}>Conocer otro servicio de Wuidevs →</Link></section>;
}
