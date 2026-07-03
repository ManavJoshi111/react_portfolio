interface IProject {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  technologies: string[];
}

const projects: IProject[] = [
  {
    title: "Curio - Spark Your Curiosity!",
    description:
      "A full-stack community-driven Q&A platform built with the MERN stack and Redux. Enables users to ask, answer, upvote/downvote, and moderate content with role-based access control (JWT). Graded 10/10 as final-year project.",
    githubLink: "https://github.com/manavjoshi111/curio",
    liveLink: "https://app-curio.vercel.app/",
    technologies: ["MERN Stack", "Redux", "React-Bootstrap"],
  },
  {
    title: "CryptoX - Cryptocurrency Trading Simulator",
    description:
      "Developed a real-time crypto trading simulator with live Binance API data using WebSockets. Users can simulate buy/sell transactions, visualize performance through dynamic Chart.js graphs, and track portfolio profit/loss.",
    githubLink: "https://github.com/ManavJoshi111/stock_project_frontend",
    liveLink: "https://app-cryptox.netlify.app/",
    technologies: ["MERN Stack", "Bootstrap", "ChartJS"],
  },
  {
    title: "myCV - Professional Resume Builder",
    description:
      "Built a resume-building platform allowing users to create profiles, fill structured forms, and download auto-generated resumes as PDFs. Focused on clean UX and form data validation using React and Node.js.",
    githubLink: "https://github.com/manavjoshi111/resume_builder_frontend",
    technologies: ["MERN Stack"],
  },
  {
    title: "VendorVortex - Connecting Communities",
    description:
      "A hackathon-winning MERN project providing local vendors a platform to showcase shops, offers, and reviews. Enhanced community engagement through vendor-customer interactions and real-time rating updates.",
    githubLink: "https://github.com/ManavJoshi111/VendorVortex",
    technologies: ["MERN Stack", "Bootstrap"],
  },
  {
    title: "Contest Notifier - Discord Bot",
    description:
      "A Discord bot built with Node.js and Discord.js to notify users about upcoming programming contests within 24 hours. Actively used in GDSC BVM server to keep 500+ members updated on competitive events.",
    githubLink: "https://github.com/ManavJoshi111/Contest_Notifier_Bot",
    technologies: ["JavaScript", "Discord.js"],
  },
  {
    title: "ThreatFlow - Automated CVE Remediation Pipeline",
    description:
      "Architected an end-to-end CVE remediation pipeline integrating Jenkins, AquaSec container scanning, and Claude AI. Built a Node.js API layer that classifies vulnerabilities by severity and semver impact, invokes LLM-powered analysis for high/critical CVEs with breaking change detection, and auto-creates PRs for patch and minor upgrades. Built a React and Tailwind dashboard backed by PostgreSQL to track scan history, CVE discovery, and remediation actions. In a single POC run, detected 80 CVEs, auto-created 1 PR, identified an internal library as a vulnerability source, and dispatched 40+ AI-generated remediation reports.",
    githubLink: "",
    technologies: ["Node.js", "React", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Form 16 Distribution System",
    description:
      "Architected a Form 16 finder for an accounting firm managing 4,000+ users, splitting a 5,000-page bulk PDF into individual documents stored on Firebase Storage and served via Cloud Functions. Built a React frontend for PAN-based retrieval scoped to internal staff only, protecting sensitive income data.",
    githubLink: "",
    technologies: ["React", "Firebase"],
  },
];

interface IRole {
  title: string;
  startTime: string;
  endTime: string;
  description: string[];
}

interface IExperience {
  company: string;
  companyLink?: string;
  roles: IRole[];
}

const experience: IExperience[] = [
  {
    company: "iBase-t India Software Pvt. Ltd.",
    companyLink: "https://www.ibaset.com",
    roles: [
      {
        title: "Software Engineer",
        startTime: "Oct 2024",
        endTime: "Present",
        description: [
          "Engineered an end-to-end soft-delete, restore, and permanent delete lifecycle for a hierarchical configuration system of 1000+ JSON entities, enforcing parent-child dependency constraints and maintaining consistency across NFS storage and Redis cache.",
          "Resolved a months-long pre-release defect causing 10,000+ i18n labels across 5+ languages to render as raw keys; diagnosed a silent cache failure and implemented a fail-fast cache invalidation strategy, preventing the issue from reaching customers.",
          "Built a configurable Node.js CLI tool to automate CVE remediation workflows across 18+ repositories, handling dependency upgrades, lockfile regeneration, Git branching, and PR creation; reduced per-cycle effort from 1 to 2 dev-days down to a 3 to 4 hour unattended run, executed 2+ times per week across the team.",
        ],
      },
    ],
  },
  {
    company: "SocialPilot Solutions LLP (Acquired by Group.One)",
    companyLink: "https://www.socialpilot.co/",
    roles: [
      {
        title: "Junior Full Stack Developer",
        startTime: "July 2024",
        endTime: "Oct 2024",
        description: [
          "Implemented a video thumbnail selection and processing pipeline using React (HTML Canvas for frame extraction) and AWS S3-triggered Lambda functions to generate platform-specific thumbnails, achieving 80%+ adoption across 12k+ customers and 25k+ connected social media accounts.",
          "Designed a geo-based anti-spam system in Koa authentication middleware using IP geolocation, blocking 5+ high-risk regions responsible for 90%+ of fraudulent free-trial sign-ups.",
        ],
      },
      {
        title: "Full Stack Intern",
        startTime: "Jan 2024",
        endTime: "July 2024",
        description: [
          "Contributed to migrating a monolithic database into a multi-database architecture separating platform-level and product-specific data, optimizing 5+ critical API queries and improving response times by 60%.",
        ],
      },
    ],
  },
  {
    company: "Internauts Infotech",
    roles: [
      {
        title: "Web Development Intern",
        startTime: "Jan 2023",
        endTime: "Mar 2023",
        description: [
          "Led the development of 'DigiScholar', a MERN-based scholarship portal for students and admins.",
          "Designed database schema and implemented RESTful APIs for seamless CRUD operations.",
          "Collaborated with a 4-member team to integrate frontend and backend modules effectively.",
        ],
      },
    ],
  },
  {
    company: "Thinkbeat Solutions",
    companyLink: "https://thinkbeatsolutions.com/",
    roles: [
      {
        title: "Web Development Intern",
        startTime: "Jul 2022",
        endTime: "Sep 2022",
        description: [
          "Developed web components using React for client-facing projects and internal dashboards.",
          "Gained exposure to Magento2 and contributed to frontend enhancements for e-commerce clients.",
        ],
      },
    ],
  },
];

interface ITechCategory {
  title: string;
  technologies: string[];
}

const techStack: ITechCategory[] = [
  {
    title: "Frontend Development",
    technologies: [
      "React.js",
      "Next.js (App Router)",
      "Redux",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend & Database",
    technologies: [
      "Node.js",
      "Express.js",
      "Koa.js",
      "WebSockets",
      "MongoDB",
      "SQL",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "DevOps & Tools",
    technologies: ["Docker", "Git", "GitHub", "Linux", "AWS (S3, Lambda)"],
  },
];

export {
  projects,
  experience,
  techStack,
  IProject,
  IExperience,
  ITechCategory,
};
