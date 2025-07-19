import gsap from "gsap";

export const animateMobile = (content: HTMLDivElement, scrollHeight: number, isOpen: boolean) => {
  const tl = gsap.timeline();

  if (isOpen) {
    tl.fromTo(
      content,
      { maxHeight: 0, height: 0, marginTop: 0 },
      {
        maxHeight: scrollHeight,
        height: scrollHeight,
        marginTop: "12px",
        duration: 0.6,
        ease: "power2.out",
      },
    );
  } else {
    tl.to(content, {
      maxHeight: 0,
      height: 0,
      marginTop: 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
  }
};
