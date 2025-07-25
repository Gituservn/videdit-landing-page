import { twMerge } from "tailwind-merge";
import { AnimatedTextHover } from "../AnimatedTextHover";

export const ContactButton = ({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `font-alumni font-bold uppercase`,
        "mx-auto flex w-[288px] items-center justify-center border bg-white/10 py-3 text-lg leading-[18px] backdrop-blur-[10px]",
        className,
      )}
    >
      <AnimatedTextHover text={text} />
    </button>
  );
};
