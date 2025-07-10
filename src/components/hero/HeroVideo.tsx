import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { PlayIcon } from "../shared/icons/PlayIcon";
import { PauseIcon } from "../shared/icons/PauseIcon";

const HeroVideo = () => {
  const videoDesktopRef = useRef<HTMLVideoElement | null>(null);
  const videoMobileRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrolledOnce, setScrolledOnce] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const getCurrentVideo = () => {
    if (typeof window === "undefined") return null;
    return window.innerWidth >= 1280 ? videoDesktopRef.current : videoMobileRef.current;
  };

  useEffect(() => {
    const video = getCurrentVideo();
    if (!video) return;

    const onCanPlay = () => {
      setIsVideoReady(true);
      document.body.classList.remove("no-scroll");
      video.removeEventListener("canplaythrough", onCanPlay);
    };

    video.addEventListener("canplaythrough", onCanPlay);
    if (video.readyState >= 3) onCanPlay();

    return () => {
      video.removeEventListener("canplaythrough", onCanPlay);
    };
  }, []);

  useEffect(() => {
    let lockedScrollY = 0;

    const lockScroll = () => {
      lockedScrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${lockedScrollY}px`;
      document.body.style.width = "100%";
    };
    const unlockScroll = () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, lockedScrollY);
    };

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.001 && !scrolledOnce) {
        setScrolledOnce(true);
        lockScroll();
        document.body.classList.add("hero-scrolled");

        const title = document.getElementById("hero-title");
        const video = getCurrentVideo();
        const overlay = overlayRef.current;
        if (!title || !video || !overlay) return;

        const isMobile = window.innerWidth < 768;
        const isTab = window.innerWidth >= 768 && window.innerWidth < 1280;
        const isPC = window.innerWidth >= 1280 && window.innerWidth < 1920;

        const tl = gsap.timeline({
          onComplete: () => {
            unlockScroll();
            window.removeEventListener("scroll", onScroll);
            title.classList.replace("z-[12]", "z-[2]");
          },
        });

        tl.to(title, {
          top: isMobile ? "50%" : "60%",
          left: isMobile ? "16px" : isTab ? "24px" : isPC ? "40px" : "60px",
          duration: 0.5,
          ease: "power3.inOut",
        })
          .to(
            title,
            {
              onStart() {
                if (isMobile) {
                  title.classList.remove("uppercase");
                  title.classList.add("normal-case");
                }
                title.style.fontSize = isMobile
                  ? "32px"
                  : isTab
                    ? "48px"
                    : window.innerWidth >= 1920
                      ? "80px"
                      : "64px";
              },
            },
            "0.5",
          )
          .set(video, { zIndex: -2 }, "<")
          .set(overlay, { zIndex: -1 }, "<");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolledOnce]);

  const togglePlay = () => {
    const video = getCurrentVideo();
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="absolute top-0 left-0 h-[100vh] w-full">
      {isVideoReady ? "" : <div className="bg-blck absolute inset-0 z-[13]" />}
      <video
        ref={videoDesktopRef}
        muted
        autoPlay
        playsInline
        loop
        className="absolute inset-0 z-[11] hidden h-full w-full object-cover transition-all duration-500 lg:block"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <video
        ref={videoMobileRef}
        muted
        autoPlay
        playsInline
        loop
        className="absolute inset-0 z-[11] h-full w-full object-cover transition-all duration-500 lg:hidden"
      >
        <source src="/videos/hero-mob.mp4" type="video/mp4" />
      </video>
      <div ref={overlayRef} className="bg-blck/35 absolute inset-0 z-[10]" />
      <button
        onClick={togglePlay}
        className="group absolute top-[93px] right-3 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white bg-white/10 p-4 backdrop-blur-[3px] transition-all duration-800 ease-in-out hover:scale-[0.85] hover:border-[10px] hover:border-white/20 md:top-auto md:right-6 md:bottom-7 md:h-[100px] md:w-[100px] lg:right-11 lg:bottom-[92px] lg:h-[140px] lg:w-[140px] xl:right-14 xl:h-[182px] xl:w-[182px]"
      >
        {isPlaying ? (
          <PauseIcon className="h-4 w-4 group-hover:scale-[1.28] md:h-6 md:w-[29px] lg:h-10 lg:w-[34px] xl:h-[53px] xl:w-11" />
        ) : (
          <PlayIcon className="h-4 w-4 group-hover:scale-[1.28] md:h-[29px] md:w-[29px] lg:h-10 lg:w-10 xl:h-[53px] xl:w-[53px]" />
        )}
      </button>
    </div>
  );
};

export default HeroVideo;
