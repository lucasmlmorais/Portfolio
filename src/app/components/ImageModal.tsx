import { X } from "lucide-react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Close modal"
          >
            <X size={24} className="text-[#2a2a2a]" />
          </button>
          <motion.div
            className="max-w-7xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-sm"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
