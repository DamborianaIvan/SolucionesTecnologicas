import RevealTitle from "./RevealTitle";
import ContactAction from "./ContactAction";
export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">HABLEMOS DE LO QUE NECESITÁS RESOLVER</p>
          <RevealTitle>Tu negocio. Tu sistema.</RevealTitle>
          <p>Contanos qué proceso querés organizar o automatizar.<br />¿Tu PC necesita atención? También podemos ayudarte con software y hardware en Balcarce.</p>
          <strong>Coordinamos el próximo paso con vos.</strong>
        </div>
        <div className="service-actions">
          <ContactAction service="sistemas" location="footer_cta">Consultar por un sistema</ContactAction>
          <ContactAction service="pc" location="footer_cta">Consultar por mi PC</ContactAction>
        </div>
      </div>
      <div className="cta-track" aria-hidden="true" />
    </section>
  );
}
