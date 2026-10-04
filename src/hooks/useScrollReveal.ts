import { useEffect, useRef } from "react";

/** Content stays visible when motion is disabled or observation is unavailable. */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || preference.matches || !("IntersectionObserver" in window)) return;
    const elements = root.querySelectorAll<HTMLElement>(
      ".section h2, .manifesto-copy, .project-card, .service, .process-list li, .about-visual",
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.classList.remove("reveal-pending");
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      // Do not hide content that is already in view, including anchor destinations.
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-pending");
        observer.observe(element);
      }
    });
    const showAll = () => {
      if (preference.matches) {
        observer.disconnect();
        elements.forEach((element) => element.classList.remove("reveal-pending"));
      }
    };
    preference.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", showAll);
      elements.forEach((element) => element.classList.remove("scroll-reveal", "reveal-pending"));
    };
  }, []);
  return ref;
}
