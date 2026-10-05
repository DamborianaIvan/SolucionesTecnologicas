import { motion, useReducedMotion } from "motion/react";

export default function ScrollReveal({ children, className = "" }: { children: string; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.h2 className={`rb-scroll-title ${className}`} aria-label={children}
    initial="hidden" whileInView="visible" animate={reduced ? "visible" : undefined} viewport={{ once: true, amount: .25 }}>
    <span aria-hidden="true">{children.split(/(\s+)/).map((word, index) =>
      /^\s+$/.test(word) ? word : <span className="rb-word-mask" key={index}><motion.span className="rb-word"
        variants={{ hidden: { y: reduced ? 0 : "105%", opacity: reduced ? 1 : 0 }, visible: { y: 0, opacity: 1 } }}
        transition={{ duration: reduced ? 0 : .8, delay: reduced ? 0 : index * .045, ease: [.22, 1, .36, 1] }}>{word}</motion.span></span>
    )}</span>
  </motion.h2>;
}
