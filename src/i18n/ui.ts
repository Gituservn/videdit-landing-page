import { NavListEnum } from "@/constants/navList";

export const languages = {
  en: "en",
  ua: "ua",
};

export const defaultLang = "ua";
export const showDefaultLang = false;

export const ui = {
  ua: {
    logo: "Ольга відео",
    [NavListEnum.ABOUT]: "Про мене",
    [NavListEnum.PORTFOLIO]: "Портфоліо",
    [NavListEnum.SERVICES]: "Послуги",
    contacts: "Контакти",
  },
  en: {
    logo: "Olga video",
    [NavListEnum.ABOUT]: "About me",
    [NavListEnum.PORTFOLIO]: "Portfolio",
    [NavListEnum.SERVICES]: "Services",
    contacts: "Contacts",
  },
} as const;
