import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GradientBackground = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll<HTMLElement>("[data-bg]");

    sections.forEach((section) => {
      const bg = section.dataset.bg;
      if (!bg) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          gsap.to("body", {
            background: bg,
            duration: 1.2,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          gsap.to("body", {
            background: bg,
            duration: 1.2,
            ease: "power2.out",
          });
        },
      });
    });
  }, []);

  return null;
};

export default GradientBackground;
