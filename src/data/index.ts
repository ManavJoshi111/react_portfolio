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
      "Curio is a community driven QnA platform where users can ask questions, answer questions, upvote and downvote questions and answers.It has feature of content moderation as well. It is a full-stack web application built using MERN stack.",
    githubLink: "https://github.com/manavjoshi111/curio",
    liveLink: "https://app-curio.vercel.app/",
    technologies: ["MERN Stack", "Redux", "React-BootStrap"],
  },
  {
    title: "CryptoX - A Cryptocurrency Tracker",
    description:
      "CryptoX is a real-time tracker for multiple cryptocurrencies. It enables users to monitor prices, view ticker charts, simulate transactions with dummy funds, and review transaction history for evaluating profit/loss.",
    githubLink: "https://github.com/ManavJoshi111/stock_project_frontend",
    liveLink: "https://app-cryptox.netlify.app/",
    technologies: ["MERN Stack", "Bootstrap", "ChartJS"],
  },
  {
    title: "myCV - Professional Resume Builder",
    description:
      "myCV is a professional resume builder web app which helps the user making their resume. User need to create an account and fill the form to make their resume. The resume can be downloaded as a pdf file.",
    githubLink: "https://github.com/manavjoshi111/resume_builder_frontend",
    technologies: ["MERN Stack"],
  },
  {
    title: "VendorVortex - Connecting Communities",
    description:
      "The project is designed to help local vendors grow their small businesses by providing them a platform to showcase their shops and communities and plans. Customers can easily discover these shops, connect with their local community, explore current discount plans, and even share their experiences on that platform with rating of service of that shop.",
    githubLink: "https://github.com/ManavJoshi111/VendorVortex",
    technologies: ["MERN Stack", "Bootstrap"],
  },
  {
    title: "Contest Notifier - A Discord Bot",
    description:
      "It is a discord bot I made for GDSC BVM discord server, the bot notifies users about the upcoming contests in next 24 hours",
    githubLink: "https://github.com/ManavJoshi111/Contest_Notifier_Bot",
    technologies: ["JavaScript", "Discord JS"],
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
          "Worked on a feature which lets user browse through their recently opened entities that helped in user experience",
          "Solved performance related issues(infinite rendering) which increased the site performance by 40%",
        ],
      },
    ],
  },
  {
    company: "SocialPilot Solutions LLP",
    companyLink: "https://www.socialpilot.co/",
    roles: [
      {
        title: "Junior Full Stack Developer",
        startTime: "July 2024",
        endTime: "Oct 2024",
        description: [
          "Developed of a feature that reduced spam accounts by 40% across the platform and by 90% on the targeted social media account",
          "Implemented a feature that lets the user upload custom thumbnail from video frames or various sources (device, drive, dropbox) etc.",
        ],
      },
      {
        title: "Full Stack Intern",
        startTime: "Jan 2024",
        endTime: "July 2024",
        description: [
          "Worked on both frontend and backend",
          "Improved UI for auth module pages as per the requirements",
          "Migrated queries to new database which resulted in ~60% performance improvement",
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
          "Led the team in developing the project 'digiScholar', a scholarship portal using MERN Stack",
          "Designed schema for the project and developed APIs for seamless CRUD operations",
          "Successfully integrated frontend and backend components of the project",
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
          "Worked as Web Development Intern in a startup named Thinkbeat Solutions",
          "Worked on technologies like React and Magento2",
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
    title: "Frontend",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js (App Router)",
      "TypeScript",
    ],
  },
  {
    title: "Backend & Database",
    technologies: [
      "Node.js",
      "Express.js",
      "Koajs",
      "WebSockets",
      "SQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "DevOps & Tools",
    technologies: ["Docker", "Git", "GitHub", "Linux"],
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
