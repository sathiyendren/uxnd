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
    thumbnailURL: "http://uxnd.in/images/easyaim_thumbnail.png",
    imageURL: "http://uxnd.in/images/easyaim_header.png",
    appStoreLink: {
      apple:
        "https://apps.apple.com/us/app/interact-retail-easyaim/id1286741772",
    },
    details: {
      title: "",
      subTitle: "",
      content: [
        {
          title: "Drafting the problem statement",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/easyaim_1.png",
          paragraph: [
            {
              title: "",
              content:
                "Zara our prime customer in fashion lighting were facing a major challenge in managing and aiming spot lights which are located at a height of 4.5 meters in their shop window ceilings. This activity has to be conducted every two weeks when they had to showcase their new merchadises in their shop windows. </br> Each fortnight couple of their lighting designers gathered with a 4 mtr ladder and a set of walkie-talkies at the store. Where one of them was inside the shop window on a ladder paning and tilting the spot lights and the other one standing outside the glass wall trying to guide the light directions and aim accordingly. This is not an easy job as they had to carefully balance on the 4 mtr ladder and at the other hand also be creative in managing the lights.",
            },
          ],
        },
        {
          title: "",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/easyaim_2.png",
          paragraph: [],
        },
        {
          title: "Identify personas",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/easyaim_3.png",
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
          imageURL: "http://uxnd.in/images/easyaim_4.png",
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
          imageURL: "http://uxnd.in/images/easyaim_5.png",
          paragraph: [],
        },
        {
          title: "Epics, User tasks and User story writing",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/easyaim_6.png",
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
          imageURL: "http://uxnd.in/images/easyaim_7.png",
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
          imageURL: "http://uxnd.in/images/easyaim_8.png",
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
          imageURL: "http://uxnd.in/images/easyaim_9.png",
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
          imageURL: "http://uxnd.in/images/easyaim_10.png",
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
          imageURL: "http://uxnd.in/images/easyaim_11.png",
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
    thumbnailURL: "http://uxnd.in/images/interactpro_thumbnail.png",
    imageURL: "http://uxnd.in/images/interactpro_header.png",
    appStoreLink: {
      apple: "https://apps.apple.com/us/app/interact-pro/id1353793570",
      android:
        "https://play.google.com/store/apps/details?id=com.philips.li.c4m",
    },
    details: {
      title: "Case study:",
      subTitle: "Improve Registration Flow",
      content: [
        {
          title: "Drafting the problem statement",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/iap_3.png",
          paragraph: [
            {
              title: "Project/topic context",
              content:
                "With the Interact Pro app the Installer can commission a connected lighting system with the mobile app. In the current implementation the registration flow of the app is confusing and is not helping the Installer register properly.",
            },
            {
              title: "Problem statement",
              content:
                "How can we improve the current registration flow that is suitable for different ways of working?",
            },
          ],
        },
        {
          title: "UX Research input",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/iap_4.png",
          paragraph: [
            {
              title: "",
              content:
                "What is the current problem?</br>- Preparation work is not always done before mechanic arrives on location. </br> - The mechanic should be able to create a project by himself </br>- The registration requires a lot of information, which makes it cumbersome and too time consuming to do on site.</br>- The mechanic just wants to start quickly.",
            },
          ],
        },
        {
          title: "Drafting the research report",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/iap_5.png",
          // imageURL: "http://uxnd.in/images/iap_6.png",
          paragraph: [
            {
              title: "",
              content:
                "Quickly drafted a research report on the actual quotes, statements, or pain points of the end-users and discussed the report with the stakeholder team and jolted down the user stories.",
            },
          ],
        },
        {
          title: "Making it to the backlog",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/iap_7.png",
          paragraph: [
            {
              title: "",
              content:
                "User stories were written and after prioritizing the UX issues with product management the improvement for the registration flow made it to the backlog.",
            },
          ],
        },
        {
          title: "First improvement of the flow",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/iap_8.png",
          paragraph: [],
        },
        {
          title: "",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/iap_9.png",
          paragraph: [
            {
              title: "",
              content: "First improvement of the flow",
            },
          ],
        },
        {
          title: "",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/iap_10.png",
          paragraph: [
            {
              title: "",
              content: "Help user with project details.",
            },
          ],
        },
        {
          title: "",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/iap_11.png",
          paragraph: [
            {
              title: "",
              content: "Invite service provider or do this later.",
            },
          ],
        },
        {
          title: "Test and learn",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/iap_12.png",
          // imageURL: "http://uxnd.in/images/iap_13.png",
          paragraph: [
            {
              title: "Connect with the end-users",
              content:
                "Activity: Innovation market </br></br>What we have done:</br></br>Testing the prototype & concept with the end-user. </br></br>Question: Should we give the mechanic the possibility to create a project by himself?</br>Answer: Small installation companies need more flexibility. Bigger installation companies prepare the project first.",
            },
            {
              title: "",
              content:
                "Activity: Workshop/feedback session with:</br>End-user (focus group) </br>Product management</br>Product marketer</br>UXD</br></br>Agenda:</br>Discussion on topics/concepts</br>Testing the improved registration flow</br>Lunch",
            },
          ],
        },
        {
          title: "Make it look good: Visual Design",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/iap_14.png",
          paragraph: [],
        },
      ],
    },
  },
  {
    id: "3",
    title: "Dynalite Control ",
    description:
      "Allows to manage scenes, control individual channels and apply schedules of the Philips Dynalite system for residential and commercial spaces.",
    thumbnailURL: "http://uxnd.in/images/dynalitecontrol_thumbnail.png",
    imageURL: "http://uxnd.in/images/dynalitecontrol_header.png",
    appStoreLink: {
      apple:
        "https://apps.apple.com/us/app/philips-dynalite-control/id1339712617",
    },
    details: {
      title: "",
      subTitle: "",
      content: [
        {
          title: "About the app",
          layout: "horizontal",
          imageURL: "",
          paragraph: [
            {
              title: "",
              content:
                "The Philips Dynalite control provides mobile control of the Philips Dynalite system in both residential and commercial applications. This app allows to manage scenes, control individual channels and apply schedules.",
            },
          ],
        },
        {
          title: "Storyboarding",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/dyn1.png",
          paragraph: [
            {
              title: "",
              content:
                "Storyboarding helped me understand the flow of my user’s interaction with a product. It gave me a clear sense of what’s really important for the users.",
            },
          ],
        },
        {
          title: "Task flow diagram",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/dyn_21.png",
          // imageURL: "http://uxnd.in/images/dyn_22.png",
          paragraph: [
            {
              title: "",
              content:
                "I created task flows to validate the understanding of user goals, common scenarios, and tasks. It helped in surfacing any obstacles in the way of users achieving their goal.",
            },
          ],
        },
        {
          title: "Rapid prototyping",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/dyn_23.png",
          paragraph: [
            {
              title: "",
              content: "",
            },
          ],
        },
        {
          title: "User interviews",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/dyn_28.png",
          paragraph: [
            {
              title: "",
              content:
                "Created few questionnaires for the remote user interview sessions in order to receive some early feedback on the app and also get some quantitaive results so that we can make changes in the app design and architecture.",
            },
          ],
        },
        {
          title: "Wireframing",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/dyn_30.png",
          paragraph: [
            {
              title: "",
              content: "First improvement of the flow",
            },
          ],
        },
      ],
    },
  },
  {
    id: "4",
    title: "Philips Hue",
    description:
      "Easily organize individual lights into rooms switch on/off or change the color or brightness of all the lights to match your mood or your activity at your residence.",
    thumbnailURL: "http://uxnd.in/images/philipshue_thumbnail.png",
    imageURL: "http://uxnd.in/images/philipshue_header.png",
    appStoreLink: {
      apple: "https://apps.apple.com/us/app/philips-hue/id1055281310",
      android:
        "https://play.google.com/store/apps/details?id=com.philips.lighting.hue2",
    },
    details: {
      title: "Case study:",
      subTitle: "Improve Scene Management",
      content: [
        {
          title: "Drafting the problem statement",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/hue2.png",
          paragraph: [
            {
              title: "",
              content:
                "The Philips Hue product line offers a range of variants aimed to help people enhance their light experience in rooms at home. The iintention is for people to combine bulbs in a single room and inspire them to create unique lighting effects. One of the unique selling points of Philips Hue is that people can combine the light of multiple bulbs to create awesome gradient-like effects that are incomparable to regular lighting system. These combinations are calles ‘Scenes’. </br></br>However, this is not how the product is currently being used by the majority of the existing customers. In a recent survey only 46% of users said that they use the scene feature regularly, and only 23% stated that they create and actively use their own scenes.",
            },
          ],
        },
        {
          title: "User interviews",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/hue_1.png",
          paragraph: [
            {
              title: "",
              content:
                "I wanted to explore active users’ experiences with the scenes feature and how they are currently using it. Exploring their needs and pain points. The goal was to determine what oppurtunities may exist and to find out whether these user groups are satisfied with the current UI.</br></br>Mode: Remote Interview</br>No. of participants: 8</br>Time taken: 30 minutes",
            },
          ],
        },
        {
          title: "Composting the data",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/hue_3.png",
          paragraph: [
            {
              title: "",
              content:
                "Structure notes were taken during the interviews. These notes included actual quotes, needs, wishes or pain points.</br>After all the interviews were conductedn clusters were formmed from the notes. Ex: similar statements, needs, wishes and pain points were clustered under the respective headings.</br>Subsequently, “How might we” questions were derived from the most important questions. These are for simplification, since it is east to develop a solution for a question, rather than for a topic. The HMWs were then evaluated and afterwards idea sketches for the most important HMWs were developed.</br></br>To prioritize the features and focus on one or two a value/effort matrix was used.",
            },
          ],
        },
        {
          title: "User journey and rapid prototyping",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/hue_4.png",
          paragraph: [
            {
              title: "",
              content:
                "Personas and profiles were created as the user profiles were mainly based on assumptions. Actual qualitative and quantitative user research was missing. In a team session, I collected all the assumptions out and populated my persona, quick and dirty. By this I made sure that everybody is heard and opinions are formalized.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "5",
    title: "Service Tag",
    description:
      "View relevant luminaire configuration information and identifying spare parts needed.  LED drivers can be programmed to factory settings using Near Field Communication (NFC) technology for street lamp propositions.",
    thumbnailURL: "http://uxnd.in/images/servicetag_thumbnail.png",
    imageURL: "http://uxnd.in/images/servicetag_header.png",
    appStoreLink: {
      apple: "https://apps.apple.com/us/app/signify-service-tag/id1289722114",
      android:
        "https://play.google.com/store/apps/details?id=com.philips.servicetag",
    },
    details: {
      title: "",
      subTitle: "",
      content: [
        {
          title: "Product revamp and adding new flows",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/st1",
          paragraph: [
            {
              title: "",
              content:
                "The product needed a deisgn revamp, Service Tag 2.0. It also wanted a better user experience and there were also few new features to be added to the application.</br></br>The requirements came from the marketing and the business analysts. The new features were already promised to the customers for the upcoming version. I tried to get as much user insights from the Project managemnt team who had directly dealt with the customers to discuss in the new features.",
            },
          ],
        },
        {
          title: "User stories",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/st2.png",
          paragraph: [
            {
              title: "",
              content:
                "I started writing down user stories in order to better understand the requirements from the perspective of a user. I started story mapping since there were many different user’s touchpoints throughout the app.",
            },
          ],
        },
        {
          title: "Task flow diagram",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/dst_3.png",
          paragraph: [
            {
              title: "",
              content:
                "I created task flows to validate the understanding of user goals, common scenarios, and tasks,. It helped in surfacing any obstacles in the way of users achieving their goal.",
            },
          ],
        },
        {
          title: "Wireframing the flows",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/st_4.png",
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
    id: "6",
    title: "Interact Retail HQ",
    description:
      "Create flexible retail spaces, trigger specific shopper behaviors through zoning and layers of light, deliver location- basedoffers to shoppers on their smart phone via the app",
    thumbnailURL: "http://uxnd.in/images/interactretailhq_thumbnail.png",
    imageURL: "http://uxnd.in/images/interactretailhq_header.png",
    appStoreLink: {},
    details: {
      title: "",
      subTitle: "",
      content: [
        {
          title: "What can the app do?",
          layout: "horizontal",
          imageURL: "http://uxnd.in/images/hq1",
          paragraph: [
            {
              title: "",
              content:
                "It provides various monitor, manage, and maintain capabilities to retail Headquarters, to ensure the retail shops follow the lighting concept(s) as defined by Headquarters and the lighting is functioning well. </br> • Scene management for stunning and flexible retail spaces </br> • Energy optimization to decrease operational expenses</br>• Lighting management to manage and monitor your lighting </br>• Indoor navigation providing location based marketing opportunities </br>• Location analytics to understand shopper flows in the store",
            },
          ],
        },
        {
          title: "The BIG picture",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/hq2.png",
          paragraph: [
            {
              title: "",
              content:
                "Based on the initial research, we drafted a ‘Big picture’to understand who is involved when and whereand how we can serve them best in that context.",
            },
          ],
        },
        {
          title: "Co-create ‘Design doing’ workshops",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/hq4.png",
          paragraph: [
            {
              title: "",
              content:
                "Co-creative ‘design doing’ workshops. People from different disciplines join forces to discover and understand the formula and facility mngr’s real needs, and work towards a shared understanding of the challenges and goals.",
            },
          ],
        },
        {
          title: "To-be user journey",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/hq5.png",
          // imageURL: "http://uxnd.in/images/hq6.png",
          paragraph: [
            {
              title: "",
              content:
                "Helped us to understand the big and smaller steps and keep track of the experience.",
            },
          ],
        },
        {
          title: "Wireframing",
          layout: "vertical",
          imageURL: "http://uxnd.in/images/hq7.png",
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
    id: "7",
    title: "Interact Sports",
    description:
      "Monitor, manage and optimize connected lighting across the entire stadium. Manage venue and audience as efficiently as possible using accurate data and insights. ",
    thumbnailURL: "http://uxnd.in/images/interactsports_thumbnail.png",
    imageURL: "http://uxnd.in/images/interactsports_header.png",
    appStoreLink: {},
  },
  {
    id: "8",
    title: "Check My Trip",
    description:
      "A complete travel itinerary tool, bringing you flight information and alerts, travel services and extras to get you smoothly from door to door.",
    thumbnailURL: "http://uxnd.in/images/checkmytrip_thumbnail.png",
    imageURL: "http://uxnd.in/images/checkmytrip_header.png",
    appStoreLink: {},
  },
  {
    id: "9",
    title: "Amadeus e-Travel Management",
    description:
      "Corporate booking tool that enables your travellers to manage their complete itineraries aligned with company’s guidelines.",
    thumbnailURL: "http://uxnd.in/images/etravel_thumbnail.png",
    imageURL: "http://uxnd.in/images/etravel_header.png",
    appStoreLink: {},
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
  sectionTitle: "greeting",
  menuDisplay: false,
  type: "greetings",
  data: {
    greeting: "Hi There!",
    title: "I'm",
    subTitle: "Megalatha",
    description:
      "An User Experience and Interaction Designer based in Bangalore, India with experience in delivering user-centric Interfaces for surface UIs. I'm passionate about rendering intuitive UIs for people and thereby enrich the overall customer experience...",
    imageURL: "https://uxnd.in/images/home_bg_plant.png",
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
    resumeLink: "https://uxnd.in/resume/Megalatha_resume.pdf",
    imageURL: "https://uxnd.in/images/mega.jpg",
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
    imageURL: "https://uxnd.in/images/goodat_bg.png",
    content: [
      {
        skills: [
          {
            title: "Design & Research",
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
            ],
          },
          {
            title: "Programming",
            content: ["HTML", "CSS", "Jquery", "JavaScript"],
          },
        ],
      },
      {
        skills: [
          {
            title: "Tools",
            content: [
              "Sketch",
              "InVision App + Craft",
              "Adobe XD",
              "Adobe Photoshop",
              "Miro",
              "Trello",
            ],
          },
          {
            title: "Collaboration",
            content: [
              "SAFe Practitioner",
              "SAFe PM/PO",
              "Product Ownership",
              "Psychology Counselling",
            ],
          },
        ],
      },
    ],
  },
};

const toolsIUse = {
  title: "Tools I Use",
  display: false,
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
    title: "Contact",
    subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: socialMediaLinks.phoneNumber,
    emailAddress: socialMediaLinks.gmail,
    socialMediaLinks,
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
  logo: "https://uxnd.in/logo.png",
};

export { illustration, workExperiences, portfolio, greeting };
