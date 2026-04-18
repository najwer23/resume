import { useTranslationContext } from './useTranslationContext';

const t: any = {
  pl: {
    AppliedSystems_Description: `Zbudowałem aplikację frontendową opartą na modelu Server Driven UI z rekurencyjnym algorytmem DFS do renderowania zagnieżdżonego grafu pytań z pliku JSON liczącego ~60 tys. linii. Współtworzyłem panel administratora, skrypty śledzące akcje użytkownika, wykresy statystyczne oraz zapewniłem zgodność z WCAG 2.1 AA w międzynarodowym zespole.`,
    WBD_Description: `Zbudowałem TVN24.pl od podstaw z wykorzystaniem SSR oraz architektury wysp z mikrofrontendami w React i Web Components. Stworzyłem widżety giełdowe, pogodowe, sondy, narzędzia wyborcze, program TV oraz autorski algorytm SSR bez zewnętrznych bibliotek.`,
    FLHF_Description:
      'Rozbudowałem sklep internetowy o slidery, karuzele, listing produktów oraz koszyk zakupowy. Skupiłem się na optymalizacji mobilnej, SEO, CLS, szybkości ładowania oraz poprawie dostępności przy użyciu audytów Lighthouse.',
    EuropaUbezpieczenia_Description:
      'Utrzymywałem i rozwijałem wewnętrzny system zarządzania polisami ubezpieczeniowymi dla agentów i pracowników biurowych. Tworzyłem nowe moduły, integrowałem systemy płatności i weryfikacji danych oraz pracowałem nad frontendem w Angular i backendem w Java/Groovy.',
    FiguresWithBBox_Description:
      'Aplikacja rysująca na kanwie obrócone prostokąty i elipsy na podstawie danych z API, obliczająca precyzyjny bounding box dla każdej figury.',
    DesignSystem_Description:
      'Kompleksowa biblioteka komponentów React do budowania spójnych i skalowalnych aplikacji. Opublikowana jako pakiet npm.',
    Tracker_Description: `Aplikacja do monitorowania ruchu osoby w czasie rzeczywistym z filtrowaniem zakłóceń GPS, oparta na bezserwerowej infrastrukturze AWS.`,
    Leetcode_Description: `Praktyka rozwiązywania problemów algorytmicznych. Liczba aktualnie rozwiązanych zadań: `,
    UserTable_Description: `Aplikacja full-stack wyświetlająca tabelę użytkowników z filtrowaniem, sortowaniem i paginacją przez WebSockety. Zarządzanie stanem zbudowane z NgRx (Redux), następnie przepisane na serwis session storage. Zawiera testy jednostkowe dla listy użytkowników.`,
    Blog_Description: `Osobisty blog o tematyce JavaScript, React, Node.js i TypeScript. Treści oparte na strukturze plików JSON, renderowane przy użyciu komponentów własnego design systemu.`,
    BlogPostCreator_Description: `Narzędzie w stylu CMS do tworzenia wpisów blogowych przez interfejs drag-and-drop. Generuje strukturalny plik JSON wykorzystywany przez blog. Zbudowane z Zustand do zarządzania stanem i komponentami design systemu.`,
    Api_Description: `Bezserwerowe REST API zbudowane na Fastify i wdrożone przez AWS Lambda. Pełni rolę centralnego backendu łączącego wiele aplikacji mikrofrontendowych: blog, kreator wpisów, portfolio, aplikację pogodową, analitykę, APOD NASA i aplikację fitness. Obsługuje uwierzytelnianie, serwis mailowy, CORS, JWT, zarządzanie sesją oraz połączenia z AWS DynamoDB i S3. Udokumentowane z OpenAPI i Swagger.`,
  },
  en: {
    AppliedSystems_Description: `Built a Server Driven UI insurance purchase flow using a recursive DFS algorithm to render a nested graph of ~60k-line JSON questions. Contributed to an admin panel, user tracking, statistical charts, and WCAG 2.1 AA compliance in an 8-person international team.`,
    WBD_Description: `Built TVN24.pl from scratch using SSR and an islands architecture with microfrontend React + Web Components. Delivered widgets for stocks, weather, polls, elections, TV guides, and a custom SSR rendering algorithm without external libs.`,
    FLHF_Description:
      'Enhanced an e-commerce site with sliders, carousels, product listings, and a shopping cart. Focused on mobile optimization, SEO, CLS, page speed, and accessibility improvements via Lighthouse audits.',
    EuropaUbezpieczenia_Description:
      'Maintained and developed an internal insurance policy management system for agents and office workers. Built new modules, integrated payment and data verification systems, and worked across Angular frontend and Java/Groovy backend.',
    FiguresWithBBox_Description:
      'Draws rotated rectangles and ellipses on canvas from API data, computing a precise bounding box for each figure.',
    DesignSystem_Description:
      'A comprehensive React component library for building consistent, scalable applications. Published as an npm package.',
    Tracker_Description: `Real-time person movement monitoring app with GPS noise filtering, backed by serverless AWS infrastructure.`,
    Leetcode_Description: 'Consistent algorithmic problem solving practice. Number of currently solved problems: ',
    UserTable_Description: `A full-stack application displaying a filterable, sortable, and paginated user table synced in real time via WebSockets. State management was initially built with NgRx (Redux), then refactored to a session storage service. Includes unit tests for the user listing component.`,
    Blog_Description: `A personal knowledge-sharing blog covering JavaScript, React, Node.js, and TypeScript. Content is driven by a JSON file structure and rendered using custom design system components.`,
    BlogPostCreator_Description: `A custom CMS-style tool for authoring blog posts via a drag-and-drop interface. Outputs structured JSON consumed by the blog. Built with Zustand for state management and design system components for consistency.`,
    Api_Description: `A serverless REST API built on Fastify and deployed via AWS Lambda. Acts as a central backend hub connecting multiple microfrontend apps: blog, blog post creator, portfolio, weather app, APOD NASA, analytics, and fitness app. Features authentication, mail service, CORS handling, JWT stateless auth, session management, and connectors to AWS DynamoDB and S3. Fully documented with OpenAPI and Swagger.`,
  },
};

export const T = (key: string) => {
  const { lang } = useTranslationContext();
  return t[lang] ? (t[lang][key] ?? key) : key;
};
