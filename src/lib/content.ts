export type Locale = "ru" | "en";

export type LandingContent = {
  locale: Locale;
  altLocale: Locale;
  altHref: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  nav: {
    partners: string;
    benefits: string;
    faq: string;
    feedback: string;
    login: string;
    register: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    titleLines: string[];
    descriptionBefore: string;
    brand: string;
    descriptionAfter: string;
    cta: string;
  };
  traffic: {
    title: string;
    items: { title: string; description: string; icon: TrafficIcon }[];
  };
  benefits: {
    title: string;
    items: { title: string; description: string; image: string }[];
  };
  bonus: {
    title: string;
    percent: string;
    note: string;
    cta: string;
  };
  faq: {
    items: { question: string; answer: string }[];
  };
  contacts: {
    title: string;
    items: { title: string; emailKey: "support" | "bizdev" | "sales" }[];
  };
  footer: {
    terms: string;
    privacy: string;
  };
  legal: {
    termsTitle: string;
    privacyTitle: string;
  };
};

export type TrafficIcon =
  | "search"
  | "social"
  | "graphic"
  | "mail"
  | "video"
  | "other";

export const content: Record<Locale, LandingContent> = {
  ru: {
    locale: "ru",
    altLocale: "en",
    altHref: "/en",
    metaTitle: "Poker Partners — партнёрская программа iGaming и Betting",
    metaDescription:
      "Poker Partners — прямой рекламодатель казино, покера и беттинга. 400+ офферов, повышенные ставки, досрочные выплаты и помощь в масштабировании трафика.",
    metaKeywords: [
      "партнёрская программа",
      "poker partners",
      "iGaming CPA",
      "betting affiliate",
      "казино партнёрка",
      "покер трафик",
      "RevShare",
      "арбитраж трафика",
    ],
    nav: {
      partners: "Партнерам",
      benefits: "Преимущества",
      faq: "FAQ",
      feedback: "Обратная связь",
      login: "Вход",
      register: "Регистрация",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    hero: {
      titleLines: ["ПОМОГАЕМ ПОЛУЧАТЬ", "МАКСИМУМ ДОХОДА", "С КАЖДОГО ЛИДА"],
      descriptionBefore: "",
      brand: "Poker Partners",
      descriptionAfter: " — прямой рекламодатель казино, покера и беттинга",
      cta: "ПРИСОЕДИНЯЙСЯ",
    },
    traffic: {
      title: "МЫ ПРИНИМАЕМ СЛЕДУЮЩИЕ ТИПЫ ТРАФИКА",
      items: [
        {
          title: "Поисковой",
          description: "SEO, ASO, PPC, Tube",
          icon: "search",
        },
        {
          title: "Трафик из соц. сетей",
          description: "Facebook/Instagram, Telegram, TikTok, Twitter",
          icon: "social",
        },
        {
          title: "Графический",
          description:
            "Native, Banner/Teaser, Push notifications, Clickunder/Pop-up",
          icon: "graphic",
        },
        {
          title: "Рассылочный",
          description: "SMS, WhatsApp/Viber/etc., E-Mail",
          icon: "mail",
        },
        {
          title: "Видео",
          description: "Streaming, Preroll, Blogging",
          icon: "video",
        },
        {
          title: "Другие типы трафика",
          description: "inApp",
          icon: "other",
        },
      ],
    },
    benefits: {
      title: "ПРЕИМУЩЕСТВА СОТРУДНИЧЕСТВА",
      items: [
        {
          title: "Прибыльные офферы",
          description:
            "Больше 400 проверенных офферов в iGaming и Betting вертикалях. Доступ к продуктам на эксклюзивных условиях.",
          image: "/images/benefit-1.svg",
        },
        {
          title: "Повышенные ставки",
          description:
            "Увеличиваем ставки: договариваемся об индивидуальных условиях в зависимости от ГЕО, оффера и качества трафика.",
          image: "/images/benefit-2.svg",
        },
        {
          title: "Рост качества трафика",
          description:
            "Подскажем, на каких этапах улучшить качество трафика, чтобы он окупался для рекламодателя, а вы растили доход.",
          image: "/images/benefit-3.svg",
        },
        {
          title: "Помощь на всех этапах",
          description:
            "От подготовки к заливу до обработки трафика. Настроим домены, ссылки и смартлинки, ускорим подготовку контента.",
          image: "/images/benefit-4.svg",
        },
        {
          title: "Досрочные выплаты",
          description:
            "Оплачиваем трафик проверенным партнёрам до сверки, чтобы вы могли масштабировать связки.",
          image: "/images/benefit-5.svg",
        },
        {
          title: "Помощь в масштабировании",
          description:
            "Даём инструменты, автоматизируем рутину, помогаем собрать команду, чтобы вы масштабировали трафик и доход.",
          image: "/images/benefit-6.svg",
        },
      ],
    },
    bonus: {
      title: "ПРИСОЕДИНЯЙСЯ СЕЙЧАС И ПОЛУЧАЙ БОНУС",
      percent: "+2%",
      note: "к первой выплате в первый месяц.",
      cta: "ПРИСОЕДИНИТЬСЯ",
    },
    faq: {
      items: [
        {
          question:
            "Чем обусловлены ставки по RS? (в случае покупного трафика)",
          answer:
            "Ставки по RS для покупного трафика формируются на основе качества, источника и объёма трафика. Мы анализируем каждый поток индивидуально и предлагаем наиболее выгодные условия для наших партнёров.",
        },
        {
          question: "Чем обусловлены ставки по RS? (в случае seo трафика)",
          answer:
            "C целью показать вам отдачу продукта и перспективы. Мы отдаем 80% RS от NGR на 2 месяца. Все цифры Вы сможете видеть в статистике в реальном времени. На третий и последующие месяцы ревшара составит 50%.",
        },
      ],
    },
    contacts: {
      title: "Контакты",
      items: [
        { title: "Support", emailKey: "support" },
        { title: "Bizdev", emailKey: "bizdev" },
        { title: "Sales-Manager", emailKey: "sales" },
      ],
    },
    footer: {
      terms: "Пользовательское соглашение",
      privacy: "Политика конфиденциальности",
    },
    legal: {
      termsTitle: "Пользовательское соглашение",
      privacyTitle: "Политика конфиденциальности",
    },
  },
  en: {
    locale: "en",
    altLocale: "ru",
    altHref: "/",
    metaTitle: "Poker Partners — iGaming & Betting Affiliate Program",
    metaDescription:
      "Poker Partners is a direct advertiser for casino, poker and betting. 400+ offers, higher rates, early payouts and help scaling your traffic.",
    metaKeywords: [
      "affiliate program",
      "poker partners",
      "iGaming CPA",
      "betting affiliate",
      "casino affiliate",
      "poker traffic",
      "RevShare",
      "media buying",
    ],
    nav: {
      partners: "Partners",
      benefits: "Advantages",
      faq: "FAQ",
      feedback: "Feedback",
      login: "Sign in",
      register: "Sign up",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      titleLines: ["WE HELP YOU GET", "MAXIMUM INCOME", "FROM EACH LEAD"],
      descriptionBefore: "",
      brand: "Poker Partners",
      descriptionAfter:
        " — direct advertiser of casinos, poker and betting",
      cta: "JOIN",
    },
    traffic: {
      title: "WE ACCEPT THE FOLLOWING TYPES OF TRAFFIC",
      items: [
        {
          title: "Search Engine",
          description: "SEO, ASO, PPC, Tube",
          icon: "search",
        },
        {
          title: "Traffic from social networks",
          description: "Facebook/Instagram, Telegram, TikTok, Twitter",
          icon: "social",
        },
        {
          title: "Graphic",
          description:
            "Native, Banner/Teaser, Push notifications, Clickunder/Pop-up",
          icon: "graphic",
        },
        {
          title: "Mailing list",
          description: "SMS, WhatsApp/Viber/etc., E-Mail",
          icon: "mail",
        },
        {
          title: "Video",
          description: "Streaming, Preroll, Blogging",
          icon: "video",
        },
        {
          title: "Other traffic types",
          description: "InApp",
          icon: "other",
        },
      ],
    },
    benefits: {
      title: "ADVANTAGES OF COOPERATION",
      items: [
        {
          title: "Profitable offers",
          description:
            "There are more than 400 verified offers in iGaming and Betting verticals. Access to products on exclusive terms.",
          image: "/images/benefit-1.svg",
        },
        {
          title: "Increased rates",
          description:
            "We are increasing the bids: we agree on individual terms depending on the GEO, the offer and the quality of traffic.",
          image: "/images/benefit-2.svg",
        },
        {
          title: "Traffic quality growth",
          description:
            "Let's tell you at what stages to improve the quality of traffic so that it pays off for the advertiser, and you grow your income.",
          image: "/images/benefit-3.svg",
        },
        {
          title: "Help at all stages",
          description:
            "From preparing for the bay to handling traffic. We'll set up domains, links, and smartlinks, and speed up content preparation.",
          image: "/images/benefit-4.svg",
        },
        {
          title: "Early payments",
          description:
            "We pay for traffic to trusted partners before reconciliation, so that you can scale bundles.",
          image: "/images/benefit-5.svg",
        },
        {
          title: "Help with scaling",
          description:
            "We give you tools, automate your routine, and help you assemble a team so that you can scale your traffic and revenue.",
          image: "/images/benefit-6.svg",
        },
      ],
    },
    bonus: {
      title: "JOIN NOW AND GET A BONUS",
      percent: "+2%",
      note: "to the first payout in the first month.",
      cta: "JOIN",
    },
    faq: {
      items: [
        {
          question:
            "What is the reason for the RS rates? (in case of purchase traffic)",
          answer:
            "RS rates for purchased traffic are based on quality, source and volume. We analyze each stream individually and offer the most profitable terms for our partners.",
        },
        {
          question:
            "What is the reason for the RS rates? (in case of seo traffic)",
          answer:
            "To show you the product return and prospects. We give 80% RS of NGR for 2 months. You can see all figures in real-time statistics. From the third month onward, revenue share is 50%.",
        },
      ],
    },
    contacts: {
      title: "Contacts",
      items: [
        { title: "Support", emailKey: "support" },
        { title: "Bizdev", emailKey: "bizdev" },
        { title: "Sales-Manager", emailKey: "sales" },
      ],
    },
    footer: {
      terms: "User agreement",
      privacy: "Privacy policy",
    },
    legal: {
      termsTitle: "User agreement",
      privacyTitle: "Privacy Policy",
    },
  },
};
