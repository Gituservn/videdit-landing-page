import { Fragment, useState } from "react";
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
              onToggle={() => handleToggle(index)}
            />
          </li>

          <li key={index + "image"} className={`hidden ${index === 4 ? "lg:block" : "md:block"} `}>
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
