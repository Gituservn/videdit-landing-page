import { Fragment, useEffect, useRef, useState } from "react";
import { FaqCard } from "./FaqCard";
import { ResponsivePosition } from "@/types";

export const FaqList = ({
  faqList,
  showAnswer,
  hideAnswer,
}: {
  faqList: { question: string; answer: string[]; position?: ResponsivePosition }[];
  showAnswer: string;
  hideAnswer: string;
}) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const imageRef = useRef<HTMLLIElement>(null);
  const [imageSize, setImageSize] = useState<{ width: number; height: number } | undefined>(
    undefined,
  );
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    setImageSize({ width: rect.width, height: rect.height });
  }, [windowWidth]);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <ul className="border-blck mx-auto max-w-[500px] border border-b-0 md:grid md:max-w-[850px] md:grid-cols-3 md:gap-4 md:border-0 lg:max-w-[1370px] lg:grid-cols-5 lg:gap-7 xl:gap-[30px]">
      {faqList.map((item, index) => (
        <Fragment key={index}>
          <li key={item.question} className="relative">
            <FaqCard
              key={index}
              answer={item.answer}
              question={item.question}
              position={item.position}
              showAnswer={showAnswer}
              hideAnswer={hideAnswer}
              isOpen={activeId === index}
              imageSize={imageSize}
              onToggle={() => handleToggle(index)}
            />
          </li>

          <li
            key={index + "image"}
            ref={index !== 4 ? imageRef : undefined}
            className={`hidden ${index === 4 ? "lg:block" : "md:block"} `}
          >
            <img
              src={`/images/faq${index + 1}.jpg`}
              alt="FAQ image"
              className="md:border-blck h-full w-full object-cover md:border"
            />
          </li>
        </Fragment>
      ))}
    </ul>
  );
};
