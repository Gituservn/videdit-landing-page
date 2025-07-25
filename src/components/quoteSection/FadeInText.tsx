import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FadeInTextProps {
  text: string;
  className?: string;
}

export const FadeInText = ({ text, className = "" }: FadeInTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const letters = containerRef.current?.querySelectorAll(".fade-letter");
    if (!letters?.length) return;

    gsap.set(letters, { opacity: 0.5 });

    gsap.to(letters, {
      opacity: 1,
      duration: 0.9,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={`text-blck ${className}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="mr-[0.25em] inline-block whitespace-nowrap">
          {word.split("").map((char, i) => (
            <span key={i} className="fade-letter inline-block">
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
};
