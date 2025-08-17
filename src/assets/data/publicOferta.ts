import { DocumentType } from "@/types";

const siteUrl = import.meta.env.SITE || "http://localhost:4321";
const email = "olgaserdiukwork@gmail.com";

export const publicOferta: Record<"ua" | "en", DocumentType> = {
  ua: {
    title: "ДОГОВІР ПУБЛІЧНОЇ ОФЕРТИ",
    date: "від 01.08.2025",
    subtitle: [
      {
        paragraph: [
          {
            type: "text",
            text: "Ольга Сердюк (далі«Виконавець») в особі Ольги Сердюк з одного боку і користувач, який акцептував оферту, постійно розміщену в мережі Інтернет за мережевою адресою ",
          },
          {
            type: "link",
            text: siteUrl,
            to: siteUrl,
          },
          {
            type: "text",
            text: ", користувач сайту ",
          },
          {
            type: "link",
            text: siteUrl,
            to: siteUrl,
          },
          {
            type: "text",
            text: " у мережі Інтернет, уклали цей договір на реалізацію інформаційного – консультаційного продукту на умовах, викладених нижче.",
          },
        ],
      },
    ],
    points: [
      {
        title: "ТЕРМІНИ І ВИЗНАЧЕННЯ",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Основні поняття та визначення термінів, що вживаються в Договорі:",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Договір» - договір на реалізацію інформаційно - консультаційних послуг.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Виконавець» - Ольга Сердюк.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Замовник» - будь-яка дієздатна фізична особа, індивідуальний підприємець або юридична особа, яка здійснила акцепт цієї публічної оферти.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Послуги» - монтаж відео, перелік (види, умови, вартість) яких визначені на сайті Виконавця ",
              },
              {
                type: "link",
                text: siteUrl,
                to: siteUrl,
              },
              {
                type: "text",
                text: ", який відкритий для публічного ознайомлення та вільного доступу Замовника. Послуга може передбачати можливість здійснення зворотного зв’язку з особою, яка надає інформаційно-консультаційні послуги.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Об’єкт реалізації» - послуги з монтажу відео для соціальних мереж, бізнесу і особистих потреб.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Споживач» - фізична особа, яка оплатила послугу. Виконавець надає Послуги, передбачені предметом цього Договору.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Сайт» - вебсайт Виконавця ",
              },
              {
                type: "link",
                text: siteUrl,
                to: siteUrl,
              },
              {
                type: "text",
                text: ".",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Замовлення» - оформлений Замовником запит на отримання послуг.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Сторони» - Виконавець та Замовник.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Акцепт (прийняття пропозиції)» – повне й безумовне прийняття Замовником умов Публічної оферти (пропозиції), викладених в цьому Договорі, шляхом здійснення замовлення у Виконавця та/або сплата 100% вартості послуг. Договір, укладений Замовником за допомогою акцепту публічної оферти є чинним відповідно до ст. 642 Цивільного кодексу України і прирівнюється до договору, укладеному Сторонами у письмовій формі. При здійснення замовлення через обраний Замовником канал зв'язку та/або здійснення повної чи часткової оплати, Замовник вважається таким, що ознайомлений та згоден з умовами цієї публічної оферти.",
              },
            ],
          },
        ],
      },
      {
        title: "ПРЕДМЕТ ОФЕРТИ",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "2.1. Предметом цієї Оферти є надання Замовнику послуг з монтажу відео відповідно до пп. 2.1.1. Оферти.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "2.1.1. Послуги з монтажу відео включають проведення онлайн зустрічі, менторські та коучингові сесії та навчальні матеріали до них. Повний перелік послуг міститься в Додатку до Оферта.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "2.2. Замовник, акцептуючи Договір та додаток до нього, підтверджує, що надає персональні дані Споживача за його згодою. Виконавець не несе відповідальності у разі незаконної передачі Замовником персональних даних третьої особи.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "2.3. Виконавець має право в будь-який момент змінювати зміст матеріалів та умови цієї публічної Оферти в односторонньому порядку без попереднього погодження із Замовником, забезпечуючи при цьому публікацію змінених умов на сайті ",
              },
              {
                type: "link",
                text: siteUrl,
                to: siteUrl,
              },
              {
                type: "text",
                text: ".",
              },
            ],
          },
        ],
      },
      {
        title: "АКЦЕПТУВАННЯ ДОГОВОРУ",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "3.1. Цей договір є публічною офертою Виконавця і містить усі істотні умови договору надання послуг з монтажу відео.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "3.2. Акцептом цієї публічної оферти є здійснення передачі Виконавцю матеріалів для монтажу відео через електронну пошту або соціальні мережі вказані на сайті ",
              },
              {
                type: "link",
                text: siteUrl,
                to: siteUrl,
              },
              {
                type: "text",
                text: ". З моменту надходження запиту на надання послуг Замовнику Виконавцем, цей договір вважається укладеним між Замовником та Виконавцем.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "3.3.  Замовник може самостійно у будь-який момент ознайомитись із умовами Договору на сайті Виконавця та зобов’язаний відслідковувати інформацію із сайту самостійно перед оформленням кожної наступної заявки на Послуги, зокрема, з метою ознайомлення із важливою інформацією, яка може періодично вноситись Виконавцем.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "3.4. В приватній переписці Виконавець і Замовник за згодою сторін можуть домовитися про індивідуальну програму співпраці.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "3.5. Детальні умови (тривалість, обсяг, вартість, спосіб оплати) узгоджуються окремо та фіксуються в індивідуальному договорі або в електронному листуванні.",
              },
            ],
          },
        ],
      },
      {
        title: "ПРАВА ТА ОБОВ’ЯЗКИ СТОРІН",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "4.1. Виконавець зобов’язується:",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.1.1. надавати Замовнику Послуги згідно з умовами цього Договору.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.1.2. зберігати конфіденційну інформацію, отриману від Замовника, при наданні послуг за цим договором;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.1.3. дотримуватись вимог законодавства, що стосуються обробки, передачі та захисту персональних даних Замовника.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.2. Виконавець має право:",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.2.1. вимагати від Замовника належного та повного виконання взятих на себе зобов’язань за цим Договором.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.2.2. відмовитися від надання послуг Замовнику, який надав Виконавцю недостовірні дані, а також Замовнику, який порушує п. 5.2. Оферти;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.3. Замовник зобов’язується:",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.3.1. належним чином виконувати взяті на себе зобов’язання за цим Договором.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.3.2. прийняти та оплатити надані Виконавцем послуги в порядку та на умовах визначеними цим Договором.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.4. Замовник має право:",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.4.1. Отримати послуги на умовах та в порядку передбаченими даним Договором.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.4.2. звернутися до Виконавця з письмовою заявою про перенесення строків надання оплачених послуг за цим договором із додатком підтверджуючих неможливість отримання послуг документів: довідки про перебування у стаціонарі, про стихійних лих, а також інших подій, які унеможливлюють отримання Замовником послуг, передбачених цим договором.",
              },
            ],
          },
        ],
      },
      {
        title: "ВАРТІСТЬ ПОСЛУГ І ПОРЯДОК ОПЛАТИ",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "5.1. Вартість послуг за Договором зазначена на сторінці ",
              },
              {
                type: "link",
                text: siteUrl,
                to: siteUrl,
              },
              {
                type: "text",
                text: ".",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "5.2. Оплата обраної послуги проводиться Замовником шляхом зарахування грошових коштів у порядку 100% передоплати, шляхом використання одного із запропонованих Виконавцем способів оплати.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "5.3. Відсутність вимоги щодо повернення коштів відповідно до розділу 7 цього Договору, означає, що послуги надані у строк та належної якості.",
              },
            ],
          },
        ],
      },
      {
        title: "ОСОБЛИВІ УМОВИ",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "6.1. Послуги, передбачені цим Договором, надаються Виконавцем особисто Замовнику та вказаним ним Споживачам. Замовнику забороняється передавати реквізити доступу до об’єкту реалізації третім особам.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "6.2. Виконавець не несе відповідальності за неможливість надання послуг Замовнику з причин, які не залежать від Виконавця, а саме: порушення роботи Інтернет-каналу, обладнання або програмного забезпечення з боку Замовника.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "6.5. Послуги, що надаються Виконавцем згідно цього Договору не підлягають обов’язковому ліцензуванню. Надання Послуг не супроводжується підсумковою атестацією та видачею документів про освіту.",
              },
            ],
          },
        ],
      },
      {
        title: "УМОВИ І ПОРЯДОК ПОВЕРНЕННЯ ГРОШОВИХ ЗАСОБІВ",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "7.1. Замовник має право на подання заявки на повернення коштів у разі невідповідності отриманого об’єкту реалізації технічному завданню чи якщо монтаж відео по наданим матеріалам ще не почався або виконано не більше 50% монтажу. Заявка на повернення подається у письмовій формі на електронну адресу Виконавця з темою листа “Refund”.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.2. Повернення коштів можливе лише за невиконану частину роботи на момент отримання Виконавцем письмової заявки на повернення. Розрахунок повернення здійснюється виходячи з фактично наданого обсягу послуг.",
              },
            ],
          },

          {
            paragraph: [
              {
                type: "text",
                text: "7.3. До заявки обов’язково додаються наступні документи:",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Для фізичних осіб та індивідуальних підприємців:",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Заява із зазначенням причини повернення та згодою з умовами розрахунку;",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Копія паспорта Замовника (для ідентифікації особи);",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Докази оплати послуг.",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Для юридичних осіб:",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Заява із зазначенням причини повернення та згодою з умовами розрахунку;",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "ІПН, ЄДРПОУ (для громадян України);",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Копія паспорта директора;",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Наказ про призначення директора;",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Докази оплати послуг.",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.4. Послуга вважається наданою і не підлягає поверненю оплати, якщо Замовник не повідомив про скасування Замовлення до його готовності максимум на 50%.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.5. Заявка Замовника розглядається Виконавцем протягом 10 (десяти) робочих днів з дати її отримання. Повернення коштів здійснюється протягом 10 (десяти) робочих днів з дати прийняття позитивного рішення щодо повернення.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.6. Замовник, якому було здійснено повернення частини коштів, втрачає право на отримання будь-яких подальших Послуг за цим договором.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.7. Виконавець не несе відповідальності за невідповідність Послуг очікуванням Замовника та/або його суб’єктивною оцінкою. Такі обставини не є підставою для визнання Послуг неякісними чи ненаданими.",
              },
            ],
          },
        ],
      },
      {
        title: "ЗАКЛЮЧНІ ПОЛОЖЕННЯ",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "8.1. Цей договір набирає чинності з моменту акцепту Замовника відповідно із п. 3.2. договору та діє до виконання зобов’язань сторонами.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "8.2. Усі суперечки та розбіжності між сторонами вирішуються шляхом переговорів.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "8.3. Сторони встановили необхідність дотримання обов’язкового досудового претензійного порядку до звернення до суду Строк відповіді на претензію становить 30 (тридцять) календарних днів із дати отримання претензії.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "8.4. Усі питання, не врегульовані Офертою, вирішуються відповідно до чинного законодавства України.",
              },
            ],
          },
        ],
      },
      {
        title: "РЕКВІЗИТИ ВИКОНАВЦЯ",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Контактні дані: ",
              },
              {
                type: "link",
                text: "https://t.me/Olga_Serdiuk_0",
                to: "https://t.me/Olga_Serdiuk_0",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "E-mail: ",
              },
              {
                type: "email",
                text: email,
                to: email,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Ольга Сердюк",
              },
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: "PUBLIC OFFER AGREEMENT",
    date: "from 01.08.2025",
    subtitle: [
      {
        paragraph: [
          {
            type: "text",
            text: "Olga Serdiuk (hereinafter referred to as the “Executor”) on behalf of Olga Serdiuk, on the one hand, and the user who accepted the offer, permanently posted on the Internet at the network address ",
          },
          { type: "link", text: siteUrl, to: siteUrl },
          {
            type: "text",
            text: ", the user of the site ",
          },
          { type: "link", text: siteUrl, to: siteUrl },
          {
            type: "text",
            text: " on the Internet, entered into this agreement for the implementation of an information and consulting product on the terms set out below.",
          },
        ],
      },
    ],
    points: [
      {
        title: "TERMS AND DEFINITIONS",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "The main concepts and definitions of terms used in the Agreement:",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "“Agreement” - an agreement on the provision of information and consulting services.",
              },
            ],
          },
          {
            paragraph: [{ type: "text", text: "“Executor” - Olga Serdiuk." }],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "“Customer” - any capable individual, individual entrepreneur or legal entity that has accepted this public offer.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "“Services” - video editing, the list (types, conditions, cost) of which is determined on the Executor's website ",
              },
              { type: "link", text: siteUrl, to: siteUrl },
              {
                type: "text",
                text: ", which is open for public review and free access of the Customer. The service may provide for the possibility of feedback with the person providing information and consulting services.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "“Object of implementation” - video editing services for social networks, business and personal needs.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "“Consumer” - an individual who has paid for the service. The Executor provides the Services provided for by the subject of this Agreement.",
              },
            ],
          },
          {
            paragraph: [
              { type: "text", text: "“Site” - the Executor's website " },
              { type: "link", text: siteUrl, to: siteUrl },
              { type: "text", text: "." },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "“Order” - an order placed by the Customer for the provision of services.",
              },
            ],
          },
          {
            paragraph: [{ type: "text", text: "“Parties” - the Executor and the Customer." }],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "“Acceptance (acceptance of the offer)” - full and unconditional acceptance by the Customer of the terms of the Public Offer (offer) set forth in this Agreement by placing an order with the Executor and/or paying 100% of the cost of services. The Agreement concluded by the Customer by accepting the public offer is valid in accordance with Article 642 of the Civil Code of Ukraine and is equivalent to an agreement concluded by the Parties in writing. When placing an order through the selected communication channel by the Customer and/or making full or partial payment, the Customer is considered to be familiar with and agrees to the terms of this public offer.",
              },
            ],
          },
        ],
      },
      {
        title: "SUBJECT OF THE OFFER",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "2.1. The subject of this Offer is the provision of services to the Customer for video editing in accordance with p. 2.1.1. of the Offer.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "2.1.1. Video editing services include online meetings, mentoring and coaching sessions, and training materials for them. The full list of services is contained in the Appendix to the Offer.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "2.2. By accepting the Agreement and the appendix to it, the Customer confirms that he provides the personal data of the Consumer with his consent. The Executor is not responsible for the illegal transfer of personal data of a third party by the Customer.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "2.3. The Executor has the right to change the content of the materials and the terms of this public Offer at any time unilaterally without prior agreement with the Customer, while ensuring the publication of the changed terms on the site ",
              },
              { type: "link", text: siteUrl, to: siteUrl },
              { type: "text", text: "." },
            ],
          },
        ],
      },
      {
        title: "ACCEPTANCE OF THE AGREEMENT",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "3.1. This Agreement is a public offer of the Executor and contains all the essential terms of the contract for the provision of video editing services.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "3.2. The acceptance of this public offer is the transfer by the Customer of materials for video editing via email or social networks specified on the site ",
              },
              { type: "link", text: siteUrl, to: siteUrl },
              {
                type: "text",
                text: ". From the moment the Executor receives a request for the provision of services from the Customer, this Agreement is considered concluded between the Customer and the Executor.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "3.3. The Customer can independently at any time familiarize himself with the terms of the Agreement on the Executor's website and is obliged to track information from the site independently before placing each subsequent order for Services, in particular, in order to familiarize himself with important information that may be periodically introduced by the Executor.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "3.4. In private correspondence, the Executor and the Customer, by mutual agreement, can agree on an individual cooperation program.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "3.5. The detailed terms (duration, scope, cost, method of payment) are agreed separately and fixed in an individual contract or in electronic correspondence.",
              },
            ],
          },
        ],
      },
      {
        title: "RIGHTS AND OBLIGATIONS OF THE PARTIES",
        content: [
          { paragraph: [{ type: "text", text: "4.1. The Executor undertakes:" }] },
          {
            paragraph: [
              {
                type: "text",
                text: "4.1.1. to provide the Customer with Services in accordance with the terms of this Agreement.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.1.2. to keep confidential information received from the Customer when providing services under this Agreement;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.1.3. to comply with the requirements of the legislation regarding the processing, transfer and protection of the Customer's personal data.",
              },
            ],
          },
          { paragraph: [{ type: "text", text: "4.2. The Executor has the right:" }] },
          {
            paragraph: [
              {
                type: "text",
                text: "4.2.1. to require the Customer to properly and fully fulfill the obligations assumed under this Agreement.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.2.2. to refuse to provide services to the Customer who provided the Executor with unreliable data, as well as to the Customer who violates clause 5.2 of the Offer;",
              },
            ],
          },
          { paragraph: [{ type: "text", text: "4.3. The Customer undertakes:" }] },
          {
            paragraph: [
              {
                type: "text",
                text: "4.3.1. to properly fulfill the obligations assumed under this Agreement.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.3.2. to accept and pay for the services provided by the Executor in the manner and on the terms specified in this Agreement.",
              },
            ],
          },
          { paragraph: [{ type: "text", text: "4.4. The Customer has the right:" }] },
          {
            paragraph: [
              {
                type: "text",
                text: "4.4.1. to receive services on the terms and in the manner provided for by this Agreement.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "4.4.2. to contact the Executor with a written application for the postponement of the deadlines for the provision of paid services under this Agreement with the attachment of documents confirming the impossibility of receiving services: a certificate of stay in a hospital, about natural disasters, as well as other events that make it impossible for the Customer to receive services provided for by this Agreement.",
              },
            ],
          },
        ],
      },
      {
        title: "COST OF SERVICES AND PAYMENT PROCEDURE",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "5.1. The cost of services under the Agreement is indicated on the page ",
              },
              { type: "link", text: siteUrl, to: siteUrl },
              { type: "text", text: "." },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "5.2. Payment for the selected service is made by the Customer by crediting funds in the amount of 100% prepayment, using one of the payment methods proposed by the Executor.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "5.3. The absence of a refund request in accordance with section 7 of this Agreement means that the services have been provided on time and of proper quality.",
              },
            ],
          },
        ],
      },
      {
        title: "SPECIAL CONDITIONS",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "6.1. The services provided by the Executor under this Agreement are provided personally to the Customer and the Consumers specified by him. The Customer is prohibited from transferring access details to the object of implementation to third parties.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "6.2. The Executor is not responsible for the impossibility of providing services to the Customer for reasons beyond the Executor's control, namely: violation of the operation of the Internet channel, equipment or software on the part of the Customer.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "6.5. The services provided by the Executor under this Agreement are not  subject to mandatory licensing. The provision of Services is not accompanied by final certification and issuance of education documents.",
              },
            ],
          },
        ],
      },
      {
        title: "CONDITIONS AND PROCEDURE FOR REFUNDING FUNDS",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "7.1. The Customer has the right to submit an application for a refund in case of non-compliance of the object of implementation with the technical task or if video editing on the provided materials has not yet started or has been completed by no more than 50%. The refund application is submitted in writing to the Executor's email with the subject of the letter “Refund”.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.2. A refund is possible only for the unperformed part of the work at the time of receipt by the Executor of the written application for a refund. The refund calculation is made based on the actual volume of services provided.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.3. The following documents are mandatory attached to the application:",
              },
            ],
          },
          { paragraph: [{ type: "text", text: "For individuals and individual entrepreneurs:" }] },
          {
            paragraph: [
              {
                type: "text",
                text: "An application stating the reason for the refund and agreeing to the terms of the calculation;",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "A copy of the Customer's passport (for identification);",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [{ type: "text", text: "Proof of payment for services.", sublist: true }],
          },
          { paragraph: [{ type: "text", text: "For legal entities:" }] },
          {
            paragraph: [
              {
                type: "text",
                text: "An application stating the reason for the refund and agreeing to the terms of the calculation;",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              { type: "text", text: "TIN, EDRPOU (for citizens of Ukraine);", sublist: true },
            ],
          },
          {
            paragraph: [
              { type: "text", text: "A copy of the director's passport;", sublist: true },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "An order for the appointment of the director;",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [{ type: "text", text: "Proof of payment for services.", sublist: true }],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.4. The service is considered provided and is not subject to a refund of payment if the Customer did not notify about the cancellation of the Order before its readiness at most 50%.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.5. The Customer's application is considered by the Executor within 10 (ten) working days from the date of its receipt. The refund is made within 10 (ten) working days from the date of a positive decision on the refund.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.6. The Customer who has been refunded part of the funds loses the right to receive any further Services under this Agreement.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "7.7. The Executor is not responsible for the non-compliance of the Services with the Customer's expectations and/or his subjective assessment. Such circumstances are not grounds for recognizing the Services as poor quality or not provided.",
              },
            ],
          },
        ],
      },
      {
        title: "FINAL PROVISIONS",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "8.1. This Agreement comes into force from the moment of acceptance by the Customer in accordance with p. 3.2. of the Agreement and is valid until the fulfillment of the obligations of the parties.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "8.2. All disputes and disagreements between the parties are resolved through negotiations.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "8.3. The parties established the need to comply with the mandatory pre-trial claim procedure before applying to the court. The response period for the claim is 30 (thirty) calendar days from the date of receipt of the claim.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "8.4. All issues not regulated by the Offer are resolved in accordance with the current legislation of Ukraine.",
              },
            ],
          },
        ],
      },
      {
        title: "EXECUTOR'S DETAILS",
        content: [
          {
            paragraph: [
              { type: "text", text: "Contact details: " },
              {
                type: "link",
                text: "https://t.me/Olga_Serdiuk_0",
                to: "https://t.me/Olga_Serdiuk_0",
              },
            ],
          },
          {
            paragraph: [
              { type: "text", text: "E-mail: " },
              { type: "email", text: email, to: email },
            ],
          },
          { paragraph: [{ type: "text", text: "Olga Serdiuk" }] },
        ],
      },
    ],
  },
};
