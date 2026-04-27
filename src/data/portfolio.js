export const skills = [
  {
    category: "Languages",
    tags: ["JavaScript", "TypeScript", "Python", "SQL (PostgreSQL)", "GraphQL", "HTML5", "CSS3", "C/C++"],
  },
  {
    category: "Frameworks & Libraries",
    tags: ["Angular 18+", "React", "Django REST", "Material UI", "PrimeNG", "RxJS", "Redux", "Flask"],
  },
  {
    category: "Data & ML",
    tags: ["pandas", "NumPy", "scikit-learn", "XGBoost", "D3.js", "Plotly", "Matplotlib", "Tableau"],
  },
  {
    category: "Dev Tools & Cloud",
    tags: ["GCP", "AWS QLDB", "Git / GitLab CI/CD", "Storybook MDX", "Postman", "Swagger UI", "Neo4j", "Vercel"],
  },
  {
    category: "Auth & APIs",
    tags: ["ZITADEL OIDC v2", "Auth0", "REST APIs", "tsoa", "UBL / XML", "GraphQL APIs"],
  },
  {
    category: "Design Systems",
    tags: ["Component Libraries", "Storybook MDX", "Figma", "Lazy Loading", "Drag & Drop"],
  },
];

export const experiences = [
  {
    role: "Software Engineer I",
    company: "CrowdAnalytix · datax.ai",
    location: "Bangalore",
    date: "Dec 2025 — Present",
    bullets: [
      "Designed and maintained scalable web apps with <strong>Material UI & PrimeNG</strong>, owning features from requirements through production and post-release support.",
      "Delivered an <strong>AI-driven invoice extraction workflow</strong> using Angular, enabling end-to-end document ingestion and structured outputs with multi-format exports including UBL.",
      "Integrated secure custom auth UI using <strong>ZITADEL OIDC v2</strong>, implementing user verification and password flows with compliance to modern auth standards.",
      "Built a content extraction service using <strong>Defuddle + RESTful APIs (tsoa)</strong> with Swagger UI for interactive testing.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "CrowdAnalytix · datax.ai",
    location: "Bangalore",
    date: "Aug 2023 — Nov 2025",
    bullets: [
      "Built the org's <strong>first scalable design system</strong> — 20+ reusable UI components documented with Storybook MDX, accelerating feature delivery across teams.",
      "Implemented <strong>Auth0 role authentication</strong> and integrated 20+ REST APIs with secure, resilient data handling.",
      "Achieved <strong>65% faster load times</strong> on 100K+ record datasets via drag-and-drop UX and lazy loading optimizations.",
      "Deployed core applications on <strong>Google Cloud Platform (GCP)</strong>, improving system reliability and security posture.",
    ],
  },
  {
    role: "Associate Software Intern",
    company: "Incture Technologies",
    location: "Bangalore",
    date: "Feb 2023 — Jul 2023",
    bullets: [
      "Built price-prediction models using <strong>Random Forest & XGBoost (90% accuracy)</strong>, deployed via Flask REST API for frontend integration.",
      "Redesigned <strong>10+ React + Material UI screens</strong> and managed Redux state across 15+ components — boosted Smart Gig's UX scores by 30%.",
      "Built a document workflow app using <strong>AWS QLDB, React, and Django</strong> to manage 10K+ immutable contract records with real-time access control.",
    ],
  },
  {
    role: "Research Intern",
    company: "Siemens",
    location: "Bangalore",
    date: "Aug 2022 — Nov 2022",
    bullets: [
      "Built an <strong>NLP pipeline</strong> for entity extraction and clustering using NER and dependency parsing, generating structured insights from unstructured data.",
      "Modeled semantic relationships in <strong>Neo4j</strong> and exposed them via GraphQL, enabling ontology-driven querying and exploration.",
      "Visualized complex analytical outputs using <strong>D3.js and Plotly</strong>, simplifying insights for business stakeholders.",
    ],
  },
];

export const whatIBuild = [
  {
    number: "01",
    title: "Design Systems & Component Libraries",
    desc: "Reusable, well-documented component ecosystems using Storybook MDX that accelerate team delivery and maintain consistency at scale.",
  },
  {
    number: "02",
    title: "AI-Powered Workflows",
    desc: "End-to-end automation pipelines — from document ingestion and structured extraction to multi-format exports — integrating AI into real production flows.",
  },
  {
    number: "03",
    title: "Auth & Security Integrations",
    desc: "Secure auth flows using ZITADEL OIDC and Auth0, implementing role-based access, password flows, and modern compliance standards.",
  },
  {
    number: "04",
    title: "High-Performance Data UIs",
    desc: "Interfaces handling 100K+ records with lazy loading, drag-and-drop, and 65% faster loading — making complex data feel effortless.",
  },
  {
    number: "05",
    title: "ML Pipelines & APIs",
    desc: "Prediction models (Random Forest, XGBoost, NLP) deployed as REST APIs, bridging data science with frontend integration.",
  },
  {
    number: "06",
    title: "Graph & Semantic Data Systems",
    desc: "Knowledge graphs in Neo4j with GraphQL APIs and D3.js visualizations, turning complex relational data into interactive explorations.",
  },
];

export const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "4", label: "Companies" },
  { number: "20+", label: "Components Built" },
  { number: "65%", label: "Faster Load Times" },
];
