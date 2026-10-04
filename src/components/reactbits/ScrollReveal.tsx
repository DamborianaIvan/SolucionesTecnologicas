// Adapted from DavidHDev/react-bits, ScrollReveal (TS-CSS). See LICENSE.md.
// Scoped cleanup, semantic headings and reduced-motion support added for Wuidevs.
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({ children, className = "" }: {
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const words = ref.current?.querySelectorAll(".rb-word");
      if (!words?.length) return;
      gsap.fromTo(words, { opacity: .2, filter: "blur(3px)", y: 12 }, {
        opacity: 1, filter: "blur(0px)", y: 0, stagger: .08, ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top 90%", end: "top 55%", scrub: true },
      });
    }, ref);
    return () => media.revert();
  }, [children]);
  return <h2 ref={ref} className={`rb-scroll-title ${className}`} aria-label={children}>
    <span aria-hidden="true">{children.split(/(\s+)/).map((word, index) =>
      /^\s+$/.test(word) ? word : <span className="rb-word" key={index}>{word}</span>
    )}</span>
  </h2>;
}
