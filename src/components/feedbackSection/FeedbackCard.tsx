import { FeedbackCardProps } from "@/types";
import { ArrowFrameIcon } from "../shared/icons/ArrowFrameIcon";

export const FeedbackCard = ({ item, ind }: { item: FeedbackCardProps; ind: number }) => {
  const arrowStyle = "md:max-h-auto h-[1.9vw] max-h-[8.4px] w-auto md:h-[calc(1.9vw/3)] md:max-h-3";
  const frameNumberStyle = "text-frameMob leading-none font-bold md:text-[calc(3.8vw/3)]";
  const frameDivStyle = "text-frametext absolute flex items-center gap-0.5";

  return (
    <div
      className="text-txdark relative aspect-[274/240] w-[calc(100%+2px)] bg-contain bg-center bg-no-repeat px-[18px] py-[15%] md:bg-contain md:px-[14px] md:py-[15%] lg:px-7 xl:px-10"
      style={{
        backgroundImage: 'url("/bg/frame.svg")',
      }}
    >
      <div className="mb-[18px] flex items-baseline justify-between md:mb-[14px] lg:mb-4 lg:flex-col">
        <h4 className="font-alumni text-titleFBmob md:text-titleFBmd lg:text-titleFBlg xl:text-titleFBxl leading-none font-medium">
          {item.name}
        </h4>
        <p className="text-roleFBmob md:text-roleFBmd lg:text-roleFBlg xl:text-roleFBxl uppercase">
          {item.role}
        </p>
      </div>
      <p className="text-textFBmob md:text-textFBmd lg:text-textFBlg xl:text-textFBxl">
        {item.text}
      </p>

      <div className={`${frameDivStyle} top-0 left-1/4`}>
        <p className={`${frameNumberStyle} rotate-180`}>{ind + 1}A</p>
        <ArrowFrameIcon className={`${arrowStyle}`} />
      </div>
      <div className={`${frameDivStyle} top-0 left-2/3`}>
        <p className={`${frameNumberStyle} rotate-180`}>{ind + 1}</p>
        <ArrowFrameIcon className={`${arrowStyle}`} />
      </div>
      <div className={`${frameDivStyle} bottom-0 left-1/3`}>
        <p className={`${frameNumberStyle}`}>{ind + 1}</p>
        <ArrowFrameIcon className={`${arrowStyle}`} />
      </div>
      <div className={`${frameDivStyle} bottom-0 left-4/5`}>
        <p className={`${frameNumberStyle}`}>{ind + 1}A</p>
        <ArrowFrameIcon className={`${arrowStyle}`} />
      </div>
    </div>
  );
};
