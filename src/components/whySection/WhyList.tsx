import { ParallelogramRow } from "../shared/ParallelogramRow";
import { WhyCard } from "./WhyCard";

type WhyListProp = { title: string; text: string };

export const WhyList = ({ whyList }: { whyList: WhyListProp[] }) => {
  return (
    <ul className="hide-scrollbar mx-auto flex max-w-[450px] flex-col gap-5 md:grid md:max-w-full md:grid-cols-2 md:gap-6 lg:flex lg:snap-mandatory lg:flex-row lg:flex-nowrap lg:gap-6 lg:overflow-x-auto lg:pl-[53%] xl:pl-[38%]">
      {whyList.map((item, ind) => (
        <li
          key={ind + 1}
          className="text-txdark md:flex md:flex-col md:justify-between lg:w-[520px] lg:shrink-0 lg:snap-start"
        >
          <WhyCard title={item.title} text={item.text} ind={ind} />
          <ParallelogramRow />
        </li>
      ))}
    </ul>
  );
};
