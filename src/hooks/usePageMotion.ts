import { useLayoutEffect } from "react";

/** One entry per element, with visible content as the no-animation fallback. */
export function usePageMotion(pathname: string) {
  useLayoutEffect(() => {
    const root = document.querySelector(".route-surface");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || preference.matches || !("IntersectionObserver" in window) ||
        !("animate" in Element.prototype)) return;

    // Animate cards as units: their text must not receive a second animation.
    const blocks = ".service, .process-list > li, .about-visual, .architecture-card, .contact-options article, .rb-project-row";
    const candidates = root.querySelectorAll<HTMLElement>(
      `${blocks}, h1, h2, h3, p, .projects-more, .about-signature, .cta-inner strong, .cta-button`,
    );
    const targets = [...candidates].filter(element =>
      !element.matches(".rb-scroll-title") &&
      !element.parentElement?.closest(blocks) &&
      !element.parentElement?.closest(".projects-more"),
    );
    const animations = new Map<Element, Animation>();
    const observer = new IntersectionObserver(entries => {
      let order = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const animation = animations.get(entry.target);
        if (animation) {
          // Keep stagger short, even when many elements enter on a large screen.
          animation.effect?.updateTiming({ delay: Math.min(order++, 3) * 70 });
          animation.play();
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -5% 0px" });

    targets.forEach(element => {
      // Already passed content stays visible when browser history restores scroll.
      if (element.getBoundingClientRect().bottom <= 0) return;
      const animation = element.animate([
        { opacity: 0, translate: "0 16px" },
        { opacity: 1, translate: "0 0" },
      ], { duration: 620, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });
      animation.pause();
      animations.set(element, animation);
      animation.onfinish = () => { animation.cancel(); animations.delete(element); };
      observer.observe(element);
    });

    // Keyboard navigation should never focus an invisible card or link.
    const onFocus = (event: Event) => {
      if (!(event.target instanceof Node)) return;
      const focused = event.target;
      animations.forEach((animation, element) => {
        if (element.contains(focused)) {
          animation.cancel();
          animations.delete(element);
          observer.unobserve(element);
        }
      });
    };
    root.addEventListener("focusin", onFocus);
    const stop = () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const onPreference = () => { if (preference.matches) stop(); };
    preference.addEventListener("change", onPreference);
    return () => {
      stop();
      root.removeEventListener("focusin", onFocus);
      preference.removeEventListener("change", onPreference);
    };
  }, [pathname]);
}
