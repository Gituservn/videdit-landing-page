import type { DocumentType } from "@/types";
const siteUrl = import.meta.env.SITE || "http://localhost:4321";
const email = "olgaserdiukwork@gmail.com";

export const privacyPolicyText: Record<"ua" | "en", DocumentType> = {
  ua: {
    title: "Політика конфіденційності та обробки персональних даних",
    subtitle: [
      {
        paragraph: [{ type: "text", text: "Ольга Сердюк в особі Ольги Сердюк" }],
      },
    ],
    date: "01 серпня 2025 року",
    points: [
      {
        title: "Загальні положення",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Цю Політику обробки персональних даних складено відповідно до вимог Закону України «Про персональні дані» та визначає порядок обробки персональних даних та заходи щодо забезпечення безпеки персональних даних і вона набирає чинності з моменту публікації на сайті, дата публікації вказана в кінці документу.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Ольга Сердюк» (далі – Оператор). Оператор ставить своєю найважливішою метою та умовою здійснення своєї діяльності дотримання прав і свобод людини та громадянина при обробці персональних даних відвідувачів сайту, у тому числі захисту прав на недоторканність приватного життя.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Ця політика Оператора щодо обробки персональних даних (далі – Політика) застосовується до всієї інформації, яку Оператор може отримати про відвідувачів веб-сайту ",
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
        title: "Основні поняття, що використовуються у Політиці",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Автоматизована обробка персональних даних – обробка персональних даних за допомогою обчислювальної техніки;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Блокування персональних даних – тимчасове припинення обробки персональних даних (крім випадків, якщо обробка необхідна для уточнення персональних даних);",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Веб-сайт – сукупність графічних та інформаційних матеріалів, а також програм для ЕОМ та баз даних, що забезпечують їх доступність у мережі інтернет за адресою ",
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
                text: "Інформаційна система персональних даних – сукупність персональних даних, що містяться в базах даних, що забезпечує їх обробку за допомогою інформаційних технологій і технічних засобів;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Знеособлення персональних даних — дії, у яких неможливо визначити без використання додаткової інформації належність персональних даних конкретному Користувачеві чи іншому суб’єкту персональних даних;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Обробка персональних даних – будь-яка дія (операція) або сукупність дій (операцій), що здійснюються з використанням засобів автоматизації або без використання таких засобів з персональними даними, включаючи збирання, запис, систематизацію, накопичення, зберігання, уточнення (оновлення, зміну), вилучення, використання, передачу (поширення, надання, доступ), знеособлення, блокування, видалення, знищення персональних даних;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Оператор – юридична або фізична особа, які самостійно або спільно з іншими особами організовують та (або) здійснюють обробку персональних даних, а також визначають цілі обробки персональних даних, склад персональних даних, що підлягають обробці, дії (операції), що здійснюються із персональними даними;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Персональні дані – будь-яка інформація, що стосується прямо або опосередковано до певного або визначеного Користувачеві веб-сайту ",
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
                text: "Користувач – будь-який відвідувач веб-сайту ",
              },
              {
                type: "link",
                text: siteUrl,
                to: siteUrl,
              },
              {
                type: "text",
                text: ", який залишає на сайті свої персональні дані;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Надання персональних даних – дії, створені задля розкриття персональних даних певному особі чи певному колу осіб;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Поширення персональних даних – будь-які дії, спрямовані на розкриття персональних даних невизначеному колу осіб (передача персональних даних) або на ознайомлення з персональними даними необмеженого кола осіб, у тому числі оприлюднення персональних даних у засобах масової інформації, розміщення в інформаційно-телекомунікаційних мережах або надання доступу до персональних даних будь-яким іншим способом;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Транскордонна передача персональних даних – передача персональних даних на територію іноземної держави до органу влади іноземної держави, іноземної фізичної чи іноземної юридичної особи;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Знищення персональних даних – будь-які дії, внаслідок яких персональні дані знищуються безповоротно з неможливістю подальшого відновлення змісту персональних даних в інформаційній системі персональних даних та (або) внаслідок яких знищуються матеріальні носії персональних даних.",
              },
            ],
          },
        ],
      },
      {
        title: "Оператор може обробляти такі персональні дані Користувача:",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Прізвище, ім’я;",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Електронна адреса;",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Текст повідомлення;",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Інші дані, добровільно надані Користувачем.",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Також на сайті відбувається збір та обробка знеособлених даних про відвідувачів (в т.ч. файлів cookie) за допомогою сервісів інтернет-статистики (Google Аналітика та інших).",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Дані за текстом Політики об’єднані загальним поняттям Персональні дані.",
              },
            ],
          },
        ],
      },
      {
        title: "Цілі обробки персональних даних",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Мета обробки персональних даних Користувача – інформування Користувача за допомогою надсилання електронних листів; надання доступу Користувачеві до сервісів, інформації та/або матеріалів, що містяться на веб-сайті ",
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
                text: "Знеособлені дані Користувачів, які збираються за допомогою сервісів інтернет-статистики, служать для збору інформації про дії Користувачів на сайті, покращення якості сайту та його змісту.",
              },
            ],
          },
        ],
      },
      {
        title: "Правові основи обробки персональних даних",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Оператор обробляє персональні дані Користувача лише у разі їх заповнення та/або відправлення Користувачем самостійно через спеціальні форми, розміщені на сайті ",
              },
              {
                type: "link",
                text: siteUrl,
                to: siteUrl,
              },
              {
                type: "text",
                text: ". Заповнюючи відповідні форми та/або надсилаючи свої персональні дані Оператору, Користувач висловлює свою згоду з цією Політикою.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Оператор обробляє знеособлені дані про Користувача у випадку, якщо це дозволено у налаштуваннях браузера Користувача (включено збереження файлів cookie та використання технології JavaScript).",
              },
            ],
          },
        ],
      },
      {
        title: "Порядок збирання, зберігання, передачі та інших видів обробки персональних даних",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Безпека персональних даних, що обробляються Оператором, забезпечується шляхом реалізації правових, організаційних та технічних заходів, необхідних для виконання в повному обсязі вимог чинного законодавства в галузі захисту персональних даних осіб.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Персональні дані Користувача ніколи, за жодних умов не будуть передані третім особам, за винятком випадків, пов’язаних із виконанням чинного законодавства.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "У разі виявлення неточностей у персональних даних, Користувач може актуалізувати їх самостійно відписавшись від розсилки повідомлень і  підписатися знову з новими даними.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Щоб подати запит на видалення персональних даних, Користувач повинен надіслати листа на ",
              },
              {
                type: "email",
                text: email,
                to: email,
              },
              {
                type: "text",
                text: ' із темою "Запит на видалення персональних даних" та вказати у повідомленні такі дані:',
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Ім’я (яке було вказано).",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Електронну адресу, яку Користувач вказував при заповненні форми",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: 'Чітке прохання видалити персональні дані (наприклад, "Прошу видалити моє ім\'я та електронну адресу з вашої системи").',
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Ми опрацюємо запит та повідомимо про результати.",
              },
            ],
          },
        ],
      },
      {
        title: "Транскордонна передача персональних даних",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Оператор на початок здійснення транскордонної передачі персональних даних зобов’язаний переконатися у цьому, що іноземним державою, територію якого передбачається здійснювати передачу персональних даних, забезпечується надійний захист прав суб’єктів персональних даних.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Транскордонна передача персональних даних на території іноземних держав, які не відповідають вищевказаним вимогам, може здійснюватися лише у разі наявності згоди у письмовій формі суб’єкта персональних даних на транскордонну передачу його персональних даних та/або виконання договору, стороною якого є суб’єкт персональних даних.",
              },
            ],
          },
        ],
      },
      {
        title: "Заключні положення",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Користувач може отримати будь-які роз’яснення щодо питань, що його цікавлять стосовно обробки персональних даних, звернувшись до Оператора за допомогою електронної пошти ",
              },
              {
                type: "email",
                text: email,
                to: email,
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
                text: "У цьому документі буде відображено будь-які зміни політики обробки персональних даних Оператором. Політика діє безстроково до заміни її новою версією. Дата публікації оновленої версії буде вказана на початку документу.",
              },
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy and Personal Data Processing",
    subtitle: [
      {
        paragraph: [{ type: "text", text: "Olga Serdiuk represented by Olga Serdiuk" }],
      },
    ],
    date: "August 1, 2025",
    points: [
      {
        title: "General Provisions",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "This Privacy Policy is compiled in accordance with the requirements of the Law of Ukraine 'On Personal Data Protection' and defines the procedure for processing personal data and measures to ensure the security of personal data. It comes into effect upon publication on the website, with the publication date indicated at the end of the document.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "«Olga Serdiuk» (hereinafter referred to as the Operator). The Operator considers compliance with human and citizen rights and freedoms during personal data processing as its most important goal and condition for its activities, including the protection of privacy rights.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "This Operator's Personal Data Processing Policy (hereinafter referred to as the Policy) applies to all information that the Operator may receive about visitors to the website ",
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
        title: "Basic Concepts Used in the Policy",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Automated processing of personal data – processing of personal data using computing technology;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Blocking of personal data – temporary cessation of personal data processing (except when processing is necessary for clarifying personal data);",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Website – a collection of graphic and informational materials, as well as computer programs and databases that provide their availability on the Internet at address ",
              },
              { type: "link", text: siteUrl, to: siteUrl },
              { type: "text", text: "." },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Information system of personal data – a collection of personal data contained in databases that ensures their processing using information technologies and technical means;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Anonymization of personal data – actions that make it impossible to determine without additional information the belonging of personal data to a specific User or other subject of personal data;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Operator – a legal or natural person who independently or jointly with other persons organizes and/or carries out the processing of personal data, as well as determines the purposes of personal data processing, the composition of personal data to be processed, actions (operations) performed with personal data;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Personal data – any information related directly or indirectly to a specific or identifiable User of the website ",
              },
              { type: "link", text: siteUrl, to: siteUrl },
              { type: "text", text: "." },
            ],
          },
          {
            paragraph: [
              { type: "text", text: "User – any visitor to the website " },
              { type: "link", text: siteUrl, to: siteUrl },
              { type: "text", text: ", who leaves their personal data on the site;" },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Provision of personal data – actions aimed at disclosure of personal data to a specific person or a specific circle of persons;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Distribution of personal data – any actions aimed at disclosing personal data to an indefinite circle of persons (transfer of personal data) or familiarizing an indefinite circle of persons with personal data, including publication of personal data in the media, placement in information and telecommunication networks, or providing access to personal data in any other way;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Cross-border transfer of personal data – transfer of personal data to the territory of a foreign state to an authority of a foreign state, a foreign natural or legal person;",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Destruction of personal data – any actions that result in the irreversible destruction of personal data with the impossibility of further restoration of the content of personal data in the information system of personal data and/or as a result of which material carriers of personal data are destroyed.",
              },
            ],
          },
        ],
      },
      {
        title: "The Operator may process the following personal data of the User:",
        content: [
          {
            paragraph: [{ type: "text", text: "Last name, first name;", sublist: true }],
          },
          {
            paragraph: [{ type: "text", text: "Email address;", sublist: true }],
          },
          {
            paragraph: [{ type: "text", text: "Message text;", sublist: true }],
          },
          {
            paragraph: [
              { type: "text", text: "Other data voluntarily provided by the User.", sublist: true },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Also, the site collects and processes anonymized data about visitors (including cookies) using internet statistics services (Google Analytics and others).",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "The data in the text of the Policy is combined under the general term Personal Data.",
              },
            ],
          },
        ],
      },
      {
        title: "Purposes of Personal Data Processing",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "The purpose of processing the User's personal data is to inform the User by sending emails; providing the User with access to services, information, and/or materials contained on the website ",
              },
              { type: "link", text: siteUrl, to: siteUrl },
              { type: "text", text: "." },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Anonymized data of Users collected using internet statistics services serve to collect information about the actions of Users on the site, improve the quality of the site and its content.",
              },
            ],
          },
        ],
      },
      {
        title: "Legal Grounds for Personal Data Processing",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "The Operator processes the User's personal data only if they are filled out and/or sent by the User independently through special forms located on the website ",
              },
              { type: "link", text: siteUrl, to: siteUrl },

              {
                type: "text",
                text: ". By filling out the relevant forms and/or sending their personal data to the Operator, the User expresses their consent to this Policy.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "The Operator processes anonymized data about the User if this is allowed in the User's browser settings (cookies are saved and JavaScript technology is used).",
              },
            ],
          },
        ],
      },
      {
        title: "Procedure for Collection, Storage, Transfer, and Other Processing of Personal Data",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "The security of personal data processed by the Operator is ensured by implementing legal, organizational, and technical measures necessary to fully comply with the requirements of current legislation in the field of personal data protection.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "The User's personal data will never, under any circumstances, be transferred to third parties, except in cases related to the execution of current legislation.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "In case of detecting inaccuracies in personal data, the User can update them independently by unsubscribing from the mailing list and subscribing again with new data.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "To submit a request for the deletion of personal data, the User must send an email to ",
              },
              { type: "email", text: email, to: email },
              {
                type: "text",
                text: ' with the subject "Request for Deletion of Personal Data" and specify the following data in the message:',
              },
            ],
          },
          {
            paragraph: [{ type: "text", text: "Name (as specified).", sublist: true }],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Email address that the User specified when filling out the form",
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: 'A clear request to delete personal data (for example, "Please delete my name and email address from your system").',
                sublist: true,
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "We will process the request and inform you of the results.",
              },
            ],
          },
        ],
      },
      {
        title: "Cross-Border Transfer of Personal Data",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "Before carrying out cross-border transfer of personal data, the Operator must ensure that the foreign state to whose territory the transfer of personal data is planned provides reliable protection of the rights of personal data subjects.",
              },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "Cross-border transfer of personal data to the territories of foreign states that do not meet the above requirements can only be carried out with the written consent of the personal data subject for cross-border transfer of their personal data and/or execution of a contract to which the personal data subject is a party.",
              },
            ],
          },
        ],
      },
      {
        title: "Final Provisions",
        content: [
          {
            paragraph: [
              {
                type: "text",
                text: "The User can obtain any clarifications on issues that interest them regarding the processing of personal data by contacting the Operator via email ",
              },
              { type: "email", text: email, to: email },
              { type: "text", text: "." },
            ],
          },
          {
            paragraph: [
              {
                type: "text",
                text: "This document will reflect any changes in the Operator's personal data processing policy. The Policy is valid indefinitely until replaced by a new version. The publication date of the updated version will be indicated at the beginning of the document.",
              },
            ],
          },
        ],
      },
    ],
  },
};
