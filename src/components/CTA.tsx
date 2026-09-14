import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">CONECTEMOS EL PRÓXIMO PASO</p>
          <h2>
            ¿Tenés una idea<span className="spark">?</span>
          </h2>
          <p>
            Puede ser algo que todavía no existe.
            <br />
            Puede ser un problema que todavía no encontraste cómo resolver.
          </p>
          <strong>Hablemos.</strong>
        </div>
        <Link className="button cta-button" to="/contacto">
          Contanos tu idea <ArrowUpRight size={20} />
        </Link>
      </div>
      <div className="cta-track" aria-hidden="true" />
    </section>
  );
}
