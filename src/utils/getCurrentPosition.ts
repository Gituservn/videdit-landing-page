import { ResponsivePosition, SinglePosition } from "@/types";

export const getCurrentPosition = (pos?: ResponsivePosition): SinglePosition => {
  const width = window.innerWidth;
  if (!pos) return {};
  if (width >= 1280 && pos.desktop) return pos.desktop;
  if (width >= 768 && width < 1280 && pos.tablet) return pos.tablet;
  return {};
};
