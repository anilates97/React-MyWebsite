import React, { useEffect, useState } from "react";
import CustomNavBar from "../Navbar/Navbar";

import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";
import { MainlyUsedTech } from "./ProjectCard";
import { projects } from "../ProjectData/ProjectData";
import RevealOnce from "../../components/RevealOnce";

type CaseStudyContent = {
  overview: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  notes: Array<{
    label: string;
    detail: string;
  }>;
};

type TechGroupConfig = {
  label: string;
  variant: "primary" | "medium" | "secondary";
  items: string[];
};

const caseStudyContent: Record<number, CaseStudyContent> = {
  // 1 — FinanceCase
  1: {
    overview:
      "FinanceCase is a financial reporting case project I built to turn raw Excel exports into normalized, reportable data. It imports asset and inflation index files with NPOI, pulls historical USD exchange rates for the imported date range, keeps them refreshed hourly with Hangfire, and stores everything in SQL Server. The MVC dashboard renders dollarization and inflation outputs as chart and table views, and a small Web API exposes the latest rates for other apps to consume.",
    features: [
      {
        title: "Excel imports",
        description:
          "NPOI parses asset and inflation index files and validates them by monthly period before anything is written to SQL Server.",
      },
      {
        title: "Exchange-rate sync",
        description:
          "A Hangfire job refreshes USD rates hourly, and historical rates for newly imported date ranges are pulled in during the import flow itself.",
      },
      {
        title: "Reports",
        description:
          "Dollarization and inflation outputs render as chart and table views inside the MVC dashboard.",
      },
      {
        title: "Companion Web API",
        description:
          "A small Web API exposes the latest exchange-rate records so other apps can read them without going through the dashboard.",
      },
    ],
    notes: [
      {
        label: "Architecture",
        detail:
          "Import, exchange-rate sync, financial calculations and the MVC reporting layer live in separate services with DTOs at the boundaries. That split made adding the Web API later possible without touching the dashboard code.",
      },
      {
        label: "Data Integrity",
        detail:
          "Excel imports run inside a transaction with upsert logic per monthly period, so re-uploading the same period updates the existing rows instead of duplicating them. Without that, a partially failed import would leave a month half-loaded and silently break the next calculation.",
      },
      {
        label: "What I Learned",
        detail:
          "Real-world Excel data is messier than it looks — Turkish decimal separators, missing months, inconsistent column orders. Parsing the values with culture-aware (tr-TR) date and decimal handling, and only including months where both inflation and exchange-rate data exist, saved me from chasing wrong report numbers downstream.",
      },
    ],
  },
  // 2 — Nivo Emlak (was id 5)
  2: {
    overview:
      "Nivo Emlak is a real estate platform covering the everyday flows of property search and listing management — browsing by city, saving favourites, planning visits and creating new listings. The frontend is React with TypeScript and React Query for server state, the Express API handles auth with JWT and PBKDF2 password hashing, and Prisma sits in front of MongoDB. Property detail pages embed a Leaflet map for the listing location.",
    features: [
      {
        title: "Listing search",
        description:
          "Properties can be filtered by title, city and country across the discovery page.",
      },
      {
        title: "Favourites and visits",
        description:
          "Signed-in users can save listings and book or cancel a visit; both go through protected API routes.",
      },
      {
        title: "Auth",
        description:
          "Registration and login go through an Express handler that hashes passwords with PBKDF2 and issues a JWT for subsequent requests.",
      },
      {
        title: "Map view",
        description:
          "Property detail pages embed a Leaflet map so the listing is shown together with its location.",
      },
    ],
    notes: [
      {
        label: "Architecture",
        detail:
          "React Query owns server state on the frontend, the Express API talks to MongoDB through Prisma, and any action that mutates user data sits behind a JWT-protected route.",
      },
      {
        label: "Backend Design",
        detail:
          "Users, residencies, favourites and booked visits are modelled as separate collections. Anything that touches a user's saved data — favourites or planned visits — pulls the user id from the JWT before it reads or writes, so users only see their own bookings and saved listings.",
      },
      {
        label: "What I Learned",
        detail:
          "Keeping the auth token in one place — and out of component state — was the part I had to redo a few times. Once API calls were centralised in a single client module that read the token from localStorage, the rest of the app stopped re-implementing the same auth-header logic on every request.",
      },
    ],
  },
  // 3 — Logistics CMS (was id 2)
  3: {
    overview:
      "Logistics CMS is the admin and content side of a logistics company website. It pairs a public marketing site with an admin panel that manages page modules — sliders, brands, testimonials, FAQs, projects — alongside the operational data: shipments, tracking events and delivery status. The data layer sits on MongoDB with AutoMapper-driven DTOs.",
    features: [
      {
        title: "CMS modules",
        description:
          "Admin screens cover the everyday content on the public site: sliders, brands, offers, FAQs, testimonials and project entries.",
      },
      {
        title: "Shipments",
        description:
          "Each shipment record carries sender, receiver, route, tracking number and the current delivery status.",
      },
      {
        title: "Tracking history",
        description:
          "Tracking events append to each shipment and roll up into its latest status field automatically.",
      },
      {
        title: "Admin gate",
        description:
          "Cookie auth plus a role check protect every CMS and shipment route.",
      },
    ],
    notes: [
      {
        label: "Architecture",
        detail:
          "Each admin module (slider, brand, FAQ, project, shipment) extends a generic CRUD service over MongoDB, so a new module is mostly a model plus a controller and inherits everything else.",
      },
      {
        label: "Security",
        detail:
          "Admin passwords are stored as PBKDF2 hashes and read from configuration at startup, so no credentials live in the source tree.",
      },
      {
        label: "What I Learned",
        detail:
          "Most admin modules look alike on paper, but copy-pasting the controller and view for each one rots fast. Pushing the repeated MongoDB CRUD parts into a shared `MongoCrudServiceBase` was the right call — once it was in place, adding a new admin module mostly came down to a model, DTOs and a controller.",
      },
    ],
  },
  4: {
    overview:
      "BlogApp is a blog platform where authenticated users write posts, tag them and comment on each other's articles. EF Core talks to SQLite through a repository plus service split, cookie auth gates the author and admin flows, and reading-time records feed the featured-post selection on the home page.",
    features: [
      {
        title: "Authoring",
        description:
          "Authenticated users can draft and edit posts; role checks decide whether a post is visible to public readers.",
      },
      {
        title: "Routing",
        description:
          "Custom routes give readable URLs for post details, tag pages and author profiles.",
      },
      {
        title: "Comments",
        description:
          "Signed-in users can comment on article pages and manage their own profile from the same auth session.",
      },
      {
        title: "Reading time",
        description:
          "Reading durations are tracked per post and used to pick the featured post on the home page.",
      },
    ],
    notes: [
      {
        label: "Architecture",
        detail:
          "A thin repository layer wraps EF Core, services hold the post / comment / read-time logic, and view models keep the Razor pages free of entity types.",
      },
      {
        label: "Data Model",
        detail:
          "Posts, users, comments and tags are EF Core entities; read durations sit in their own table so the main post table stays narrow. The repo is seeded with demo data so the home page is never empty during development.",
      },
      {
        label: "What I Learned",
        detail:
          "Cookie auth on its own isn't enough — the part that took the longest was routing claims (author vs admin) through to view-level checks without duplicating the same rule in three places.",
      },
    ],
  },
  // 5 — ADO Bilet (was id 6)
  5: {
    overview:
      "ADO Bilet is an event ticket platform with public event discovery, seat-level booking and an admin panel for everything around it — events, artists, categories, seats, ticket categories and users. The React app uses Redux Toolkit for async state and Supabase as the backend, with role checks before admin screens and seat updates handled as part of the purchase flow.",
    features: [
      {
        title: "Event browsing",
        description:
          "Upcoming and past events can be searched by keyword, date and location, with a separate detail page per event.",
      },
      {
        title: "Seat selection",
        description:
          "The ticket page reads available seats from Supabase, marks them sold on purchase and redirects to a success state.",
      },
      {
        title: "Admin panel",
        description:
          "Separate screens manage categories, artists, events, event photos, seats, users and ticket categories.",
      },
      {
        title: "Data layer",
        description:
          "Async thunks wrap every Supabase call, so auth, role checks and table queries share the same Redux pattern.",
      },
    ],
    notes: [
      {
        label: "Architecture",
        detail:
          "Every Supabase call goes through an async thunk, and the Redux store keeps each domain — events, tickets, admin, auth, seats — as its own piece of state rather than mixing them per screen, so each slice has a single owner.",
      },
      {
        label: "Product Rules",
        detail:
          "Past-event purchases are blocked at the ticket page, and admin routes redirect away if the role check fails so the panel isn't reachable just by typing the URL.",
      },
      {
        label: "What I Learned",
        detail:
          "Seat state is the part that bites first: two users opening the same seat at the same time, a payment that doesn't go through, a refresh that loses the selection. Marking seats sold on purchase rather than on selection was the rule I settled on.",
      },
    ],
  },
  // 6 — Rafya (was id 7)
  6: {
    overview:
      "Rafya is a Flutter reading app where users build a personal library, group it into shelves, rate the books they've read and optionally share that library publicly. Search is wired to Google Books with an OpenLibrary fallback for when the primary request fails, Firebase covers auth and storage, and Riverpod keeps discovery, library and theme state separated. It was reworked from an older graduation project (Kütüphane Dünyam) into a quieter editorial layout.",
    features: [
      {
        title: "Book search",
        description:
          "Google Books drives title, author and category search, with OpenLibrary as a fallback when the primary request fails.",
      },
      {
        title: "Personal library",
        description:
          "Users can save existing books, add custom titles, upload covers and set a reading status per book.",
      },
      {
        title: "Shelves and ratings",
        description:
          "Books can be grouped into shelves, filtered by category and rated, so the library doesn't stay flat as it grows.",
      },
      {
        title: "Profiles",
        description:
          "Each user has a profile that can be made public or private, and other users can follow public libraries.",
      },
    ],
    notes: [
      {
        label: "Architecture",
        detail:
          "Riverpod providers own discovery, library, profile and theme state, with Firebase service and repository layers sitting between them and Firestore so the UI doesn't talk to the database directly.",
      },
      {
        label: "Design System",
        detail:
          "The old graduation project was rebuilt around an editorial layout with its own type scale, surface tokens and matched light/dark themes, so screens stay consistent as more are added.",
      },
      {
        label: "What I Learned",
        detail:
          "Privacy settings were trickier than they looked. Once a library can be public, every read needs to know who is asking and what privacy state applies. Keeping that logic close to the data layer instead of inside each screen kept the rest of the app simpler.",
      },
    ],
  },
  // 7 — Film Science (was id 8)
  7: {
    overview:
      "Film Science is a Flutter movie discovery app on top of TMDB. Users browse top-rated titles, open a detail page with backdrop, metadata and trailer, and keep a personal list of favourites in Firestore. Beyond the standard browse/save loop, signed-in users can write short quotes against the films they've saved and react to each other's quotes.",
    features: [
      {
        title: "TMDB browsing",
        description:
          "The home page shows top-rated films from TMDB with paginated browsing, local search across the loaded list and pull-to-refresh.",
      },
      {
        title: "Detail page",
        description:
          "Each film opens into backdrop, poster, metadata, overview, genres and an embedded trailer.",
      },
      {
        title: "Favourites",
        description:
          "Signed-in users add or remove films from a personal Firestore-backed list.",
      },
      {
        title: "Quotes",
        description:
          "Users can attach short quotes to films in their list and vote on each other's entries.",
      },
    ],
    notes: [
      {
        label: "Architecture",
        detail:
          "TMDB lives behind its own repository, Firebase has its own service layer, and Riverpod notifiers sit on top of both so the UI only ever sees explicit loading / loaded / empty / error states.",
      },
      {
        label: "State Handling",
        detail:
          "Every screen renders an explicit state instead of a generic spinner. It's more code, but I stopped chasing 'why is this list empty?' bugs once the empty state was its own branch.",
      },
      {
        label: "What I Learned",
        detail:
          "Working with TMDB's paginated REST calls next to Firestore's stream-based reads taught me to keep them as two separate sources of truth instead of merging them too early. Once they each had their own provider, the favourites and discovery screens stopped fighting over the same state.",
      },
    ],
  },
};

const techGroupConfig: Record<number, TechGroupConfig[]> = {
  // 1 — FinanceCase
  1: [
    { label: "Core Technologies", variant: "primary", items: ["ASP.NET Core MVC", "ASP.NET Core Web API", "C#"] },
    { label: "Database & ORM", variant: "medium", items: ["Entity Framework Core", "SQL Server"] },
    { label: "Processing & Jobs", variant: "medium", items: ["NPOI", "Hangfire"] },
    { label: "Reporting UI", variant: "secondary", items: ["Chart.js"] },
  ],
  // 2 — Nivo Emlak (was id 5)
  2: [
    { label: "Core Technologies", variant: "primary", items: ["React", "TypeScript"] },
    { label: "Backend & Database", variant: "medium", items: ["Express", "Prisma", "MongoDB"] },
    { label: "Authentication", variant: "medium", items: ["JWT"] },
    { label: "State & UI", variant: "secondary", items: ["React Query", "Mantine", "Swiper"] },
    { label: "Map Experience", variant: "secondary", items: ["Leaflet"] },
  ],
  // 3 — Logistics CMS (was id 2)
  3: [
    { label: "Core Technologies", variant: "primary", items: ["ASP.NET Core MVC", "C#"] },
    { label: "Database & Mapping", variant: "medium", items: ["MongoDB", "AutoMapper"] },
    { label: "Authentication", variant: "medium", items: ["Cookie Authentication"] },
    { label: "Frontend Layer", variant: "secondary", items: ["Razor Views", "Bootstrap"] },
  ],
  // 4 — BlogApp
  4: [
    { label: "Core Technologies", variant: "primary", items: ["ASP.NET Core MVC", "C#"] },
    { label: "Database & ORM", variant: "medium", items: ["Entity Framework Core", "SQLite"] },
    { label: "Authentication", variant: "medium", items: ["Cookie Authentication"] },
    { label: "Frontend Layer", variant: "secondary", items: ["Razor Views", "Bootstrap"] },
  ],
  // 5 — ADO Bilet (was id 6)
  5: [
    { label: "Core Technologies", variant: "primary", items: ["React", "JavaScript"] },
    { label: "Backend & Database", variant: "medium", items: ["Supabase"] },
    { label: "State & Routing", variant: "medium", items: ["Redux Toolkit", "React Router"] },
    { label: "UI & Forms", variant: "secondary", items: ["Tailwind CSS", "Formik", "Swiper"] },
    { label: "Integrations", variant: "secondary", items: ["Google Maps API"] },
  ],
  // 6 — Rafya (was id 7)
  6: [
    { label: "Core Technologies", variant: "primary", items: ["Flutter", "Dart", "Material 3"] },
    { label: "Backend & Database", variant: "medium", items: ["Firebase"] },
    { label: "State Management", variant: "medium", items: ["Riverpod"] },
    { label: "Book APIs", variant: "secondary", items: ["Google Books API", "OpenLibrary API"] },
    { label: "UI Support", variant: "secondary", items: ["Lottie"] },
  ],
  // 7 — Film Science (was id 8)
  7: [
    { label: "Core Technologies", variant: "primary", items: ["Flutter", "Dart"] },
    { label: "Backend & Database", variant: "medium", items: ["Firebase"] },
    { label: "State Management", variant: "medium", items: ["Riverpod"] },
    { label: "Movie API", variant: "secondary", items: ["TMDB API"] },
    { label: "Networking", variant: "secondary", items: ["Dio", "HTTP"] },
  ],
};

function ProjectsDetail() {
  const location = useLocation();
  const { id } = useParams();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const state = location.state as
    | {
        propCard?: (typeof projects)[number];
      }
    | undefined;

  const projectId = Number(id);
  const propCard =
    projects.find((project) => project.id === projectId) ?? state?.propCard;
  const galleryImageCount = propCard?.imgUrl.length ?? 0;

  useEffect(() => {
    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    if (!isGalleryOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      }

      if (event.key === "ArrowRight") {
        setActiveGalleryIndex((currentIndex) =>
          currentIndex === galleryImageCount - 1 ? 0 : currentIndex + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveGalleryIndex((currentIndex) =>
          currentIndex === 0 ? galleryImageCount - 1 : currentIndex - 1
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [galleryImageCount, isGalleryOpen]);

  if (!propCard) {
    return (
      <>
        <CustomNavBar isDetail />
        <section className="projectDetail" id="project">
          <Container>
            <div className="project-empty-state">
              <h2>Project not found</h2>
              <p>The project you are looking for does not exist or has been moved.</p>
              <Link className="detail-back-link" to="/">
                Back to portfolio
              </Link>
            </div>
          </Container>
        </section>
        <Footer />
      </>
    );
  }

  const { title, type, description, mainlyUsedTechnologies, imgUrl } = propCard;
  const githubUrl = (propCard as { githubUrl?: string }).githubUrl?.trim();
  const liveUrl = (propCard as { liveUrl?: string }).liveUrl?.trim();

  const previewUrlMap: Record<number, string> = {
    1: "financecase.local/dashboard",
    2: "nivo-emlak.local/listings",
    3: "logistics-cms.local/admin",
    4: "blogapp.local/posts",
    5: "adobilet.local/events",
  };
  const previewUrl = previewUrlMap[projectId];
  const currentCaseStudy = caseStudyContent[projectId] ?? {
    overview: description,
          features: [
            {
              title: "Responsive interface",
              description:
                "The layout adapts across breakpoints with practical product structure.",
            },
            {
              title: "Structured product flow",
              description:
                "Screens are organized around clear user intent and readable hierarchy.",
            },
          ],
          notes: [
            {
              label: "Architecture Decisions",
              detail:
                "Built with a focus on clean implementation and practical UX boundaries.",
            },
          ],
  };
  const featuredImage = imgUrl[0];
  const featureImages = imgUrl.slice(1, 4);
  const activeGalleryImage = imgUrl[activeGalleryIndex] ?? featuredImage;
  const isMobileProject = /mobile|native|flutter/i.test(type);

  const normalizeTechName = (name: string) => name.toLowerCase();
  const getTechnologiesByName = (names: string[]) =>
    names
      .map((name) =>
        mainlyUsedTechnologies.find(
          (item) => normalizeTechName(item.name) === normalizeTechName(name)
        )
      )
      .filter((item): item is MainlyUsedTech => Boolean(item));

  const configuredTechGroups = techGroupConfig[projectId];
  const techGroups = configuredTechGroups
    ? configuredTechGroups
        .map((group) => ({
          ...group,
          techItems: getTechnologiesByName(group.items),
        }))
        .filter((group) => group.techItems.length > 0)
    : [
        {
          label: "Technologies",
          variant: "secondary" as const,
          techItems: mainlyUsedTechnologies,
        },
      ];

  const renderTechCard = (
    item: MainlyUsedTech,
    index: number,
    variant: "primary" | "medium" | "secondary"
  ) => (
    <li
      className={`tech-item tech-item--${variant}`}
      key={`${variant}-${item.name}-${index}`}
    >
      <span className="tech-icon">
        <img className="tech-image" src={item.img} alt={`${item.name} logo`} />
      </span>
      <span className="tech-text">{item.name}</span>
    </li>
  );

  const openGallery = (index = 0) => {
    setActiveGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const showPreviousImage = () => {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === 0 ? imgUrl.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === imgUrl.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <>
      <CustomNavBar isDetail />

      <section className="projectDetail" id="project">
        <Container>
          <RevealOnce className="project-case-hero">
            <span className="project-case-eyebrow">{type}</span>
            <h2>{title}</h2>
            <div className="project-case-rule" />
            {(githubUrl || liveUrl) && (
              <div className="project-case-links">
                {githubUrl && (
                  <a
                    className="project-case-link project-case-link--primary"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </a>
                )}
                {liveUrl && (
                  <a
                    className="project-case-link"
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BoxArrowUpRight size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </RevealOnce>

          <RevealOnce className="case-section project-overview">
            <div className="case-section__heading">
              <h3>Project Overview</h3>
            </div>
            <p>{currentCaseStudy.overview}</p>
          </RevealOnce>

          <RevealOnce className="case-section">
            <div className="case-section__heading">
              <h3>Feature Highlights</h3>
            </div>
            <div className="feature-grid">
              {currentCaseStudy.features.map((feature, index) => (
                <article className="feature-card" key={feature.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </RevealOnce>

          <RevealOnce className="case-section">
            <div className="case-section__heading">
              <h3>Technical Architecture</h3>
            </div>
            <div className="tech-stack">
              {techGroups.map((group) => {
                const isSolo = group.techItems.length === 1;
                return (
                  <div
                    className={`tech-stack__group${
                      isSolo ? " tech-stack__group--solo" : ""
                    }`}
                    key={group.label}
                  >
                    <span className="tech-stack__label">{group.label}</span>
                    <ul className={`tech tech--${group.variant}`}>
                      {group.techItems.map((item, index) =>
                        renderTechCard(item, index, group.variant)
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </RevealOnce>

          <RevealOnce
            className={`project-showcase ${
              isMobileProject ? "project-showcase--mobile" : ""
            }`}
          >
            <div className="showcase-heading">
              <h3>Project Visuals</h3>
            </div>

            {isMobileProject ? (
              <div className="mobile-showcase-grid">
                {imgUrl.slice(0, 3).map((item, index) => (
                  <article
                    className={`phone-frame ${
                      index === 0 ? "phone-frame--featured" : ""
                    }`}
                    key={item}
                  >
                    <span className="phone-frame__speaker" />
                    <img src={item} alt={`${title} mobile screen ${index + 1}`} />
                  </article>
                ))}
              </div>
            ) : (
              <div className="showcase-grid">
                <article className="showcase-card showcase-card--hero">
                  <div className="browser-frame">
                    <div className="browser-bar" aria-hidden="true">
                      <span className="browser-bar__dot" />
                      <span className="browser-bar__dot" />
                      <span className="browser-bar__dot" />
                      {previewUrl && (
                        <span className="browser-bar__url">{previewUrl}</span>
                      )}
                    </div>
                    <div className="browser-screen">
                      <img src={featuredImage} alt={`${title} main screen`} />
                    </div>
                  </div>
                </article>

                {featureImages.length > 0 && (
                  <div className="showcase-features">
                    {featureImages.map((item: string, index: number) => (
                      <article className="showcase-card" key={item}>
                        <div className="browser-frame browser-frame--compact">
                          <div className="browser-bar" aria-hidden="true">
                            <span className="browser-bar__dot" />
                            <span className="browser-bar__dot" />
                            <span className="browser-bar__dot" />
                          </div>
                          <div className="browser-screen">
                            <img
                              src={item}
                              alt={`${title} feature screen ${index + 2}`}
                            />
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            )}

            {imgUrl.length > 1 && (
              <div className="showcase-gallery-cta">
                <button type="button" onClick={() => openGallery(0)}>
                  Explore Full Interface
                  <span>{imgUrl.length} screens</span>
                </button>
              </div>
            )}
          </RevealOnce>

          <RevealOnce className="case-section project-insights">
            <div className="case-section__heading">
              <h3>Engineering Notes</h3>
            </div>
            <div className="insight-grid">
              {currentCaseStudy.notes.map((note) => (
                <article className="insight-card" key={note.label}>
                  <h4>{note.label}</h4>
                  <p>{note.detail}</p>
                </article>
              ))}
            </div>
            {githubUrl && (
              <div className="project-case-outro">
                <a
                  className="project-case-link project-case-link--primary"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  <span>Review the source code on GitHub</span>
                </a>
              </div>
            )}
          </RevealOnce>
        </Container>
      </section>

      {isGalleryOpen && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} full screenshot gallery`}
          onClick={() => setIsGalleryOpen(false)}
        >
          <div
            className="gallery-lightbox__panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-lightbox__header">
              <div>
                <span>Full Interface</span>
                <h3>{title}</h3>
              </div>
              <button
                type="button"
                className="gallery-lightbox__close"
                aria-label="Close gallery"
                onClick={() => setIsGalleryOpen(false)}
              >
                Close
              </button>
            </div>

            <div
              className={`gallery-lightbox__preview ${
                isMobileProject ? "gallery-lightbox__preview--mobile" : ""
              }`}
            >
              <button
                type="button"
                className="gallery-lightbox__nav gallery-lightbox__nav--prev"
                aria-label="Previous screenshot"
                onClick={showPreviousImage}
              >
                &lt;
              </button>

              {isMobileProject ? (
                <div className="phone-frame phone-frame--preview">
                  <span className="phone-frame__speaker" />
                  <img
                    key={activeGalleryImage}
                    src={activeGalleryImage}
                    alt={`${title} enlarged screen ${activeGalleryIndex + 1}`}
                  />
                </div>
              ) : (
                <div className="browser-frame">
                  <div className="browser-bar" aria-hidden="true">
                    <span className="browser-bar__dot" />
                    <span className="browser-bar__dot" />
                    <span className="browser-bar__dot" />
                    {previewUrl && (
                      <span className="browser-bar__url">{previewUrl}</span>
                    )}
                  </div>
                  <div className="browser-screen">
                    <img
                      key={activeGalleryImage}
                      src={activeGalleryImage}
                      alt={`${title} enlarged screen ${activeGalleryIndex + 1}`}
                    />
                  </div>
                </div>
              )}

              <button
                type="button"
                className="gallery-lightbox__nav gallery-lightbox__nav--next"
                aria-label="Next screenshot"
                onClick={showNextImage}
              >
                &gt;
              </button>
              <div className="gallery-lightbox__counter">
                {activeGalleryIndex + 1} / {imgUrl.length}
              </div>
            </div>

            <div className="gallery-lightbox__grid">
              {imgUrl.map((item: string, index: number) => (
                <button
                  type="button"
                  className={`gallery-lightbox__thumb ${
                    index === activeGalleryIndex
                      ? "gallery-lightbox__thumb--active"
                      : ""
                  }`}
                  key={item}
                  onClick={() => setActiveGalleryIndex(index)}
                >
                  <img src={item} alt={`${title} thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Contact />
      <Footer />
    </>
  );
}

export default ProjectsDetail;
