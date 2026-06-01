import movieScience1 from "../../assets/img/MovieScience/1.png";
import movieScience2 from "../../assets/img/MovieScience/2.png";
import movieScience3 from "../../assets/img/MovieScience/3.png";
import movieScience4 from "../../assets/img/MovieScience/4.png";
import movieScience5 from "../../assets/img/MovieScience/5.png";
import movieScience6 from "../../assets/img/MovieScience/6.png";

import projBitirme1 from "../../assets/img/bitirmeP/1.png";
import projBitirme2 from "../../assets/img/bitirmeP/2.png";
import projBitirme3 from "../../assets/img/bitirmeP/3.png";
import projBitirme4 from "../../assets/img/bitirmeP/4.png";
import projBitirme5 from "../../assets/img/bitirmeP/5.png";
import projBitirme6 from "../../assets/img/bitirmeP/6.png";
import projBitirme7 from "../../assets/img/bitirmeP/7.png";
import projBitirme8 from "../../assets/img/bitirmeP/8.png";
import projBitirme9 from "../../assets/img/bitirmeP/9.png";
import projBitirme10 from "../../assets/img/bitirmeP/10.png";

import adoBilet1 from "../../assets/img/adoBilet/showcase.png";
import adoBilet2 from "../../assets/img/adoBilet/2.png";
import adoBilet3 from "../../assets/img/adoBilet/3.png";
import adoBilet4 from "../../assets/img/adoBilet/4.png";
import adoBilet5 from "../../assets/img/adoBilet/5.png";
import adoBilet6 from "../../assets/img/adoBilet/6.png";
import adoBilet7 from "../../assets/img/adoBilet/7.png";
import adoBilet8 from "../../assets/img/adoBilet/8.png";
import adoBilet9 from "../../assets/img/adoBilet/9.png";
import adoBilet10 from "../../assets/img/adoBilet/10.png";

import financeCase1 from "../../assets/img/FinanceCase/showcase.png";
import financeCase2 from "../../assets/img/FinanceCase/2.png";
import financeCase3 from "../../assets/img/FinanceCase/3.png";
import financeCase4 from "../../assets/img/FinanceCase/4.png";

import logisticCms1 from "../../assets/img/LogisticCMS/showcase.png";
import logisticCms2 from "../../assets/img/LogisticCMS/2.png";
import logisticCms3 from "../../assets/img/LogisticCMS/3.png";
import logisticCms4 from "../../assets/img/LogisticCMS/4.png";
import logisticCms5 from "../../assets/img/LogisticCMS/5.png";
import logisticCms6 from "../../assets/img/LogisticCMS/6.png";
import logisticCms7 from "../../assets/img/LogisticCMS/7.png";
import logisticCms8 from "../../assets/img/LogisticCMS/8.png";
import logisticCms9 from "../../assets/img/LogisticCMS/9.png";
import logisticCms10 from "../../assets/img/LogisticCMS/10.png";


import estate1 from "../../assets/img/estate/showcase.png";
import estate2 from "../../assets/img/estate/2.png";
import estate3 from "../../assets/img/estate/3.png";
import estate4 from "../../assets/img/estate/4.png";
import estate5 from "../../assets/img/estate/5.png";
import estate6 from "../../assets/img/estate/6.png";
import estate7 from "../../assets/img/estate/7.png";
import estate8 from "../../assets/img/estate/8.png";
import estate9 from "../../assets/img/estate/9.png";


import blogApp1 from "../../assets/img/BlogApp/showcase.png";
import blogApp2 from "../../assets/img/BlogApp/2.png";
import blogApp3 from "../../assets/img/BlogApp/3.png";
import blogApp4 from "../../assets/img/BlogApp/4.png";
import blogApp5 from "../../assets/img/BlogApp/5.png";
import blogApp6 from "../../assets/img/BlogApp/6.png";
import blogApp7 from "../../assets/img/BlogApp/7.png";
import blogApp8 from "../../assets/img/BlogApp/8.png";
import blogApp9 from "../../assets/img/BlogApp/9.png";

import financeCaseCover from "../../assets/img/FinanceCase/financecase-cover.png";
import logisticCmsCover from "../../assets/img/LogisticCMS/lojisticcms-cover.png";
import blogAppCover from "../../assets/img/BlogApp/blogapp-cover.png";
import adoBiletCover from "../../assets/img/adoBilet/adobilet-cover.png";
import estateCover from "../../assets/img/estate/nivoemlak-cover.png";
import rafyaCover from "../../assets/img/bitirmeP/rafya-cover.png";
import movieScienceCover from "../../assets/img/MovieScience/filmscience-cover.png";

const simpleIcon = (slug: string, color = "54C7EC") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

// Unified monochrome SVG badge for techs without an official SimpleIcons logo.
// Designed to live INSIDE the .tech-icon container (which already provides the
// dark fill + accent border), so the badge itself is transparent — just the
// glyph. Glyphs fill ~85% of the 64×64 viewBox so they read at 24px display,
// and combine a 3.2 stroke with selective semi-transparent accent fills for
// the same visual weight as the SimpleIcons logos sitting next to them.
const monoIcon = (innerSvg: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill="none" stroke="#54C7EC" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">${innerSvg}</g></svg>`
  )}`;

const techIcons = {
  // Two filled records connected by a directed arrow — AutoMapper.
  automapper: monoIcon(
    '<circle cx="14" cy="32" r="7" fill="rgba(84,199,236,0.2)"/><circle cx="50" cy="32" r="7" fill="rgba(84,199,236,0.2)"/><path d="M22 32h20"/><path d="M37 26l6 6-6 6"/>'
  ),
  bootstrap: simpleIcon("bootstrap"),
  chartjs: simpleIcon("chartdotjs"),
  // Shield with check — protected session / cookie auth.
  cookieAuth: monoIcon(
    '<path d="M32 6l22 8v16c0 14-10 25-22 28-12-3-22-14-22-28V14z" fill="rgba(84,199,236,0.16)"/><path d="M22 32l8 8 14-14"/>'
  ),
  // Stylized "C#" letterform — SimpleIcons removed the Microsoft brand icon.
  csharp: monoIcon(
    '<text x="32" y="44" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="800" fill="#54C7EC" stroke="none">C#</text>'
  ),
  dart: simpleIcon("dart"),
  // Three connected nodes — simplified network for clear 24px reading.
  dio: monoIcon(
    '<circle cx="18" cy="18" r="7" fill="rgba(84,199,236,0.22)"/><circle cx="46" cy="18" r="7" fill="rgba(84,199,236,0.22)"/><circle cx="32" cy="48" r="7" fill="rgba(84,199,236,0.22)"/><path d="M25 18h14"/><path d="M22 25l8 18"/><path d="M42 25l-8 18"/>'
  ),
  dotnet: simpleIcon("dotnet"),
  // Database cylinder with internal layers — EF Core / ORM.
  efCore: monoIcon(
    '<path d="M12 14a20 6 0 0 1 40 0v36a20 6 0 0 1-40 0z" fill="rgba(84,199,236,0.16)"/><ellipse cx="32" cy="14" rx="20" ry="6"/><path d="M12 28a20 6 0 0 0 40 0"/><path d="M12 42a20 6 0 0 0 40 0"/>'
  ),
  express: simpleIcon("express"),
  firebase: simpleIcon("firebase"),
  flutter: simpleIcon("flutter"),
  formik: simpleIcon("formik"),
  // Closed book with spine + 2 spaced text lines — clearer at 24px.
  googleBooks: monoIcon(
    '<rect x="10" y="8" width="44" height="48" rx="3" fill="rgba(84,199,236,0.14)"/><path d="M20 8v48"/><path d="M28 24h18M28 38h14"/>'
  ),
  googleMaps: simpleIcon("googlemaps"),
  // Clock — scheduled / recurring job (Hangfire).
  hangfire: monoIcon(
    '<circle cx="32" cy="32" r="24" fill="rgba(84,199,236,0.14)"/><path d="M32 16v16l11 7"/>'
  ),
  // Globe with meridian + equator — HTTP / network.
  http: monoIcon(
    '<circle cx="32" cy="32" r="24" fill="rgba(84,199,236,0.12)"/><ellipse cx="32" cy="32" rx="24" ry="10"/><path d="M32 8v48"/>'
  ),
  javascript: simpleIcon("javascript"),
  jwt: simpleIcon("jsonwebtokens"),
  leaflet: simpleIcon("leaflet"),
  lottie: simpleIcon("lottiefiles"),
  mantine: simpleIcon("mantine"),
  material: simpleIcon("materialdesign"),
  mongodb: simpleIcon("mongodb"),
  // Spreadsheet grid — Excel / NPOI.
  npoi: monoIcon(
    '<rect x="8" y="12" width="48" height="40" rx="3" fill="rgba(84,199,236,0.14)"/><path d="M8 24h48M8 36h48M22 12v40M40 12v40"/>'
  ),
  // Open book (V shape, two pages) — OpenLibrary.
  openLibrary: monoIcon(
    '<path d="M6 14c8-4 18-4 26 2v40c-8-6-18-6-26-2z" fill="rgba(84,199,236,0.14)"/><path d="M58 14c-8-4-18-4-26 2v40c8-6 18-6 26-2z" fill="rgba(84,199,236,0.14)"/>'
  ),
  prisma: simpleIcon("prisma"),
  // Document with code brackets — Razor View.
  razor: monoIcon(
    '<path d="M14 6h22l14 14v36a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" fill="rgba(84,199,236,0.14)"/><path d="M36 6v14h14"/><path d="M22 38l-4 4 4 4"/><path d="M40 38l4 4-4 4"/><path d="M35 36l-4 12"/>'
  ),
  react: simpleIcon("react"),
  reactQuery: simpleIcon("reactquery"),
  reactRouter: simpleIcon("reactrouter"),
  redux: simpleIcon("redux"),
  // Water drop with inner ripple — Riverpod.
  riverpod: monoIcon(
    '<path d="M32 6c-10 14-16 22-16 32a16 16 0 0 0 32 0c0-10-6-18-16-32z" fill="rgba(84,199,236,0.18)"/><path d="M24 38a8 8 0 0 0 8 8"/>'
  ),
  // Database cylinder with stored-records dots — SimpleIcons removed the
  // Microsoft SQL Server brand icon. Kept visually distinct from EF Core.
  sqlServer: monoIcon(
    '<path d="M12 14a20 6 0 0 1 40 0v36a20 6 0 0 1-40 0z" fill="rgba(84,199,236,0.16)"/><ellipse cx="32" cy="14" rx="20" ry="6"/><path d="M12 32a20 6 0 0 0 40 0"/><circle cx="22" cy="22" r="1.8" fill="#54C7EC" stroke="none"/><circle cx="32" cy="22" r="1.8" fill="#54C7EC" stroke="none"/><circle cx="42" cy="22" r="1.8" fill="#54C7EC" stroke="none"/><circle cx="22" cy="40" r="1.8" fill="#54C7EC" stroke="none"/><circle cx="32" cy="40" r="1.8" fill="#54C7EC" stroke="none"/><circle cx="42" cy="40" r="1.8" fill="#54C7EC" stroke="none"/>'
  ),
  sqlite: simpleIcon("sqlite"),
  supabase: simpleIcon("supabase"),
  swiper: simpleIcon("swiper"),
  tailwind: simpleIcon("tailwindcss"),
  // Film strip with play triangle — TMDB.
  tmdb: monoIcon(
    '<rect x="8" y="14" width="48" height="36" rx="3" fill="rgba(84,199,236,0.12)"/><path d="M26 22l16 10-16 10z" fill="rgba(84,199,236,0.45)"/>'
  ),
  typescript: simpleIcon("typescript"),
};

export const projects = [
  {
    id: 1,
    title: "FinanceCase",
    type: "ASP.NET Core MVC — Financial Reporting",
    category: "BACKEND",
    cardHoverTechs: ["C#", "SQL Server", "Hangfire"],
    accent: "#54c7ec",
    cardImage: financeCaseCover,
    githubUrl: "https://github.com/anilates97/FinanceCase",
    liveUrl: "",
    imgUrl: [financeCase1, financeCase2, financeCase3, financeCase4],
    description:
      "FinanceCase is a financial reporting tool that imports asset and inflation data from Excel files, syncs USD exchange rates and generates dollarization/inflation reports. The backend is ASP.NET Core MVC with Entity Framework Core and SQL Server, and a small Web API exposes the latest rates for external use.",
    mainlyUsedTechnologies: [
      { name: "ASP.NET Core MVC", img: techIcons.dotnet },
      { name: "ASP.NET Core Web API", img: techIcons.dotnet },
      { name: "C#", img: techIcons.csharp },
      { name: "Entity Framework Core", img: techIcons.efCore },
      { name: "SQL Server", img: techIcons.sqlServer },
      { name: "Hangfire", img: techIcons.hangfire },
      { name: "NPOI", img: techIcons.npoi },
      { name: "Chart.js", img: techIcons.chartjs },
    ],
  },
  {
    id: 2,
    title: "Nivo Emlak",
    type: "React + Node.js — Real Estate Platform",
    category: "FULL-STACK",
    cardHoverTechs: ["TypeScript", "Prisma", "Leaflet"],
    accent: "#a3c9a8",
    cardImage: estateCover,
    githubUrl: "https://github.com/anilates97/React-EmlakFullStack",
    liveUrl: "",
    imgUrl: [
      estate1,
      estate2,
      estate3,
      estate4,
      estate5,
      estate6,
      estate7,
      estate8,
      estate9,
    ],
    description:
      "Nivo Emlak is a full-stack real estate platform for browsing, saving and scheduling visits on Turkish property listings. The frontend is React with TypeScript; the Express API uses Prisma over MongoDB with JWT auth, and Leaflet powers the map on detail pages.",
    mainlyUsedTechnologies: [
      { name: "React", img: techIcons.react },
      { name: "TypeScript", img: techIcons.typescript },
      { name: "React Query", img: techIcons.reactQuery },
      { name: "Mantine", img: techIcons.mantine },
      { name: "Leaflet", img: techIcons.leaflet },
      { name: "Express", img: techIcons.express },
      { name: "Prisma", img: techIcons.prisma },
      { name: "MongoDB", img: techIcons.mongodb },
      { name: "JWT", img: techIcons.jwt },
      { name: "Swiper", img: techIcons.swiper },
    ],
  },
  {
    id: 3,
    title: "Logistics CMS",
    type: "ASP.NET Core MVC — Logistics CMS",
    category: "BACKEND",
    cardHoverTechs: ["MongoDB", "AutoMapper", "Cookie Auth"],
    accent: "#4dd0e1",
    cardImage: logisticCmsCover,
    githubUrl: "https://github.com/anilates97/DotnetMVCCore-LogisticsCms",
    liveUrl: "",
    imgUrl: [
      logisticCms1,
      logisticCms2,
      logisticCms3,
      logisticCms4,
      logisticCms5,
      logisticCms6,
      logisticCms7,
      logisticCms8,
      logisticCms9,
      logisticCms10,
    ],
    description:
      "Logistics CMS is the admin panel and public site for a logistics company. The admin side manages page content (sliders, brands, FAQs, projects), shipment records and shipment tracking events; the data layer uses MongoDB with DTOs and AutoMapper, and admin routes are protected by cookie auth.",
    mainlyUsedTechnologies: [
      { name: "ASP.NET Core MVC", img: techIcons.dotnet },
      { name: "C#", img: techIcons.csharp },
      { name: "MongoDB", img: techIcons.mongodb },
      { name: "AutoMapper", img: techIcons.automapper },
      { name: "Cookie Authentication", img: techIcons.cookieAuth },
      { name: "Razor Views", img: techIcons.razor },
      { name: "Bootstrap", img: techIcons.bootstrap },
    ],
  },
  {
    id: 4,
    title: "BlogApp",
    type: "ASP.NET Core MVC — Blog Platform",
    category: "BACKEND",
    cardHoverTechs: ["SQLite", "Cookie Auth", "Reading Metrics"],
    accent: "#8da3c4",
    cardImage: blogAppCover,
    githubUrl: "https://github.com/anilates97/DotnetMVCCore-BlogApp",
    liveUrl: "",
    imgUrl: [
      blogApp1,
      blogApp2,
      blogApp3,
      blogApp4,
      blogApp5,
      blogApp6,
      blogApp7,
      blogApp8,
      blogApp9,
    ],
    description:
      "BlogApp is a blog platform with posts, tags, comments, user profiles and reading-time tracking. The backend is ASP.NET Core MVC with EF Core over SQLite, split into repository and service layers, with cookie-based auth for author and admin flows.",
    mainlyUsedTechnologies: [
      { name: "ASP.NET Core MVC", img: techIcons.dotnet },
      { name: "C#", img: techIcons.csharp },
      { name: "Entity Framework Core", img: techIcons.efCore },
      { name: "SQLite", img: techIcons.sqlite },
      { name: "Cookie Authentication", img: techIcons.cookieAuth },
      { name: "Razor Views", img: techIcons.razor },
      { name: "Bootstrap", img: techIcons.bootstrap },
    ],
  },
  {
    id: 5,
    title: "ADO Bilet",
    type: "React + Supabase — Ticket Reservation",
    category: "FULL-STACK",
    cardHoverTechs: ["Redux Toolkit", "Formik", "Google Maps"],
    accent: "#f5b942",
    cardImage: adoBiletCover,
    githubUrl: "https://github.com/anilates97/React-ADOBilet",
    liveUrl: "",
    imgUrl: [
      adoBilet1,
      adoBilet2,
      adoBilet3,
      adoBilet4,
      adoBilet5,
      adoBilet6,
      adoBilet7,
      adoBilet8,
      adoBilet9,
      adoBilet10,
    ],
    description:
      "ADO Bilet is an event ticket platform with seat selection and a full admin panel. The frontend is React with Redux Toolkit and React Router; Supabase handles auth, role checks and the database layer, and seat availability is updated during the purchase flow.",
    mainlyUsedTechnologies: [
      { name: "React", img: techIcons.react },
      { name: "JavaScript", img: techIcons.javascript },
      { name: "Redux Toolkit", img: techIcons.redux },
      { name: "React Router", img: techIcons.reactRouter },
      { name: "Supabase", img: techIcons.supabase },
      { name: "Tailwind CSS", img: techIcons.tailwind },
      { name: "Formik", img: techIcons.formik },
      { name: "Google Maps API", img: techIcons.googleMaps },
      { name: "Swiper", img: techIcons.swiper },
    ],
  },
  {
    id: 6,
    title: "Rafya",
    type: "Flutter — Mobile Library App",
    category: "MOBILE",
    cardHoverTechs: ["Firebase", "Riverpod", "Google Books"],
    accent: "#c8a572",
    cardImage: rafyaCover,
    githubUrl: "https://github.com/anilates97/Flutter-Graduation-Project",
    liveUrl: "",
    imgUrl: [
      projBitirme1,
      projBitirme2,
      projBitirme3,
      projBitirme4,
      projBitirme5,
      projBitirme6,
      projBitirme7,
      projBitirme8,
      projBitirme9,
      projBitirme10,
    ],
    description:
      "Rafya is a Flutter app for tracking the books you read. Users sign in with Firebase, search through Google Books with an OpenLibrary fallback, group titles into shelves, rate them, and can make their library public so others can follow. The visual side was reworked from an older graduation project into a quieter editorial layout.",
    mainlyUsedTechnologies: [
      { name: "Flutter", img: techIcons.flutter },
      { name: "Dart", img: techIcons.dart },
      { name: "Material 3", img: techIcons.material },
      { name: "Firebase", img: techIcons.firebase },
      { name: "Riverpod", img: techIcons.riverpod },
      { name: "Google Books API", img: techIcons.googleBooks },
      { name: "OpenLibrary API", img: techIcons.openLibrary },
      { name: "Lottie", img: techIcons.lottie },
    ],
  },
  {
    id: 7,
    title: "Film Science",
    type: "Flutter — Movie Discovery App",
    category: "MOBILE",
    cardHoverTechs: ["TMDB API", "Firebase", "Riverpod"],
    accent: "#d77a4a",
    cardImage: movieScienceCover,
    githubUrl: "https://github.com/anilates97/Flutter-FilmScienceApp",
    liveUrl: "",
    imgUrl: [
      movieScience1,
      movieScience2,
      movieScience3,
      movieScience4,
      movieScience5,
      movieScience6,
    ],
    description:
      "Film Science is a Flutter movie app built on top of TMDB. Users browse top-rated films, open a detail page with backdrop, metadata and trailer, save favourites to Firestore and write short quotes against the films in their list.",
    mainlyUsedTechnologies: [
      { name: "Flutter", img: techIcons.flutter },
      { name: "Dart", img: techIcons.dart },
      { name: "Firebase", img: techIcons.firebase },
      { name: "Riverpod", img: techIcons.riverpod },
      { name: "TMDB API", img: techIcons.tmdb },
      { name: "Dio", img: techIcons.dio },
      { name: "HTTP", img: techIcons.http },
    ],
  },
];
