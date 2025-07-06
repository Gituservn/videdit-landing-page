import { useRef, useEffect, useState } from "react";
import { ContactModal } from "../shared/Conacts/ContactModal";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number;
}

export const InfiniteMarquee = ({ children, speed = 50 }: InfiniteMarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  const [animationDuration, setAnimationDuration] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    if (container && scroller) {
      const scrollerWidth = scroller.scrollWidth;

      const totalWidth = scrollerWidth / 2;
      const duration = totalWidth / speed;

      setAnimationDuration(duration);
    }
  }, [speed, children]);

  return (
    <>
      <div
        onClick={() => setIsContactsOpen(true)}
        className="border-blck cursor-pointer overflow-hidden border-y py-[42px] whitespace-nowrap md:py-10 lg:py-9"
        ref={containerRef}
        onMouseEnter={() => {
          scrollerRef.current?.style.setProperty("animation-play-state", "paused");
        }}
        onMouseLeave={() => {
          scrollerRef.current?.style.setProperty("animation-play-state", "running");
        }}
      >
        <div
          className="animate-marquee flex w-max"
          ref={scrollerRef}
          style={{
            animationDuration: `${animationDuration}s`,
          }}
        >
          {children}
          {children}
        </div>
      </div>
      <ContactModal isOpen={isContactsOpen} onClose={() => setIsContactsOpen(false)} />
    </>
  );
};
