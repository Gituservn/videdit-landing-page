import { forwardRef } from "react";

export const ParalelogramIcon = forwardRef<
  SVGSVGElement,
  { className?: string; style?: React.CSSProperties }
>(({ className, style }, ref) => {
  return (
    <svg
      ref={ref}
      width="100%"
      height="100%"
      viewBox="0 0 27 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="icon paralelogram"
      className={className}
      style={style}
    >
      <path d="M10 1H26L17 17H1L10 1Z" stroke="currentColor" />
    </svg>
  );
});
