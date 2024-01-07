import{r as m,j as e}from"./react-aXXm7soD.js";import{c as J}from"./react-dom-UApmwlX7.js";import{c as W,S as U,R as H}from"./react-router-dom--bRaubkZ.js";import{n}from"./@emotion-UC1rzu6L.js";import{F as D,f as B,a as K}from"./@fortawesome-xss1EFFD.js";import{n as z}from"./najwer23storybook-J5UWJXhQ.js";/* empty css                    */import"./hoist-non-react-statics-HFhYSYcO.js";import"./scheduler-iwWdm5Ml.js";import"./react-router-WF1czFHD.js";import"./@remix-run-SZecPcY6.js";import"./@babel-dGVwEr9R.js";import"./stylis-UTZzoVRx.js";import"./prop-types-0o1MWmL_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const V=n.div`
	padding: 20px;
	gap: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media print {
		display: none !important;
	}
`,Y=n.div`
	color: black;
	font-weight: bold;
`,Z=n.div`
	color: black;
	display: flex;
	gap: 12px;
	right: 30px;
`;n.button`
	background-color: ${i=>i.$active?"#23E200":i.$bgColor||"initial"};
	border: 0 solid #e5e7eb;
	box-sizing: border-box;
	color: #000000;
	display: flex;
	font-size: 1rem;
	font-weight: 700;
	justify-content: center;
	line-height: 1.75rem;
	padding: 0.3rem 1.3rem;
	position: relative;
	text-align: center;
	text-decoration: none #000000 solid;
	text-decoration-thickness: auto;
	width: 100%;
	max-width: 460px;
	position: relative;
	cursor: pointer;
	transform: rotate(-2deg);
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;

	&:focus {
		outline: 0;
	}

	&:after {
		content: "";
		position: absolute;
		border: 1px solid #000000;
		bottom: 4px;
		left: 4px;
		width: calc(100% - 1px);
		height: calc(100% - 1px);
	}

	&:hover:after {
		bottom: 2px;
		left: 2px;
	}
`;const q={lang:"en",setLang:()=>{}},O=m.createContext(q),X=({children:i})=>{const[r,s]=m.useState("en");return document.title="Mariusz Najwer - Résumé "+r.toUpperCase(),e.jsx(O.Provider,{value:{lang:r,setLang:s},children:i})},F=()=>m.useContext(O),Q=i=>{const r=localStorage.getItem(i);if(!r)return null;const s=JSON.parse(r);return new Date().getTime()>s.expiry?(localStorage.removeItem(i),null):s.value},$=(i,r,s)=>{const a={value:r,expiry:new Date().getTime()+s*60*60*1e3};localStorage.setItem(i,JSON.stringify(a))};function M(i,r,s=!0){const c=m.useRef(!1),a=async T=>{if(b({type:"loading"}),!i)return;c.current=!1;const p=Q(i);if(r.method==="GET"&&p){b({type:"done",payload:p});return}try{r.method!=="GET"&&(r={...r,body:JSON.stringify(T)});const w=await fetch(i,r);if(!w.ok)throw new Error(w.statusText);const v=await w.json();if(r.method==="GET"&&$(i,v,.5),c.current)return;b({type:"done",payload:v})}catch(w){if(c.current)return;b({type:"error",payload:w})}},o={error:void 0,data:void 0,status:"idle",executeFetch:a},f=(T,p)=>{switch(p.type){case"loading":return{...o,status:"loading"};case"done":return{...o,data:p.payload,status:"done"};case"error":return{...o,error:p.payload,status:"error"};default:return T}},[G,b]=m.useReducer(f,o);return m.useEffect(()=>{s&&a()},[i]),G}const _=({repoName:i})=>{const{data:r,status:s}=M(`https://api.github.com/repos/najwer23/${i}/branches/gh-pages`,{method:"GET"});let c="";return s==="done"&&(c=new Date(r.commit.commit.committer.date).toLocaleString("pl-PL",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit",year:"numeric"})),e.jsx(e.Fragment,{children:c||" "})},ee=()=>{const{lang:i,setLang:r}=F(),s=()=>{window.print()};return e.jsxs(V,{children:[e.jsx(Y,{children:e.jsx(_,{repoName:"resume"})}),e.jsxs(Z,{children:[e.jsx(z,{text:"EN",type:"button",ariaLabel:"lang En",onClick:()=>r("en"),disabled:i==="en"}),e.jsx(z,{text:"PL",type:"button",ariaLabel:"lang Pl",onClick:()=>r("pl"),disabled:i==="pl"}),e.jsx(z,{text:e.jsx(D,{icon:B,size:"xl",style:{color:"white"}}),type:"button",ariaLabel:"lang En",onClick:()=>s()})]})]})},te=n.div`
	margin: 1cm auto;
	/* Define a white paper background that sticks out from the darker overall background */
	background: #fff;
	/* Show a drop shadow beneath each page */
	box-shadow: 0 4px 5px rgba(75, 75, 75, 0.2);
	/* Override outline from user agent stylesheets */
	outline: 0;

	h1 {
		/* Force page breaks after */
		page-break-before: always;
	}

	/* For all headings */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		/* Avoid page breaks immediately */
		page-break-after: avoid;
	}

	/* For all paragraph tags */
	p {
		/* Reset the margin so that the text starts and ends at the expected marks */
		margin: 0;
	}

	/* For adjacent paragraph tags */
	p + p {
		/* Restore the spacing between the paragraphs */
		margin-top: 0.5cm;
	}

	/* For links in the document */
	a {
		/* Prevent colorization or decoration */
		text-decoration: none;
		color: black;
	}

	/* For tables in the document */
	table {
		/* Avoid page breaks inside */
		page-break-inside: avoid;
	}

	@media print {
		/* Reset all page styles that have been for better screen appearance only */
		/* Break cascading by using the !important rule */
		/* These resets are absolute must-haves for the print styles and the specificity may be higher elsewhere */
		width: initial !important;
		min-height: initial !important;
		margin: 0 !important;
		padding: 0 !important;
		border: initial !important;
		border-radius: initial !important;
		background: initial !important;
		box-shadow: initial !important;

		/* Force page breaks after each .page element of the document */
		page-break-after: always;
	}

	/* A4 */
	/* Reflect the paper width in the screen rendering (must match size from @page rule) */
	width: 21cm;
	/* Reflect the paper height in the screen rendering (must match size from @page rule) */
	min-height: 29.7cm;

	/* Reflect the actual page margin/padding on paper in the screen rendering (must match margin from @page rule) */
	padding-left: 2cm;
	padding-top: 2cm;
	padding-right: 2cm;
	padding-bottom: 2cm;

	/* Use CSS Paged Media to switch from continuous documents to sheet-like documents with separate pages */
	@page {
		/* You can only change the size, margins, orphans, widows and page breaks here */

		/* Require that at least this many lines of a paragraph must be left at the bottom of a page */
		orphans: 4;
		/* Require that at least this many lines of a paragraph must be left at the top of a new page */
		widows: 2;

		size: A4 portrait;

		/* Margin per single side of the page */
		margin-left: 2cm;
		margin-top: 2cm;
		margin-right: 2cm;
		margin-bottom: 2cm;
	}
`,R=({children:i})=>e.jsx(te,{children:i}),A={pl:{PDF:"PDF",EDUCATION:"EDUKACJA","WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY":"POLITECHNIKA WROCŁAWSKA","Master Of Science, COMPUTER SCIENCE, 4.5":"Studia magisterskie, INFORMATYKA, 4.5","Bachelor of Science, CONTROL ENGINEERING AND ROBOTICS, 4.5":"Studia Inżynierskie, AUTOMATYKA I ROBOTYKA, 4.5","2017.07; 1 month":"2017.07; 1 miesiąc","2019.09.01 – 2021.10.31; 2 years, 2 months":"2019.09.01 – 2021.10.31; 2 lata, 2 miesiące",EXPERIENCE:"DOŚWIADCZENIE","Client from the insurance industry (Income: ~5 000 000 PLN)":"Klient z branży ubezpieczeniowej (Przychód: ~5 000 000 PLN)","Expert systems. Working with databases":"Systemy eksperckie. Praca z bazami danych","2021.11.01 – 2023.04.30; 1 year, 6 months":"2021.11.01 – 2023.04.30; 1 rok, 6 miesięcy","Client from the ecommerce industry (Income: ~4 000 000 PLN)":"Klienta z branży ecommerce (Przychód: ~4 000 000 PLN)","Store search engine, Blog website, Shopping cart, Checkout etc.":"Wyszukiwarka w sklepie, strona bloga, koszyk zakupowy itd.","2023.08.07 – current":"2023.08.07 – obecnie","Client from the entertainment industry (~100 000 000 users)":"Klient z branży rozrywkowej (~100 000 000 użytkowników)",SKILLS:"W TYCH TECHNOLOGIACH CZUJĘ SIĘ DOBRZE","MY PROJECTS":"MOJE PROJEKTY","LeetCode is an online platform that provides a collection of coding problems and challenges to help programmers enhance their coding skills.":"LeetCode to platforma internetowa zawierająca zbiór problemów programistycznych, które pomagają programistom udoskonalać ich umiejętności.","Number of currently solved problems:":"Liczba aktualnie rozwiązanych problemów:","A resume builder is an online tool that allows me to create a professional resume quickly and easily.":"Kreator CV to narzędzie online, które pozwala mi szybko i łatwo stworzyć profesjonalne CV.","It allows me to print my CV as PDF in any language":"Umożliwia mi wydrukowanie CV w formacie PDF w dowolnym języku","The project was about integrating an external API using Redux.js and AWS":"Projekt dotyczył integracji zewnętrznego API z wykorzystaniem Redux.js i AWS","Displays weather data for specific geographic coordinates":"Wyświetla dane pogodowe dla określonych współrzędnych geograficznych","The application displays current music hits and allow to filters by title or author.":"Aplikacja wyświetla hity muzyczne i umożliwia filtrowanie wg tytułu lub autora.","An application that draws rotated geometric figures (rectangles and ellipses) on a canvas based on data from the API. For each figure it was necessary to draw a 'bounding box'":"Aplikacja rysująca obrócone figury geometryczne (prostokąty i elipsy) na kanwie bazując na danych z API, Dla każdej figury konieczne było narysowanie „ramki ograniczającej”","100 Push Ups, 300 Squats, 300 Sit Ups, 40 Pull Ups training plans":"Plany treningowe 100 pompek, 300 przysiadów, 300 przysiadów, 40 podciągnięć","Authorization and communication with API in the cloud":"Autoryzacja i komunikacja z API w chmurze","Email templates":"Szablony email","Reed-Solomon algorithm is an error-correcting code that is widely used in various applications, including data storage systems such as CDs, DVDs, Blu-ray discs, and RAID 6":"Algorytm Reeda-Solomona to kod korygujący błędy, który jest szeroko stosowany w różnych zastosowaniach, w tym w systemach przechowywania danych, takich jak płyty CD, DVD, dyski Blu-ray i RAID 6","Reed-Solomon codes are used to detect and correct burst errors associated with media defects":"Kody Reeda-Solomona służą do wykrywania i korygowania błędów serii związanych z defektami nośnika","Algorithms used: Gauss-Jordan Elimination in Galois field, Detrminant, Transpose of Matrix n*n, Zech’s logarithm, Adding, Multiplication and Dividing polynomials, Peterson–Gorenstein–Zierler algorithm, Chien search algorithm, System of linear equations":"Wykorzystane algorytmy: Eliminacja Gaussa-Jordana w polu Galois, Detrminant, Transpozycja macierzy n*n, logarytm Zecha, Dodawanie, mnożenie i dzielenie wielomianów, Algorytm Petersona – Gorensteina – Zierlera, Algorytm wyszukiwania Chiena, Układ równań liniowych","Blackjack is a casino banking game. The game is a comparing card game where each player competes against the dealer. The objective of the game is to get a hand total of closer to 21 than the dealer without going over 21(busting)":"Blackjack to gra bankowa w kasynie. Ta gra jest porównawczą grą karcianą, w której każdy gracz rywalizuje z krupierem. Celem gry jest uzyskanie sumy rozdań bliższej 21 niż krupiera, bez przekraczania 21 (odpadanie)"}},t=i=>{const{lang:r}=F();return A[r]?A[r][i]??i:i},re=n.div`
	display: flex;
	margin-bottom: 0px;
`,ie=n.div`
	width: 60%;
`,ne=n.div`
	font-size: 45px;
`,se=n.div`
	font-size: 14px;
	color: orangered;
`,ae=n.div`
	width: 40%;
`,oe=n.div`
	text-align: right;
	font-size: 13px;
	margin-top: 2px;

	a:hover {
		color: red;
		text-decoration: underline;
	}
`,P=n.section`
	margin-top: 30px;
`,S=n.section``,E=n.div`
	font-size: 18px;
	font-weight: bold;
	text-transform: uppercase;

	&:first-letter {
		font-size: 22px;
	}
`,C=n.div`
	width: 300px;
	height: 3px;
	background-color: orangered;
	margin-top: 3px;
	margin-bottom: 10px;
`,j=n.div`
	display: flex;
	gap: 30px;
	margin-top: 10px;
`,g=n.div`
	img {
		width: 69px;
		height: 69px;
	}
`,u=n.div``,x=n.div`
	font-size: 18px;
	font-weight: 600;
`,y=n.div`
	min-width: 542px;
`,h=n.div`
	font-size: 15px;
`,I=n.div`
	margin-top: 8px;
	font-size: 15px;
	line-height: 130%;

	ul {
		padding-left: 20px;
	}
`,L=n.div`
	margin-top: 10px;
	font-size: 12px;
`,ce=n.div`
	display: flex;
	align-items: baseline;
	gap: 10px;
	flex-wrap: wrap;

`,le=n.div`
	flex-shrink: 0;
	display: flex;
`,de=n.div`
	font-style: italic;
	font-size: 18px;
`,he=n.div`
	font-size: 12px;
`,pe=n.div`
	font-size: 15px;
`,me=n.div`
	margin: 15px 0 15px;
	width: 100%;
	height: 2px;
	background-color: lightgray;
`,je=()=>e.jsxs(P,{children:[e.jsx(E,{children:t("EDUCATION")}),e.jsx(C,{}),e.jsxs(S,{children:[e.jsxs(j,{children:[e.jsx(g,{children:e.jsx("img",{src:"img/pwr.png",alt:"pwr logo"})}),e.jsxs(u,{children:[e.jsx(x,{children:t("WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY")}),e.jsxs(y,{children:[e.jsx(h,{children:t("Master Of Science, COMPUTER SCIENCE, 4.5")}),e.jsx(h,{children:t("2018.02 ‑ 2019.06, Wrocław")})]})]})]}),e.jsxs(j,{children:[e.jsx(g,{children:e.jsx("img",{src:"img/pwr.png",alt:"pwr logo"})}),e.jsxs(u,{children:[e.jsx(x,{children:t("WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY")}),e.jsxs(y,{children:[e.jsx(h,{children:t("Bachelor of Science, CONTROL ENGINEERING AND ROBOTICS, 4.5")}),e.jsx(h,{children:t("2014.10 ‑ 2018.01, Wrocław")})]})]})]})]})]}),ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(E,{children:t("EXPERIENCE")}),e.jsx(C,{})]}),ue=()=>e.jsx(S,{children:e.jsxs(j,{children:[e.jsx(g,{children:e.jsx("img",{src:"img/1dea.jpg",alt:"1dea logo"})}),e.jsxs(u,{children:[e.jsx(x,{children:t("1dea - FRONTEND SOFTWARE ENGINEER")}),e.jsxs(y,{children:[e.jsx(h,{children:t("2023.08.07 – current")}),e.jsx(I,{children:e.jsx("ul",{children:e.jsxs("li",{children:[t("Client from the entertainment industry (~100 000 000 users)")," "]})})}),e.jsx(L,{children:"(JavaScript, TypeScript, Web Components, React.js, Next.js, Redux.js, CSS3, CSS Modules, HTML, Node.js, REST APIs, JSON, GraphQL, Search Engine Optimization (SEO), Scrum, JIRA, Core Web Vitals, Figma, Astro)"})]})]})]})}),xe=()=>e.jsx(S,{children:e.jsxs(j,{children:[e.jsx(g,{children:e.jsx("img",{src:"img/flhf.png",alt:"flhf logo"})}),e.jsxs(u,{children:[e.jsx(x,{children:t("FLHF S.A - FRONTEND WEB DEVELOPER")}),e.jsxs(y,{children:[e.jsx(h,{children:t("2021.11.01 – 2023.04.30; 1 year, 6 months")}),e.jsx(I,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("Client from the ecommerce industry (Income: ~4 000 000 PLN)")," "]}),e.jsx("li",{children:t("Store search engine, Blog website, Shopping cart, Checkout etc.")})]})}),e.jsx(L,{children:"(JavaScript, jQuery, React.js, TypeScript, HTML5, CSS3, JSON, GraphQL, Search Engine Optimization (SEO), Core Web Vitals, Magento2, Scrum, Jira)"})]})]})]})}),ye=()=>e.jsx(S,{children:e.jsxs(j,{children:[e.jsx(g,{children:e.jsx("img",{src:"img/e.jpg",alt:"europa logo"})}),e.jsxs(u,{children:[e.jsx(x,{children:t("EUROPA UBEZPIECZENIA - FULL STACK DEVELOPER")}),e.jsxs(y,{children:[e.jsx(h,{children:t("2019.09.01 – 2021.10.31; 2 years, 2 months")}),e.jsx(I,{children:e.jsxs("ul",{children:[e.jsx("li",{children:t("Client from the insurance industry (Income: ~5 000 000 PLN)")}),e.jsx("li",{children:t("Expert systems. Working with databases")})]})}),e.jsx(L,{children:"(Angular, Angular.js, JavaScript, jQuery, HTML5, CSS3, Groovy, PHP, XML, JSON, Scrum, Jira)"})]})]})]})}),fe=()=>e.jsx(S,{children:e.jsxs(j,{children:[e.jsx(g,{children:e.jsx("img",{src:"img/o.png",alt:"orange logo"})}),e.jsxs(u,{children:[e.jsx(x,{children:t("Orange - INTERN")}),e.jsx(y,{children:e.jsx(h,{children:t("2017.07; 1 month")})})]})]})}),k=({title:i,number:r})=>{let s={1:e.jsx(fe,{}),2:e.jsx(ye,{}),3:e.jsx(xe,{}),4:e.jsx(ue,{})};return e.jsxs(P,{children:[i&&e.jsx(ge,{}),s[r??1]]})},N={"tel:+48519792189":e.jsxs(e.Fragment,{children:["+48"," ","519"," ","792"," ","189"]}),"mailto:najwer23@live.com":"najwer23@live.com","https://najwer23.github.io":"https://najwer23.github.io","https://www.linkedin.com/in/najwer23":e.jsx("b",{children:"https://www.linkedin.com/in/najwer23"})},we=()=>e.jsx(e.Fragment,{children:e.jsxs(re,{children:[e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx("b",{children:"Mariusz"})," Najwer"]}),e.jsx(se,{children:e.jsx("b",{children:"Frontend Software Engineer"})})]}),e.jsx(ae,{children:Object.keys(N).map((i,r)=>e.jsx(oe,{children:e.jsx("a",{href:i,rel:"noreferrer",target:"_blank",children:N[i]},r)},r))})]})}),Se=()=>e.jsxs(P,{children:[e.jsx(E,{children:t("MY PROJECTS")}),e.jsx(C,{})]}),be=()=>e.jsx(d,{projectTitle:e.jsx(e.Fragment,{children:t("BLACKJACK")}),projectTech:e.jsx(e.Fragment,{children:"(HTML5, CSS3, JavaScript)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("Blackjack is a casino banking game. The game is a comparing card game where each player competes against the dealer. The objective of the game is to get a hand total of closer to 21 than the dealer without going over 21(busting)")," "]})}),projectLink:"https://najwer23.github.io/blackjack/"}),ke=()=>e.jsx(d,{projectTitle:e.jsx(e.Fragment,{children:t("GUI Snippets")}),projectTech:e.jsx(e.Fragment,{children:"(JavaScript, HTML5, CSS3)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("Calendar, Carousel, Slider, Scrollbar, Masonry Grid, Video Player, Email HTML, Slideshow")," "]})}),projectLink:"https://najwer23.github.io/gui-challenge/"}),Ee=()=>e.jsx(d,{projectTitle:e.jsx(e.Fragment,{children:t("REED SOLOMON ALGORITHM BCH: ENCODER, DECODER")}),projectTech:e.jsx(e.Fragment,{children:"(JavaScript, HTML5, CSS3, Webpack, LaTeX - Mathjax)"}),projcetDesc:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("Reed-Solomon algorithm is an error-correcting code that is widely used in various applications, including data storage systems such as CDs, DVDs, Blu-ray discs, and RAID 6")," "]}),e.jsxs("li",{children:[t("Reed-Solomon codes are used to detect and correct burst errors associated with media defects")," "]}),e.jsx("li",{children:t("Algorithms used: Gauss-Jordan Elimination in Galois field, Detrminant, Transpose of Matrix n*n, Zech’s logarithm, Adding, Multiplication and Dividing polynomials, Peterson–Gorenstein–Zierler algorithm, Chien search algorithm, System of linear equations")})]}),projectLink:"https://najwer23.github.io/bch-code-js/"}),Ce=()=>e.jsx(d,{projectTitle:e.jsx(e.Fragment,{children:t("APP SUPPORTING CALISTHENICS TRAINING")}),projectTech:e.jsx(e.Fragment,{children:"(React.js, Node.js (Express.js), DynamoDB, CSS)"}),projcetDesc:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("100 Push Ups, 300 Squats, 300 Sit Ups, 40 Pull Ups training plans")," "]}),e.jsxs("li",{children:[t("Authorization and communication with API in the cloud")," "]}),e.jsxs("li",{children:[t("Email templates")," "]})]}),projectLink:"https://jabber.cyclic.app"}),Te=()=>e.jsx(d,{projectTitle:e.jsx(e.Fragment,{children:t("TOP MUSIC HITS")}),projectTech:e.jsx(e.Fragment,{children:"(React.js, Recoil.js, JavaScript, TypeScript, TailwindCSS)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("The application displays current music hits and allow to filters by title or author.")," "]})}),projectLink:"https://najwer23.github.io/top-100-music/"}),ze=()=>e.jsx(d,{projectTitle:e.jsx(e.Fragment,{children:t("WEATHER APP")}),projectTech:e.jsx(e.Fragment,{children:"(React.js, Redux.js, JavaScript, TypeScript, CSS modules, DynamoDB, Node.js, Vite)"}),projcetDesc:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("The project was about integrating an external API using Redux.js and AWS")," "]}),e.jsx("li",{children:t("Displays weather data for specific geographic coordinates")})]}),projectLink:"https://najwer23.github.io/#/weather"}),Re=()=>e.jsx(d,{projectTitle:e.jsx(e.Fragment,{children:t("GEOMETRIC FIGURES WITH BOUNDING BOX")}),projectTech:e.jsx(e.Fragment,{children:"(React.js, Redux.js, JavaScript, TypeScript, HTML5, CSS3)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("An application that draws rotated geometric figures (rectangles and ellipses) on a canvas based on data from the API. For each figure it was necessary to draw a 'bounding box'")," "]})}),projectLink:"https://najwer23.github.io/react-redux-ts/"}),Pe=()=>e.jsx(d,{projectTitle:e.jsx(e.Fragment,{children:t("RESUME BUILDER")}),projectTech:e.jsx(e.Fragment,{children:"(JavaScript, TypeScript, React.js, CSS, Emotion, Vite)"}),projcetDesc:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("A resume builder is an online tool that allows me to create a professional resume quickly and easily.")," "]}),e.jsxs("li",{children:[t("It allows me to print my CV as PDF in any language")," "]})]}),projectLink:"https://najwer23.github.io/resume/"}),Ie=()=>{const{data:i,status:r}=M("https://leetcode-api-faisalshohag.vercel.app/najwer23",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}},!0);let s="";return r==="done"&&(s=i.totalSolved),e.jsx(d,{projectTitle:e.jsx(e.Fragment,{children:t("LEETCODE")}),projectTech:e.jsx(e.Fragment,{children:"(JavaScript, TypeScript, Node.js)"}),projcetDesc:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("LeetCode is an online platform that provides a collection of coding problems and challenges to help programmers enhance their coding skills.")," "]}),e.jsxs("li",{children:[t("Number of currently solved problems:")," ",s||"500+"]})]}),projectLink:"https://leetcode.com/najwer23/"})},d=({projectTitle:i,projectTech:r,projcetDesc:s,projectLink:c})=>e.jsxs(e.Fragment,{children:[e.jsx(de,{children:i}),e.jsx(he,{children:r}),e.jsx(pe,{children:s}),e.jsx("a",{href:c,rel:"noreferrer",target:"_blank",style:{fontSize:"12px"},children:c})]}),l=({title:i,number:r})=>{let s={1:e.jsx(Ie,{}),2:e.jsx(Pe,{}),3:e.jsx(Re,{}),4:e.jsx(ze,{}),5:e.jsx(Te,{}),6:e.jsx(Ce,{}),7:e.jsx(Ee,{}),8:e.jsx(ke,{}),9:e.jsx(be,{})};return e.jsxs(e.Fragment,{children:[i&&e.jsx(Se,{}),s[r??1],e.jsx(me,{})]})},Le=["JavaScript","TypeScript","React.js","Angular","jQuery","Next.js","Redux.js","Recoil.js","MobX.js","Knokout.js","Cypress","Jtest.js","Puppeteer","HTML5","CSS (Less, Sass, CSS-IN-JS, modules)","Tailwind CSS","PHP","Node.js","Storybook","Design system","AWS (DynamoDB, S3, RDS, E3)","XML, JSON, GraphQL","Express.js","Agile, Scrum & JIRA","Web Components","Leaflet","Core Web Vitals","Search Engine Optimization(SEO)","a11y"],ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(E,{children:t("SKILLS")}),e.jsx(C,{}),e.jsx(ce,{children:Le.map((i,r,s)=>e.jsxs(le,{children:[e.jsx("div",{children:s[r]}),e.jsx("div",{children:r<s.length-1?e.jsx(D,{icon:K,size:"2xs",style:{color:"orangered",marginLeft:"10px"}}):""})]},r))})]}),Ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(ee,{}),e.jsxs(R,{children:[e.jsx(we,{}),e.jsx(je,{}),e.jsx(k,{title:!0,number:4}),e.jsx(k,{number:3}),e.jsx(k,{number:2}),e.jsx(k,{number:1})]}),e.jsxs(R,{children:[e.jsx(ve,{}),e.jsx(l,{title:!0,number:1}),e.jsx(l,{number:2}),e.jsx(l,{number:4}),e.jsx(l,{number:5})]}),e.jsxs(R,{children:[e.jsx(l,{number:3}),e.jsx(l,{number:6}),e.jsx(l,{number:7}),e.jsx(l,{number:8}),e.jsx(l,{number:9})]})]}),Ne=W([{path:"/",element:e.jsxs(e.Fragment,{children:[e.jsx(Ae,{}),e.jsx(U,{})]})}]),De=()=>e.jsx(H,{router:Ne}),Oe=()=>e.jsx(X,{children:e.jsx(De,{})});J.createRoot(document.getElementById("root")).render(e.jsx(Oe,{}));
