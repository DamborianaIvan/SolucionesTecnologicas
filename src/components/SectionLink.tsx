import { Link, useLocation, type LinkProps } from "react-router-dom";

export function scrollToSection(hash: string) {
  let id: string;
  try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    block: "start",
  });
}

/** Repeated clicks still scroll when the router destination has not changed. */
export default function SectionLink({ to, onClick, ...props }: LinkProps) {
  const location = useLocation();
  return <Link {...props} to={to} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (typeof to !== "string" || !to.includes("#")) return;
    const url = new URL(to, window.location.href);
    if (url.pathname === location.pathname && url.hash === location.hash) {
      event.preventDefault();
      scrollToSection(url.hash);
    }
  }} />;
}
