export const HeroTitle = ({ title }: { title: string }) => {
  return (
    <h1
      id="hero-title"
      style={{ left: "calc(50% - var(--offset))" }}
      className="text-txligth font-alumni absolute top-5 z-[12] w-full text-[32px] leading-none font-bold uppercase transition-all duration-700 [--offset:144px] md:top-[60px] md:text-[64px] md:[--offset:290px] lg:top-11 lg:text-9xl lg:[--offset:576px] xl:top-[70px] xl:text-[160px] xl:[--offset:720px]"
    >
      {title}
    </h1>
  );
};
