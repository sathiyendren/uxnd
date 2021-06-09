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
    id: "1",
    title: "EasyAim",
    description:
      "A motorized spot in combination with an intuitive mobile phone application designed together with visual merchandizers for the fashion industry.",
    thumbnailURL: "http://uxnd.in/images/work_img1.png",
    imageURL: "http://uxnd.in/images/work_img1.png",
    appStoreLink: {
      apple:
        "https://apps.apple.com/us/app/interact-retail-easyaim/id1286741772",
      android:
        "https://apps.apple.com/us/app/interact-retail-easyaim/id1286741772",
    },
    details: {
      title: "title",
      subTitle: "subTitle1",
      content: [
        {
          title: "Drafting the problem statement",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [
            {
              title: "123",
              content:
                "Zara our prime customer in fashion lighting were facing a major challenge in managing and aiming spot lights which are located at a height of 4.5 meters in their shop window ceilings. This activity has to be conducted every two weeks when they had to showcase their new merchadises in their shop windows. Each fortnight couple of their lighting designers gathered with a 4 mtr ladder and a set of walkie-talkies at the store. Where one was inside the shop window on a ladder paning and tilting the spot lights and the other standing outside the glass wall trying to orchestrate and guide the light directions accordingly. This is not an easy job as they had to carefully balance on the 4 mtr ladder and at the other hand also be creative in managing the lights.",
            },
          ],
        },
        {
          title: "",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [],
        },
        {
          title: "Identify personas",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [
            {
              title: "",
              content:
                "Personas and profiles were created as the user profiles were mainly based on assumptions. Actual qualitative and quantitative user research was missing. In a team session, I collected all the assumptions out and populated my persona, quick and dirty. By this I made sure that everybody is heard and opinions are formalized.",
            },
          ],
        },
        {
          title: "User journey and rapid prototyping",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [
            {
              title: "",
              content:
                "A quick sketches were created after the discussions with the stakeholders, product architects and the business analysts. These  were drawn in order to verify the assumptions and it also helped us as a starting point to dig more deeper on our assumptions and ground it to the requirements properly.",
            },
          ],
        },
        {
          title: "Story boarding the outcome",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [],
        },
        {
          title: "",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [
            {
              title: "",
              content: "",
            },
          ],
        },
        {
          title: "Epics, User tasks and User story writing",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [
            {
              title: "",
              content:
                "We populated a scrum board by having frequent interdisciplinary discussions on creating the MVP for our first beta release and test Scalability, 3rd party integrations and algorithm realization and broke the epics to the tasks and then user stories.",
            },
          ],
        },
        {
          title: "Low-fidelity Interaction design",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [
            {
              title: "",
              content: "First, make it work...",
            },
            {
              title: "",
              content:
                "Functionalities are communicated using low-fidelity Interaction wireframes.",
            },
          ],
        },
        {
          title: "Testing different interaction patterns",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [
            {
              title: "",
              content:
                "Created  few interaction designs for Panning and Tilting of the spotlights which was the main functionality of the app . These were then usability tested to understand the best intuitive interaction patterns and re-iterated the designs further to attain the final result.",
            },
          ],
        },
        {
          title: "User interviews",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [
            {
              title: "",
              content:
                "Visited cutomers to conduct user interviews and gather insights and opinions on the first prototype design and also conduct research on their workflows and interaction patterns with the proposition.",
            },
          ],
        },
        {
          title: "Reiterating the design",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [
            {
              title: "",
              content:
                "Created task flow diagram, understanding different use cases of the audience, and arriving at an iterated design solution.",
            },
          ],
        },
        {
          title: "First beta release",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          paragraph: [
            {
              title: "",
              content:
                "Based on the feedback received from the user testing and research, a new set of iterated designs were created and ready to be released  for a beta",
            },
          ],
        },
        {
          title: "",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/work_img2.png",
          videoURL: "",
          paragraph: [
            {
              title: "",
              content: "",
            },
          ],
        },
      ],
    },
  },
  {
    id: "2",
    title: "Interact Pro",
    description:
      "Enables installers to do commissioning and testing, and business owners to manage the lighting system for small and medium sized offices and industries.",
    thumbnailURL: "work_img2.png",
  },
  {
    id: "3",
    title: "Dynalite Control ",
    description:
      "Allows to manage scenes, control individual channels and apply schedules of the Philips Dynalite system for residential and commercial spaces.",
    thumbnailURL: "work_img3.png",
  },
  {
    id: "4",
    title: "Philips Hue",
    description:
      "Easily organize individual lights into rooms switch on/off or change the color or brightness of all the lights to match your mood or your activity at your residence.",
    thumbnailURL: "work_img4.png",
  },
  {
    id: "5",
    title: "Service Tag",
    description:
      "View relevant luminaire configuration information and identifying spare parts needed.  LED drivers can be programmed to factory settings using Near Field Communication (NFC) technology for street lamp propositions.",
    thumbnailURL: "work_img5.png",
  },
  {
    id: "6",
    title: "Interact Retail HQ",
    description:
      "Create flexible retail spaces, trigger specific shopper behaviors through zoning and layers of light, deliver location- basedoffers to shoppers on their smart phone via the app",
    thumbnailURL: "work_img6.png",
  },
  {
    id: "7",
    title: "Interact Sports",
    description:
      "Monitor, manage and optimize connected lighting across the entire stadium. Manage venue and audience as efficiently as possible using accurate data and insights. ",
    thumbnailURL: "work_img7.png",
  },
  {
    id: "8",
    title: "Check My Trip",
    description:
      "A complete travel itinerary tool, bringing you flight information and alerts, travel services and extras to get you smoothly from door to door.",
    thumbnailURL: "work_img8.png",
  },
  {
    id: "9",
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
