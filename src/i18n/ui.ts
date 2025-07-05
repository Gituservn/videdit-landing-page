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
    whyMeTitle: "Чому варто обирати професійний монтаж?",
    whyMeItem1Title: "Відео, яке продає",
    whyMeItem1Text:
      "Рекламні ролики, презентації, відгуки — щоб клієнт зрозумів і захотів саме ваш продукт.",
    whyMeItem2Title: "Відео, що зберігає емоції",
    whyMeItem2Text:
      "Зберігайте моменти з весіль, свят і сімейних зустрічей у форматі, до якого хочеться повертатись.",
    whyMeItem3Title: "Контент, який дивляться до кінця",
    whyMeItem3Text:
      "Короткі динамічні кліпи (Reels, Shorts, TikTok), які набирають перегляди і підвищують впізнаваність.",
    whyMeItem4Title: "Стильне відео — сильне позиціонування",
    whyMeItem4Text:
      "Показуйте себе як професіонала або бренд через естетику, зміст і монтаж, що захоплює.",
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
    whyMeTitle: "Why Choose Professional Video Editing?",
    whyMeItem1Title: "Videos That Sell",
    whyMeItem1Text:
      "Promotional clips, product demos, client testimonials — crafted to help your audience understand and choose your product.",
    whyMeItem2Title: "Videos That Capture Emotion",
    whyMeItem2Text:
      "Preserve the magic of weddings, celebrations, and family moments — in a format you’ll want to revisit again and again.",
    whyMeItem3Title: "The kind of content people watch till the end",
    whyMeItem3Text:
      "Short and punchy Reels, Shorts, and TikToks that drive views and build recognition.",
    whyMeItem4Title: "Stylish edits, powerful positioning",
    whyMeItem4Text:
      "Show up as a brand or expert through visuals that inspire, aesthetics that impress, and edits that speak for you.",
  },
} as const;
