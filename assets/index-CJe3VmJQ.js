import{r as y,j as e}from"./react-DZLWSh8C.js";import{c as J}from"./react-dom-GVliqCMN.js";import{c as G,S as U,R as H}from"./react-router-dom-DaH4op46.js";import{n}from"./@emotion-BesKrtjP.js";import{F as D,f as B,a as V}from"./@fortawesome-DtYJQ0nF.js";import{r as A}from"./najwer23snacks-030_Frtb.js";import{R as K}from"./react-ga4-B8xQoZVb.js";/* empty css                    */import"./hoist-non-react-statics-CqkleIqs.js";import"./scheduler-CzFDRTuY.js";import"./react-router-ZDDGL1X6.js";import"./@remix-run-4Kn-geKd.js";import"./@babel-CF3RwP-h.js";import"./stylis-YPZU7XtI.js";import"./prop-types-BIeFyDa8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();const Y=n.div`
  padding: 20px;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media print {
    display: none !important;
  }
`,Z=n.div`
  color: black;
  font-weight: bold;
`,Q=n.div`
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
    content: '';
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
`;const q={lang:"en",setLang:()=>{}},O=y.createContext(q),X=({children:i})=>{const[r,a]=y.useState("en");return document.title="Mariusz Najwer - Résumé "+r.toUpperCase(),e.jsx(O.Provider,{value:{lang:r,setLang:a},children:i})},F=()=>y.useContext(O),$=i=>{const r=localStorage.getItem(i);if(!r)return null;const a=JSON.parse(r);return new Date().getTime()>a.expiry?(localStorage.removeItem(i),null):a.value},_=(i,r,a)=>{const o={value:r,expiry:new Date().getTime()+a*60*60*1e3};localStorage.setItem(i,JSON.stringify(o))};function M(i,r,a=!0){const s=y.useRef(!1),o=async R=>{if(T({type:"loading"}),!i)return;s.current=!1;const x=$(i);if(r.method==="GET"&&x){T({type:"done",payload:x});return}try{r.method!=="GET"&&(r={...r,body:JSON.stringify(R)});const S=await fetch(i,r);if(!S.ok)throw new Error(S.statusText);const P=await S.json();if(r.method==="GET"&&_(i,P,.5),s.current)return;T({type:"done",payload:P})}catch(S){if(s.current)return;T({type:"error",payload:S})}},c={error:void 0,data:void 0,status:"idle",executeFetch:o},f=(R,x)=>{switch(x.type){case"loading":return{...c,status:"loading"};case"done":return{...c,data:x.payload,status:"done"};case"error":return{...c,error:x.payload,status:"error"};default:return R}},[W,T]=y.useReducer(f,c);return y.useLayoutEffect(()=>{a&&o()},[i]),W}const ee=({repoName:i})=>{const{data:r,status:a}=M(`https://api.github.com/repos/najwer23/${i}/branches/gh-pages`,{method:"GET"});let s="";return a==="done"&&(s=new Date(r.commit.commit.committer.date).toLocaleString("pl-PL",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit",year:"numeric"})),e.jsx(e.Fragment,{children:s||" "})},te=()=>{const{lang:i,setLang:r}=F(),a=()=>{window.print()};return e.jsxs(Y,{children:[e.jsx(Z,{children:e.jsx(ee,{repoName:"resume"})}),e.jsxs(Q,{children:[e.jsx(A,{type:"button","aria-label":"lang En",onClick:()=>r("en"),disabled:i==="en",children:"EN"}),e.jsx(A,{type:"button","aria-label":"lang Pl",onClick:()=>r("pl"),disabled:i==="pl",children:"PL"}),e.jsx(A,{type:"button","aria-label":"lang En",onClick:()=>a(),children:e.jsx(D,{icon:B,size:"xl",style:{color:"white"}})})]})]})},re=n.div`
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
`,z=({children:i})=>e.jsx(re,{children:i}),v={pl:{PDF:"PDF",EDUCATION:"EDUKACJA","WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY":"POLITECHNIKA WROCŁAWSKA","Master of Science, COMPUTER SCIENCE, 4.5":"Studia magisterskie, INFORMATYKA, 4.5","Bachelor of Science, CONTROL ENGINEERING AND ROBOTICS, 4.5":"Studia Inżynierskie, AUTOMATYKA I ROBOTYKA, 4.5","2017.07; 1 month":"2017.07; 1 miesiąc","2019.09.01 – 2021.10.31; 2 years, 2 months":"2019.09.01 – 2021.10.31; 2 lata, 2 miesiące",EXPERIENCE:"DOŚWIADCZENIE","Creating complex SQL queries for data aggregation":"Tworzenie złożonych zapytań SQL służących do agregacji danych","Creating expert systems enabling the purchase of insurance":"Tworzenie systemów eksperckich pozwalających na zakup ubezpieczenia","Creating complex forms to handle insurance applications":"Tworzenie złożonych formularzy do obsługi wniosków ubezpieczeniowych","Client from the insurance industry (Income: ~5 000 000 PLN)":"Klient z branży ubezpieczeniowej (Przychód: ~5 000 000 PLN)","Client from the insurance industry (~250 000 users)":"Klient z branży ubezpieczeniowej (~250 000 użytkowników)","Micro-frontend architecture":"Architektura mikrofrontendowa","Creating SSR components":"Komponenty SSR","Cooperation with business analysts":"Współpraca z analitykami biznesowymi","Impact on design system":"Udział w tworzeniu produktu","Improving website performance":"Poprawa wydajności stron interentowych","Cooperation with the testing team":"Współpraca z zespołem testerskim","Collaboration with the devops team":"Współpraca z zespołem devopsów","Creating database models for web applications":"Tworzenie modeli baz danych dla aplikacji internetowych","2021.11.01 – 2023.04.30; 1 year, 6 months":"2021.11.01 – 2023.04.30; 1 rok, 6 miesięcy","Client from the ecommerce industry (Income: ~4 000 000 PLN)":"Klient z branży ecommerce (Przychód: ~4 000 000 PLN)","Creating and changing functionality on the website (Store search engine, Blog page, Shopping cart, Checkout, Sliders, Carousel, Filters etc.)":"Tworzenie i zmiana funkcjonalności na stronie internetowej (wyszukiwarka w sklepie, strona bloga, koszyk zakupowy, slidery, karuzele, filtry itd.)","2023.08.07 – current":"2023.08.07 – obecnie","2024.06.05 – current":"2024.06 – obecnie","2023.08.07 – 2024.07.31; 1 year":"2023.08.07 – 2024.07.31; 1 rok","Client from the entertainment industry (~100 000 000 users)":"Klient z branży rozrywkowej (~100 000 000 użytkowników)","Leading the team through frontend transformation (Angular -> React.js)":"Prowadzenie zespołu przez transformację frontendu (Angular -> React.js)","Leveraging AI-powered design and development":"Wykorzystanie projektowania i rozwoju wspomaganego sztuczną inteligencją","Implementing effective communication strategies and promoting a culture of continuous learning":"Wdrażanie skutecznych strategii komunikacyjnych i promowanie kultury ciągłego uczenia się","Best practices in software testing":"Najlepsze praktyki w testowaniu oprogramowania",SKILLS:"W TYCH TECHNOLOGIACH CZUJĘ SIĘ DOBRZE","MY PROJECTS":"MOJE PROJEKTY","LeetCode is an online platform that provides a collection of coding problems and challenges to help programmers enhance their coding skills.":"LeetCode to platforma internetowa zawierająca zbiór problemów programistycznych, które pomagają programistom udoskonalać ich umiejętności.","Number of currently solved problems:":"Liczba aktualnie rozwiązanych problemów:","A resume builder is an online tool that allows me to create a professional resume.":"Kreator CV to narzędzie online, które pozwala mi szybko i łatwo stworzyć profesjonalne CV.","It allows me to print my CV as PDF in any language":"Umożliwia mi wydrukowanie CV w formacie PDF w dowolnym języku","The project was about integrating an external API using Redux.js and AWS":"Projekt dotyczył integracji zewnętrznego API z wykorzystaniem Redux.js i AWS","Displays weather data for specific geographic coordinates":"Wyświetla dane pogodowe dla określonych współrzędnych geograficznych","The application displays current music hits and allow to filters by title or author.":"Aplikacja wyświetla hity muzyczne i umożliwia filtrowanie wg tytułu lub autora.","An application that draws rotated geometric figures (rectangles and ellipses) on a canvas based on data from the API. For each figure it was necessary to draw a 'bounding box'":"Aplikacja rysująca obrócone figury geometryczne (prostokąty i elipsy) na kanwie bazując na danych z API, Dla każdej figury konieczne było narysowanie „ramki ograniczającej”","100 Push Ups, 300 Squats, 300 Sit Ups, 40 Pull Ups training plans":"Plany treningowe 100 pompek, 300 przysiadów, 300 przysiadów, 40 podciągnięć","Authorization and communication with API in the cloud":"Autoryzacja i komunikacja z API w chmurze","Email templates":"Szablony wiadomości e-mail","Reed-Solomon algorithm is an error-correcting code that is widely used in various applications, including data storage systems such as CDs, DVDs, Blu-ray discs, and RAID 6":"Algorytm Reeda-Solomona to kod korygujący błędy, który jest szeroko stosowany w różnych zastosowaniach, w tym w systemach przechowywania danych, takich jak płyty CD, DVD, dyski Blu-ray i RAID 6","Reed-Solomon codes are used to detect and correct burst errors associated with media defects":"Kody Reeda-Solomona służą do wykrywania i korygowania błędów serii związanych z defektami nośnika","Algorithms used: Gauss-Jordan Elimination in Galois field, Detrminant, Transpose of Matrix n*n, Zech’s logarithm, Adding, Multiplication and Dividing polynomials, Peterson–Gorenstein–Zierler algorithm, Chien search algorithm, System of linear equations":"Wykorzystane algorytmy: Eliminacja Gaussa-Jordana w polu Galois, Detrminant, Transpozycja macierzy n*n, logarytm Zecha, Dodawanie, mnożenie i dzielenie wielomianów, Algorytm Petersona – Gorensteina – Zierlera, Algorytm Chien, Układ równań liniowych","Blackjack is a casino banking game. The game is a comparing card game where each player competes against the dealer. The objective of the game is to get a hand total of closer to 21 than the dealer without going over 21(busting)":"Blackjack to gra bankowa w kasynie. Ta gra jest porównawczą grą karcianą, w której każdy gracz rywalizuje z krupierem. Celem gry jest uzyskanie sumy rozdań bliższej 21 niż krupiera, bez przekraczania 21 (odpadanie)","Online store allowing you to purchase home things":"Sklep internetowy umożliwiający zakup artykułów do domu","Electronic Program Guide":" Elektroniczny przewodnik po programach telewizyjnych","Sudoku is a popular logic-based number-placement game. The goal is to fill a 9x9 grid with digits so that each column, each row, and each of the nine 3x3 subgrids that compose the grid contain all of the digits from 1 to 9. It is a highly engaging puzzle that can help improve concentration and overall brain power":"Sudoku to popularna gra oparta na logice polegająca na umieszczaniu liczb. Celem jest wypełnienie cyframi siatki 9x9 tak, aby każda kolumna, każdy wiersz i każda z dziewięciu podsiatek 3x3 tworzących siatkę zawierała wszystkie cyfry od 1 do 9. Jest to bardzo wciągająca łamigłówka, która może pomóc poprawić koncentrację i ogólną moc mózgu","LIFE AND HEALTH INSURANCE":"UBEZPIECZENIA ŻYCIA I ZDROWIA","APARTMENT AND HOUSE INSURANCE":"UBEZPIECZENIE MIESZKANIA I DOMU","ACTIVE IN SPORT":"AKTYWNI W SPORCIE","Polish Parliamentary Elections 2023":"Wybory do Sejmu i Senatu Rzeczypospolitej Polskiej 2023","Weather widgets":"Widgety pogodwe","Stock quotes":"Notowania giełdowe","This package offers a range of design system assets, including components, styles, and guidelines, to facilitate the development of consistent and user-friendly interfaces across various applications and platforms":"Pakiet ten oferuje szereg zasobów systemu projektowania, w tym komponenty, style i wytyczne, ułatwiające tworzenie spójnych i przyjaznych dla użytkownika interfejsów w różnych aplikacjach i platformach","Polish Local Government Elections 2024":"Wybory samorządowe 2024","European Elections 2024":"Wybory europejskie w 2024","Graph algorithms":"Algorytmy grafowe"}},t=i=>{const{lang:r}=F();return v[r]?v[r][i]??i:i},ie=n.div`
  display: flex;
  margin-bottom: 0px;
`,ne=n.div`
  width: 60%;
`,ae=n.div`
  font-size: 45px;
`,oe=n.div`
  font-size: 14px;
  color: orangered;
`,se=n.div`
  width: 40%;
`,ce=n.div`
  text-align: right;
  font-size: 13px;
  margin-top: 2px;

  a:hover {
    color: red;
    text-decoration: underline;
  }
`,N=n.section`
  margin-top: 30px;
`,w=n.section``,k=n.div`
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;

  &:first-letter {
    font-size: 22px;
  }
`,E=n.div`
  width: 300px;
  height: 3px;
  background-color: orangered;
  margin-top: 3px;
  margin-bottom: 10px;
`,p=n.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
`,m=n.div`
  img {
    width: 69px;
    height: 69px;
  }
`,j=n.div``,g=n.div`
  font-size: 18px;
  font-weight: 600;
`,u=n.div`
  min-width: 542px;
`,h=n.div`
  font-size: 15px;
`,C=n.div`
  margin-top: 8px;
  font-size: 15px;
  line-height: 130%;

  ul {
    padding-left: 20px;
  }
`,I=n.div`
  margin-top: 10px;
  font-size: 12px;
`,le=n.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
`,de=n.div`
  flex-shrink: 0;
  display: flex;
`,he=n.div`
  font-style: italic;
  font-size: 18px;
  font-weight: 600;
`,pe=n.div`
  font-size: 12px;
`,me=n.div`
  font-size: 15px;
`,je=n.div`
  margin: 15px 0 15px;
  width: 100%;
  height: 2px;
  background-color: lightgray;
`,ge=()=>e.jsxs(N,{children:[e.jsx(k,{children:t("EDUCATION")}),e.jsx(E,{}),e.jsxs(w,{children:[e.jsxs(p,{children:[e.jsx(m,{children:e.jsx("img",{src:"img/pwr.png",alt:"pwr logo"})}),e.jsxs(j,{children:[e.jsx(g,{children:t("WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY")}),e.jsxs(u,{children:[e.jsx(h,{children:t("Master of Science, COMPUTER SCIENCE, 4.5")}),e.jsx(h,{children:t("2018.02 ‑ 2019.06, Wrocław")})]})]})]}),e.jsxs(p,{children:[e.jsx(m,{children:e.jsx("img",{src:"img/pwr.png",alt:"pwr logo"})}),e.jsxs(j,{children:[e.jsx(g,{children:t("WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY")}),e.jsxs(u,{children:[e.jsx(h,{children:t("Bachelor of Science, CONTROL ENGINEERING AND ROBOTICS, 4.5")}),e.jsx(h,{children:t("2014.10 ‑ 2018.01, Wrocław")})]})]})]})]})]}),ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(k,{children:t("EXPERIENCE")}),e.jsx(E,{})]}),xe=()=>e.jsx(w,{children:e.jsxs(p,{children:[e.jsx(m,{children:e.jsx("img",{src:"img/applied.jpg",alt:"applied systems logo"})}),e.jsxs(j,{children:[e.jsx(g,{children:t("APPLIED SYSTEMS - FRONTEND SOFTWARE ENGINEER")}),e.jsxs(u,{children:[e.jsx(h,{children:t("2024.06.05 – current")}),e.jsx(C,{children:e.jsxs("ul",{children:[e.jsx("li",{children:t("Client from the insurance industry (~250 000 users)")}),e.jsx("li",{children:t("Leading the team through frontend transformation (Angular -> React.js)")}),e.jsx("li",{children:t("Leveraging AI-powered design and development")}),e.jsx("li",{children:t("Implementing effective communication strategies and promoting a culture of continuous learning")}),e.jsx("li",{children:t("Best practices in software testing")}),e.jsx("li",{children:t("Graph algorithms")}),e.jsx("li",{children:t("Creating complex forms to handle insurance applications")}),e.jsx("li",{children:t("a11y")})]})}),e.jsx(I,{children:"(React.js, Angular, TypeScript, JavaScript, HTML5, CSS3, Storybooks, Vite)"})]})]})]})}),ye=()=>e.jsx(w,{children:e.jsxs(p,{children:[e.jsx(m,{children:e.jsx("img",{src:"img/wbd.png",alt:"Warner Bros logo"})}),e.jsxs(j,{children:[e.jsx(g,{children:t("WARNER BROS - FRONTEND SOFTWARE ENGINEER")}),e.jsxs(u,{children:[e.jsx(h,{children:t("2023.08.07 – 2024.07.31; 1 year")}),e.jsx(C,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("Client from the entertainment industry (~100 000 000 users)")," "]}),e.jsxs("li",{children:[t("Micro-frontend architecture")," "]}),e.jsxs("li",{children:[t("Creating SSR components")," "]}),e.jsxs("li",{children:[t("Impact on design system")," "]}),e.jsxs("li",{children:[t("Improving website performance")," "]}),e.jsxs("li",{children:[t("Cooperation with the testing team")," "]}),e.jsxs("li",{children:[t("a11y")," "]})]})}),e.jsx(I,{children:"(JavaScript, TypeScript, Web Components, React.js, Next.js, Redux.js, CSS3, CSS Modules, HTML, Node.js, REST APIs, JSON, GraphQL, Search Engine Optimization (SEO), Scrum, JIRA, Core Web Vitals, Figma, Astro, Stroybook, Vite)"})]})]})]})}),we=()=>e.jsx(w,{children:e.jsxs(p,{children:[e.jsx(m,{children:e.jsx("img",{src:"img/flhf.png",alt:"flhf logo"})}),e.jsxs(j,{children:[e.jsx(g,{children:t("FLHF S.A - FRONTEND WEB DEVELOPER")}),e.jsxs(u,{children:[e.jsx(h,{children:t("2021.11.01 – 2023.04.30; 1 year, 6 months")}),e.jsx(C,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("Client from the ecommerce industry (Income: ~4 000 000 PLN)")," "]}),e.jsx("li",{children:t("Creating and changing functionality on the website (Store search engine, Blog page, Shopping cart, Checkout, Sliders, Carousel, Filters etc.)")}),e.jsx("li",{children:t("Improving website performance")}),e.jsx("li",{children:t("Collaboration with the devops team")}),e.jsx("li",{children:t("Email templates")}),e.jsx("li",{children:t("a11y")})]})}),e.jsx(I,{children:"(JavaScript, jQuery, React.js, TypeScript, HTML5, CSS3, JSON, GraphQL, Search Engine Optimization (SEO), Core Web Vitals, Magento2, Scrum, JIRA)"})]})]})]})}),fe=()=>e.jsx(w,{children:e.jsxs(p,{children:[e.jsx(m,{children:e.jsx("img",{src:"img/e.jpg",alt:"europa logo"})}),e.jsxs(j,{children:[e.jsx(g,{children:t("EUROPA UBEZPIECZENIA - FULL STACK DEVELOPER")}),e.jsxs(u,{children:[e.jsx(h,{children:t("2019.09.01 – 2021.10.31; 2 years, 2 months")}),e.jsx(C,{children:e.jsxs("ul",{children:[e.jsx("li",{children:t("Client from the insurance industry (Income: ~5 000 000 PLN)")}),e.jsx("li",{children:t("Creating expert systems enabling the purchase of insurance")}),e.jsx("li",{children:t("Creating complex forms to handle insurance applications")}),e.jsx("li",{children:t("Cooperation with business analysts")}),e.jsx("li",{children:t("Email templates")}),e.jsx("li",{children:t("Creating complex SQL queries for data aggregation")}),e.jsx("li",{children:t("Creating database models for web applications")})]})}),e.jsx(I,{children:"(Angular, Angular.js, TypeScript, JavaScript, jQuery, HTML5, CSS3, Groovy, PHP, SQL, JSON, Scrum, JIRA)"})]})]})]})}),Se=()=>e.jsx(w,{children:e.jsxs(p,{children:[e.jsx(m,{children:e.jsx("img",{src:"img/o.png",alt:"orange logo"})}),e.jsxs(j,{children:[e.jsx(g,{children:t("Orange - INTERN")}),e.jsx(u,{children:e.jsx(h,{children:t("2017.07; 1 month")})})]})]})}),b=({title:i,number:r})=>{let a={1:e.jsx(Se,{}),2:e.jsx(fe,{}),3:e.jsx(we,{}),4:e.jsx(ye,{}),5:e.jsx(xe,{})};return e.jsxs(N,{children:[i&&e.jsx(ue,{}),a[r??1]]})},L={"tel:+48519792189":e.jsxs(e.Fragment,{children:["+48"," ","519"," ","792"," ","189"]}),"mailto:najwer23@live.com":"najwer23@live.com","https://najwer23.github.io":"https://najwer23.github.io","https://www.linkedin.com/in/najwer23":e.jsx("b",{children:"https://www.linkedin.com/in/najwer23"})},be=()=>e.jsx(e.Fragment,{children:e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsxs(ae,{children:[e.jsx("b",{children:"Mariusz"})," Najwer"]}),e.jsx(oe,{children:e.jsx("b",{children:"Frontend Software Engineer"})})]}),e.jsx(se,{children:Object.keys(L).map((i,r)=>e.jsx(ce,{children:e.jsx("a",{href:i,rel:"noreferrer",target:"_blank",children:L[i]},r)},r))})]})}),ke=()=>e.jsxs(N,{children:[e.jsx(k,{children:t("MY PROJECTS")}),e.jsx(E,{})]}),Ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(k,{children:t("MY PROJECTS")}),e.jsx(E,{})]}),Te=()=>e.jsx(l,{projectTitle:e.jsx(e.Fragment,{children:t("DESIGN SYSTEM (npm package)")}),projectTech:e.jsx(e.Fragment,{children:"(React.js, TypeScript, JavaScript, CSS Modules, Storybook, Vite, Vercel, Rollup.js, Turborepo)"}),projcetDesc:e.jsx("ul",{children:e.jsx("li",{children:t("This package offers a range of design system assets, including components, styles, and guidelines, to facilitate the development of consistent and user-friendly interfaces across various applications and platforms")})}),projectLink:"https://najwer23.github.io/najwer23snacks"}),ze=()=>e.jsx(l,{projectTitle:e.jsxs(e.Fragment,{children:[t("TVN Warner Bros. Discovery, TVN24 - digital news")," ✨✨"]}),projectTech:e.jsx(e.Fragment,{children:"(Next.js, React.js, TypeScript, JavaScript, CSS-IN-JS, CSS Modules, Redux, Figma, Storybook, d3.js)"}),projcetDesc:e.jsxs("ul",{children:[e.jsx("li",{children:t("TVN Warszawa")}),e.jsx("li",{children:t("European Elections 2024")}),e.jsxs("li",{children:[t("Polish Local Government Elections 2024")," "]}),e.jsxs("li",{children:[t("Polish Parliamentary Elections 2023")," "]}),e.jsx("li",{children:t("Weather widgets")}),e.jsx("li",{children:t("Stock quotes")}),e.jsx("li",{children:t("Electronic Program Guide")}),e.jsx("li",{children:t("Top Model 2023")})]}),projectLink:"https://tvn24.pl/"}),Ce=()=>e.jsx(l,{projectTitle:e.jsxs(e.Fragment,{children:[t("ONLINE INSURANCE APPLICATIONS")," "]}),projectTech:e.jsx(e.Fragment,{children:"(HTML, JavaScript, TypeScript, jQuery, Angular, SQL)"}),projcetDesc:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("LIFE AND HEALTH INSURANCE")," "]}),e.jsxs("li",{children:[t("APARTMENT AND HOUSE INSURANCE")," "]}),e.jsxs("li",{children:[t("ACTIVE IN SPORT")," "]}),e.jsxs("li",{children:[t("ITRAVEL")," "]})]}),projectLink:"https://tueuropa.pl/"}),Ie=()=>e.jsx(l,{projectTitle:e.jsxs(e.Fragment,{children:[t("RESTILO")," "]}),projectTech:e.jsx(e.Fragment,{children:"(HTML, JavaScript, TypeScript, jQuery, React.js)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("Online store allowing you to purchase home things")," "]})}),projectLink:"https://restilo.pl/"}),Re=()=>e.jsx(l,{projectTitle:e.jsxs(e.Fragment,{children:[t("SUDOKU")," "]}),projectTech:e.jsx(e.Fragment,{children:"(HTML5, CSS3-IN-JS, React.js, JavaScript, TypeScript, backtracking algorithm)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("Sudoku is a popular logic-based number-placement game. The goal is to fill a 9x9 grid with digits so that each column, each row, and each of the nine 3x3 subgrids that compose the grid contain all of the digits from 1 to 9. It is a highly engaging puzzle that can help improve concentration and overall brain power")," "]})}),projectLink:"https://najwer23.github.io/sudoku/"}),Ae=()=>e.jsx(l,{projectTitle:e.jsx(e.Fragment,{children:t("BLACKJACK")}),projectTech:e.jsx(e.Fragment,{children:"(HTML5, CSS3, JavaScript)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("Blackjack is a casino banking game. The game is a comparing card game where each player competes against the dealer. The objective of the game is to get a hand total of closer to 21 than the dealer without going over 21(busting)")," "]})}),projectLink:"https://najwer23.github.io/blackjack/"}),Ne=()=>e.jsx(l,{projectTitle:e.jsx(e.Fragment,{children:t("GUI Snippets")}),projectTech:e.jsx(e.Fragment,{children:"(JavaScript, HTML5, CSS3)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("Calendar, Carousel, Slider, Scrollbar, Masonry Grid, Video Player, Email HTML, Slideshow")," "]})}),projectLink:"https://najwer23.github.io/gui-challenge/"}),Pe=()=>e.jsx(l,{projectTitle:e.jsxs(e.Fragment,{children:[t("REED SOLOMON ALGORITHM BCH: ENCODER, DECODER")," "]}),projectTech:e.jsx(e.Fragment,{children:"(JavaScript, HTML5, CSS3, Webpack, LaTeX - Mathjax)"}),projcetDesc:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("Reed-Solomon algorithm is an error-correcting code that is widely used in various applications, including data storage systems such as CDs, DVDs, Blu-ray discs, and RAID 6")," "]}),e.jsxs("li",{children:[t("Reed-Solomon codes are used to detect and correct burst errors associated with media defects")," "]}),e.jsx("li",{children:t("Algorithms used: Gauss-Jordan Elimination in Galois field, Detrminant, Transpose of Matrix n*n, Zech’s logarithm, Adding, Multiplication and Dividing polynomials, Peterson–Gorenstein–Zierler algorithm, Chien search algorithm, System of linear equations")})]}),projectLink:"https://najwer23.github.io/bch-code-js/"}),ve=()=>e.jsx(l,{projectTitle:e.jsxs(e.Fragment,{children:[t("APP SUPPORTING CALISTHENICS TRAINING")," "]}),projectTech:e.jsx(e.Fragment,{children:"(React.js, Node.js Fastify, DynamoDB, CSS modules, JWT, AWS Lambda, Vercel, Vite)"}),projcetDesc:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("100 Push Ups, 300 Squats, 300 Sit Ups, 40 Pull Ups training plans")," "]}),e.jsxs("li",{children:[t("Authorization and communication with API in the cloud")," "]}),e.jsxs("li",{children:[t("Email templates")," "]})]}),projectLink:"https://najwer23gym.vercel.app/"}),Le=()=>e.jsx(l,{projectTitle:e.jsx(e.Fragment,{children:t("TOP MUSIC HITS")}),projectTech:e.jsx(e.Fragment,{children:"(React.js, Recoil.js, JavaScript, TypeScript, TailwindCSS)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("The application displays current music hits and allow to filters by title or author.")," "]})}),projectLink:"https://najwer23.github.io/top-100-music/"}),De=()=>e.jsx(l,{projectTitle:e.jsx(e.Fragment,{children:t("WEATHER APP")}),projectTech:e.jsx(e.Fragment,{children:"(React.js, Redux.js, JavaScript, TypeScript, CSS modules, DynamoDB, Node.js, Vite)"}),projcetDesc:e.jsxs("ul",{children:[e.jsxs("li",{children:[t("The project was about integrating an external API using Redux.js and AWS")," "]}),e.jsx("li",{children:t("Displays weather data for specific geographic coordinates")})]}),projectLink:"https://najwer23.github.io/#/weather"}),Oe=()=>e.jsx(l,{projectTitle:e.jsx(e.Fragment,{children:t("GEOMETRIC FIGURES WITH BOUNDING BOX")}),projectTech:e.jsx(e.Fragment,{children:"(React.js, Redux.js, JavaScript, TypeScript, HTML5, CSS3)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("An application that draws rotated geometric figures (rectangles and ellipses) on a canvas based on data from the API. For each figure it was necessary to draw a 'bounding box'")," "]})}),projectLink:"https://najwer23.github.io/react-redux-ts/"}),Fe=()=>e.jsx(l,{projectTitle:e.jsx(e.Fragment,{children:t("RESUME BUILDER")}),projectTech:e.jsx(e.Fragment,{children:"(JavaScript, TypeScript, React.js, CSS, Emotion, Vite)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("A resume builder is an online tool that allows me to create a professional resume.")," "]})}),projectLink:"https://najwer23.github.io/resume/"}),Me=()=>{const{data:i,status:r}=M("https://leetcode-api-faisalshohag.vercel.app/najwer23",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}},!0);let a="";return r==="done"&&(a=i.totalSolved),e.jsx(l,{projectTitle:e.jsxs(e.Fragment,{children:[t("LEETCODE")," ✨"]}),projectTech:e.jsx(e.Fragment,{children:"(JavaScript, TypeScript, Node.js)"}),projcetDesc:e.jsx("ul",{children:e.jsxs("li",{children:[t("Number of currently solved problems:")," ",a||"700+"]})}),projectLink:"https://leetcode.com/najwer23/"})},l=({projectTitle:i,projectTech:r,projcetDesc:a,projectLink:s})=>e.jsxs(e.Fragment,{children:[e.jsx(he,{children:i}),e.jsx(pe,{children:r}),e.jsx(me,{children:a}),e.jsx("a",{href:s,rel:"noreferrer",target:"_blank",style:{fontSize:"12px"},children:s})]}),d=({title:i,number:r,title2:a})=>{let s={1:e.jsx(Me,{}),2:e.jsx(Fe,{}),3:e.jsx(Oe,{}),4:e.jsx(De,{}),5:e.jsx(Le,{}),6:e.jsx(ve,{}),7:e.jsx(Pe,{}),8:e.jsx(Ne,{}),9:e.jsx(Ae,{}),10:e.jsx(Re,{}),11:e.jsx(Ie,{}),12:e.jsx(Ce,{}),13:e.jsx(ze,{}),14:e.jsx(Te,{})};return e.jsxs(e.Fragment,{children:[i&&e.jsx(ke,{}),a&&e.jsx(Ee,{}),s[r??1],e.jsx(je,{})]})},We=["JavaScript","TypeScript","React.js","Angular","jQuery","Next.js","Redux.js","Recoil.js","MobX.js","Knokout.js","Cypress","Jtest.js","Puppeteer","HTML5","CSS (Less, Sass, CSS-IN-JS, modules)","Tailwind CSS","PHP","Node.js","Storybook","Design system","AWS (DynamoDB, S3, RDS, E3)","XML, JSON, GraphQL","Express.js","Agile, Scrum & JIRA","Web Components","Leaflet","Core Web Vitals","SQL","Search Engine Optimization(SEO)","a11y","SSR","Fastify"],Je=()=>e.jsxs(e.Fragment,{children:[e.jsx(k,{children:t("SKILLS")}),e.jsx(E,{}),e.jsx(le,{children:We.map((i,r,a)=>e.jsxs(de,{children:[e.jsx("div",{children:a[r]}),e.jsx("div",{children:r<a.length-1?e.jsx(D,{icon:V,size:"2xs",style:{color:"orangered",marginLeft:"10px"}}):""})]},r))})]}),Ge=()=>e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsxs(z,{children:[e.jsx(be,{}),e.jsx(ge,{}),e.jsx(b,{title:!0,number:5}),e.jsx(b,{number:4})]}),e.jsxs(z,{children:[e.jsx(b,{number:3}),e.jsx(b,{number:2}),e.jsx(b,{number:1}),e.jsx("br",{}),e.jsx(Je,{})]}),e.jsxs(z,{children:[e.jsx(d,{title2:!0,number:1}),e.jsx(d,{number:2}),e.jsx(d,{number:4}),e.jsx(d,{number:3}),e.jsx(d,{number:6}),e.jsx(d,{number:11})]}),e.jsxs(z,{children:[e.jsx(d,{number:10}),e.jsx(d,{number:12}),e.jsx(d,{number:14}),e.jsx(d,{number:13})]})]}),Ue=G([{path:"/",element:e.jsxs(e.Fragment,{children:[e.jsx(Ge,{}),e.jsx(U,{})]})}]),He=()=>e.jsx(H,{router:Ue});K.initialize("G-4RB2P61JPP");const Be=()=>e.jsx(X,{children:e.jsx(He,{})});J(document.getElementById("root")).render(e.jsx(Be,{}));
