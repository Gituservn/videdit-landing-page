import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "../shared/Slider/SliderDots";
import { NextButton, PrevButton, usePrevNextButtons } from "../shared/Slider/SliderArrows";
import { SliderDotsBox } from "../shared/Slider/SliderDotsBox";
import { ServiceCard, ServiceItemProp } from "./ServiceCard";
import { SelectedSnapDisplay, useSelectedSnapDisplay } from "../shared/Slider/SelectedSnapDisplay";

export const ServicesSlider = ({ list }: { list: ServiceItemProp[] }) => {
  const options: EmblaOptionsType = {
    loop: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <div className="embla relative w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {list.map((item, index) => (
            <div key={index} className="embla__slide relative h-[100vh] w-full flex-[0_0_100%]">
              <ServiceCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-[1] -translate-x-1/2 md:bottom-[57px] md:flex md:w-full md:flex-col-reverse md:px-6 lg:px-10 xl:px-[60px]">
        <div className="py-2 pt-7">
          <SliderDotsBox
            scrollSnaps={scrollSnaps}
            selectedIndex={selectedIndex}
            sliders={list}
            onDotButtonClick={onDotButtonClick}
          />
        </div>
        <div className="mx-auto flex justify-center gap-4 md:mr-0">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="absolute top-4 right-4 md:top-auto md:right-auto md:bottom-[382px] md:left-[401px] lg:bottom-[400px] lg:left-[550px] xl:bottom-[405px] xl:left-[567px]">
        <SelectedSnapDisplay selectedSnap={selectedSnap} snapCount={snapCount} />
      </div>
    </div>
  );
};
