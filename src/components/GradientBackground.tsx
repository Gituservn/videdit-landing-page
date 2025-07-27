import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GradientBackground = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll<HTMLElement>("[data-bg]");
    const bgElement = document.getElementById("background-gradient");

    if (!bgElement) return;

    sections.forEach((section) => {
      const bg = section.dataset.bg;
      if (!bg) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          bgElement.style.background = bg;
          gsap.to(bgElement, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          });
        },
        onEnterBack: () => {
          bgElement.style.background = bg;
          gsap.to(bgElement, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          });
        },
      });
    });
  }, []);

  return null;
};

export default GradientBackground;
