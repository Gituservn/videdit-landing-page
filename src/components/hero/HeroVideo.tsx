import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { PlayIcon } from "../shared/icons/PlayIcon";
import { PauseIcon } from "../shared/icons/PauseIcon";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrolledOnce, setScrolledOnce] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
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
        const video = videoRef.current;
        const overlay = overlayRef.current;
        if (!title || !video || !overlay) return;

        const isMobile = window.innerWidth < 768;
        const isTab = window.innerWidth >= 768 && window.innerWidth < 1280;
        const isPC = window.innerWidth >= 1280 && window.innerWidth < 1920;

        const tl = gsap.timeline({
          onComplete: () => {
            unlockScroll();
            window.removeEventListener("scroll", onScroll);
          },
        });

        tl.to(title, {
          top: isMobile ? "50%" : "60%",
          left: isMobile ? "16px" : isTab ? "24px" : isPC ? "40px" : "60px",
          duration: 0.4,
          ease: "power3.inOut",
        })
          .to(
            title,
            {
              onStart() {
                title.classList.remove("-translate-x-1/2");
                title.classList.add("translate-x-0");
              },
            },
            "0.4",
          )
          .set(video, { zIndex: -2 }, "<")
          .set(overlay, { zIndex: -1 }, "<");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolledOnce]);

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play().catch(() => {});
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="absolute top-0 left-0 h-[100vh] w-full">
      {isVideoReady ? "" : <div className="bg-blck absolute inset-0 z-[13]" />}
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        loop
        className="absolute inset-0 z-[11] h-full w-full object-cover transition-all duration-500"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div ref={overlayRef} className="bg-blck/35 absolute inset-0 z-[10]" />
      <button
        onClick={togglePlay}
        className="absolute top-[93px] right-3 flex h-14 w-14 items-center justify-center rounded-full border border-white bg-white/10 p-4 text-black backdrop-blur-[3px] md:top-auto md:right-6 md:bottom-7 md:h-[100px] md:w-[100px] lg:right-11 lg:bottom-[92px] lg:h-[140px] lg:w-[140px] xl:right-14 xl:h-[182px] xl:w-[182px]"
      >
        {isPlaying ? (
          <PauseIcon className="h-4 w-4 md:h-6 md:w-[29px] lg:h-10 lg:w-[34px] xl:h-[53px] xl:w-11" />
        ) : (
          <PlayIcon className="h-4 w-4 md:h-[29px] md:w-[29px] lg:h-10 lg:w-10 xl:h-[53px] xl:w-[53px]" />
        )}
      </button>
    </div>
  );
};

export default HeroVideo;
