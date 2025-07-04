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
    heroTitle: "Відео, яке говорить за Вас",
    heroText:
      "Професійний монтаж відео для бізнесу, подій і соцмереж — щоб ваші кадри працювали на результат",
    orderButton: "Замовити монтаж",
    portfolioButton: "Дивитись роботи",
  },
  en: {
    logo: "Olga video",
    [NavListEnum.ABOUT]: "About me",
    [NavListEnum.PORTFOLIO]: "Portfolio",
    [NavListEnum.SERVICES]: "Services",
    contacts: "Contacts",
    heroTitle: "Video That Speaks for You",
    heroText:
      "Professional video editing for businesses, events, and social media - so every frame works toward your goals",
    orderButton: " Let’s Create",
    portfolioButton: "See My Work",
  },
} as const;
