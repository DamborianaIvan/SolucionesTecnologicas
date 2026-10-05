import RevealTitle from "../RevealTitle";

export default function ScrollReveal({ children, className = "" }: { children: string; className?: string }) {
  return <RevealTitle className={`rb-scroll-title ${className}`}>{children}</RevealTitle>;
}
