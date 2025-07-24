"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const CtaScroll = ({ children }: { children?: React.ReactNode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const title = document.getElementById("ctaTitle");
          const text = document.getElementById("ctaContent");

          if (!title || !text || !circleRef.current || !sectionRef.current) return;

          const titleTop = window.innerWidth >= 1280 ? "-240px" : "-210px";
          const textBottom = window.innerWidth >= 1280 ? "-120px" : "-140px";

          ctxRef.current = gsap.context(() => {
            gsap.set(circleRef.current, {
              scale: 3,
              transformOrigin: "center center",
            });

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom+=100 bottom",
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
              },
            });

            tl.to(circleRef.current, { scale: 1, ease: "none" }, "<");
            tl.to(title, { translateY: titleTop, ease: "none" }, "<");
            tl.to(text, { translateY: textBottom, ease: "none" }, "<");

            ScrollTrigger.refresh();
          }, sectionRef);
        }
      },
      { threshold: 0.01 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative hidden h-screen overflow-hidden bg-white text-white md:block md:min-h-[923px] lg:min-h-[1309px]"
    >
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black md:[--height:763px] md:[--width:763px] lg:[--height:1109px] lg:[--width:1109px]"
        style={{
          width: "var(--width)",
          height: "var(--height)",
        }}
      />
      <div>{children}</div>
    </section>
  );
};
