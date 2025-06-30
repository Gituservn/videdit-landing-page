import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [visible, setVisible] = useState(isOpen);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" },
      );

      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: "-100%" },
        { opacity: 1, y: "-50%", duration: 0.8, ease: "power2.out", delay: 0.1 },
      );
    } else if (!isOpen && visible) {
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power1.out",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power1.out",
        onComplete: () => setVisible(false),
      });
    }
  }, [isOpen, visible]);

  if (!visible) return null;

  return createPortal(
    <>
      <div ref={backdropRef} onClick={onClose} className="fixed inset-0 z-40 bg-black/60" />

      <div
        ref={modalRef}
        className="fixed top-1/2 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded bg-yellow-400 p-6 text-black opacity-0"
      >
        <h2 className="mb-4 text-xl font-bold">Соцмережі</h2>
        <ul className="flex flex-col gap-3">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="underline"
              onClick={onClose}
            >
              Facebook
            </a>
          </li>
        </ul>

        <button
          onClick={onClose}
          className="mt-6 rounded bg-black px-4 py-2 font-bold text-yellow-400"
        >
          Закрити
        </button>
      </div>
    </>,
    document.body,
  );
};
