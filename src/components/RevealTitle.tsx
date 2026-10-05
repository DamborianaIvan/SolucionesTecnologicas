import { motion, useReducedMotion } from "motion/react";

/** Wait until the heading reaches the reading area, rather than the screen edge. */
export default function RevealTitle({ children, className = "", as = "h2" }: {
  children: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const reduced = useReducedMotion();
  const Heading = as === "h1" ? motion.h1 : motion.h2;
  return <Heading className={`motion-title ${className}`} aria-label={children}
    initial="hidden" whileInView="visible" animate={reduced ? "visible" : undefined}
    viewport={{ once: true, margin: "0px 0px -22% 0px", amount: .3 }}>
    <span aria-hidden="true">{children.split(/(\s+)/).map((word, index) =>
      /^\s+$/.test(word) ? word : <span className="motion-word-mask" key={index}>
        <motion.span className="motion-word" variants={{
          hidden: { y: reduced ? 0 : "115%", rotate: reduced ? 0 : 5, opacity: reduced ? 1 : 0 },
          visible: { y: 0, rotate: 0, opacity: 1 },
        }} transition={{ duration: reduced ? 0 : 1.05, delay: reduced ? 0 : Math.min(index / 2, 8) * .13, ease: [.16, 1, .3, 1] }}>{word}</motion.span>
      </span>
    )}</span>
  </Heading>;
}
