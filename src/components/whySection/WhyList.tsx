import { WhyListProp } from "@/types";
import { ParallelogramRow } from "../shared/ParallelogramRow";
import { WhyCard } from "./WhyCard";

export const WhyList = ({ whyList }: { whyList: WhyListProp[] }) => {
  return (
    <ul className="mx-auto flex max-w-[500px] flex-col gap-5 md:grid md:max-w-full md:grid-cols-2 md:gap-6 lg:gap-x-[160px] lg:gap-y-10 xl:mr-0 xl:w-[1200px]">
      {whyList.map((item, ind) => (
        <li key={ind + 1} className="text-txdark md:flex md:flex-col md:justify-between">
          <WhyCard title={item.title} text={item.text} ind={ind} />
          <ParallelogramRow />
        </li>
      ))}
    </ul>
  );
};
