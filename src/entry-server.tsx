import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { services } from "./data/services";
import { projects } from "./data/projects";
export const routes = ["/", "/contacto", "/proyectos", ...services.map(s => `/servicios/${s.slug}`), ...projects.filter(p => !p.external && p.href).map(p => p.href!)];
export function render(path: string) {
 const service = services.find(s => path === `/servicios/${s.slug}`);
 const project = projects.find(p => p.href === path);
 const title = service?.title || (project ? `${project.title} | Wuidevs` : path === "/contacto" ? "Contacto | Wuidevs en Balcarce" : path === "/proyectos" ? "Proyectos de software e IoT | Wuidevs" : "Wuidevs | Sistemas a medida y mantenimiento PC en Balcarce");
 const description = service?.description || project?.description || "Sistemas a medida para comercios y restaurantes. Mantenimiento de PC en Balcarce con retiro y entrega coordinados.";
 return { html: renderToString(<StaticRouter location={path}><App /></StaticRouter>), title, description };
}
