import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

type Image = { src: string; alt: string; caption: string };

export default function ImageViewer({ images, initialIndex, onClose }: {
  images: Image[];
  initialIndex: number;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(false);
  const active = images[index];
  useEffect(() => {
    const node = dialog.current!;
    const previous = document.body.style.overflow;
    const focused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    node.showModal();
    return () => {
      node.close();
      document.body.style.overflow = previous;
      focused?.focus({ preventScroll: true });
    };
  }, []);
  const move = (direction: number) => {
    setIndex(current => (current + direction + images.length) % images.length);
    setZoom(false);
    viewport.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  return createPortal(
    <dialog ref={dialog} className="image-viewer" aria-label="Capturas del proyecto" onCancel={onClose}
      onKeyDown={event => {
        if (zoom) return;
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      }}>
      <div className="image-viewer-layout">
        <header className="image-viewer-toolbar">
          <span aria-live="polite">{index + 1} / {images.length}</span>
          <button type="button" onClick={() => setZoom(value => !value)} aria-label={zoom ? "Reducir imagen" : "Ampliar imagen"} aria-pressed={zoom}>
            {zoom ? <ZoomOut /> : <ZoomIn />}<span>{zoom ? "Ajustar" : "Zoom"}</span>
          </button>
          <button type="button" onClick={onClose} aria-label="Cerrar visor" autoFocus><X /></button>
        </header>
        <div ref={viewport} className="image-viewer-viewport">
          <div className={`image-viewer-canvas${zoom ? " is-zoomed" : ""}`}>
            <img src={active.src} alt={active.alt} draggable={false} />
          </div>
        </div>
        <footer className="image-viewer-controls">
          <button type="button" onClick={() => move(-1)} disabled={images.length < 2} aria-label="Captura anterior"><ChevronLeft /></button>
          <p aria-live="polite">{active.caption}</p>
          <button type="button" onClick={() => move(1)} disabled={images.length < 2} aria-label="Captura siguiente"><ChevronRight /></button>
        </footer>
      </div>
    </dialog>, document.body,
  );
}
