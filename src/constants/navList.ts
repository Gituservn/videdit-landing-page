import { ui } from "@/i18n/ui";
export enum NavListEnum {
  SERVICES = "servicies",
  PORTFOLIO = "portfolio",
  ABOUT = "about",
}

export const navList = Object.values(NavListEnum);

export const nav = navList.map((item) => ({
  id: item,
  titleKey: item as keyof (typeof ui)["ua"],
}));
