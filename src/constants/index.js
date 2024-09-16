import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    figma,
    next,
    marketplace,
    join,
    oxminer,
    bootstrap,
    mytravel,
    stellarburger,
    exchange,
    yandex,
    oxlogo,
    nerocaffe
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "О себе",
    },
    {
      id: "work",
      title: "Работы",
    },
    {
      id: "contact",
      title: "Контакты",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "JS Developer",
      icon: backend,
    },
    {
      title: "UI/UX Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "Фронтенд-разработчик Bootcamp",
      company_name: "Яндекс Практикум",
      icon: yandex,
      iconBg: "#f1f1f1",
      date: "Октябрь 2022 - Апрель 2023",
      points: [
        "Теоретическое обучение html, css, javascript.",
        "Реализация образовательных проектов для реализации знаний на практике.",
        "Общение с менторами и тестировщиками для того чтобы исправить и улучшить проекты.",
        "Писание тестов для выявления ошибок.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "OxMiner",
      icon: oxlogo,
      iconBg: "#022e75",
      date: "Сентябрь 2023 - Январь 2024",
      points: [
        "Cоздание приложения с нуля из проекта в figma с помощью react.",
        "Совместная работа в командах, включая дизайнеров, менеджеров по продуктам и других разработчиков, чтобы создать приложение наилучшим образом.",
        "Реализация адаптивного дизайна для всех устройств и совместимость со всеми браузерами",
        "Участие в review страницы и конструктивное обсуждение того, как улучшить.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "NeroCaffé",
      icon: nerocaffe,
      iconBg: "#0f0f0f",
      date: "Февраль 2024 - Март 2024",
      points: [
        "Создание интерфейса сайта и реализация в react.",
        "Реализация адаптивного дизайна для всех устройств и совместимость со всеми браузерами",
        "Создание и внедрение системы заказа на месте с помощью qr-кода",
        "Публикация на сайте через платформы Meta фотографий событий и новостей кафе.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Маркетплейс (startup)",
      icon: marketplace,
      iconBg: "#E6DEDD",
      date: "Июнь 2024 - Present",
      points: [
        "Создание интерфейса сайта и реализация в react.",
        "Реализация адаптивного дизайна для всех устройств и совместимость со всеми браузерами.",
        "Создание панели администратора для управления заказами и доставки.",
        "Внедрение системы онлайн-платежей.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "MyTravel",
      description:
        "Веб-приложение создано, чтобы позволить пользователю арендовать свой дом или арендовать недвижимость. С возможностью управлять своим бронированием.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: mytravel,
      source_code_link: "https://github.com/VladimiroAntipin/my-travel",
    },
    {
      name: "JoinNote",
      description:
        "Веб-приложение, которое позволяет создавать документы, вставлять таблицы, изображения и многое другое. Приложение также позволяет публиковать свои документы, чтобы сделать их доступными только для чтения.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: join,
      source_code_link: "https://github.com/VladimiroAntipin/JoinNote",
    },
    {
      name: "OxMiner",
      description:
        "Платформа, которая позволяет познакомиться с компанией и позволяет купить NFT, подключив кошелек",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: oxminer,
      source_code_link: "https://github.com/VladimiroAntipin/OxApp/tree/Development",
    },
    {
      name: "StellarBurger",
      description:
        "Веб-приложение, которое позволяет войти в систему, заказать еду, увидеть заказы в процессе подготовки и готовые, просматривать историю заказов и редактировать информацию о пользователе",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: stellarburger,
      source_code_link: "https://github.com/VladimiroAntipin/react-burger",
    },
    {
      name: "RateExchange",
      description:
        "Онлайн конвертер валют, который позволяет выбрать некоторые валюты и конвертировать их в реальном времени",
      tags: [
        {
          name: "svelte",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: exchange,
      source_code_link: "https://github.com/VladimiroAntipin/exchangeRate",
    },
  ];
  
  export { services, technologies, experiences, projects };