import { ArrowRight, ArrowUpRight } from "lucide-react";
export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="eyebrow">
          <span className="status-dot" /> INFORMÁTICA / DESARROLLO / IOT
        </p>
        <div className="hero-brand">
          <strong>
            ST<span>✦</span>
          </strong>
          <span>
            Soluciones
            <br />
            Tecnológicas
          </span>
        </div>
        <h1>
          Tecnología que funciona.
          <br />
          <span>Soluciones que sirven.</span>
        </h1>
        <p className="hero-description">
          Informática, desarrollo e IoT para resolver problemas reales,
          <br className="desktop-break" /> desde una PC hasta un sistema
          completo.
        </p>
        <div className="hero-actions">
          <a className="button" href="#proyectos">
            Ver proyectos <ArrowUpRight size={19} />
          </a>
          <a className="text-link" href="#sobre-st">
            Conocé ST <ArrowRight size={18} />
          </a>
        </div>
        <div className="hero-bottom">
          <span>IDEAS QUE SE CONECTAN. SOLUCIONES QUE COBRAN VIDA.</span>
          <a href="#manifiesto">Explorá ST ↓</a>
        </div>
      </div>
      <svg
        className="hero-circuit"
        viewBox="0 0 500 700"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M500 80H310c-95 0-95 150 0 150h45c100 0 100 160 0 160H160c-110 0-110 170 0 170h340"
          stroke="url(#blue)"
          strokeWidth="34"
        />
        <path
          d="M500 145H335c-20 0-20 32 0 32h65c150 0 150 280 0 280H160c-20 0-20 34 0 34h80"
          stroke="#b8e6f6"
          strokeWidth="2"
        />
        <circle
          cx="240"
          cy="491"
          r="9"
          fill="white"
          stroke="#00aaec"
          strokeWidth="3"
        />
        <circle
          cx="310"
          cy="80"
          r="13"
          fill="white"
          stroke="#008dec"
          strokeWidth="6"
        />
        <circle
          cx="160"
          cy="560"
          r="13"
          fill="white"
          stroke="#0865b8"
          strokeWidth="6"
        />
        <path
          d="m275 275 10 27 27 10-27 10-10 27-10-27-27-10 27-10Z"
          fill="#3ac882"
        />
        <defs>
          <linearGradient
            id="blue"
            x1="400"
            y1="80"
            x2="80"
            y2="550"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00b4ef" />
            <stop offset=".6" stopColor="#0079dc" />
            <stop offset="1" stopColor="#063354" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
