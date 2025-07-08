export const WhyCard = ({ ind, title, text }: { ind: number; title: string; text: string }) => {
  return (
    <div>
      <div className="border-blck/50 font-alumni flex gap-3 border-b p-4 pr-0 text-xl leading-none font-bold md:pt-[38px] md:pb-0 md:text-2xl lg:pb-5 lg:text-[28px] xl:text-[32px]">
        <span>{`0${ind + 1}.`}</span>
        <h3 className="md:min-h-12 lg:min-h-auto">{title}</h3>
      </div>
      <p className="pt-4 pr-6 pb-8 pl-4 md:text-xl lg:pt-5 lg:text-2xl">{text}</p>
    </div>
  );
};
