export type ProjectCategory = "All" | "AI & RAG" | "Systems & Web";

export interface ProjectItem {
  id: string;
  index: string;
  name: string;
  tagline: string;
  category: Exclude<ProjectCategory, "All">;
  featured?: boolean;
  architectureNote?: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  url: string;
  domain: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const PROFILE = {
  name: "Thiwanka Chanditha",
  role: "Software & AI/ML Engineer",
  location: "Kurunegala, Sri Lanka",
  university: "University of Jaffna",
  degree: "BSc (Hons) in Computer Science",
  period: "2022 – 2026",
  gpa: "3.99",
  email: "thiwankachandithasinhalage@gmail.com",
  phones: ["+94 70 127 1566", "+94 76 848 2841"],
  github: "https://github.com/ThiwankaChanditha",
  linkedin: "https://www.linkedin.com/in/thiwanka-chanditha",
  freecodecamp: "https://www.freecodecamp.org/Thiwanka_Chanditha",
  avatarPath: `${import.meta.env.BASE_URL}avatar.jpg`,
  cvPaths: {
    aiml: `${import.meta.env.BASE_URL}Thiwanka_Chanditha_AI_ML_CV.pdf`,
    swe: `${import.meta.env.BASE_URL}Thiwanka_Chanditha_SE_CV.pdf`,
  },
};

export const EXPERIENCE = {
  role: "Software Engineering Intern",
  company: "WSO2",
  team: "WSO2 Solutions Team – DPDP Accelerator",
  period: "May 2026 – Nov 2026",
  repoUrl: "https://github.com/wso2/dpdp-accelerator",
  repoLabel: "wso2/dpdp-accelerator",
  summary:
    "Contributing to WSO2's open-source Digital Personal Data Protection (DPDP) compliance accelerator across backend event delivery, multi-tenant REST APIs, and OAuth-secured React portals.",
  architectureFlow: [
    "Consent Event Emitted",
    "Event Notification Framework",
    "Webhook Push / Polling Pull",
    "Exponential Backoff & State Reconciliation",
  ],
  contributions: [
    {
      area: "Event Delivery Architecture",
      detail:
        "Architected the Event Notification Framework supporting asynchronous webhook (push) and polling (pull) delivery pipelines with exponential backoff retries and transactional state reconciliation.",
    },
    {
      area: "RESTful Services & OpenAPI",
      detail:
        "Designed and shipped versioned RESTful APIs in Java (JAX-RS / Apache CXF) with OpenAPI 3.0 specifications, preserving backward compatibility across multi-tenant deployments.",
    },
    {
      area: "Consent Portal & Identity",
      detail:
        "Built real-time event monitoring and administration interfaces in the Consent Portal using TypeScript, React, and Material-UI, wired to WSO2 Identity Server via OAuth 2.0 / OIDC RBAC.",
    },
    {
      area: "Automated Quality Engineering",
      detail:
        "Authored unit, integration, and end-to-end CI test suites across Vitest, Playwright, and Mockito to harden release reliability.",
    },
  ],
  stack: [
    "Java (JAX-RS/CXF)",
    "TypeScript",
    "React",
    "Material-UI",
    "OpenAPI 3.0",
    "OAuth 2.0 / OIDC",
    "WSO2 Identity Server",
    "Playwright",
    "Vitest",
    "Mockito",
  ],
};

export const RESEARCH = {
  title: "Joint Sentiment and Intent Analysis for Sinhala",
  status: "Final-Year Research · Ongoing",
  institution: "University of Jaffna",
  repoUrl: "https://github.com/ThiwankaChanditha/Sinhala-joint-sentiment-and-intent",
  repoLabel: "Sinhala-joint-sentiment-and-intent",
  summary:
    "Low-resource conversational text in Sri Lanka is heavily code-mixed and lacks annotated benchmarks. This research trains a unified multi-task architecture that predicts 4-class user sentiment and 6-class communicative intent simultaneously rather than treating them as isolated tasks.",
  pipelineSteps: [
    { step: "01", label: "Code-Mixed Corpus", sub: "Tokenization & cleaning" },
    { step: "02", label: "Domain-Adaptive MLM", sub: "Continued pretraining" },
    { step: "03", label: "XLM-RoBERTa Shared Encoder", sub: "Contextual representations" },
    { step: "04", label: "Multi-Head Attention Pooling", sub: "Task-specific heads" },
    { step: "05", label: "Joint Prediction", sub: "4 Sentiments · 6 Intents" },
  ],
  highlights: [
    "Uses domain-adaptive Masked Language Modeling (MLM) on XLM-RoBERTa before fine-tuning dual classification heads.",
    "Applies task-specific multi-head attention pooling to capture how user emotion shapes communicative intent.",
    "Evaluates multi-task generalization against single-task baselines on real-world customer care dialogues.",
  ],
  tags: [
    "XLM-RoBERTa",
    "Multi-Task Learning",
    "Domain-Adaptive MLM",
    "Attention Pooling",
    "Low-Resource NLP",
    "Python",
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "insightbot",
    index: "01",
    name: "InsightBot",
    tagline: "Multimodal RAG Chatbot with Visual & Textual Grounding",
    category: "AI & RAG",
    featured: true,
    architectureNote: "Next.js + FastAPI + Qdrant + Firebase Auth",
    description:
      "Full-stack multimodal RAG application that ingests PDFs containing both text and figures, indexes dense embeddings in Qdrant, and returns source-grounded answers alongside relevant visual context.",
    highlights: [
      "Decoupled Next.js frontend and FastAPI inference backend deployed on Render",
      "Semantic retrieval over text chunks and extracted visual elements via LangChain & Qdrant",
      "Firebase Authentication with built-in per-user query limits",
    ],
    stack: ["Next.js", "FastAPI", "LangChain", "Hugging Face", "Qdrant", "Firebase"],
    githubUrl: "https://github.com/ThiwankaChanditha/MultliModal-RAG-Chatbot",
    liveUrl: "https://insight-bot-dsmz.onrender.com",
  },
  {
    id: "cattlecare",
    index: "02",
    name: "CattleCare",
    tagline: "Centralized Livestock Monitoring & Governance Platform",
    category: "Systems & Web",
    featured: true,
    architectureNote: "React + Node/Express + MongoDB · 6 Role Tiers",
    description:
      "Cloud-hosted governance platform built for livestock farmers, veterinarians, inspectors, and five hierarchical officer levels in Sri Lanka's Department of Animal Production and Health.",
    highlights: [
      "Role-based data collection and verification workflows across farmers and regional officers",
      "RESTful Node.js & Express APIs backed by validated MongoDB schemas",
      "Responsive React client tested across desktop and mobile viewports",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Render"],
    githubUrl: "https://github.com/ThiwankaChanditha/Host-CattleCare",
    liveUrl: "https://host-cattlecare.onrender.com/",
  },
  {
    id: "docschat",
    index: "03",
    name: "DocsChat",
    tagline: "Multimodal Research PDF Parser & RAG Pipeline",
    category: "AI & RAG",
    featured: true,
    architectureNote: "Unstructured + BART + GPT-4o-mini + ChromaDB",
    description:
      "RAG pipeline purpose-built for dense academic papers. Extracts text blocks, tables, and figures separately so table and figure semantics aren't lost during standard text chunking.",
    highlights: [
      "Element-aware PDF parsing and chunking using Unstructured and LangChain",
      "Hybrid summarization pairing Hugging Face BART (text) with GPT-4o-mini (tables & images)",
      "OpenAI embeddings indexed in ChromaDB for cross-modal retrieval",
    ],
    stack: ["Python", "LangChain", "Unstructured", "Hugging Face BART", "GPT-4o-mini", "ChromaDB"],
    githubUrl: "https://github.com/ThiwankaChanditha/DocsChat",
  },
  {
    id: "p2p-fileshare",
    index: "04",
    name: "P2P LAN File Sharing",
    tagline: "Decentralized File Distribution with Cryptographic Tracker Auth",
    category: "Systems & Web",
    featured: true,
    architectureNote: "FastAPI Tracker + RSA UDP Broadcasts + Streamlit",
    description:
      "Decentralized peer-to-peer LAN file sharing system coordinated by a privileged FastAPI tracker service, supporting concurrent chunk streaming and live network telemetry.",
    highlights: [
      "RSA-signed UDP broadcasts for automatic LAN tracker discovery and spoofing prevention",
      "Server-side session token authentication, revocation, and SHA chunk integrity checks",
      "Real-time Streamlit monitoring dashboards for both tracker admins and peer nodes",
    ],
    stack: ["Python", "FastAPI", "Streamlit", "RSA Crypto", "UDP / Sockets"],
    githubUrl: "https://github.com/ThiwankaChanditha/Peer-to-Peer-File-Sharing",
  },
  {
    id: "medichat",
    index: "05",
    name: "MediChat",
    tagline: "Clinical Document Q&A Assistant",
    category: "AI & RAG",
    description:
      "Domain-specific medical Q&A system pairing a Flask backend with Pinecone cloud vector search (384-dim all-MiniLM-L6-v2 embeddings) and GPT-4o-mini via OpenRouter for grounded responses.",
    highlights: [
      "Automated medical PDF ingestion and chunking pipeline",
      "Low-latency cloud vector retrieval via Pinecone",
    ],
    stack: ["Python", "Flask", "LangChain", "Pinecone", "all-MiniLM-L6-v2", "OpenRouter"],
    githubUrl: "https://github.com/ThiwankaChanditha/MediChat",
  },
  {
    id: "book-recommender",
    index: "06",
    name: "Semantic Book Recommender",
    tagline: "Dense Vector Search Across 5,000+ Titles",
    category: "AI & RAG",
    description:
      "Natural-language book discovery engine that embeds plot descriptions and metadata into 384-dimensional ChromaDB vectors and serves live recommendations through a Gradio UI.",
    highlights: [
      "CharacterTextSplitter chunking and metadata feature engineering",
      "Interactive Gradio web interface for natural language queries",
    ],
    stack: ["Python", "Hugging Face", "LangChain", "ChromaDB", "Gradio"],
    githubUrl:
      "https://github.com/ThiwankaChanditha/Semantic-Book-Recommender-Python-HuggingFace-LangChain-Gradio",
  },
  {
    id: "bulkchat",
    index: "07",
    name: "BulkChat",
    tagline: "Multi-Document Conversational RAG",
    category: "AI & RAG",
    description:
      "Conversational RAG utility that indexes batches of PDFs into a shared vector store so users can cross-reference and query multiple documents in a single dialogue.",
    highlights: [
      "Batch PDF ingestion and unified vector retrieval",
      "Source-grounded multi-document chat workflow",
    ],
    stack: ["Python", "LangChain", "RAG", "Vector Search"],
    githubUrl: "https://github.com/ThiwankaChanditha/BulkChat",
  },
  {
    id: "qa-assistant",
    index: "08",
    name: "Intelligent Q&A Assistant",
    tagline: "Stateful Topic Explainer with Conversation Memory",
    category: "AI & RAG",
    description:
      "Streamlit and LangChain conversational assistant powered by GPT-4o-mini via OpenRouter with persistent multi-turn memory for breaking down technical topics.",
    highlights: [
      "Multi-turn conversation buffer memory",
      "Streamlined Streamlit interface",
    ],
    stack: ["Python", "LangChain", "Streamlit", "OpenRouter", "GPT-4o-mini"],
    githubUrl: "https://github.com/ThiwankaChanditha/Q-A-assistant",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java"],
  },
  {
    title: "ML, Deep Learning & NLP",
    items: [
      "Hugging Face Transformers",
      "XLM-RoBERTa",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Multi-Task Learning",
      "Feature Engineering",
      "Hyperparameter Tuning",
      "Model Benchmarking",
    ],
  },
  {
    title: "Generative AI & RAG",
    items: [
      "LangChain",
      "Multimodal & Text RAG",
      "Unstructured",
      "Dense Embeddings",
      "Semantic Search",
      "OpenAI API",
      "OpenRouter API",
    ],
  },
  {
    title: "Frontend & Web",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Material-UI (MUI)",
      "Vite",
      "Node.js",
      "Express.js",
      "HTML5 & CSS3",
    ],
  },
  {
    title: "APIs, Serving & DevOps",
    items: [
      "FastAPI",
      "Flask",
      "Java (JAX-RS / CXF)",
      "OpenAPI 3.0",
      "OAuth 2.0 / OIDC",
      "Gradio",
      "Streamlit",
      "Docker",
      "GitHub Actions",
      "Render",
    ],
  },
  {
    title: "Databases & Vector Stores",
    items: ["Qdrant", "Pinecone", "ChromaDB", "FAISS", "MongoDB", "MySQL"],
  },
  {
    title: "Testing & Verification",
    items: ["Playwright (E2E)", "Vitest", "JUnit", "Mockito", "Postman"],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Google AI Essentials",
    issuer: "Google",
    url: "https://www.coursera.org/account/accomplishments/specialization/IUGPFSGDO9VA",
    domain: "Generative AI",
  },
  {
    title: "AI/ML Engineer – Stage 2",
    issuer: "SLIIT",
    url: "https://code.sliit.org/certificates/3fkg4arup8",
    domain: "Machine Learning",
  },
  {
    title: "AI/ML Engineer – Stage 1",
    issuer: "SLIIT",
    url: "https://code.sliit.org/certificates/cgktgmasxn",
    domain: "Machine Learning",
  },
  {
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
    url: "https://www.linkedin.com/learning/certificates/920c9e9bebd994fdab21379578adb9f7de74843db22a772c510098d0788cfdd7",
    domain: "Data Analysis",
  },
  {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    url: "https://www.freecodecamp.org/certification/thiwanka_chanditha/data-analysis-with-python-v7",
    domain: "Python",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    url: "https://www.kaggle.com/learn/certification/thiwankachanditha/intro-to-machine-learning",
    domain: "Machine Learning",
  },
  {
    title: "Introduction to Deep Learning with Keras",
    issuer: "Simplilearn",
    url: "https://simpli-web.app.link/e/mYuCtkYKwLb",
    domain: "Deep Learning",
  },
  {
    title: "Introduction to Neural Networks",
    issuer: "Simplilearn",
    url: "https://simpli-web.app.link/e/Kn7NwEvKwLb",
    domain: "Deep Learning",
  },
];

export const LEADERSHIP = [
  {
    role: "Nominating Team Lead",
    org: "IEEE Student Branch, University of Jaffna",
    period: "2024 – 2026",
  },
  {
    role: "Assistant Secretary of Membership",
    org: "CSSL GenZ Chapter, University of Jaffna",
    period: "2023 – 2024",
  },
  {
    role: "Student Member",
    org: "IEEE Student Branch & Computer Society, University of Jaffna",
    period: "2022 – 2026",
  },
];
