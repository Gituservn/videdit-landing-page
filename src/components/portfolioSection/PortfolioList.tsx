import { useEffect, useRef, useState } from "react";
import { ParallelogramRow } from "../shared/ParallelogramRow";
import { PauseIcon } from "../shared/icons/PauseIcon";
import { PlayIcon } from "../shared/icons/PlayIcon";
import { SoundIcon } from "../shared/icons/SoundIcon";
import { MuteIcon } from "../shared/icons/MuteIcon";
import { PortfolioProp } from "@/types";

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
  const [isPlayingList, setIsPlayingList] = useState<boolean[]>(
    portfolioList.map((_, i) => i === activeIndex),
  );

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
      setHeightListTab(result);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      video.muted = true;
      if (isTabletUp) {
        if (i === activeIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      } else {
        if (isMobilePlaying[i]) {
          video.load();
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

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        if (i !== index) v.pause();
      });

      video.play();
      if (isTabletUp) {
        setIsPlayingList((prev) => prev.map((_, i) => i === index));
      } else {
        setIsMobilePlaying((prev) => prev.map((_, i) => i === index));
      }
    } else {
      video.pause();
      if (isTabletUp) {
        setIsPlayingList((prev) => prev.map(() => false));
      } else {
        setIsMobilePlaying((prev) => prev.map(() => false));
      }
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
      className="relative mx-auto flex max-w-[500px] flex-col gap-4 md:max-w-full lg:max-w-[1379px]"
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
                onClick={() => handleVideoClick(index)}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={item.videoURL} type="video/mp4" />
              </video>
              {((!isPlayingList[index] && isTabletUp && hoveredIndex === index) ||
                (!isTabletUp && !isMobilePlaying[index])) && (
                <button
                  onClick={() => handleVideoClick(index)}
                  className="group absolute top-1/2 left-1/2 flex h-14 w-14 -translate-1/2 cursor-pointer items-center justify-center rounded-full border border-white bg-white/10 p-2 backdrop-blur-[3px] transition-all duration-800 ease-in-out hover:scale-[0.95] hover:border-[6px] hover:border-white/20 lg:h-[140px] lg:w-[140px] hover:lg:scale-[0.85] hover:lg:border-[10px]"
                >
                  <PlayIcon className="h-4 w-4 group-hover:scale-[1.28] lg:h-10 lg:w-10" />
                </button>
              )}
              {isPlayingList[index] && isTabletUp && hoveredIndex === index && (
                <button className="group pointer-events-none absolute top-1/2 left-1/2 flex h-14 w-14 -translate-1/2 cursor-pointer items-center justify-center rounded-full border border-white bg-white/10 p-2 backdrop-blur-[3px] transition-all duration-800 ease-in-out hover:scale-[0.95] hover:border-[6px] hover:border-white/20 lg:h-[140px] lg:w-[140px] hover:lg:scale-[0.85] hover:lg:border-[10px]">
                  <PauseIcon className="h-4 w-4 group-hover:scale-[1.28] lg:h-10 lg:w-10" />
                </button>
              )}
              {(isMobilePlaying[index] || (index === activeIndex && isPlayingList[index])) && (
                <button
                  onClick={() => toggleMute(index)}
                  className="group absolute top-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white bg-white/10 backdrop-blur-[3px] transition-all duration-800 ease-in-out hover:scale-[0.95] hover:border-[6px] hover:border-white/20 lg:h-14 lg:w-14 lg:p-2 hover:lg:scale-[0.85] hover:lg:border-[10px]"
                >
                  {isMutedList[index] ? (
                    <MuteIcon className="h-4 w-4 group-hover:scale-150 lg:h-6 lg:w-6" />
                  ) : (
                    <SoundIcon className="h-4 w-4 group-hover:scale-150 lg:h-6 lg:w-6" />
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
