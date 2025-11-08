import { useTranslationContext } from './useTranslationContext';

const t: any = {
  pl: {
    PDF: 'PDF',
    EDUCATION: 'EDUKACJA',
    'WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY': 'POLITECHNIKA WROCŁAWSKA',
    'Master of Science, COMPUTER SCIENCE, 4.5': 'Studia magisterskie, INFORMATYKA, 4.5',
    'Bachelor of Science, CONTROL ENGINEERING AND ROBOTICS, 4.5': 'Studia Inżynierskie, AUTOMATYKA I ROBOTYKA, 4.5',
    '2017.07; 1 month': '2017.07; 1 miesiąc',
    '2019.09.01 – 2021.10.31; 2 years, 2 months': '2019.09.01 – 2021.10.31; 2 lata, 2 miesiące',
    EXPERIENCE: 'DOŚWIADCZENIE',
    'Creating complex SQL queries for data aggregation':
      'Tworzenie złożonych zapytań SQL służących do agregacji danych',
    'Creating expert systems enabling the purchase of insurance':
      'Tworzenie systemów eksperckich pozwalających na zakup ubezpieczenia',
    'Creating complex forms to handle insurance applications':
      'Tworzenie złożonych formularzy do obsługi wniosków ubezpieczeniowych',
    'Client from the insurance industry (Income: ~5 000 000 PLN)':
      'Klient z branży ubezpieczeniowej (Przychód: ~5 000 000 PLN)',
    'Client from the insurance industry (~250 000 users)': 'Klient z branży ubezpieczeniowej (~250 000 użytkowników)',
    'Micro-frontend architecture': 'Architektura mikrofrontendowa',
    'Creating SSR components': 'Komponenty SSR',
    'Cooperation with business analysts': 'Współpraca z analitykami biznesowymi',
    'Impact on design system': 'Udział w tworzeniu produktu',
    'Improving website performance': 'Poprawa wydajności stron interentowych',
    'Cooperation with the testing team': 'Współpraca z zespołem testerskim',
    'Collaboration with the devops team': 'Współpraca z zespołem devopsów',
    'Creating database models for web applications': 'Tworzenie modeli baz danych dla aplikacji internetowych',
    '2021.11.01 – 2023.04.30; 1 year, 6 months': '2021.11.01 – 2023.04.30; 1 rok, 6 miesięcy',
    'Client from the ecommerce industry (Income: ~4 000 000 PLN)':
      'Klient z branży ecommerce (Przychód: ~4 000 000 PLN)',
    'Creating and changing functionality on the website (Store search engine, Blog page, Shopping cart, Checkout, Sliders, Carousel, Filters etc.)':
      'Tworzenie i zmiana funkcjonalności na stronie internetowej (wyszukiwarka w sklepie, strona bloga, koszyk zakupowy, slidery, karuzele, filtry itd.)',
    '2024.06.05 – 2024.10.31; 1 year, 5 months': '2024.06 2024.06.05 – 2024.10.31; 1 rok, 5 miesięcy',
    '2023.08.07 – 2024.07.31; 1 year': '2023.08.07 – 2024.07.31; 1 rok',
    'Client from the entertainment industry (~100 000 000 users)':
      'Klient z branży rozrywkowej (~100 000 000 użytkowników)',
    'Leading the team through frontend transformation (Angular -> React.js)':
      'Prowadzenie zespołu przez transformację frontendu (Angular -> React.js)',
    'Leveraging AI-powered design and development':
      'Wykorzystanie projektowania i rozwoju wspomaganego sztuczną inteligencją',
    'Implementing effective communication strategies and promoting a culture of continuous learning':
      'Wdrażanie skutecznych strategii komunikacyjnych i promowanie kultury ciągłego uczenia się',
    'Best practices in software testing': 'Najlepsze praktyki w testowaniu oprogramowania',
    SKILLS: 'W TYCH TECHNOLOGIACH CZUJĘ SIĘ DOBRZE',
    'MY PROJECTS': 'MOJE PROJEKTY',
    'LeetCode is an online platform that provides a collection of coding problems and challenges to help programmers enhance their coding skills.':
      'LeetCode to platforma internetowa zawierająca zbiór problemów programistycznych, które pomagają programistom udoskonalać ich umiejętności.',
    'Number of currently solved problems:': 'Liczba aktualnie rozwiązanych problemów:',
    'A resume builder is an online tool that allows me to create a professional resume.':
      'Kreator CV to narzędzie online, które pozwala mi szybko i łatwo stworzyć profesjonalne CV.',
    'It allows me to print my CV as PDF in any language':
      'Umożliwia mi wydrukowanie CV w formacie PDF w dowolnym języku',
    'The project was about integrating an external API using Redux.js and AWS':
      'Projekt dotyczył integracji zewnętrznego API z wykorzystaniem Redux.js i AWS',
    'Displays weather data for specific geographic coordinates':
      'Wyświetla dane pogodowe dla określonych współrzędnych geograficznych',
    'The application displays current music hits and allow to filters by title or author.':
      'Aplikacja wyświetla hity muzyczne i umożliwia filtrowanie wg tytułu lub autora.',
    "An application that draws rotated geometric figures (rectangles and ellipses) on a canvas based on data from the API. For each figure it was necessary to draw a 'bounding box'":
      'Aplikacja rysująca obrócone figury geometryczne (prostokąty i elipsy) na kanwie bazując na danych z API, Dla każdej figury konieczne było narysowanie „ramki ograniczającej”',
    '100 Push Ups, 300 Squats, 300 Sit Ups, 40 Pull Ups training plans':
      'Plany treningowe 100 pompek, 300 przysiadów, 300 przysiadów, 40 podciągnięć',
    'Authorization and communication with API in the cloud': 'Autoryzacja i komunikacja z API w chmurze',
    'Email templates': 'Szablony wiadomości e-mail',
    'Reed-Solomon algorithm is an error-correcting code that is widely used in various applications, including data storage systems such as CDs, DVDs, Blu-ray discs, and RAID 6':
      'Algorytm Reeda-Solomona to kod korygujący błędy, który jest szeroko stosowany w różnych zastosowaniach, w tym w systemach przechowywania danych, takich jak płyty CD, DVD, dyski Blu-ray i RAID 6',
    'Reed-Solomon codes are used to detect and correct burst errors associated with media defects':
      'Kody Reeda-Solomona służą do wykrywania i korygowania błędów serii związanych z defektami nośnika',
    'Algorithms used: Gauss-Jordan Elimination in Galois field, Detrminant, Transpose of Matrix n*n, Zech’s logarithm, Adding, Multiplication and Dividing polynomials, Peterson–Gorenstein–Zierler algorithm, Chien search algorithm, System of linear equations':
      'Wykorzystane algorytmy: Eliminacja Gaussa-Jordana w polu Galois, Detrminant, Transpozycja macierzy n*n, logarytm Zecha, Dodawanie, mnożenie i dzielenie wielomianów, Algorytm Petersona – Gorensteina – Zierlera, Algorytm Chien, Układ równań liniowych',
    'Blackjack is a casino banking game. The game is a comparing card game where each player competes against the dealer. The objective of the game is to get a hand total of closer to 21 than the dealer without going over 21(busting)':
      'Blackjack to gra bankowa w kasynie. Ta gra jest porównawczą grą karcianą, w której każdy gracz rywalizuje z krupierem. Celem gry jest uzyskanie sumy rozdań bliższej 21 niż krupiera, bez przekraczania 21 (odpadanie)',
    'Online store allowing you to purchase home things': 'Sklep internetowy umożliwiający zakup artykułów do domu',
    'Electronic Program Guide': ' Elektroniczny przewodnik po programach telewizyjnych',
    'Sudoku is a popular logic-based number-placement game. The goal is to fill a 9x9 grid with digits so that each column, each row, and each of the nine 3x3 subgrids that compose the grid contain all of the digits from 1 to 9. It is a highly engaging puzzle that can help improve concentration and overall brain power':
      'Sudoku to popularna gra oparta na logice polegająca na umieszczaniu liczb. Celem jest wypełnienie cyframi siatki 9x9 tak, aby każda kolumna, każdy wiersz i każda z dziewięciu podsiatek 3x3 tworzących siatkę zawierała wszystkie cyfry od 1 do 9. Jest to bardzo wciągająca łamigłówka, która może pomóc poprawić koncentrację i ogólną moc mózgu',
    'LIFE AND HEALTH INSURANCE': 'UBEZPIECZENIA ŻYCIA I ZDROWIA',
    'APARTMENT AND HOUSE INSURANCE': 'UBEZPIECZENIE MIESZKANIA I DOMU',
    'ACTIVE IN SPORT': 'AKTYWNI W SPORCIE',
    'Polish Parliamentary Elections 2023': 'Wybory do Sejmu i Senatu Rzeczypospolitej Polskiej 2023',
    'Weather widgets': 'Widgety pogodwe',
    'Stock quotes': 'Notowania giełdowe',
    'This package offers a range of design system assets, including components, styles, and guidelines, to facilitate the development of consistent and user-friendly interfaces across various applications and platforms':
      'Pakiet ten oferuje szereg zasobów systemu projektowania, w tym komponenty, style i wytyczne, ułatwiające tworzenie spójnych i przyjaznych dla użytkownika interfejsów w różnych aplikacjach i platformach',
    'Polish Local Government Elections 2024': 'Wybory samorządowe 2024',
    'European Elections 2024': 'Wybory europejskie w 2024',
    'Graph algorithms': 'Algorytmy grafowe',
    'This project continuously tracks GPS location in the background using a Kalman filter to smooth data and the Haversine formula to calculate distance, with secure storage in DynamoDB protected by JWT authentication.':
      'Lokalizator GPS działający w tle, który używa filtra Kalmana do wygładzania danych i formuły Haversine do obliczania odległości, dane przechowywane są w DynamoDB.',
  },
};

export const T = (key: string) => {
  const { lang } = useTranslationContext();
  return t[lang] ? (t[lang][key] ?? key) : key;
};
