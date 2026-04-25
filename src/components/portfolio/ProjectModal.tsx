import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import { resolveImage } from "@/data/projects";

interface Props {
  project: Project;
  onClose: () => void;
}

const statusColor: Record<string, string> = {
  Live: "text-primary",
  Internal: "text-muted-foreground",
  "In Development": "text-foreground",
  Archived: "text-muted-foreground",
};

export const ProjectModal = ({ project, onClose }: Props) => {
  const [imgIdx, setImgIdx] = useState(0);
  const images = (project.images ?? [])
    .map((i) => resolveImage(i))
    .filter((u): u is string => Boolean(u));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && images.length > 1)
        setImgIdx((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight" && images.length > 1)
        setImgIdx((i) => (i + 1) % images.length);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, images.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-start md:items-center justify-center p-3 md:p-8 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-card border border-border rounded-sm overflow-hidden my-auto"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur border border-border hover:border-primary hover:text-primary rounded-sm flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Image carousel */}
          {images.length > 0 && (
            <div className="relative aspect-[16/9] bg-secondary overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  src={images[imgIdx]}
                  alt={`${project.title} screenshot ${imgIdx + 1}`}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              {images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setImgIdx((i) => (i - 1 + images.length) % images.length)
                    }
                    aria-label="Previous"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur border border-border hover:border-primary hover:text-primary rounded-sm flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setImgIdx((i) => (i + 1) % images.length)}
                    aria-label="Next"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur border border-border hover:border-primary hover:text-primary rounded-sm flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIdx(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className={`h-1 rounded-full transition-all ${
                          i === imgIdx
                            ? "w-8 bg-primary"
                            : "w-4 bg-foreground/40 hover:bg-foreground/60"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Body */}
          <div className="p-6 md:p-10">
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {project.year} {project.client && `— ${project.client}`}
                </p>
                <h2 className="display-text text-3xl md:text-5xl">
                  {project.title}
                </h2>
              </div>
              <p
                className={`mono text-xs uppercase tracking-wider flex items-center gap-2 ${statusColor[project.status]}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {project.status}
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-6">{project.tagline}</p>
            <p className="text-base leading-relaxed mb-8 max-w-3xl">
              {project.description}
            </p>

            {project.highlights.length > 0 && (
              <div className="mb-8">
                <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Highlights
                </p>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mono shrink-0">→</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="mono text-xs uppercase tracking-wider px-3 py-1.5 bg-secondary border border-border rounded-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <p className="mono text-xs uppercase tracking-wider text-muted-foreground self-center mr-2">
                Role / {project.role}
              </p>
              {project.links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground mono text-xs uppercase tracking-wider hover:bg-primary/90 rounded-sm transition-colors"
                >
                  {l.label}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
