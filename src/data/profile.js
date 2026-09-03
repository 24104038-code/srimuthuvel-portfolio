// All content below is sourced directly from Srimuthuvel S's resume and
// public GitHub profile. Update this file to keep the portfolio in sync
// with your latest information — no other file needs to change.

export const profile = {
  name: "Srimuthuvel S",
  headline: "Aspiring Software Developer",
  tagline:
    "Computer Science Engineering student building management systems and problem-solving applications with Java, Python and SQL.",
  location: "Tenkasi, Tamil Nadu",
  phone: "9655030001",
  email: "srimuthuvel158@gmail.com",
  github: "https://github.com/24104038-code",
  githubHandle: "24104038-code",
  linkedin: "https://www.linkedin.com/in/srimuthuvel-s-32ab5b357/",
  resumeFile: "/resume.pdf",
  summary:
    "Motivated and enthusiastic Computer Science Engineering student with a strong foundation in programming, web development, and database management. Skilled in Python, Java, HTML, CSS, JavaScript, and SQL. Experienced in developing academic projects focused on management systems and problem-solving applications. Passionate about creating efficient software solutions, learning emerging technologies, and contributing to innovative development teams. Seeking opportunities to apply technical knowledge and grow as a Full Stack Developer.",
};

export const currentlyExploring = [
  "Full Stack Development",
  "Database-driven application design",
  "Real-world problem-solving through software",
];

export const education = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    institution: "National Engineering College",
    duration: "2024 – 2028",
    detail: "CGPA: 7",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Emmanuel Matric Hr Sec School",
    duration: "",
    detail: "Percentage: 76%",
  },
  {
    degree: "Secondary School Education (SSLC)",
    institution: "Emmanuel Matric Hr Sec School",
    duration: "",
    detail: "Percentage: 68%",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C / C++"],
  },
  {
    category: "Web Development",
    items: ["JavaScript", "HTML", "CSS"],
  },
  {
    category: "Database",
    items: ["SQL", "Database Management"],
  },
  {
    category: "Core Concepts",
    items: ["Algorithms", "Object-Oriented Programming", "Problem Solving"],
  },
];

export const softSkills = ["Teamwork", "Communication", "Problem Solving", "Time Management"];

export const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Proficient" },
];

export const certifications = [
  {
    name: "Python Programming in AI Tech",
    issuer: "",
  },
  {
    name: "SQL and Database Management",
    issuer: "",
  },
  {
    name: "Web Development Fundamentals",
    issuer: "",
  },
];

export const achievements = [
  {
    title: "3rd Prize — Coding Event",
    detail: "Secured 3rd prize in a code event held at Coimbatore Institute of Technology.",
  },
  {
    title: "AI for Techies Certification",
    detail: "Completed technical certification programs in AI for Techies.",
  },
  {
    title: "Continuous Self-Learning",
    detail: "Active participant in coding practice platforms and continuous technical self-learning activities.",
  },
];

// Journey timeline — built from education, certifications and project work
// since this is an academic profile without formal employment history yet.
export const journey = [
  {
    year: "2024",
    title: "Started B.E. Computer Science and Engineering",
    description: "Began undergraduate studies at National Engineering College, building a foundation in programming and core CS concepts.",
  },
  {
    year: "2024",
    title: "Built the Theatre Seating Management System",
    description: "Applied C++ and OOP concepts to build a seat booking and allocation system with real-time availability tracking.",
  },
  {
    year: "2025",
    title: "Built the Ration Shop Management System",
    description: "Designed a Java application with a relational database to manage ration card holders, inventory and distribution.",
  },
  {
    year: "2025",
    title: "Certifications in Python, SQL & Web Development",
    description: "Completed certification programs in Python Programming in AI Tech, SQL and Database Management, and Web Development Fundamentals.",
  },
  {
    year: "2025",
    title: "3rd Prize at a Coding Event",
    description: "Secured 3rd prize in a code event at Coimbatore Institute of Technology.",
  },
  {
    year: "Now",
    title: "Designing the Women Safety SOS System",
    description: "Currently developing a concept for a fast emergency-response system, focused on real-world safety problem solving.",
  },
];

export const projects = [
  {
    id: "ration-shop",
    name: "Ration Shop Management System",
    tech: "Java",
    status: "completed",
    tags: ["Java", "SQL", "OOP"],
    shortDescription:
      "A computerized system for managing ration card holders, inventory, and product distribution.",
    problem:
      "Manual ration shop record-keeping is slow and error-prone. This system replaces paper-based tracking of card holders, stock and distribution with a structured, database-backed application.",
    features: [
      "Ration card holder management",
      "Inventory management",
      "Product distribution tracking",
      "Relational database for customer and stock information",
      "Data retrieval and reporting for administrators",
    ],
    contribution:
      "Designed and built the full application independently, including the data model, distribution logic, and reporting features.",
    github: "https://github.com/24104038-code",
    demo: null,
  },
  {
    id: "theatre-seating",
    name: "Theatre Seating Management System",
    tech: "C++ (OOP)",
    status: "completed",
    tags: ["C++", "OOP", "Data Structures"],
    shortDescription:
      "A seat booking and management system for streamlined theatre operations.",
    problem:
      "Theatres need a reliable way to track seat availability and reservations in real time without double-booking or manual seat charts.",
    features: [
      "Seat booking and allocation",
      "Real-time seat availability tracking",
      "User-friendly reservation interface",
      "Persistent storage of booking and customer details",
    ],
    contribution:
      "Modeled the system using core OOP principles — classes for seats, bookings and customers — and implemented the allocation and tracking logic.",
    github: "https://github.com/24104038-code",
    demo: null,
  },
  {
    id: "women-safety-sos",
    name: "Women Safety SOS System",
    tech: "Concept / In Development",
    status: "developing",
    tags: ["Safety Tech", "Location Services", "Concept"],
    shortDescription:
      "A fast emergency-response concept inspired by SOS applications like Kavalan — built to help someone raise an alert when they can't make a normal phone call.",
    problem:
      "In an emergency, a person may not have time to explain where they are or place a normal call. This concept explores a one-tap way to alert trusted contacts and share location instantly.",
    plannedFeatures: [
      "One-tap SOS button",
      "Emergency contact management",
      "Location sharing & live tracking",
      "Emergency alert notifications",
      "Trusted contacts list",
      "Emergency call functionality",
      "Alert history",
      "User safety profile & status",
      "Optional nearby emergency services lookup",
    ],
    contribution:
      "Currently in the design/concept stage — defining the core user flow and planned feature set before implementation.",
    github: null,
    demo: null,
  },
];
