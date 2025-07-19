import { ResponsivePosition, SinglePosition } from "@/types";

export const getCurrentPosition = (pos?: ResponsivePosition): SinglePosition => {
  const width = window.innerWidth;
  if (!pos) return {};
  if (width >= 1024 && pos.desktop) return pos.desktop;
  if (width >= 768 && pos.tablet) return pos.tablet;
  return {};
};
