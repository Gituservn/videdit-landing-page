import { socialListFooter } from "@/constants/socialList";

export const SocialList = () => {
  return (
    <ul className="mx-auto grid w-[218px] grid-cols-2 gap-10 md:flex md:w-fit lg:mx-0 lg:gap-6">
      {socialListFooter.map((item) => (
        <li key={item.name} className="flex w-[86px] flex-col gap-[6px]">
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="font-alumni border-txgrey/50 hover:border-txgrey mx-auto flex h-16 w-16 items-center justify-center rounded-full border"
          >
            <div className="h-6 w-6">{item.icon}</div>
          </a>
          <p className="font-alumni mx-auto text-[18px] leading-none font-bold text-white uppercase">
            {item.name}
          </p>
        </li>
      ))}
    </ul>
  );
};
