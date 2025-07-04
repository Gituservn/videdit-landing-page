import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { PlayIcon } from "../shared/icons/PlayIcon";
import { PauseIcon } from "../shared/icons/PauseIcon";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const title = document.getElementById("hero-title");
    const overlay = document.getElementById("hero-overlay");

    if (!video || !title || !overlay) return;

    // Початкове розташування: вгорі, по центру
    gsap.set(title, {
      top: 0,
      left: "50%",
      xPercent: -50,
      yPercent: 0,
    });

    const isMobile = window.innerWidth < 768;
    const isTab = 768 <= window.innerWidth && window.innerWidth < 1280;
    const isPC = 1280 <= window.innerWidth && window.innerWidth < 1920;

    const animateIn = () => {
      const tl = gsap.timeline();

      tl.to(title, {
        top: isMobile ? "50%" : "60%",
        left: isMobile ? "16px" : isTab ? "24px" : isPC ? "40px" : "60px",
        xPercent: 0,
        yPercent: -50,
        duration: 1.2,
        ease: "power3.inOut",
      });

      gsap.delayedCall(1.6, () => {
        title.classList.remove("z-[8]");
        title.classList.add("z-[1]");
      });

      tl.to(
        overlay,
        {
          duration: 1,
          opacity: 0,
          ease: "power2.out",
          onComplete: () => {
            overlay.classList.add("hidden");
          },
        },
        "-=0.8",
      );
    };

    const handleCanPlay = () => animateIn();

    video.addEventListener("canplaythrough", handleCanPlay);

    if (video.readyState >= 3) {
      animateIn();
    }

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play().catch((e) => console.warn("Autoplay error", e));
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
      <div className="bg-blck/35 absolute inset-0 z-[-1] h-[100vh] w-full"> </div>
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        loop
        className="absolute inset-0 z-[-2] h-[100vh] w-auto object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <button
        onClick={togglePlay}
        className="absolute top-[93px] right-3 z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white bg-white/10 p-4 font-bold text-black backdrop-blur-[3px] md:top-auto md:right-6 md:bottom-7 md:h-[100px] md:w-[100px] lg:right-11 lg:bottom-[92px] lg:h-[140px] lg:w-[140px] xl:right-14 xl:h-[182px] xl:w-[182px]"
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
