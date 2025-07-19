import { ServiceItemProp } from "@/types";

export const ServiceCard = ({ item }: { item: ServiceItemProp }) => {
  return (
    <>
      <div className="relative h-screen w-full">
        <video
          muted
          autoPlay
          playsInline
          loop
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={item.videoURL} type="video/mp4" />
        </video>
      </div>
      <div className="absolute bottom-[94px] left-0 h-[196px] w-full max-w-[350px] p-4 backdrop-blur-[10px] md:bottom-[84px] md:ml-6 md:h-[272px] md:max-w-[410px] md:p-3 lg:ml-10 lg:h-[290px] lg:max-w-[542px] xl:ml-[60px]">
        <h3 className="font-alumni mb-4 text-[32px] leading-none font-bold whitespace-pre-line lowercase md:text-5xl lg:text-[64px]">
          {item.title}
        </h3>
        <ul className="pl-5">
          {item.list.map((item) => (
            <li key={item} className="list-outside list-disc pl-1 md:text-xl lg:text-2xl">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
