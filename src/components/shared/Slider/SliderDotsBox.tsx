import { SliderDots } from "./SliderDots";

interface SliderDotsBoxProps {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotButtonClick: (index: number) => void;
}

export const SliderDotsBox = <T,>({
  scrollSnaps,
  selectedIndex,
  sliders,
  onDotButtonClick,
}: SliderDotsBoxProps & { sliders: T[] }) => {
  return (
    <div className="flex items-center gap-4 md:gap-[60px] lg:gap-[50px] xl:gap-[120px]">
      {scrollSnaps.map((_, index) => (
        <SliderDots
          key={index}
          style={{
            display:
              selectedIndex === 0
                ? index === selectedIndex + 2
                  ? "flex"
                  : ""
                : selectedIndex === sliders.length - 1
                  ? index === selectedIndex - 2
                    ? "flex"
                    : ""
                  : selectedIndex === index ||
                      selectedIndex - 1 === index ||
                      selectedIndex + 1 === index
                    ? "flex"
                    : "",
          }}
          onClick={() => onDotButtonClick(index)}
          className={`slider-dot ${
            index === selectedIndex ? "slider-dot--selected" : ""
          } ${index > selectedIndex + 1 || index < selectedIndex - 1 ? "hidden" : ""} `}
        />
      ))}
    </div>
  );
};
