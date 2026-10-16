// All site content lives here. Edit this file to update the portfolio; components only render it.

export type Accent = "primary" | "amber" | "coral" | "green" | "purple" | "slate";

export type MockType =
  | "dashboard"
  | "checkout"
  | "components"
  | "bank"
  | "migration"
  | "shop"
  | "matrix"
  | "monitor"
  | "queue"
  | "forecast"
  | "aid"
  | "hotel"
  | "cms";

export type Project = {
  title: string;
  kind: string;
  role: string;
  short: string;
  desc: string;
  points: string[];
  /** Full stack, any order; the UI groups and colors them by layer. */
  tags: string[];
  /** Real screenshot under /public. Leave out for NDA work to show the illustration instead. */
  img?: string;
  /** object-position for the card crop, e.g. "center top". */
  pos?: string;
  mock: MockType;
  color: Accent;
};

export type Job = {
  when: string;
  title: string;
  company: string;
  color: Accent;
  /** One line; the highlight is rendered bold. */
  text: [before: string, highlight: string, after: string];
  tags: string[];
};

export type SkillGroup = {
  icon: "frontend" | "styling" | "backend" | "testing" | "cloud" | "ai";
  color: Accent;
  title: string;
  items: string;
};

export const profile = {
  name: "Noel Alfonso Miranda",
  firstName: "Noel",
  initials: "NM",
  logo: { name: "noel", tld: "dev" },
  title: "Full Stack Developer",
  greeting: "Hey there, I'm Noel 👋",
  headline: { before: "I turn ideas into web apps people ", highlight: "enjoy using", after: "." },
  subtitle:
    "Full Stack Developer with 11+ years building fast, accessible web apps for fintech, banking and e-commerce, from React front ends to Node.js APIs.",
  status: "Available for freelance projects",
  photo: { src: "/noel.jpg", alt: "Noel Alfonso Miranda at his desk" },
  email: "noelalfonsomiranda@gmail.com",
  linkedin: {
    url: "https://www.linkedin.com/in/noel-alfonso-miranda-709a63a4",
    label: "in/noel-alfonso-miranda",
  },
  seoDescription:
    "Noel Alfonso Miranda, freelance Full Stack Developer with 11+ years building fast, accessible web apps with React, TypeScript and Node.js for fintech, banking and e-commerce.",
};

export const about = {
  eyebrow: "About me",
  heading: "From UI to API, I build the whole feature.",
  paragraphs: [
    "I'm a developer from the Philippines who enjoys the whole journey of a feature, from business rules and Figma to the last edge case. I care about clean, maintainable code, accessibility and good tests.",
    "Working freelance, I'm your single point of contact from start to finish: I turn your goals into a plan, build the front end and back end, and keep you updated along the way.",
  ],
  workflow: {
    title: "How I ship with AI (Claude, ChatGPT, Kiro)",
    steps: ["Plan", "Figma → UI", "Code", "Tests", "Docs", "Review before delivery"],
  },
};

export const skills: SkillGroup[] = [
  {
    icon: "frontend",
    color: "primary",
    title: "Frontend",
    items: "React, Next.js, TypeScript, Redux Toolkit, React Query, Lit",
  },
  {
    icon: "styling",
    color: "coral",
    title: "UI and styling",
    items: "Tailwind, styled-components, MUI, Ant Design, WCAG",
  },
  {
    icon: "backend",
    color: "green",
    title: "Backend and data",
    items: "Node.js, NestJS, Express, REST, PostgreSQL, MongoDB",
  },
  {
    icon: "testing",
    color: "purple",
    title: "Testing",
    items: "Jest, Vitest, React Testing Library, Cypress, MSW",
  },
  {
    icon: "cloud",
    color: "amber",
    title: "Tooling and cloud",
    items: "Storybook, Nx, Vite, Docker, AWS, CI/CD, Git",
  },
  {
    icon: "ai",
    color: "slate",
    title: "AI-assisted dev",
    items: "Claude, ChatGPT, Kiro, prompt and context engineering",
  },
];

/** Shown first, in this order. Every other project follows after them, in the order listed below. */
export const FEATURED = [
  "Mint Hosted Payment Page and WebPay",
  "Mint Hub",
  "ARM: Acquirer Routing Matrix",
  "UnionBank Online",
  "SYKES OneTEAM",
  "7-Eleven CLiQQ Shop",
];

export const projects: Project[] = [
  {
    kind: "Fintech · Payments",
    title: "Mint Hosted Payment Page and WebPay",
    img: "/projects/mint-hpp.jpg",
    pos: "center top",
    mock: "checkout",
    color: "primary",
    role: "Full Stack Developer",
    short:
      "Secure checkout with 3-D Secure, Apple Pay, Google Pay and PayID, plus an embeddable payment component.",
    desc: "A secure, customer-facing checkout page that merchants use to collect payments for invoices and payment requests. Its companion, Mint WebPay, is an embeddable web component published to npm and a CDN, so merchants can drop the same payment experience into their own sites.",
    points: [
      "Card payments with 3-D Secure, Apple Pay, Google Pay and PayID",
      "Multi-currency conversion and surcharging",
      "Partial, over- and pending-payment flows",
      "WebPay works with vanilla JS, React, Vue or Angular",
      "Tokenised card details, so payment data never touches merchant systems",
    ],
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Lit",
      "Web Components",
      "Stripe",
      "Node.js",
      "Express",
      "Java",
      "Vitest",
      "React Testing Library",
      "AWS",
      "npm/CDN",
    ],
  },
  {
    kind: "Fintech · SaaS",
    title: "Mint Hub",
    img: "/projects/mint-hub.jpg",
    pos: "center top",
    mock: "dashboard",
    color: "green",
    role: "Full Stack Developer",
    short: "The merchant portal and admin console for the Mint payments platform.",
    desc: "Mint Hub is the web portal and admin console that merchants and Mint staff use to manage the Mint payments platform. It is built as an Nx monorepo with shared UI, API, state and feature libraries.",
    points: [
      "Transactions dashboard and detail views",
      "New payments: charge a customer or send a payment request",
      "Refunds and report exports",
      "Role-based user management, company and account settings",
      "Surcharging, integrations, rewards and two-factor login",
    ],
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Nx",
      "Redux Toolkit",
      "React Query",
      "styled-components",
      "Storybook",
      "Node.js",
      "Express",
      "Java",
      "REST APIs",
      "Jest",
      "Vitest",
      "AWS",
    ],
  },
  {
    kind: "Fintech · Admin tool",
    title: "ARM: Acquirer Routing Matrix",
    img: "/projects/mint-arm.jpg",
    pos: "center top",
    mock: "matrix",
    color: "amber",
    role: "Full Stack Developer",
    short: "Sets which payment processor handles each payment method and card fee class.",
    desc: "An admin tool for choosing which payment processor (acquirer) handles each payment method and card fee class for a merchant. It ships as embeddable React modules, so it runs inside the React-based hub and in legacy JSP/HTML pages.",
    points: [
      "Connect and configure payment processors",
      "Add, edit or remove payment types",
      "Schedule future fee and surcharge changes with full change history",
      "Read-only matrix view for merchants",
      "ES and UMD builds for React and legacy pages",
    ],
    tags: [
      "React",
      "TypeScript",
      "ES/UMD modules",
      "JSP",
      "Node.js",
      "Express",
      "Java",
      "REST APIs",
      "Vitest",
      "AWS",
    ],
  },
  {
    kind: "Banking",
    title: "UnionBank Online",
    img: "/projects/unionbank.jpg",
    pos: "center",
    mock: "bank",
    color: "purple",
    role: "Senior React Developer",
    short: "Web banking used nationwide to manage accounts, transfer funds and pay bills.",
    desc: "The web banking platform of UnionBank of the Philippines, used by customers nationwide to manage their accounts and move money from any device. I maintained and enhanced the web app, building accessible, responsive UI from Figma designs.",
    points: [
      "Balances, transactions and fund transfers to local banks",
      "Bill payments",
      "Secure login with reCAPTCHA and verified-URL (Cybersure) protection",
      "Accessible (WCAG), responsive UI with Ant Design and Bootstrap",
      "Jest and React Testing Library tests, deployed on AWS",
    ],
    tags: [
      "React",
      "Next.js",
      "Redux",
      "Ant Design",
      "Bootstrap",
      "REST APIs",
      "Jest",
      "React Testing Library",
      "AWS",
    ],
  },
  {
    kind: "Enterprise · Workforce",
    title: "SYKES OneTEAM",
    img: "/projects/oneteam.jpg",
    pos: "left top",
    mock: "monitor",
    color: "coral",
    role: "Lead React Developer",
    short: "Workforce platform that shares contact-centre talent across a whole account.",
    desc: "OneTEAM lets contact-centre talent be shared across a whole account instead of a single site. I led its migration from .NET to React, mentored the developers and set the front-end code standards.",
    points: [
      "Intelligent Monitor: a live view of every agent's state",
      "Filters by site, team, state, language and call type",
      "Agent-availability stats, a wallboard and built-in team chat",
      "React, Redux and Material UI on ASP.NET REST APIs",
      "Jest-tested components shipped through CI/CD to AWS",
    ],
    tags: ["React", "Redux", "Material UI", "ASP.NET", "REST APIs", "Jest", "CI/CD", "AWS"],
  },
  {
    kind: "E-commerce",
    title: "7-Eleven CLiQQ Shop",
    img: "/projects/cliqq.jpg",
    pos: "center 60%",
    mock: "shop",
    color: "slate",
    role: "Full Stack Developer · React/Node",
    short: "Shop online, then pick up for free at your nearest 7-Eleven store.",
    desc: "7-Eleven Philippines' e-commerce platform for apparel, gadgets, accessories, fragrances and more, with free pickup at the nearest store. I built it full stack, from Figma designs to the API layer.",
    points: [
      "Product search and featured deals",
      "Store locator and order tracking",
      "CLiQQ Rewards on desktop and mobile",
      "React, Redux and Material UI front end",
      "NestJS API, with Firebase and Netlify for services and hosting",
    ],
    tags: ["React", "Redux", "Material UI", "Node.js", "NestJS", "REST APIs", "Firebase", "Jest", "Netlify"],
  },
  {
    kind: "Booking",
    title: "Easyqueue",
    img: "/projects/easyqueue.jpg",
    pos: "center top",
    mock: "queue",
    color: "purple",
    role: "React Developer",
    short: "Virtual queues and appointment booking.",
    desc: "A virtual queuing and appointment-booking app that lets people skip the lines at businesses, government offices and medical facilities, with a separate view for merchants to manage their queues.",
    points: [
      "Book a slot or join a queue in a few taps",
      "Track your schedule",
      "Merchant view for queues and appointments",
      "React, Redux and Material UI from Figma, on NestJS APIs",
      "Jest tests and Netlify deployments",
    ],
    tags: ["React", "Redux", "Material UI", "NestJS", "REST APIs", "Jest", "Netlify"],
  },
  {
    kind: "SaaS · Finance",
    title: "QuarterOne",
    img: "/projects/quarterone.jpg",
    pos: "center 70%",
    mock: "forecast",
    color: "primary",
    role: "Full Stack Developer · React/Node",
    short: "Cash forecasting for finance and sales teams.",
    desc: "A SaaS cash-management and forecasting tool that turns a business's pipeline of clients and opportunities into a month-by-month forecast, so teams can predict and monitor their cash position.",
    points: [
      "Forecast versus uncollected amounts",
      "Monthly and cumulative percentages with trend sparklines",
      "Filters, custom views, reports and exports",
      "Node.js and Express REST APIs on PostgreSQL",
      "Deployed to Heroku and AWS through CI/CD",
    ],
    tags: [
      "React",
      "Redux",
      "Semantic UI",
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "Heroku",
      "AWS",
      "CI/CD",
    ],
  },
  {
    kind: "Non-profit",
    title: "World Vision BeCashReady",
    img: "/projects/worldvision.jpg",
    pos: "center",
    mock: "aid",
    color: "green",
    role: "Full Stack Developer · React/Node",
    short: "Helps NGOs plan and monitor cash-aid programs.",
    desc: "A cash-programming platform built for World Vision that helps humanitarian agencies and NGOs coordinate, prepare, plan and monitor cash-aid programs, so aid reaches the most vulnerable at the right time.",
    points: [
      "Step-by-step workflow for programs and projects",
      "Tracks targeted households, budgets and distributions",
      "Country-level project status dashboard",
      "Node.js and Express REST APIs on PostgreSQL",
      "Deployed on AWS through CI/CD",
    ],
    tags: ["React", "Redux", "Semantic UI", "Node.js", "Express", "REST APIs", "PostgreSQL", "AWS", "CI/CD"],
  },
  {
    kind: "Hospitality",
    title: "Hambleton Hall",
    img: "/projects/hambleton.jpg",
    pos: "center top",
    mock: "hotel",
    color: "amber",
    role: "Front-end Developer",
    short: "A luxury country house hotel in Rutland, England.",
    desc: "The website of a luxury country house hotel overlooking Rutland Water, known for its Michelin-starred restaurant. It showcases rooms, dining, offers, events, the house and gardens.",
    points: [
      "Book a Room and Book a Table calls to action",
      "Custom WordPress theme with Twig templates",
      "PHP, jQuery and BEM-structured CSS",
      "Responsive across devices",
      "Docker-based setup for development and deployment",
    ],
    tags: ["Twig", "jQuery", "BEM CSS", "PHP", "WordPress", "Docker"],
  },
  {
    kind: "CMS · E-commerce",
    title: "WordPress and WooCommerce sites",
    mock: "cms",
    color: "coral",
    role: "WordPress Developer",
    short: "Blogs and online stores for different clients.",
    desc: "A range of WordPress blog sites and WooCommerce online stores for different clients, from theme work to hosting and ongoing updates.",
    points: [
      "Custom themes and plugins",
      "Product catalogues, carts and checkout with WooCommerce",
      "Hosting, deployment and updates via FTP and control panels",
    ],
    tags: ["HTML", "CSS", "jQuery", "Twig", "PHP", "WordPress", "WooCommerce", "MySQL", "FTP hosting"],
  },
];

export const journey = {
  eyebrow: "Experience",
  heading: "The journey so far",
  lead: "From WordPress sites in 2015 to owning a fintech front end. Every role added a little more scope.",
  note: ["it all started", "with a blog ↗"],
};

export const jobs: Job[] = [
  {
    when: "2024 – 2026",
    title: "React Developer",
    company: "Flexisource IT",
    color: "primary",
    text: ["Sole front-end owner on ", "Mint", ", a fintech payments platform across AU, UK, EU and NZ."],
    tags: ["React", "TypeScript", "Lit", "Stripe"],
  },
  {
    when: "2022 – 2024",
    title: "Senior ReactJS Developer",
    company: "Collabera Digital",
    color: "purple",
    text: ["Built accessible features for ", "UnionBank Online", ", a nationwide banking app."],
    tags: ["Next.js", "Redux", "WCAG"],
  },
  {
    when: "2020 – 2022",
    title: "Software Engineer",
    company: "Sykes Asia",
    color: "coral",
    text: ["Led the ", ".NET → React", " migration of OneTEAM and mentored the team."],
    tags: ["React", "Material UI", "AWS"],
  },
  {
    when: "2016 – 2020",
    title: "Mid-Level Web Developer",
    company: "Sourcefit",
    color: "green",
    text: ["Grew into ", "full-stack", ": 7-Eleven CLiQQ, World Vision, QuarterOne and more."],
    tags: ["React", "NestJS", "PostgreSQL"],
  },
  {
    when: "2015 – 2016",
    title: "Web Developer",
    company: "Highly Succeed",
    color: "amber",
    text: ["Where it began: ", "WordPress", " blogs and WooCommerce stores."],
    tags: ["WordPress", "PHP", "MySQL"],
  },
  {
    when: "2010 – 2015",
    title: "BS IT, Digital Arts",
    company: "FEU – East Asia College",
    color: "slate",
    text: ["Where design met code, in Manila.", "", ""],
    tags: ["Design", "Web basics"],
  },
];

export const contact = {
  eyebrow: "Contact",
  heading: "Have a project in mind? Let's talk.",
  lead: "I take on freelance projects, from new web apps to improving existing ones, and handle them from start to finish. I usually reply within a day.",
};

export const footer = { note: "Built with React and Next.js." };
