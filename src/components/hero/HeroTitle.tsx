import { useEffect, useRef, useState } from "react";

export const HeroTitle = ({ title }: { title: string }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [left, setLeft] = useState("50%");

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const width = window.innerWidth;

    let offset = 0;

    if (width < 768) offset = 144;
    else if (width < 1280) offset = 290;
    else if (width < 1920) offset = 577;
    else offset = 361;

    setLeft(`calc(50% - ${offset}px)`);
  }, []);
  return (
    <h1
      id="hero-title"
      ref={titleRef}
      style={{ left }}
      className="text-txligth font-alumni absolute top-5 z-[12] w-full text-[32px] leading-none font-bold uppercase transition-all duration-700 md:top-[60px] md:text-[64px] lg:top-11 lg:text-9xl xl:top-[70px] xl:text-[160px]"
    >
      {title}
    </h1>
  );
};
