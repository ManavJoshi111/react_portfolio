interface IProject {
  title: string;
  description: string[];
  githubLink: string;
  liveLink?: string;
  technologies: string[];
}

const projects: IProject[] = [
  {
    title: "ThreatFlow - Automated CVE Remediation Pipeline",
    description: [
      "End-to-end CVE remediation pipeline integrating Jenkins, AquaSec container scanning, and Claude AI.",
      "Node.js API classifies vulnerabilities by severity and semver impact, runs LLM analysis with breaking-change detection, and auto-creates PRs for patch and minor upgrades.",
      "React + Tailwind dashboard on PostgreSQL tracking scan history, CVE discovery, and remediation actions.",
      "A single POC run detected 80 CVEs, flagged an internal library as a vulnerability source, and dispatched 40+ AI-generated remediation reports.",
    ],
    githubLink: "",
    technologies: ["Node.js", "React", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Form 16 Distribution System",
    description: [
      "Form 16 finder for an accounting firm managing 4,000+ users.",
      "Splits a 5,000-page bulk PDF into individual documents stored on Firebase Storage, served via Cloud Functions.",
      "React frontend for PAN-based retrieval, scoped to internal staff only to protect sensitive income data.",
    ],
    githubLink: "",
    technologies: ["React", "Firebase"],
  },
  {
    title: "Curio - Spark Your Curiosity!",
    description: [
      "Full-stack community-driven Q&A platform built with the MERN stack and Redux.",
      "Users can ask, answer, upvote/downvote, and moderate content, with JWT role-based access control.",
      "Graded 10/10 as final-year project.",
    ],
    githubLink: "https://github.com/manavjoshi111/curio",
    liveLink: "https://app-curio.vercel.app/",
    technologies: ["MERN Stack", "Redux", "React-Bootstrap"],
  },
  {
    title: "CryptoX - Cryptocurrency Trading Simulator",
    description: [
      "Real-time crypto trading simulator driven by live Binance API data over WebSockets.",
      "Simulates buy/sell transactions and visualises performance with dynamic Chart.js graphs.",
      "Tracks portfolio profit/loss.",
    ],
    githubLink: "https://github.com/ManavJoshi111/stock_project_frontend",
    liveLink: "https://app-cryptox.netlify.app/",
    technologies: ["MERN Stack", "Bootstrap", "ChartJS"],
  },
  {
    title: "myCV - Professional Resume Builder",
    description: [
      "Resume-building platform where users create profiles, fill structured forms, and download auto-generated resumes as PDFs.",
      "Focused on clean UX and form data validation using React and Node.js.",
    ],
    githubLink: "https://github.com/manavjoshi111/resume_builder_frontend",
    technologies: ["MERN Stack"],
  },
  {
    title: "VendorVortex - Connecting Communities",
    description: [
      "Hackathon-winning MERN platform giving local vendors a place to showcase shops, offers, and reviews.",
      "Boosted community engagement through vendor-customer interactions and real-time rating updates.",
    ],
    githubLink: "https://github.com/ManavJoshi111/VendorVortex",
    technologies: ["MERN Stack", "Bootstrap"],
  },
  {
    title: "Contest Notifier - Discord Bot",
    description: [
      "Discord bot built with Node.js and Discord.js that notifies users of programming contests starting within 24 hours.",
      "Actively used in the GDSC BVM server to keep 500+ members updated on competitive events.",
    ],
    githubLink: "https://github.com/ManavJoshi111/Contest_Notifier_Bot",
    technologies: ["JavaScript", "Discord.js"],
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

interface IEducation {
  institution: string;
  institutionLink?: string;
  location: string;
  degree: string;
  score: string;
  startYear: string;
  endYear: string;
  coursework?: string[];
}

const education: IEducation[] = [
  {
    institution: "Birla Vishvakarma Mahavidyalaya Engineering College",
    location: "Anand, Gujarat",
    degree: "B.Tech - Computer Engineering",
    score: "CPI: 8.77",
    startYear: "2020",
    endYear: "2024",
    coursework: ["DSA", "OS", "CN", "OOPs"],
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

interface IResume {
  path: string;
  downloadFilename: string;
}

const resume: IResume = {
  path: "/Manav_Joshi_Resume.pdf",
  downloadFilename: "Manav_Joshi_Resume.pdf",
};

export {
  projects,
  experience,
  education,
  techStack,
  resume,
  IProject,
  IExperience,
  IEducation,
  ITechCategory,
  IResume,
};
