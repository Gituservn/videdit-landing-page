import type { PropsWithChildren, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { twMerge } from "tailwind-merge";
import CloseIcon from "@/assets/icons/close.svg?react";

interface ModalBaseProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  className?: string;
}

export const ModalBase = ({
  isModalOpen,
  onCloseModal,
  className = "",
  children,
}: PropsWithChildren<ModalBaseProps>) => {
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onClickBackdrop = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "backdrop") {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseModal();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onCloseModal]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
      setIsVisible(true);
    } else {
      document.body.classList.remove("no-scroll");
      if (isVisible) {
        gsap.to(modalRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => setIsVisible(false),
        });
        gsap.to(backdropRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isVisible && isModalOpen) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" },
      );
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.1 },
      );
    }
  }, [isVisible, isModalOpen]);

  if (!isVisible) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex h-lvh w-dvw items-center justify-center bg-black/70"
      onClick={onClickBackdrop}
      aria-label="backdrop"
      id="backdrop"
    >
      <div
        ref={modalRef}
        className={twMerge(
          "bg-bgmodal relative z-[10] w-full max-w-[360px] p-5 md:max-w-[800px] lg:max-w-[1224px] lg:px-10 lg:py-10",
          className,
        )}
      >
        <button
          onClick={onCloseModal}
          className="text-grey -mr-4 ml-auto flex h-11 w-11 cursor-pointer items-center justify-center font-bold lg:-mr-8"
        >
          <CloseIcon />
        </button>
        <div className="text-txdark">{children}</div>
      </div>
    </div>
  );
};
