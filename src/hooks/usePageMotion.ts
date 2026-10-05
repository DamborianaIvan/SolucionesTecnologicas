import { useLayoutEffect } from "react";
import { animate, inView } from "motion";
import { useReducedMotion } from "motion/react";

/** Scoped Motion reveals; focus and reduced motion always reveal content immediately. */
export function usePageMotion(pathname: string) {
  const reduced = useReducedMotion();
  useLayoutEffect(() => {
    const root = document.querySelector(".route-surface");
    if (!root || reduced) return;
    const blocks = ".service, .process-list > li, .about-visual, .architecture-card, .contact-options article, .rb-project-row";
    const targets = [...root.querySelectorAll<HTMLElement>(`${blocks}, h1, h2, h3, p, .projects-more, .about-signature, .cta-inner strong, .cta-button`) ].filter(el =>
      !el.matches(".rb-scroll-title, .hero-editorial h1") && !el.parentElement?.closest(`${blocks}, .projects-more`));
    const cleanups: (() => void)[] = [];
    const reveals = new Map<HTMLElement, () => void>();
    targets.forEach(el => {
      if (el.getBoundingClientRect().bottom <= 0) return;
      const original = { opacity: el.style.opacity, transform: el.style.transform };
      el.style.opacity = "0";
      el.style.transform = "translateY(48px)";
      let playback: ReturnType<typeof animate> | undefined;
      const restore = () => { playback?.stop(); el.style.opacity = original.opacity; el.style.transform = original.transform; };
      const stop = inView(el, () => {
        const siblings = el.parentElement ? [...el.parentElement.children].filter(child => targets.includes(child as HTMLElement)) : [];
        playback = animate(el, { opacity: 1, y: 0 }, { duration: .85, delay: Math.min(Math.max(siblings.indexOf(el), 0), 3) * .12, ease: [.22, 1, .36, 1] });
        playback.then(() => { restore(); reveals.delete(el); });
      }, { margin: "0px 0px -7% 0px" });
      reveals.set(el, () => { stop(); restore(); });
      cleanups.push(() => { stop(); restore(); });
    });
    const focus = (event: Event) => {
      if (!(event.target instanceof Node)) return;
      const target = event.target;
      reveals.forEach((reveal, el) => { if (el.contains(target)) { reveal(); reveals.delete(el); } });
    };
    root.addEventListener("focusin", focus);
    return () => { cleanups.forEach(cleanup => cleanup()); root.removeEventListener("focusin", focus); };
  }, [pathname, reduced]);
}
