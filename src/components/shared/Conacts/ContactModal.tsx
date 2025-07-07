import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { socialList } from "@/constants/socialList";
import CloseIcon from "@/assets/icons/close.svg?react";
import olgaPhoto from "@/assets/images/olga-contact.jpg?url";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [visible, setVisible] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (visible && isOpen) {
      if (backdropRef.current) {
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, ease: "power2.out" },
        );
      }

      if (modalRef.current) {
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, y: "-100%" },
          { opacity: 1, y: "-50%", duration: 0.6, ease: "power2.out", delay: 0.1 },
        );
      }
    }
  }, [visible, isOpen]);

  useEffect(() => {
    if (!isOpen && visible) {
      if (modalRef.current) {
        gsap.to(modalRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      }

      if (backdropRef.current) {
        gsap.to(backdropRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          onComplete: () => setVisible(false),
        });
      }
    }
  }, [isOpen, visible]);

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

  if (!visible) return null;

  return createPortal(
    <>
      <div
        ref={backdropRef}
        onClick={onClose}
        className="bg-blck/60 fixed inset-0 z-[11]"
        style={{ opacity: 0 }}
      />

      <div
        ref={modalRef}
        className="bg-bgmodal fixed top-1/2 left-1/2 z-[12] max-h-[90vh] w-full max-w-[601px] -translate-x-1/2 translate-y-1/2 overflow-y-auto px-4 pb-14 md:pb-[72px] lg:max-w-[810px] lg:px-8 lg:pb-14"
        style={{ opacity: 0 }}
      >
        <button
          onClick={onClose}
          className="text-grey -mr-4 ml-auto flex h-11 w-11 cursor-pointer items-center justify-center font-bold"
        >
          <CloseIcon />
        </button>
        <div className="mt-3 md:mt-7 lg:flex lg:items-center lg:gap-7">
          <img
            src={olgaPhoto}
            width={300}
            height={300}
            alt="Зв'яжіться зі мною в соціальних мережах"
            className="mx-auto mb-9 aspect-square h-fit w-[40%] rounded-full md:mb-8 md:w-[250px] lg:m-0 lg:w-[300px]"
          />
          <ul className="mx-auto flex w-full max-w-[394px] min-w-[288px] flex-col gap-5 lg:max-w-[417px]">
            {socialList.map((item) => (
              <li key={item.name} className="group">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="font-alumni bg-grey group-hover:bg-blck flex h-10 items-center justify-start gap-3 px-[32%] py-2 leading-none font-bold text-white uppercase md:h-14 md:text-2xl lg:h-16 lg:text-[28px]"
                  onClick={onClose}
                >
                  <div className="flex h-10 w-10 items-center justify-center md:h-12 md:w-12">
                    {item.icon}
                  </div>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>,
    document.body,
  );
};
