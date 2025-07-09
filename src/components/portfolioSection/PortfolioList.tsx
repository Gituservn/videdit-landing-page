import { useEffect, useRef, useState } from "react";
import { ParallelogramRow } from "../shared/ParallelogramRow";
import { PauseIcon } from "../shared/icons/PauseIcon";
import { PlayIcon } from "../shared/icons/PlayIcon";

export type PortfolioProp = { title: string; videoURL: string };

export const PortfolioList = ({ portfolioList }: { portfolioList: PortfolioProp[] }) => {
  const [heightListTab, setHeightListTab] = useState(0);
  const [isTabletUp, setIsTabletUp] = useState(false);
  const [activeIndex, setActiveIndex] = useState(3);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [marginBottom, setMarginBottom] = useState<number | null>(null);
  const [textSize, setTextSize] = useState<number | null>(null);
  const [marginBottomActive, setMarginBottomActive] = useState<number | null>(null);
  const [textSizeActive, setTextSizeActive] = useState<number | null>(null);
  const [isMobilePlaying, setIsMobilePlaying] = useState<boolean[]>(() =>
    portfolioList.map((_, i) => i === activeIndex),
  );
  const [isMutedList, setIsMutedList] = useState<boolean[]>(() => portfolioList.map(() => true));

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const checkWidth = () => {
      const isTablet = window.innerWidth >= 768;
      setIsTabletUp(isTablet);
      if (!isTablet) {
        setActiveIndex(0);
        setIsMobilePlaying(portfolioList.map((_, i) => i === 0));
      } else {
        setIsMobilePlaying(portfolioList.map(() => false));
      }
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const isTab = window.innerWidth >= 768 && window.innerWidth < 1280;
    const isPC = window.innerWidth >= 1280 && window.innerWidth < 1920;
    const isBig = window.innerWidth >= 1920;

    const paddingX = isTab ? 48 : isPC ? 80 : isBig ? 160 : 32;
    const margin = isTab ? 7.2 : 11;
    const font = isTab ? 14.5 : isPC ? 24 : isBig ? 27 : 20;
    const marginActive = isTab ? 11 : 16;
    const fontActive = isTab ? 20 : isPC ? 28 : isBig ? 28 : 20;
    setMarginBottom(margin);
    setMarginBottomActive(marginActive);
    setTextSize(font);
    setTextSizeActive(fontActive);

    const handleResize = () => {
      const result = (window.innerWidth - paddingX) * 0.433 * 1.07 + 31;
      console.log("result", result);
      setHeightListTab(result);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (isTabletUp) {
        if (i === activeIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      } else {
        if (isMobilePlaying[i]) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [activeIndex, isMobilePlaying, isTabletUp]);

  const widthPersent = [26.3, 32.7, 39, 43.3];
  const leftPersent = [0, 16, 34, 56.4];
  const topPersent = [18.5, 11.6, 4.7, 0];

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i !== index) v.pause();
    });

    if (video.paused) {
      video.play();
      setIsMobilePlaying((prev) => prev.map((_, i) => i === index));
    } else {
      video.pause();
      setIsMobilePlaying((prev) => prev.map(() => false));
    }
  };

  const toggleMute = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.muted = !video.muted;

    setIsMutedList((prev) => prev.map((muted, i) => (i === index ? !muted : muted)));
  };

  return (
    <ul
      style={isTabletUp ? { height: `${heightListTab}px` } : undefined}
      className="relative mx-auto flex max-w-[500px] flex-col gap-4 md:max-w-full"
    >
      {portfolioList.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const isActive = activeIndex === index;
        return (
          <li
            key={index}
            style={
              isTabletUp
                ? {
                    width:
                      isActive || isHovered ? `${widthPersent[3]}%` : `${widthPersent[index]}%`,
                    left: `${leftPersent[index]}%`,
                    top: `${topPersent[index]}%`,
                    zIndex: index + 2 + (isActive ? 5 : 0) + (isHovered ? 10 : 0),
                    filter: isActive || isHovered ? "none" : "blur(2px)",
                  }
                : undefined
            }
            className="bg-white transition-all duration-500 md:absolute"
            onMouseEnter={() => isTabletUp && setHoveredIndex(index)}
            onMouseLeave={() => isTabletUp && setHoveredIndex(null)}
            onClick={() => isTabletUp && setActiveIndex(index)}
          >
            <div
              className="relative mb-4 aspect-[288/307] h-auto w-full max-w-[500px] md:mb-[11px] md:max-w-full"
              style={
                isTabletUp
                  ? {
                      marginBottom:
                        isActive || isHovered ? `${marginBottomActive}px` : `${marginBottom}px`,
                    }
                  : undefined
              }
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                autoPlay={isTabletUp ? index === activeIndex : isMobilePlaying[index]}
                muted
                playsInline
                loop
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={item.videoURL} type="video/mp4" />
              </video>
              <button
                onClick={() => togglePlay(index)}
                className="group absolute right-3 bottom-3 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white bg-white/10 p-4 text-black backdrop-blur-[3px] transition-all duration-800 ease-in-out hover:scale-[0.85] hover:border-[10px] hover:border-white/20 md:top-auto md:right-6 md:bottom-7 md:hidden md:h-[100px] md:w-[100px] lg:right-11 lg:bottom-[92px] lg:h-[140px] lg:w-[140px] xl:right-14 xl:h-[182px] xl:w-[182px]"
              >
                {isMobilePlaying[index] ? (
                  <PauseIcon className="h-4 w-4 group-hover:scale-[1.28] md:h-6 md:w-[29px] lg:h-10 lg:w-[34px] xl:h-[53px] xl:w-11" />
                ) : (
                  <PlayIcon className="h-4 w-4 group-hover:scale-[1.28] md:h-[29px] md:w-[29px] lg:h-10 lg:w-10 xl:h-[53px] xl:w-[53px]" />
                )}
              </button>
              {(isMobilePlaying[index] || index === activeIndex) && (
                <button
                  onClick={() => toggleMute(index)}
                  className="group absolute top-3 right-3 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white bg-white/10 p-4 text-black backdrop-blur-[3px] transition-all duration-800 ease-in-out hover:scale-[0.85] hover:border-[10px] hover:border-white/20"
                >
                  {isMutedList[index] ? (
                    <PauseIcon className="h-4 w-4 group-hover:scale-[1.28] md:h-6 md:w-[29px] lg:h-10 lg:w-[34px] xl:h-[53px] xl:w-11" />
                  ) : (
                    <PlayIcon className="h-4 w-4 group-hover:scale-[1.28] md:h-[29px] md:w-[29px] lg:h-10 lg:w-10 xl:h-[53px] xl:w-[53px]" />
                  )}
                </button>
              )}
            </div>
            <div className="border-blck/50 flex items-center justify-between border-b">
              <h4
                className="font-alumni text-xl leading-none font-bold"
                style={
                  isTabletUp
                    ? {
                        fontSize: isActive || isHovered ? `${textSizeActive}px` : `${textSize}px`,
                      }
                    : undefined
                }
              >
                {item.title}
              </h4>
              <div>
                <ParallelogramRow amount={1} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
