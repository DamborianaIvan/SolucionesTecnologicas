declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; } }
export function initializeAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-N4MCNYMPV7";
  if (!/^G-[A-Z0-9]+$/.test(id || "") || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer!.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: false });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}
export function track(event: string, parameters: Record<string, string> = {}) {
  window.gtag?.("event", event, parameters);
}
let lastPath: string | undefined;
export function trackPage(path: string) {
  if (lastPath === path) return;
  lastPath = path;
  track("page_view", { page_location: window.location.origin + path, page_title: document.title });
}
