import { Link } from "react-router-dom";
import { site } from "../config/site";
import { track } from "../lib/analytics";
export default function ContactAction({ service, location, children }: { service: "sistemas" | "pc"; location: string; children: React.ReactNode }) {
  const message = service === "pc" ? "Hola Wuidevs, mi PC tiene este problema: " : "Hola Wuidevs, tengo un emprendimiento/local y necesito mejorar este proceso: ";
  return site.whatsapp ? <a className="button" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" onClick={() => track("click_whatsapp", { service, button_location: location })}>{children}</a> : <Link className="button" to={`/contacto?servicio=${service}`}>{children}</Link>;
}
