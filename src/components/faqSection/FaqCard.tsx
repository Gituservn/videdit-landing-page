import { useRef, type FC, useLayoutEffect } from "react";
import gsap from "gsap";
import { ArrowIcon } from "../shared/icons/ArrowIcon";
import { FaqCardProps } from "@/types";
import { getCurrentPosition } from "@/utils/getCurrentPosition";

export const FaqCard: FC<FaqCardProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  position,
  showAnswer,
  hideAnswer,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLButtonElement>(null);
  const originalSizeRef = useRef<{ width: number; height: number } | null>(null);

  useLayoutEffect(() => {
    if (!cardRef.current || !contentRef.current || !arrowRef.current) return;

    const card = cardRef.current;
    const content = contentRef.current;
    const arrow = arrowRef.current;
    const rect = card.getBoundingClientRect();
    if (!originalSizeRef.current) {
      originalSizeRef.current = { width: rect.width, height: rect.height };
    }
    const isMobile = window.innerWidth < 768;
    const gap =
      1280 <= window.innerWidth && window.innerWidth < 1920
        ? 29
        : window.innerWidth >= 1920
          ? 30
          : 17;

    const scrollHeight = content.scrollHeight;
    const newWidth = rect.width * 2 + gap;
    const newHeight = rect.height * 2 + gap;

    gsap.killTweensOf([card, content, arrow]);

    if (isMobile) {
      if (isOpen) {
        gsap.fromTo(
          content,
          { maxHeight: 0, height: 0, marginTop: 0 },
          {
            maxHeight: scrollHeight,
            height: scrollHeight,
            marginTop: 12,
            duration: 0.6,
            ease: "power2.out",
          },
        );
      } else {
        const tl = gsap.timeline();
        tl.to(content, {
          maxHeight: 0,
          height: 0,
          marginTop: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    } else {
      if (isOpen) {
        const pos = getCurrentPosition(position);
        const tl = gsap.timeline();
        tl.set(card, {
          position: "absolute",
          zIndex: 3,
          ...pos,
        })
          .to(
            card,
            {
              width: newWidth,
              height: newHeight,
              ease: "power3.out",
              duration: 0.6,
            },
            0,
          )
          .to(
            arrow,
            {
              top: 16,
              right: 16,
              duration: 0.6,
            },
            0,
          )
          .fromTo(
            content,
            {
              opacity: 0,
              maxHeight: 0,
              height: 0,
              marginTop: 0,
            },
            {
              opacity: 1,
              maxHeight: scrollHeight,
              height: scrollHeight,
              marginTop: 12,
              duration: 0.3,
              ease: "power2.out",
            },
            0.3,
          );
      } else {
        const tl = gsap.timeline();

        tl.to(
          content,
          {
            opacity: 0,
            maxHeight: 0,
            height: 0,
            marginTop: 0,
            duration: 0.3,
            ease: "power2.inOut",
          },
          0,
        )
          .to(
            card,
            {
              width: originalSizeRef.current.width,
              height: originalSizeRef.current.height,
              ease: "power3.inOut",
              duration: 0.8,
            },
            0.6,
          )
          .set(card, { clearProps: "zIndex,position" })
          .to(
            arrow,
            {
              top: "76%",
              clearProps: "top,right",
              ease: "power2.inOut",
              duration: 0.6,
            },
            0.6,
          );
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={cardRef}
      className="border-blck relative h-full w-full cursor-pointer border-b bg-white px-3 py-6 transition-[margin] duration-300 ease-in-out will-change-transform md:aspect-square md:border md:p-[11px] xl:p-3"
      onClick={onToggle}
    >
      <div className="flex w-full items-center justify-between">
        <p className="w-[90%] font-bold md:text-xl xl:text-2xl">{question}</p>
        <button
          ref={arrowRef}
          type="button"
          className={`right-[11px] bottom-[11px] flex h-11 w-11 items-center justify-center transition-transform md:absolute xl:h-[50px] xl:w-[50px] ${isOpen ? "rotate-[135deg]" : "-rotate-45"} duration-500 ease-in-out`}
          aria-label={isOpen ? hideAnswer : showAnswer}
        >
          <ArrowIcon />
        </button>
      </div>

      <div
        ref={contentRef}
        className={`flex h-0 flex-col gap-2 overflow-hidden transition-all duration-500 ease-in-out`}
      >
        {answer.map((text, idx) => (
          <p
            key={idx}
            className="md:text-[18px] xl:text-xl"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
    </div>
  );
};
