import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "../shared/Slider/SliderDots";
import { SliderDotsBox } from "../shared/Slider/SliderDotsBox";
import { FeedbackCard, FeedbackCardProps } from "./FeedbackCard";

export const FeedbackSlider = ({ list }: { list: FeedbackCardProps[] }) => {
  const options: EmblaOptionsType = {
    loop: true,
    slidesToScroll: 1,
    align: "start",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className="embla relative mx-auto w-full max-w-[440px] md:mx-0 md:max-w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {list.map((item, index) => (
            <div
              key={index}
              className="embla__slide relative w-full flex-[0_0_100%] md:flex-[0_0_40%]"
            >
              <FeedbackCard item={item} ind={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-5 w-[47.5%] md:mt-4 md:flex md:w-[44%] lg:mt-6 xl:mt-10">
        <SliderDotsBox
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
          selectedColor="bg-selected"
          color="bg-txgrey"
          feedback
          onDotButtonClick={onDotButtonClick}
        />
      </div>
    </div>
  );
};
