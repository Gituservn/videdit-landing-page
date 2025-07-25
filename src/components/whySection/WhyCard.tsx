export const WhyCard = ({ ind, title, text }: { ind: number; title: string; text: string }) => {
  return (
    <div>
      <div className="border-blck/50 font-alumni flex gap-3 border-b p-4 pr-0 text-2xl leading-none font-bold md:pt-[38px] md:pb-6 md:text-[28px] lg:pb-5 lg:text-[32px]">
        <span>{`0${ind + 1}.`}</span>
        <h3 className="">{title}</h3>
      </div>
      <p className="pt-4 pr-6 pb-8 pl-4 md:pt-5 md:text-xl lg:pt-5 lg:text-2xl">{text}</p>
    </div>
  );
};
