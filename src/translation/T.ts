import { useTranslationContext } from "./useTranslationContext";

const t: any = {
	pl: {
		PDF: "PDF",
		EDUCATION: "EDUKACJA",
		"WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY": "POLITECHNIKA WROCŁAWSKA",
		"Master Of Science, COMPUTER SCIENCE, 4.5": "Studia magisterskie, INFORMATYKA, 4.5",
		"Bachelor of Science, CONTROL ENGINEERING AND ROBOTICS, 4.5": "Studia Inżynierskie, AUTOMATYKA I ROBOTYKA, 4.5",
		"2017.07; 1 month": "2017.07; 1 miesiąc",
		"2019.09.01 – 2021.10.31; 2 years, 2 months": "2019.09.01 – 2021.10.31; 2 lata, 2 miesiące",
		EXPERIENCE: "DOŚWIADCZENIE",
		"Client from the insurance industry (Income: ~5 000 000 PLN)": "Klient z branży ubezpieczeniowej (Przychód: ~5 000 000 PLN)",
		"Expert systems. Working with databases": "Systemy eksperckie. Praca z bazami danych",
		"2021.11.01 – 2023.04.30; 1 year, 6 months": "2021.11.01 – 2023.04.30; 1 rok, 6 miesięcy",
		"Client from the ecommerce industry (Income: ~4 000 000 PLN)": "Klienta z branży ecommerce (Przychód: ~4 000 000 PLN)",
		"Store search engine, Blog website, Shopping cart etc.": "Wyszukiwarka w sklepie, strona bloga, koszyk zakupowy itd.",
		"2023.08.07 – current": "2023.08.07 – obecnie",
		"Client from the entertainment industry (~100 000 000 users)": "Klient z branży rozrywkowej (~100 000 000 użytkowników)",
		SKILLS: "W TYCH TECHNOLOGIACH CZUJĘ SIĘ DOBRZE",
		"MY PROJECTS": "MOJE PROJEKTY",
		"LeetCode is an online platform that provides a collection of coding problems and challenges to help programmers enhance their coding skills.": "LeetCode to platforma internetowa zawierająca zbiór problemów programistycznych, które pomagają programistom udoskonalać ich umiejętności.",
		"Number of currently solved problems:": "Liczba aktualnie rozwiązanych problemów:",
		"A resume builder is an online tool that allows me to create a professional resume quickly and easily.": "Kreator CV to narzędzie online, które pozwala mi szybko i łatwo stworzyć profesjonalne CV.",
		"It allows me to print my CV as PDF in any language": "Umożliwia mi wydrukowanie CV w formacie PDF w dowolnym języku",
		"The project was about integrating an external API using Redux.js and AWS": "Projekt dotyczył integracji zewnętrznego API z wykorzystaniem Redux.js i AWS",
		"Displays weather data for specific geographic coordinates": "Wyświetla dane pogodowe dla określonych współrzędnych geograficznych",
		"The application displays current music hits and allow to filters by title or author.": "Aplikacja wyświetla hity muzyczne i umożliwia filtrowanie wg tytułu lub autora.",
		"An application that draws rotated geometric figures (rectangles and ellipses) on a canvas based on data from the API. For each figure it was necessary to draw a 'bounding box'":"Aplikacja rysująca obrócone figury geometryczne (prostokąty i elipsy) na kanwie bazując na danych z API, Dla każdej figury konieczne było narysowanie „ramki ograniczającej”",
		"100 Push Ups, 300 Squats, 300 Sit Ups, 40 Pull Ups training plans":"Plany treningowe 100 pompek, 300 przysiadów, 300 przysiadów, 40 podciągnięć",
		"Authorization and communication with API in the cloud": "Autoryzacja i komunikacja z API w chmurze",
		"Email templates": "Szablony email",
		"Reed-Solomon algorithm is an error-correcting code that is widely used in various applications, including data storage systems such as CDs, DVDs, Blu-ray discs, and RAID 6": "Algorytm Reeda-Solomona to kod korygujący błędy, który jest szeroko stosowany w różnych zastosowaniach, w tym w systemach przechowywania danych, takich jak płyty CD, DVD, dyski Blu-ray i RAID 6",
		"Reed-Solomon codes are used to detect and correct burst errors associated with media defects": "Kody Reeda-Solomona służą do wykrywania i korygowania błędów serii związanych z defektami nośnika",
		"Algorithms used: Gauss-Jordan Elimination in Galois field, Detrminant, Transpose of Matrix n*n, Zech’s logarithm, Adding, Multiplication and Dividing polynomials, Peterson–Gorenstein–Zierler algorithm, Chien search algorithm, System of linear equations": "Wykorzystane algorytmy: Eliminacja Gaussa-Jordana w polu Galois, Detrminant, Transpozycja macierzy n*n, logarytm Zecha, Dodawanie, mnożenie i dzielenie wielomianów, Algorytm Petersona – Gorensteina – Zierlera, Algorytm wyszukiwania Chiena, Układ równań liniowych",
		"Blackjack is a casino banking game. The game is a comparing card game where each player competes against the dealer. The objective of the game is to get a hand total of closer to 21 than the dealer without going over 21(busting)": "Blackjack to gra bankowa w kasynie. Ta gra jest porównawczą grą karcianą, w której każdy gracz rywalizuje z krupierem. Celem gry jest uzyskanie sumy rozdań bliższej 21 niż krupiera, bez przekraczania 21 (odpadanie)"
	},
};

export const T = (key:string) => {
	const {lang} = useTranslationContext();
	return t[lang] ? (t[lang][key] ?? key) : key;
}