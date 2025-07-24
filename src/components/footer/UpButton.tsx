import { ArrowIcon } from "../shared/icons/ArrowIcon";

export const UpButton = ({ className }: { className?: string }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      aria-label="scroll to top button"
      className={`group relative h-[50px] w-[50px] -rotate-90 overflow-hidden ${className}`}
      onClick={scrollToTop}
    >
      <div className="arrow-wrapper">
        <ArrowIcon className="arrow-icon text-txligth h-[50px] w-[50px] transition-transform duration-300 ease-in-out" />
      </div>
    </button>
  );
};
