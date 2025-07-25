import { SliderDots } from "./SliderDots";

interface SliderDotsBoxProps {
  scrollSnaps: number[];
  selectedIndex: number;
  selectedColor: string;
  feedback?: boolean;
  color: string;
  onDotButtonClick: (index: number) => void;
}

export const SliderDotsBox = <T,>({
  scrollSnaps,
  selectedIndex,
  selectedColor,
  color,
  feedback,
  onDotButtonClick,
}: SliderDotsBoxProps) => {
  return (
    <div
      className={`flex w-full items-center gap-4 ${feedback ? "md:gap-9" : "md:gap-[60px] lg:gap-[50px] xl:gap-[120px]"} `}
    >
      {scrollSnaps.map((_, index) => (
        <div
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={`flex w-10 cursor-pointer items-center py-2 ${feedback ? "md:w-[calc(25%-27px)] md:py-[18px] lg:py-[21px] xl:py-7" : "md:w-[30%] lg:w-[32%]"} `}
        >
          <SliderDots
            className={`h-0.5 w-full rounded-[10px] md:h-1 ${
              index === selectedIndex ? selectedColor : color
            } ${feedback ? "lg:h-[6px] xl:h-2" : ""}`}
          />
        </div>
      ))}
    </div>
  );
};
