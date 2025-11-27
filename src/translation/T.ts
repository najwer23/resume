import { useTranslationContext } from './useTranslationContext';

const t: any = {
  pl: {
    EuropaUbezpieczenia_Description:
      'Moim obowiązkiem było utrzymanie oraz rozwój wewnętrznego systemu do zarządzania polisami ubezpieczeniowymi. System był wykorzystywany przez agentów ubezpieczeniowych oraz pracowników biurowych. Do moich zadań należało tworzenie nowych modułów, integracja zewnętrznych systemów (płatności online, weryfikacja danych klienta, tworzenie wniosków polisowych) oraz optymalizacja wydajności aplikacji. Pracowałem zarówno nad frontendem (Angular), jak i backendem (Java, Groovy, SQL) aplikacji.',
    FLHF_Description:
      'Moim obowiązkiem było poprawienie strony internetowej, która została stworzona przez software house, oraz jednoczesne odświeżenie szaty graficznej. Głównym zadaniem było stworzenie komponentów charakterystycznych dla e-commerce, takich jak slidery, karuzele, listing produktów, wyszukiwarka oraz koszyk zakupowy. Priorytetem były widok mobilny, SEO oraz wyniki w narzędziu Lighthouse (CLS, wydajność, dostępność).',
    WBD_Description: `Moim obowiązkiem było stworzenie nowej wersji strony TVN24.pl od podstaw z wykorzystaniem technologii SSR. Główny szkielet strony opierał się na idei wysp wykorzystywanych w Astro.js. Natomiast wyspami były aplikacje mikrofrontendowe zbudowane w React.js lub Web Components. W ramach współpracy zostały stworzone: widżety związane z notowaniami giełdowymi, prognozą pogody, sondy, quizy, widżety wyborcze, program TV oraz autorski algorytm do renderowania mikrofrontendów wykorzystujący technologię SSR bez zewnętrznych bibliotek. Stronę odwiedza miesięcznie miliony użytkowników.`,
    AppliedSystems_Description: `Moim obowiązkiem było stworzenie aplikacji frontendowej, która pozwoli na zakup ubezpieczenia przez stronę
            internetową. Aplikacja została zbudowana z wykorzystaniem React.js, TypeScript oraz design systemu firmy
            Applied Systems. Głównym problemem było opracowanie algorytmu, który pozwoli warunkowo wyrenderować pytania
            mające zagnieżdżoną strukturę, przypominającą graf (pytania były zależne od innych pytań). Został tutaj
            użyty rekurencyjny algorytm DFS. Same pytania były pobierane z backendu w formacie JSON (60 tys. linii kodu)
            struktura JSONa przypominała ideę Server Driven UI. Zespół składał się z 8 osób i był międzynarodowy
            (Polska, Indie, Kanada, Anglia, USA, Australia). Dodatkowo został wdrożony panel administratora, skrypty
            śledzące akcje użytkownika, wykresy ze statystyką oraz wsparcie dla WCAG 2.1 AA.`,
    FiguresWithBBox_Description:
      "Aplikacja rysująca na kanwie obrócone figury geometryczne (prostokąty oraz elipsy) na podstawie danych z API. Dla każdej figury należało narysować 'bounding box'.",
    DesignSystem_Description:
      'Design System - kompleksowy, wielokrotnego użytku zbiór komponentów React wraz z wytycznymi projektowymi i najlepszymi praktykami, stworzony, aby efektywnie budować spójne, skalowalne i łatwe w utrzymaniu aplikacje.',
    Tracker_Description: `Aplikacja umożliwiająca monitorowanie ruchu danej osoby w czasie rzeczywistym, obejmująca także filtrowanie zakłóceń GPS.
`,
    Leetcode_Description: `Liczba aktualnie rozwiązanych zadań: `,
  },
  en: {
    AppliedSystems_Description: `My responsibility was to create a frontend application enabling the purchase of insurance through a website. The application was developed using React.js and TypeScript, leveraging the Applied Systems design system. The primary technical challenge was implementing a recursive Depth-First Search (DFS) algorithm to conditionally render a nested, graph-like structure of questions, where each question’s visibility depended on previous answers. The question data was fetched from the backend as a large JSON payload (around 60,000 lines), structured as a Server Driven UI model. The development was part of a 8-person international team spanning Poland, India, Canada, England, the USA, and Australia. In addition to the core questionnaire, I contributed to building an admin panel, implementing user action tracking scripts, creating statistical charts, and ensuring compliance with WCAG 2.1 AA accessibility standards.`,
    WBD_Description: `My responsibility was to develop a new version of the TVN24.pl website from the ground up using SSR technology. The architecture was inspired by the islands concept popularized by Astro.js, featuring microfrontend applications implemented with React.js and Web Components. As part of the development team, I contributed to building multiple interactive widgets, including stock quotes, weather forecasts, polls, quizzes, election tools, TV program guides, and a custom SSR-based microfrontend rendering algorithm that operates without relying on external libraries.`,
    FLHF_Description:
      'My responsibility was to enhance a website initially developed by a software house while simultaneously refreshing its graphic design. The core focus was to develop ecommerce-specific components such as sliders, carousels, product listings, search functionality, and a shopping cart. Key priorities included optimizing for mobile view, improving SEO, descriptive markup and metadata, and enhancing performance metrics such as Cumulative Layout Shift (CLS), page speed, and accessibility, measured and optimized using Lighthouse.',
    EuropaUbezpieczenia_Description:
      'My duty was to maintain and develop an internal system for managing insurance policies. The system was used by insurance agents and office workers. My tasks included creating new modules, integrating external systems (online payments, client data verification, insurance application creation), and optimizing application performance. I worked on both the frontend (Angular) and backend (Java, Groovy, SQL) of the application.',
    FiguresWithBBox_Description:
      "An application that draws rotated geometric figures (rectangles and ellipses) on a canvas based on data from the API. For each figure it was necessary to draw a 'bounding box'.",
    DesignSystem_Description:
      'Design System - A comprehensive collection of React components for building consistent, scalable applications.',
    Tracker_Description: `An application that allows you to monitor a person's movement in real time, including GPS noise filtering.`,
    Leetcode_Description: `Number of currently solved problems: `,
  },
};

export const T = (key: string) => {
  const { lang } = useTranslationContext();
  return t[lang] ? (t[lang][key] ?? key) : key;
};
