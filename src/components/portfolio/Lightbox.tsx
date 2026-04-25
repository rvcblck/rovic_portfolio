import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox = ({ images, index, onClose, onPrev, onNext }: Props) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 w-10 h-10 border border-border hover:border-primary hover:text-primary rounded-sm flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous"
              className="absolute left-4 md:left-8 w-12 h-12 border border-border bg-card hover:border-primary hover:text-primary rounded-sm flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next"
              className="absolute right-4 md:right-8 w-12 h-12 border border-border bg-card hover:border-primary hover:text-primary rounded-sm flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <motion.img
          key={images[index]}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          src={images[index]}
          alt=""
          onClick={(e) => e.stopPropagation()}
          className="max-w-[90vw] max-h-[85vh] object-contain rounded-sm shadow-2xl"
        />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 mono text-xs uppercase tracking-wider text-muted-foreground">
          {index + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
