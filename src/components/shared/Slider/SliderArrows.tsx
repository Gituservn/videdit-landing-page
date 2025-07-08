import { EmblaCarouselType } from "embla-carousel";
import React, { PropsWithChildren, useCallback, useEffect, useState } from "react";

import { ArrowIcon } from "../icons/ArrowIcon";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type ButtonType = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export const PrevButton: React.FC<ButtonType> = (props) => {
  const { disabled, ...restProps } = props;

  return (
    <button
      disabled={disabled}
      aria-label="show previous slide button"
      className="group relative h-11 w-11 rotate-180 overflow-hidden md:h-[50px] md:w-[50px]"
      {...restProps}
    >
      <div className="arrow-wrapper inline-block">
        <ArrowIcon className="arrow-icon h-11 w-11 transition-transform duration-300 ease-in-out md:h-[50px] md:w-[50px]" />
      </div>
    </button>
  );
};

export const NextButton: React.FC<ButtonType> = (props) => {
  const { disabled, ...restProps } = props;

  return (
    <button
      disabled={disabled}
      aria-label="show next slide button"
      className="group relative h-11 w-11 overflow-hidden md:h-[50px] md:w-[50px]"
      type="button"
      {...restProps}
    >
      <div className="arrow-wrapper">
        <ArrowIcon className="arrow-icon h-11 w-11 transition-transform duration-300 ease-in-out md:h-[50px] md:w-[50px]" />
      </div>
    </button>
  );
};
