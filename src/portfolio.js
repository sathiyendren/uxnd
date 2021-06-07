import emoji from "react-easy-emoji";

import LithiumSoftwareLogo from "./assets/img/LithiumSoftware.webp";
import InteramplifyLogo from "./assets/img/Interamplify.webp";
import SolutionDeveloppeurLogo from "./assets/img/SolutionDeveloppeur.webp";
import VacancyRewardsLogo from "./assets/img/VacancyRewards.webp";
import FreelanceLogo from "./assets/img/Freelance.webp";
import UniversityCMG from "./assets/img/UniversityCMG.webp";

const illustration = {
  animated: false, // set to false to use static SVG
};

const workProjects = [
  {
    id: 1,
    title: "EasyAim",
    description:
      "A motorized spot in combination with an intuitive mobile phone application designed together with visual merchandizers for the fashion industry.",
    thumbnailURL: "work_img1.png",
  },
  {
    id: 2,
    title: "Interact Pro",
    description:
      "Enables installers to do commissioning and testing, and business owners to manage the lighting system for small and medium sized offices and industries.",
    thumbnailURL: "work_img2.png",
  },
  {
    id: 3,
    title: "Dynalite Control ",
    description:
      "Allows to manage scenes, control individual channels and apply schedules of the Philips Dynalite system for residential and commercial spaces.",
    thumbnailURL: "work_img3.png",
  },
  {
    id: 4,
    title: "Philips Hue",
    description:
      "Easily organize individual lights into rooms switch on/off or change the color or brightness of all the lights to match your mood or your activity at your residence.",
    thumbnailURL: "work_img4.png",
  },
  {
    id: 5,
    title: "Service Tag",
    description:
      "View relevant luminaire configuration information and identifying spare parts needed.  LED drivers can be programmed to factory settings using Near Field Communication (NFC) technology for street lamp propositions.",
    thumbnailURL: "work_img5.png",
  },
  {
    id: 6,
    title: "Interact Retail HQ",
    description:
      "Create flexible retail spaces, trigger specific shopper behaviors through zoning and layers of light, deliver location- basedoffers to shoppers on their smart phone via the app",
    thumbnailURL: "work_img6.png",
  },
  {
    id: 7,
    title: "Interact Sports",
    description:
      "Monitor, manage and optimize connected lighting across the entire stadium. Manage venue and audience as efficiently as possible using accurate data and insights. ",
    thumbnailURL: "work_img7.png",
  },
  {
    id: 8,
    title: "Check My Trip",
    description:
      "A complete travel itinerary tool, bringing you flight information and alerts, travel services and extras to get you smoothly from door to door.",
    thumbnailURL: "work_img8.png",
  },
  {
    id: 9,
    title: "Amadeus e-Travel Management",
    description:
      "Corporate booking tool that enables your travellers to manage their complete itineraries aligned with company’s guidelines.",
    thumbnailURL: "work_img9.png",
  },
];

const workExperiences = {
  display: true,
  experiences: [
    {
      role: "Full Stack Developer",
      company: "Interamplify",
      companyLocation: "Alhama de Murcia, Murcia, Spain",
      companyLogo: InteramplifyLogo,
      startDate: "Jan 2021",
      endDate: "Present",
      description:
        "Interamplify is an internet company that specializes in digital marketing, SEO, and social media marketing. My work focused on the maintenance and implementation of new features.",
      technologies: [
        "PHP",
        "Laravel",
        "HTML",
        "CSS",
        "Bootstrap",
        "jQuery",
        "JavaScript",
        "PostgreSQL",
        "MySQL",
        "Git",
      ],
      keyExperiences: [
        "Teamwork",
        "Advanced Git Workflows",
        "MVC",
        "Testing",
        "SCRUM",
      ],
    },
    {
      role: "Back End Developer",
      company: "Solution Développeur",
      companyLocation: "Paris, Île-de-France, France",
      companyLogo: SolutionDeveloppeurLogo,
      startDate: "Nov 2020",
      endDate: "Present",
      description:
        "Solution Développeur is a company specialized in new technologies that put a team of experts to work according to the business needs of its clients, offering technical assistance and advice on all aspects of their projects. My work focused on the maintenance and implementation of new features.",
      technologies: [
        "JavaScript (ES6+)",
        "NodeJS",
        "Express",
        "Sequelize ORM",
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "MySQL",
        "Git",
        "AWS",
      ],
      keyExperiences: [
        "Teamwork",
        "Advanced Git Workflows",
        "RESTful API",
        "Testing",
        "SCRUM",
      ],
    },
    {
      role: "Back End Developer",
      company: "Lithium Software",
      companyLocation: "Montevideo, Montevideo, Uruguay",
      companyLogo: LithiumSoftwareLogo,
      startDate: "Feb 2021",
      endDate: "May 2021",
      description:
        "Lithium Software is a development studio that helps technology companies and startups offering an extra-hand for their dev team with highly-skilled, trusted, nearshore developers and designers. My work focused on the maintenance and implementation of new features.",
      technologies: [
        "JavaScript (ES6+)",
        "NodeJS",
        "Express",
        "Knex.js",
        "Swagger",
        "Jest",
        "Mocha",
        "PostgreSQL",
        "Git",
        "Azure DevOps",
        "Jira",
      ],
      keyExperiences: [
        "Teamwork",
        "Advanced Git Workflows",
        "RESTful API",
        "Documentation",
        "Testing",
        "SCRUM",
      ],
    },
    {
      role: "Back End Developer",
      company: "Vacancy Rewards",
      companyLocation: "Cancún, Quintana Roo, México",
      companyLogo: VacancyRewardsLogo,
      startDate: "Sep 2019",
      endDate: "Feb 2020",
      description:
        "Vacancy Rewards is a leisure, travel, and tourism company based out of Cancún, Mexico. My work focused on the maintenance and implementation of new features.",
      technologies: [
        "JavaScript (ES6+)",
        "NodeJS",
        "MongoDB",
        "PostgreSQL",
        "Git",
        "Docker",
        "Flectra",
      ],
      keyExperiences: [
        "Advanced Git Workflows",
        "Testing",
        "Microservices Architecture",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Freelance",
      companyLocation: "Camagüey, Camagüey, Cuba",
      companyLogo: FreelanceLogo,
      startDate: "Oct 2018",
      endDate: "May 2021",
      description:
        "Design and implementation of web and mobile applications such as e-commerce sites and business management systems.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript (ES6+)",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "Sequelize ORM",
        "Python",
        "Django REST Framework",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "jQuery",
        "Bootstrap",
        "Java",
        "Android",
        "PHP",
        "Symfony",
        "Laravel",
        "Git",
        "AWS",
        "SCRUM",
      ],
      keyExperiences: [
        "Analysis",
        "Design",
        "Advanced Git Workflows",
        "RESTful API",
        "Testing",
        "SCRUM",
        "SEO",
      ],
    },
    {
      role: "Software Developer",
      company: "University of Camagüey",
      companyLocation: "Camagüey, Camagüey, Cuba",
      companyLogo: UniversityCMG,
      startDate: "Nov 2017",
      endDate: "Jul 2019",
      description:
        "Design and implementation of web and mobile applications for the university and state companies of the locality.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "NodeJS",
        "ExpressJS",
        "Python",
        "Django REST Framework",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "jQuery",
        "Bootstrap",
        "Java",
        "Hibernate",
        "Android",
        "PHP",
        "Symfony",
        "Git",
        "SCRUM",
      ],
      keyExperiences: [
        "Analysis",
        "Design",
        "Advanced Git Workflows",
        "Testing",
        "SCRUM",
      ],
    },
  ],
};

// Megalatha data

const socialMediaLinks = {
  display: true,
  github: null,
  gitlab: null,
  gmail: "iammega@gmail.com",
  linkedin: "https://www.linkedin.com/in/megalatha-s-0a679816/",
  facebook: "https://www.facebook.com/megalatha",
  twitter: null,
  phoneNumber: "(+91)9741878855",
  whatsApp: "9741878855",
};

const greeting = {
  title: "Greetings",
  display: true,
  sectionTitle: "greet",
  menuDisplay: false,
  type: "greetings",
  data: {
    greeting: "Hi There!",
    title: "I'm Megalatha",
    subTitle: emoji(
      "I'm a User Experience Designer and Interaction Designer based in Bangalore, India with experience in delivering user-centric Interfaces for surface UIs. I'm passionate about rendering intuitive UIs for people and thereby enrich the overall customer experience."
    ),
    resumeLink: "https://bit.ly/3uRVWnP",
    socialMediaLinks,
  },
};

const aboutMe = {
  title: "About Me",
  display: true,
  menuDisplay: true,
  sectionTitle: "aboutMe",
  type: "aboutMe",
  data: {
    content: [
      "With hands-on experience for 13+ years in the field of creating better experiences and intuitive interactions on the Surface User Interfaces, I have been caring for my end-users leading to more loyal customers and better business. I am empathetic to the needs and identifying the job to be done of my end-users. I am a naturally curious person who tries to get to the root of an issue and find solution.",
      "I keep a good understanding of the coding and technical skills in order to be able to take possibilities and constraints into considerations. My logic and reasoning skills help me to discern why a designed approach is not working and, by contrast, why other one might be. I have the ability to hear and accept feedback which helps me broaden my lens in empathy designing for my audience.",
      "My domain exposure are in Analytical Dashboards, Banking, Airline, Airport management systems, Tourism, Lighting for Residential, Retail, Fashion, Office, Sports, Recreational areas and Hardware manufacturing.",
    ],
  },
};

const iAmGoodAt = {
  title: "I'm Good At",
  display: true,
  menuDisplay: true,
  sectionTitle: "iAmGoodAt",
  type: "skills",
  data: {
    content: [
      "Interactive UIs",
      "User Research/Interview",
      "Contextual Inquiries",
      "Empathy mapping",
      "Customer journey mapping",
      "Creative thinking",
      "Ideation",
      "Rapid prototyping",
      "Story telling with prototypes",
      "User testing",
      "A/B testing",
      "UX writing",
      "Low/Hi-fidelity mockups",
      "Quantitative Analysis",
      "Optimize design and dev process with SAFe",
      "Identify and develop MVP",
    ],
  },
};

const toolsIUse = {
  title: "Tools I Use",
  display: true,
  menuDisplay: true,
  sectionTitle: "toolsIUse",
  type: "tools",
  data: {
    content: [
      "Sketch",
      "InVision App + Craft",
      "Adobe XD",
      "Adobe Photoshop",
      "Miro",
      "Trello",
    ],
  },
};

const work = {
  title: "Work",
  display: true,
  menuDisplay: true,
  sectionTitle: "project",
  type: "project",
  data: {
    projects: workProjects,
  },
};

const experience = {
  title: "Experience",
  display: false,
  menuDisplay: true,
  sectionTitle: "experience",
  type: "experience",
};

const contact = {
  title: "Contact",
  display: true,
  menuDisplay: true,
  sectionTitle: "contact",
  type: "contact",
  data: {
    title: emoji("Contact Me ☎️"),
    subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: socialMediaLinks.phoneNumber,
    emailAddress: socialMediaLinks.gmail,
  },
};

const content = [
  greeting,
  aboutMe,
  iAmGoodAt,
  toolsIUse,
  experience,
  work,
  contact,
];

const portfolio = {
  name: "UXnD",
  content,
};

export { illustration, workExperiences, portfolio, greeting };
