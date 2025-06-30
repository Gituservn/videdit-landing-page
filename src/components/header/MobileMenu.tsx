import { nav } from "@/constants/navList";
import { useText } from "@/i18n/utils";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import CloseIcon from "@/assets/icons/close.svg?react";
import MenuIcon from "@/assets/icons/menu.svg?react";
import { ContactButton } from "../shared/ContactButton";
import { ContactModal } from "../shared/ContactModal";

interface Props {
  lang: "ua" | "en";
}

export default function MobileMenu({ lang }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const t = useText(lang);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0 0% 0)",
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(menuRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 1,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    function onClickOutside(e: MouseEvent) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative ${isContactsOpen ? "z-[6]" : "z-[11]"}`}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        ref={menuRef}
        className={`bg-grey fixed top-0 left-0 w-full overflow-hidden px-4 text-white ${
          isContactsOpen ? "z-[6]" : "z-[4]"
        }`}
        style={{
          height: "100vh",
          clipPath: "inset(0 0 100% 0)",
          pointerEvents: "none",
        }}
      >
        <ul className="mt-[117px] mb-5 flex flex-col items-center gap-5">
          {nav.map((item) => (
            <li
              key={item.id}
              className="font-alumni w-[288px] text-lg leading-[18px] font-bold uppercase"
            >
              <a
                href={`#${item.id}`}
                className="flex h-full w-full justify-center py-3"
                onClick={() => setIsOpen(false)}
              >
                {t(item.titleKey)}
              </a>
            </li>
          ))}
          <li>
            <ContactButton
              text={t("contacts")}
              onClick={() => {
                setIsContactsOpen(true);
                setIsOpen(false);
              }}
            />
          </li>
        </ul>
      </div>
      <ContactModal isOpen={isContactsOpen} onClose={() => setIsContactsOpen(false)} />
    </div>
  );
}
