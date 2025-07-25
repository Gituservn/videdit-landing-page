import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ParalelogramIcon } from "../shared/icons/ParalelogramIcon";

export const BatteryAnimation = () => {
  const itemsRef = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const items = itemsRef.current;

    gsap.set(items, { fill: "transparent" });
    gsap.set(items[0], { fill: "#FFFFFF" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });

    tl.to(items[1], { fill: "#FFFFFF", duration: 0.2 })
      .to(items[2], { fill: "#FFFFFF", duration: 0.2 })
      .to([items[1], items[2]], { fill: "transparent", duration: 0.1 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="mx-auto flex h-4 w-fit gap-0 lg:h-[18px]">
      {[0, 1, 2].map((_, i) => (
        <ParalelogramIcon
          key={i}
          ref={(el: SVGSVGElement | null) => {
            if (el) itemsRef.current[i] = el;
          }}
          className={i === 0 ? "fill-white" : "-ml-[5px]"}
        />
      ))}
    </div>
  );
};
