export const profile = {
  name: "Reeju Bhattacherji",
  role: "Data Analyst · Data Engineer · Supply Chain Automation Specialist",
  location: "Hamburg, Germany",
  email: "reeju.gr@gmail.com",
  summary:
    "Data and automation professional who turns complex operational challenges into maintainable analytics, API workflows, reporting, and decision-ready systems using Python and SQL.",
  siteUrl: "https://reeju2019.github.io/Reeju-Portfolio",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/reeju-bhattacherji/",
    label: "Connect with Reeju Bhattacherji on LinkedIn",
  },
  {
    name: "GitHub",
    url: "https://github.com/Reeju2019",
    label: "Explore Reeju Bhattacherji's public projects on GitHub",
  },
];

export const impactMetrics = [
  {
    value: "400+",
    label: "OMP planning instances",
    detail: "Supported through Python and REST API automation.",
  },
  {
    value: "400MB+",
    label: "Optimization logs analyzed",
    detail: "Converted into structured, reviewable failure signals.",
  },
  {
    value: "5×",
    label: "Faster debugging",
    detail: "Achieved through automated log analysis.",
  },
  {
    value: "20%",
    label: "Debugging efficiency",
    detail: "Improved at profile level through structured issue classification.",
  },
];

export const experience = [
  {
    role: "Working Student — Supply Chain Planning (Data & Analytics)",
    organization: "Beiersdorf Shared Services GmbH",
    location: "Hamburg, Germany",
    period: "Jun 2025 — Present",
    type: "Working student",
    summary:
      "Supports supply planning through analytics, reporting, and maintainable automation for business and technical teams.",
    highlights: [
      "Translates cross-functional requirements into Python- and REST-API-based workflows.",
      "Builds structured reporting and rule-based classifications that make complex system behavior easier to diagnose.",
      "Coordinates testing, troubleshooting, and continuous improvement with planning and technical stakeholders.",
    ],
    technologies: ["Python", "SQL", "REST APIs", "FastAPI", "SQLite", "CSV", "JSON"],
  },
  {
    role: "Junior Data Analyst",
    organization: "Chanak Analytics",
    location: "Kolkata, India",
    period: "Oct 2022 — Jan 2024",
    type: "Full-time",
    summary:
      "Combined data analysis, recurring reporting, and operational support to make customer and business trends easier to act on.",
    highlights: [
      "Analyzed operational and customer data with Python and SQL and translated findings into business recommendations.",
      "Built recurring Power BI and Tableau dashboards after consolidating, cleaning, and validating heterogeneous data.",
      "Contributed to a 10% improvement in customer-experience metrics and supported 250+ weekly CRM inquiries.",
    ],
    technologies: ["Python", "SQL", "Power BI", "Tableau", "Excel", "ZohoOne", "HubSpot"],
  },
  {
    role: "Application Developer",
    organization: "WebIdea Solution LLP",
    location: "Kolkata, India",
    period: "Dec 2021 — Sep 2022",
    type: "Full-time",
    summary:
      "Delivered responsive business applications and API-connected workflows for international client teams.",
    highlights: [
      "Built responsive CRM interfaces with React, TypeScript, and Material UI.",
      "Integrated GraphQL and REST APIs into maintainable application workflows.",
      "Worked across requirements, implementation, testing, and delivery.",
    ],
    technologies: ["React", "TypeScript", "Material UI", "GraphQL", "JavaScript", "REST APIs"],
  },
  {
    role: "Full Stack Developer Intern",
    organization: "Chanak Analytics",
    location: "Kolkata, India",
    period: "Apr 2021 — Oct 2021",
    type: "Internship",
    summary:
      "Supported business-facing web applications across frontend, backend, database, and API-integration work.",
    highlights: [
      "Connected interfaces, backend services, and databases through structured application workflows.",
      "Contributed to implementation and maintenance across multiple layers of the application stack.",
    ],
    technologies: ["Frontend development", "Backend development", "Databases", "API integration"],
  },
];

export const education = {
  degree: "M.Sc. Applied Data Science and Analytics",
  institution: "SRH University of Applied Sciences Heidelberg",
  location: "Hamburg, Germany",
  period: "Oct 2024 — Sep 2026",
  status: "In progress",
  grade: "1.9 · German grading scale",
  credits: "87 / 120 ECTS completed",
  thesis:
    "UAGF-GMM: Universal AI Governance Maturity Model and Compliance Scoring Agent",
};

export const capabilities = [
  {
    title: "Data Engineering & Analytics",
    eyebrow: "Reliable data products",
    description:
      "Designing ingestion, transformation, validation, warehouse, and reporting workflows that turn fragmented operational data into business-ready information.",
    skills: ["Python", "SQL", "Pandas", "Dagster", "DuckDB", "Power BI", "Tableau"],
  },
  {
    title: "Automation & APIs",
    eyebrow: "Repeatable operations",
    description:
      "Building bounded workflows for API orchestration, monitoring, classification, and reporting so complex processes are easier to run and diagnose.",
    skills: ["FastAPI", "Flask", "REST APIs", "SQLite", "Workflow automation", "Structured logging"],
  },
  {
    title: "Applied AI",
    eyebrow: "Models in context",
    description:
      "Developing practical computer-vision, machine-learning, semantic-retrieval, and governance workflows with traceable inputs and useful outputs.",
    skills: ["Scikit-learn", "PyTorch", "Hugging Face", "BLIP-2", "LoRA", "RAG"],
  },
  {
    title: "Full-stack Delivery",
    eyebrow: "From workflow to interface",
    description:
      "Connecting responsive interfaces, backend services, databases, and deployment tooling to make analytical and operational systems usable end to end.",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Docker"],
  },
];

export const skillGroups = [
  {
    title: "Data & analytics",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Power BI", "Tableau", "DuckDB", "Data modelling"],
  },
  {
    title: "Pipelines & automation",
    skills: ["Dagster", "Airflow", "Kafka", "FastAPI", "REST APIs", "Azure Blob Storage", "Workflow orchestration"],
  },
  {
    title: "AI & machine learning",
    skills: ["Scikit-learn", "PyTorch", "Hugging Face", "BLIP-2", "LoRA", "RAG", "NLP"],
  },
  {
    title: "Applications & delivery",
    skills: ["React", "TypeScript", "Node.js", "Flask", "PostgreSQL", "MongoDB", "Docker", "Git"],
  },
];

export const projects = [
  {
    title: "FoodVisionAI",
    category: "Computer vision · Applied AI",
    description:
      "A three-stage food-image analysis pipeline that detects ingredients with BLIP-2 and LoRA, identifies dishes with Gemini, and estimates nutrition with USDA data through FastAPI.",
    repository: "https://github.com/Reeju2019/FoodVisionAI",
    tech: ["Python", "BLIP-2", "LoRA", "PyTorch", "Gemini", "FastAPI"],
    stat: "3-stage AI pipeline",
  },
  {
    title: "Restaurant ELT Pipeline",
    category: "Data engineering · Analytics engineering",
    description:
      "A Dagster-orchestrated ELT pipeline that ingests CSV and Azure data into DuckDB, then transforms it through Bronze, Silver, and Gold layers into business-ready marts.",
    repository: "https://github.com/Reeju2019/Resturant_ELT_Pipeline",
    tech: ["Python", "SQL", "Dagster", "DuckDB", "Pandas", "Azure"],
    stat: "Bronze → Silver → Gold",
  },
  {
    title: "IoT Smoke Detection Data Pipeline",
    category: "Data engineering · MLOps",
    description:
      "An end-to-end pipeline for simulated sensor streams, anomaly detection, smoke prediction, scheduled batch processing, persistence, APIs, and operational monitoring.",
    repository: "https://github.com/Reeju2019/Data_Pipeline_IOT_Smoke_Detection",
    tech: ["Python", "Kafka", "Airflow", "Scikit-learn", "PostgreSQL", "Docker"],
    stat: "Streaming + batch workflows",
  },
  {
    title: "Heart Disease Prediction Web Application",
    category: "Machine learning · Model delivery",
    description:
      "A responsive Flask application that serves a trained heart-disease classification model through a structured input and prediction workflow, with Docker and Sphinx support.",
    repository: "https://github.com/Reeju2019/Python-final-project",
    tech: ["Python", "Flask", "Machine learning", "Docker", "Sphinx"],
    stat: "Containerized inference",
  },
];

export const credentials = {
  certification: {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
    year: 2021,
    url: "https://www.coursera.org/account/accomplishments/professional-cert/S4UZL2SU4LNJ",
    description:
      "Eight-course professional certificate covering data preparation, cleaning, analysis, visualization, SQL, R, and stakeholder communication.",
  },
  publications: [
    {
      title: "Voice Analysis and Replication with Transfer Learning",
      publication: "Brainwave Journal",
      year: 2021,
      url: "https://www.brainwareuniversity.ac.in/brainwave/archive/pdf/Vol-2-Issue-1-May-2021/16_1510400789_Final_115-118.pdf",
    },
    {
      title: "Web Based Photo Analysis and Learning",
      publication: "Brainwave",
      year: 2021,
      url: "https://www.brainwareuniversity.ac.in/brainwave/archive/pdf/Vol-2-Issue-1-May-2021/22_1510400773_Final_159-161.pdf",
    },
  ],
  recognition: [
    {
      title: "Fourth place — Intelligent Invoice Extraction Hackathon",
      organization: "ChefTreff",
      year: 2025,
      description:
        "Delivered an automated invoice-classification and structured-data-extraction prototype.",
    },
  ],
};
