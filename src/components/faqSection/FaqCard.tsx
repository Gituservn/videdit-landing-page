import { useRef, type FC, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ArrowIcon } from "../shared/icons/ArrowIcon";
import { FaqCardProps } from "@/types";
import { animateMobile } from "@/utils/animateMobile";
import { animateDesktop } from "@/utils/animateDesktop";

export const FaqCard: FC<FaqCardProps & { imageSize?: { width: number; height: number } }> = ({
  question,
  answer,
  isOpen,
  onToggle,
  position,
  showAnswer,
  imageSize,
  hideAnswer,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLButtonElement>(null);
  const lastClickTimeRef = useRef<number>(0);

  const handleClick = () => {
    const now = Date.now();
    if (now - lastClickTimeRef.current < 1000) return;
    lastClickTimeRef.current = now;
    onToggle();
  };

  useLayoutEffect(() => {
    if (!cardRef.current || !contentRef.current || !arrowRef.current) return;
    if (!imageSize) return;

    const card = cardRef.current;
    const content = contentRef.current;
    const arrow = arrowRef.current;

    const isMobile = window.innerWidth < 768;

    const gap = window.innerWidth >= 1900 ? 30 : window.innerWidth >= 1260 ? 29 : 17;

    const scrollHeight = content.scrollHeight;
    const newWidth = imageSize.width * 2 + gap;

    const newHeight = imageSize.height * 2 + gap;
    const newContentHeight = newHeight - 90;

    gsap.killTweensOf([card, content, arrow]);

    if (isMobile) {
      animateMobile(content, scrollHeight, isOpen);
    } else if (imageSize) {
      animateDesktop({
        card,
        content,
        arrow,
        newWidth,
        newHeight,
        newContentHeight,
        isOpen,
        originalSize: imageSize,
        position,
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={cardRef}
      className="border-blck group relative h-full w-full cursor-pointer border-b px-3 py-6 transition-[margin] duration-300 ease-in-out will-change-transform md:aspect-square md:border md:p-[11px] xl:p-3"
      onClick={handleClick}
    >
      <div className="flex w-full items-center justify-between">
        <p className="w-[90%] font-bold md:text-xl xl:text-2xl">{question}</p>
        <button
          ref={arrowRef}
          type="button"
          className={`right-[11px] bottom-[11px] flex h-11 w-11 items-center justify-center overflow-hidden transition-transform md:absolute xl:h-[50px] xl:w-[50px] ${isOpen ? "rotate-[135deg]" : "-rotate-45"} duration-500 ease-in-out`}
          aria-label={isOpen ? hideAnswer : showAnswer}
        >
          <div className="arrow-wrapper">
            <ArrowIcon className="arrow-icon h-11 w-11 transition-transform duration-300 ease-in-out xl:h-[50px] xl:w-[50px]" />
          </div>
        </button>
      </div>

      <div ref={contentRef} className={`flex h-0 flex-col gap-2 overflow-hidden`}>
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
