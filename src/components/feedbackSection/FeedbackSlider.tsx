import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "../shared/Slider/SliderDots";
import { SliderDotsBox } from "../shared/Slider/SliderDotsBox";
import { FeedbackCard, FeedbackCardProps } from "./FeedbackCard";
import { useEffect, useState } from "react";

export const FeedbackSlider = ({ list }: { list: FeedbackCardProps[] }) => {
  const [options, setOptions] = useState<EmblaOptionsType>({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setOptions({
        loop: true,
        slidesToScroll: 1,
        align: isMobile ? "center" : "start",
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  return (
    <div className="embla relative w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {list.map((item, index) => (
            <div key={index} className="embla__slide flex-dynamic relative w-full">
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
