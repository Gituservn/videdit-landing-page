import { useRef, useEffect } from "react";
import gsap from "gsap";

interface AnimatedTextHoverProps {
  text: string;
  className?: string;
}

export const AnimatedTextHover = ({ text, className = "" }: AnimatedTextHoverProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const letters = wrapperRef.current.querySelectorAll<HTMLElement>(".letter");
    if (!letters.length) return;

    const tl = gsap.timeline({ paused: true });

    letters.forEach((letter, i) => {
      const clone = letter.cloneNode(true) as HTMLElement;
      clone.classList.add("clone");
      clone.style.position = "absolute";
      clone.style.top = "0";
      clone.style.left = "0";
      clone.style.pointerEvents = "none";
      clone.style.width = "auto";
      clone.style.height = "14px";

      gsap.set(clone, {
        y: 18,
        opacity: 0,
      });

      letter.parentElement?.appendChild(clone);

      tl.to(
        letter,
        {
          y: -18,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        i * 0.04,
      ).to(
        clone,
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        i * 0.02 + 0.1,
      );
    });

    const el = wrapperRef.current;

    const onEnter = () => {
      requestAnimationFrame(() => {
        tl.restart();
      });
    };

    el.addEventListener("mouseenter", onEnter);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
    };
  }, [text]);

  return (
    <div
      ref={wrapperRef}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
      style={{ cursor: "pointer" }}
    >
      <div className={`relative inline-flex overflow-hidden`}>
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="relative inline-block overflow-hidden"
            style={{ width: char === " " ? "0.5em" : "auto" }}
          >
            <span className="letter relative inline-block p-0 will-change-transform">
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
