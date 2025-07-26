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

          const titleTop = window.innerWidth >= 1280 ? "-270px" : "-220px";
          const textBottom = window.innerWidth >= 1280 ? "-170px" : "-140px";

          ctxRef.current = gsap.context(() => {
            gsap.set(circleRef.current, {
              scale: 4,
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
      data-bg="linear-gradient(to bottom, #eb944d 0%, #22cae0 50%, #b991ed 80%)"
      className="relative hidden h-screen overflow-hidden text-white md:block md:min-h-[763px] lg:min-h-[1109px]"
    >
      <div
        ref={circleRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black md:[--height:721px] md:[--width:721px] lg:[--height:917px] lg:[--width:917px]"
        style={{
          width: "var(--width)",
          height: "var(--height)",
        }}
      />
      <div>{children}</div>
    </section>
  );
};
