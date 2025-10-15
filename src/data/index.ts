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
          "Designed and implemented end-to-end delete functionality for 5+ proprietary entities with mark-as-obsolete and permanent deletion flow.",
          "Built 'Recently Accessed Entities' feature using Redis, improving user navigation and retention.",
          "Resolved infinite rendering and high CPU usage issues, boosting frontend performance by 40%.",
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
          "Developed an anti-spam system blocking high-risk signups, reducing fraudulent trials by 40% platform-wide.",
          "Implemented video thumbnail slider using React, AWS S3, and Lambda — adopted by 80%+ active users.",
        ],
      },
      {
        title: "Full Stack Intern",
        startTime: "Jan 2024",
        endTime: "July 2024",
        description: [
          "Delivered 2+ new features and resolved 20+ critical production issues across frontend and backend modules.",
          "Migrated internal analytics tool to a multi-DB setup, improving query response times by ~60%.",
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
          "Led the development of 'DigiScholar' — a MERN-based scholarship portal for students and admins.",
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
