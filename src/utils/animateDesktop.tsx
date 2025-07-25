import { ResponsivePosition } from "@/types";
import gsap from "gsap";
import { getCurrentPosition } from "./getCurrentPosition";

type AnimateDesktopParams = {
  card: HTMLDivElement;
  content: HTMLDivElement;
  arrow: HTMLButtonElement;
  rect: DOMRect;
  newWidth: number;
  newHeight: number;
  newContentHeight: number;
  isOpen: boolean;
  originalSize: { width: number; height: number };
  position?: ResponsivePosition;
};

export const animateDesktop = ({
  card,
  content,
  arrow,
  newWidth,
  newHeight,
  newContentHeight,
  isOpen,
  originalSize,
  position,
}: AnimateDesktopParams) => {
  const pos = getCurrentPosition(position);
  const tl = gsap.timeline();

  if (isOpen) {
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
          maxHeight: newContentHeight,
          height: newContentHeight,
          marginTop: "16px",
          duration: 0.3,
          ease: "power2.out",
        },
        0.3,
      );
  } else {
    tl.to(
      content,
      {
        opacity: 0,
        maxHeight: 0,
        height: 0,
        marginTop: 0,
        duration: 0.1,
        ease: "power2.inOut",
      },
      0,
    )
      .to(
        card,
        {
          width: originalSize.width,
          height: originalSize.height,
          ease: "power3.inOut",
          duration: 0.1,
        },
        0.1,
      )
      .set(card, { clearProps: "zIndex,position" })
      .to(
        arrow,
        {
          top: "76%",
          clearProps: "top,right",
          ease: "power2.inOut",
          duration: 0.1,
        },
        0.1,
      );
  }
};
