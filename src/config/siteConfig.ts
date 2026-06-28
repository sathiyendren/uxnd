// ─── Site-wide configuration ────────────────────────────────────────────────
// All content, navigation, portfolio projects and case study sections live here.
// To update the portfolio, edit the `portfolio` array.
// To add a new page to the nav, add an entry to `nav`.

export interface NavItem {
  label: string
  path: string
}

export interface Testimonial {
  name: string
  title: string
  quote: string
  photo?: string
  initials: string
  avatarColor: string
  linkedinUrl?: string
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  responsibilities: string[]
}

export interface SkillCategory {
  name: string
  items: string[]
  icon: string
  description: string
  proficiency: number  // 0–100
}

export interface RadarAxis {
  label: string
  shortLabel: string
  value: number  // 0–1
}

export interface CaseStudySection {
  type: 'heading' | 'text' | 'bullets' | 'images' | 'challenge' | 'grid-images' | 'widget-options'
  title?: string
  content?: string
  items?: string[]
  images?: { src: string; alt?: string; caption?: string }[]
  highlight?: string
  options?: { label: string; feedback: string[] }[]
}

export interface Project {
  id: string
  slug: string
  title: string
  period: string
  shortDescription: string
  description: string
  role: string
  responsibilities: string[]
  thumbnail: string
  thumbnailAlt?: string
  thumbnailFit?: 'cover' | 'contain' | 'top'
  passwordProtected?: boolean
  passwordHash?: string  // btoa encoded
  nextProject?: string
  prevProject?: string
  sections: CaseStudySection[]
}

// ─── Person ─────────────────────────────────────────────────────────────────

export const person = {
  name: 'Megalatha Sankaraiya',
  shortName: 'Megalatha S',
  title: 'Senior Manager in UX',
  location: 'Greater Atlanta, US',
  email: 'iammega@gmail.com',
  phone: '+1 404 740 4814',
  website: 'www.uxnd.in',
  linkedin: 'https://www.linkedin.com/in/megalatha-s-0a679816/',
  logo: '/public/ml-logo-11@2x.png',
  photo: '/public/mega-1@2x.png',
  resumePdf: '/public/Megalatha_Sankaraiya_Resume.pdf',
}

// ─── Navigation ─────────────────────────────────────────────────────────────

export const nav: NavItem[] = [
  { label: 'About Me', path: '/about' },
  { label: 'My Skill Set', path: '/skills' },
  { label: 'Portfolio', path: '/portfolio' },
]

// ─── Home page ───────────────────────────────────────────────────────────────

export const home = {
  headline: "Greetings, I'm Megalatha",
  subheadline: 'an experienced Senior Manager in UX based in Greater Atlanta, US.',
  description:
    'My primary areas of focus include driving innovation, delivering exceptional user experiences, and leading cross-functional teams. I specialize in aligning business goals, team priorities, and user needs to foster a user-centered culture.',
  tagline:
    'I assist in fostering UX maturity within companies and creating an environment where designers can thrive and excel.',
  cta: 'Explore my profile further',
}

// ─── About page ──────────────────────────────────────────────────────────────

export const about = {
  bio: [
    'Specializing in UX design and leadership with over <strong>16 years</strong>, my expertise lies in assisting software design teams in tackling intricate challenges for renowned brands in various sectors, including consumer, enterprise, and B2B environments. Through my work, I have made a positive impact on the lives of both team members and users within esteemed organizations such as <strong>Target, Philips, Amadeus, Fourkites</strong>, and many others.',
    'My expertise lies in guiding teams to cultivate autonomy, which in turn drives innovation, delivers impactful outcomes, and enhances lives. I have a servant-leadership philosophy that revolves around promoting autonomy, practicing radical candor, fostering principles-based accountability, and facilitating mutually-beneficial career development. By prioritizing these principles, I strive to achieve tangible results that not only contribute to the team\'s success but also boost company profitability.',
    'Throughout my career, I have gained extensive experience across a wide range of industries. These include Retail, Fashion, Airline, Airport management systems, Travel, Tourism, Lighting for Residential, Office, Sports, Recreational areas, Hardware manufacturing and more. This diverse background has equipped me with a deep understanding of industry-specific challenges and the ability to adapt and excel in various contexts.',
  ],
  experienceAreas: [
    { label: 'Visual Design', years: 7 },
    { label: 'UX/UI Design', years: 12 },
    { label: 'Leadership', years: 10 },
    { label: 'Design Ops', years: 5 },
    { label: 'Proj. Mngmt.', years: 5 },
  ],
  leadershipTitle: 'MY LEADERSHIP OUTLOOK',
  leadership: [
    'The traditional image of a boss yelling instructions at their team is widely recognized as ineffective and unhelpful in terms of leadership. However, I hold the belief that the alternative image of a leader constantly working alongside their team is equally flawed. I have observed numerous leaders attempting to showcase their own expertise by taking on the role of the team lead in addition to their managerial responsibilities. Unfortunately, this mindset often leads to a host of issues, including inefficiency and high turnover rates.',
    'Instead, I prefer to relate myself as a leader who constructs and supports a bridge for my team. I inspire and provide a clear vision, establish connections, and remove obstacles. Most importantly, I enable my team members to perform my best work. However, it is essential to recognize that the responsibility for carrying out the work rests with the team, not solely with the manager. I understand the significance of granting autonomy while simultaneously enforcing accountability with my team.',
    'In my experience, I have discovered that creating and sustaining winning teams is best achieved through transparency, accountability, teamwork, and a sense of ownership. To assemble such teams, I meticulously hire exceptional individuals who possess the necessary skills and background to solve problems. I equip them with the tools, guidance, and training required for success and then give them the autonomy to flourish.',
    'Once the team is in place, my role becomes that of a navigator, providing clear direction by defining objectives and key results. I allow the team the flexibility to determine the best approach to achieve those objectives/results. Clear expectations are set, and both the team and I are held accountable for meeting them.',
    'To establish a culture of scalable innovation, I firmly believe in delegating decision-making and accountability to the furthest extent possible within the team. This approach fosters a collective of leaders rather than followers, empowering every team member to contribute and take ownership of their responsibilities.',
  ],
  testimonialsSectionTitle: 'WHAT MY COLLEAGUES HAVE TO SAY',
  testimonialsIntro:
    "Throughout my career, I've had the privilege of collaborating with exceptional individuals. Here are a few reflections from some of my esteemed colleagues on our shared experiences.",
  testimonials: [
    {
      name: 'LIEVEN VERDIN',
      title: 'Digital Design Lead',
      photo: '/public/mask-group@2x.png',
      initials: 'LV',
      avatarColor: '#4A7C8E',
      linkedinUrl: 'https://www.linkedin.com/in/lieven-verdin-149412/',
      quote:
        'When I started as Digital design lead, Megalatha was already pioneering UX-design in our studio in Bangalore. She made the initial connections with dev teams and POs which we much needed to take Signify\'s UX for prof services to the next level. She demonstrated the ability to serve and manage many businesses and stakeholders, often remote, never losing track of the end user and our internal UX-goals. She is ever learning, constructive as well as receptive as a global team player and certified as a SAFe PO/PM - which is really helpful when trying to improve value-focus and efficiency of your operations. And a part from being a nice, sincere person to work with, Megalatha is someone I came to rely on remotely.',
    },
    {
      name: 'LAURA CUNNINGHAM',
      title: 'Global Design Lead',
      photo: '/public/mask-group2@2x.png',
      initials: 'LC',
      avatarColor: '#7C4A8E',
      linkedinUrl: 'https://www.linkedin.com/in/lauracu/',
      quote:
        'At Signify (formerly Philips Lighting), Megalatha has demonstrated both attention to detail and the ability to manage many projects and stakeholders across the business. She communicated extremely well - a critically important skill when working with remote teams. Megalatha delivered extensive and well-considered designs and worked directly with development teams. She took on SAFe training to optimize the design/development process in her projects, making significant advancements in the team\'s way-of-working that improved delivery speed and quality. In addition, she is a strong collaborator when working alongside other designers and a pleasure to have on the team!',
    },
    {
      name: 'SANJEEV KUMAR PS',
      title: 'Director of Engineering and Site Leader',
      photo: '/public/mask-group3@2x.png',
      initials: 'SK',
      avatarColor: '#2E7D57',
      linkedinUrl: 'https://www.linkedin.com/in/sanjeevps/',
      quote:
        "Megalatha has been an awesome UX designer and has helped craft quite some intuitive mobile and web applications. She is well versed in all the techniques an UX designer should have in their reportorial. In many a projects she demonstrated successfully how UX can create a superlative impact both qualitatively and quantitatively. Her penchant to ace the the craft is so compelling that she took up a degree in human psychology, while also doing her day job! She has an amazing attitude with loads of energy that any team can leverage.",
    },
    {
      name: 'JULIJA BABRE',
      title: 'Enterprise Product Marketing',
      photo: '/public/mask-group1@2x.png',
      initials: 'JB',
      avatarColor: '#8E4A4A',
      linkedinUrl: 'https://www.linkedin.com/in/julijababre/',
      quote:
        "It was a great pleasure to work with Mega! She navigates the design process very well. She is very creative and is never scared to consider ideas that are deviating from the norm, which leads to creating something that can differentiate your product from that of your competitors. I wish I had more time working together with Mega!",
    },
  ] as Testimonial[],
  closingParagraphs: [
    'With a diverse range of experiences and developed techniques, I bring a unique advantage of understanding both the language of business and the impact our passionately designed products have on it.',
    'As a designer, I recognize the importance of designing not only products but also business strategies, processes, and team organizations. This aligns with the principles of Design Thinking, which emphasizes the role of design in shaping entire organizations. With years of employing design methodologies, I am well-equipped to facilitate this process and guide organizations towards smoother innovation and exceptional user experiences.',
    'By leveraging my expertise, I can help elevate the UX Maturity of the organization, enabling easier innovation and delivering outstanding experiences to the users.',
  ],
}

// ─── Skills page ─────────────────────────────────────────────────────────────

export const skills = {
  radar: [
    { label: 'Design & Research', shortLabel: 'Design', value: 0.95 },
    { label: 'Information Architecture', shortLabel: 'Info Arch', value: 0.85 },
    { label: 'Design Management', shortLabel: 'Leadership', value: 0.92 },
    { label: 'Collaboration', shortLabel: 'Collaboration', value: 0.90 },
    { label: 'Tools', shortLabel: 'Tools', value: 0.88 },
    { label: 'Programming', shortLabel: 'Dev Skills', value: 0.62 },
  ] as RadarAxis[],
  categories: [
    {
      name: 'Design & Research',
      icon: '✦',
      description: 'End-to-end UX craft — from discovery to high-fidelity delivery.',
      proficiency: 95,
      items: [
        'UX Design',
        'UI Design',
        'Interaction Design',
        'User Research',
        'User Interviews',
        'Contextual Inquiry',
        'Empathy Mapping',
        'Customer Journey Mapping',
        'Rapid Prototyping',
        'Usability Testing',
        'A/B Testing',
        'UX Writing',
        'Wireframing',
        'High-Fidelity Mockups',
        'Visual Design',
        'Quantitative & Qualitative Research',
      ],
    },
    {
      name: 'Information Architecture',
      icon: '◈',
      description: 'Structuring complex products into clear, navigable experiences.',
      proficiency: 85,
      items: [
        'Information Architecture',
        'Flow Charts',
        'User Journey Mapping',
        'Mental Models',
        'Personas',
        'Swim Lane Diagrams',
        'Card Sorting',
        'Taxonomy Design',
      ],
    },
    {
      name: 'Design Management',
      icon: '◎',
      description: 'Driving UX maturity, design ops, and team excellence at scale.',
      proficiency: 92,
      items: [
        'Design Operations (DesignOps)',
        'Design Systems',
        'Design Thinking',
        'UX Strategy',
        'UX Maturity',
        'Cross-functional Leadership',
        'Stakeholder Management',
        'UX Roadmap Planning',
        'Career Development & Mentoring',
        'Agile / SAFe Methodology',
      ],
    },
    {
      name: 'Collaboration',
      icon: '⬡',
      description: 'Cross-functional facilitation using proven agile methodologies.',
      proficiency: 90,
      items: [
        'Cross-functional Collaboration',
        'Affinity Mapping',
        'Design Sprints',
        'Design Critiques',
        'Workshop Facilitation',
        'Mind Mapping',
        'Story Mapping',
        'Product Ownership',
        'SAFe Practitioner',
        'SAFe PM/PO Certified',
        'Scrum / Agile',
        'Stakeholder Workshops',
      ],
    },
    {
      name: 'Tools',
      icon: '⊞',
      description: 'Industry-standard design and productivity tooling across platforms.',
      proficiency: 88,
      items: [
        'Figma',
        'Sketch',
        'InVision App + Craft',
        'Adobe XD',
        'Adobe Photoshop',
        'Miro',
        'Trello',
        'JIRA',
        'Confluence',
        'HotJar',
        'Google Analytics',
      ],
    },
    {
      name: 'Programming',
      icon: '‹›',
      description: 'Front-end literacy to collaborate fluently with engineering teams.',
      proficiency: 62,
      items: ['HTML', 'CSS / CSS3', 'jQuery', 'JavaScript', 'AutoCAD'],
    },
  ] as SkillCategory[],
  designOps: {
    title: 'My Design Ops Approach',
    intro: [
      'I firmly believe that establishing Design Operations is crucial for fostering UX maturity within any organization. It enables designers to work seamlessly with cross-functional teams, eliminating silos and promoting collaboration.',
      'Moreover, designers should strive to develop a strong business acumen to understand how their designs can drive meaningful change and impact the overall business objectives. With Design Ops in place, designers are empowered to focus on what they do best: DESIGN. It streamlines processes, provides necessary support, and creates an environment where designers can thrive and deliver exceptional work.',
    ],
    areas: [
      { title: 'Process & Workflow Management', body: 'Streamlining design processes, optimizing workflows, and ensuring efficient design operations to enhance productivity and collaboration.' },
      { title: 'Team & Resource Management', body: 'Effectively managing design teams, allocating resources, and ensuring the right skills and systems are in place for successful project execution.' },
      { title: 'Tools & Technology', body: 'Proficiency in design tools and software, staying updated on emerging technologies, and leveraging them effectively in design operations.' },
      { title: 'Cross-Functional Collaboration', body: 'Facilitating collaboration and communication between design, research, accessibility teams, and other stakeholders, fostering a multidisciplinary approach to problem-solving.' },
      { title: 'Metrics & Analytics', body: 'Utilizing data and analytics to measure design performance, track key metrics, and inform decision-making for continuous improvement in design operations.' },
      { title: 'Design System Implementation', body: 'Implementing and maintaining design systems and pattern libraries to ensure consistency, efficiency, and scalability in design workflows.' },
      { title: 'Change Management', body: 'Navigating organizational change, effectively communicating design-related initiatives, and driving adoption and acceptance within the company.' },
      { title: 'Stakeholder Management', body: 'Building and nurturing relationships with stakeholders at all levels, advocating for design, and aligning design operations with business goals and objectives.' },
      { title: 'Continuous Improvement', body: 'Fostering a culture of learning and growth within design teams, encouraging innovation, and actively seeking opportunities for continuous improvement in design operations.' },
      { title: 'Leadership & Strategic Thinking', body: 'Demonstrating leadership skills, strategic thinking, and the ability to align design operations with broader business objectives and strategies.' },
    ],
    closing:
      'By focusing on these areas, we can establish and enhance design operations within an organization, ensuring the effective integration of design practices and driving value for both users and the business.',
  },
}

// ─── Contact / Resume page ───────────────────────────────────────────────────

export const contactPage = {
  experience: [
    {
      company: 'Target (Bangalore, India)',
      role: 'Senior Manager UX',
      period: 'Jun 2022 – Feb 2023',
      responsibilities: [
        'Initiate the <strong>Design Ops</strong> with global and cross functional teams to improve the efficiency of design process, design guidelines, standards and information workflow. Work closely with senior management to <strong>align design initiatives</strong> with business goals and create seamless transitions.',
        'Lead and manage a team of designers including <strong>hiring, training, and mentoring</strong> team members in a decentralised design team environment. Provide guidance, set objectives, and ensure the team\'s overall performance and productivity.',
        'Oversee multiple design projects simultaneously and also <strong>collaborate with stakeholders, and cross functional teams</strong> to define the initial project scope and timelines. <strong>Allocate resources</strong> effectively, monitor progress, and ensure that projects are delivered on time and within budget.',
        'Act as a <strong>bridge between design teams and other departments</strong>, such as research, accessibility, marketing, engineering, and product management. Ensure that design requirements are understood, and that the design team\'s contributions are integrated seamlessly into the overall product ecosystem and <strong>avoid design debts.</strong>',
        'Responsible for maintaining high-quality design outputs. <strong>Review and provide feedback</strong> on individual design work along with the entire design team on a weekly call basis, ensuring that it meets the desired heuristics and standards of UX. Promote continuous improvement by encouraging the <strong>adoption of best practices, design innovation, exploring new design tools and technologies, and staying updated on industry trends.</strong>',
        'Involve in <strong>budget planning and resource allocation</strong>. Collaborate with finance and procurement departments to determine design-related expenses, such as software licenses, equipment, and external contractors. Optimize resource allocation to maximize efficiency and ensure that the team has the necessary <strong>tools and support</strong>.',
      ],
    },
    {
      company: 'Fourkites (Bangalore, India)',
      role: 'Senior Staff UX Designer',
      period: 'Sep 2021 – May 2022',
      responsibilities: [
        'Provided <strong>leadership and strategic direction in UX design initiatives</strong>. Collaborated with stakeholders to understand business goals, user needs, and project requirements, and translated them into effective UX design strategies.',
        'Conducted <strong>user research</strong> activities to gain insights into user behaviors, needs, and motivations. <strong>Analyzed research findings and data</strong> to inform design decisions and identify opportunities for improving the user experience.',
        'Defined the <strong>information architecture</strong> of digital products or platforms. Organized and structured content, navigation systems, and information hierarchies to ensure a logical and intuitive user experience.',
        '<strong>Designed and prototyped interactive user interfaces and experiences.</strong> Created wireframes, user flows, and prototypes to illustrate user interactions and validate design concepts through user testing and feedback.',
        '<strong>Developed and maintained design systems and guidelines</strong> that ensure consistency and coherence across different products or platforms. Defined design patterns, components, and style guides to guide the UX design process.',
        '<strong>Collaborated with cross-functional teams</strong> such as product managers, developers, visual designers and content writers. Worked closely with these teams to align on project goals, requirements, and ensure the successful implementation of UX design solutions.',
        'Integrated <strong>accessibility considerations into design solutions</strong> to ensure usability for users with disabilities. Advocated for inclusive design practices and considering diverse user needs and perspectives.',
        '<strong>Mentoring and guiding senior and junior UX designers</strong> by sharing knowledge, providing feedback, and fostering their professional growth. Collaborating with peers and contributing to a culture of collaboration and knowledge sharing within the UX design team.',
      ],
    },
    {
      company: 'Signify (Philips Lighting)',
      role: 'Senior Interaction Designer',
      period: 'Feb 2016 – Aug 2021',
      responsibilities: [
        'Took the initiative to <strong>work independently and provided guidance</strong> to two design teams based in Bangalore (BLR) and the Netherlands (NL).',
        'Led and <strong>managed the scrum teams</strong> within the Agile Release Train, ensuring smooth and efficient operations.',
        'Held <strong>SAFe certification</strong> as a Product Manager/Product Owner (PM/PO) and Scrum Master, demonstrating expertise in Agile methodologies.',
        'Managed and served <strong>multiple businesses and stakeholders remotely</strong>, ensuring effective communication and collaboration.',
        'Conducted <strong>remote user interviews and testing</strong>, as well as visited customer locations for ethnographic research purposes.',
        'Played a significant role in the <strong>development of the Design Language System</strong> \'Interact\', contributing valuable insights and ideas.',
        'Created and maintained <strong>product roadmaps for the Design teams</strong>, providing strategic direction for their work.',
        '<strong>Oversaw the entire design life cycle</strong>, from the requirement phase to the handover to development, and conducted both quantitative and qualitative research as needed.',
        'Contributed to <strong>program epic backlog</strong> and participated in product architectural discussions, influencing key decisions.',
        'Led and guided the design team in <strong>successful quarterly Program Increment planning</strong> events.',
        'Acted as an <strong>active Product Owner (PO)</strong> for several projects, proposing Minimum Viable Products (MVPs), writing user stories, and creating backlogs for the team to work on during Program Increments.',
      ],
    },
    {
      company: 'Amadeus',
      role: 'Senior Software Engineer',
      period: 'Feb 2013 – Feb 2016',
      responsibilities: [
        'User Interface design, wireframing and prototyping',
        'User Research and Analysis',
        'Information Architecture',
        'Design Systems and Guidelines',
        'Front-End Development',
        'Responsive Design',
        'Cross-Browser Compatibility',
        'Accessibility',
        'Version Control and Deployment',
      ],
    },
    {
      company: 'Nabler Web Solutions',
      role: 'Visualization Specialist',
      period: 'Oct 2012 – Feb 2013',
      responsibilities: [
        'Data Analysis and Interpretation',
        'Dashboard interaction design',
        'Data Mapping and spatial visualizations',
        'Transforming complex data into meaningful visual representations',
      ],
    },
    {
      company: 'Hawkzweb',
      role: 'Web Designer',
      period: 'Apr 2007 – Oct 2012',
      responsibilities: [
        'Graphic Design for Print and Digital Collateral',
        'Typography and Layout Design',
        'Image Editing and optimisation',
        'Branding and Identity Design',
        'Client Communication',
        'Content Management Systems (CMS)',
        'Web Graphics and Multimedia animations',
        'Responsive Design',
      ],
    },
  ] as ExperienceEntry[],
  certifications: [
    'Certified Usability Analyst (CUA) – Human Factors International (HFI)',
    'Project Manager / Product Owner – Scaled Agile Framework (SAFe)',
  ],
  education: [
    { degree: 'M.Sc Psychology (Counselling Psychology)', status: 'Pursuing' },
    { degree: 'B.C.A – Bachelor of Computer Applications', status: '' },
  ],
  skills: [
    {
      label: 'Design',
      value:
        'User Research, Interaction Design, Data driven design decision making, User Testing, Information Architecture, Visual Design, Usability Evaluation, UX Writing, Prototyping and Tools, Collaboration and Communication, Empathy and User Advocacy, Analytical Thinking, Accessibility, Contextual Inquiries, Empathy mapping, Customer journey mapping, Rapid prototyping, Story telling with prototypes',
    },
    {
      label: 'Design Management',
      value:
        'Design Thinking, Leadership, Communication, Project Management, Team Building and Collaboration, Strategic Thinking, Design Evaluation and Metrics, Design Operations, Design Systems, Business Acumen, Adaptability and Resilience, Continuous Learning',
    },
    {
      label: 'Tools',
      value: 'Sketch, InVision App + Craft, Adobe XD, Adobe Photoshop, Miro, Trello',
    },
    {
      label: 'Programming',
      value: 'HTML, CSS, jQuery, JavaScript, AutoCAD',
    },
    {
      label: 'Strategy & Collaboration',
      value:
        'Design thinking, UX strategy, Product Design, SAFe Practitioner, SAFe PM/PO, Product Ownership, Psychology Counselling',
    },
  ],
}

// ─── Portfolio projects ───────────────────────────────────────────────────────

export const portfolio: Project[] = [
  {
    id: 'easyaim',
    slug: 'easyaim',
    title: 'Interact Retail EasyAim',
    period: '2019 – 2020',
    shortDescription:
      'Collaboratively designed with visual merchandisers for the fashion industry, a motorized spot integrated with an intuitive mobile application aims to enhance the retail experience.',
    description:
      'Facilitating seamless aiming and adjustment of lighting settings in the shop window for Visual Merchandisers.',
    role: 'Lead Designer and Researcher',
    responsibilities: [
      'Mentor and guide a team of 2 UX and 1 UI Designer',
      'User Research: Explorations and User interviews',
      'UX design: Brainstorming, Facilitation, Data Analysis',
      'User Testing',
    ],
    thumbnail: '/public/zarawindowsoxfordstreetlondon03-1@2x.png',
    thumbnailFit: 'cover',
    nextProject: 'retailhq',
    sections: [
      {
        type: 'heading',
        title: 'PROBLEM',
        content: 'Visual Merchandisers risk themselves while adjusting the shop window lighting which sometimes are above 4.5 mtrs.',
      },
      {
        type: 'text',
        title: 'BACKGROUND',
        content: 'Many fashion retailers change the content of their shop window every 2 to 3 weeks. This means that the lighting has to change as well. Adjusting lighting in the shop window can be cumbersome or even unsafe. It requires at least 2 expert personnel to get this job completed. It is a <strong>state of being cautious and yet remaining creative</strong>.',
      },
      {
        type: 'images',
        images: [{ src: '/public/zarawindowsoxfordstreetlondon03-1@2x.png', alt: 'Zara shop window — Oxford Street, London' }],
      },
      {
        type: 'challenge',
        title: 'DESIGN CHALLENGE',
        highlight: 'Developing a 2D interaction UI that effectively controlled the pan/tilt movements of the luminaire within a 3D space.',
      },
      {
        type: 'bullets',
        title: 'THE SOLUTION — UI WIDGET TO PAN AND TILT SPOTS',
        items: [
          'Touch sensitive widget enabling pan and tilt operations with accuracy',
          'Haptic feedbacks for intuitive hand-eye coordination',
          'Intuitive response when the spot reaches threshold degrees of pan and tilt',
        ],
      },
      {
        type: 'bullets',
        title: 'CHOOSE APPROPRIATE SHOP WINDOW',
        items: [
          'Overview of all shop windows per store',
          'On/Off light controls for particular shop windows',
          'Status visibility of non-reachable spots',
          'Assign new spots capability',
        ],
      },
      {
        type: 'bullets',
        title: 'ASSIGN NEW SPOTS',
        items: [
          'Ability to assign/unassign spots from shop windows',
          'Scan for newly added spots on Dali network',
          'Seamless switching between shop windows',
        ],
      },
      {
        type: 'text',
        title: 'UNDERSTANDING THE ARCHITECTURE',
        content: 'We engaged in discussions with the system architect, product architect, product design engineers, software development engineers, and project managers to gain a comprehensive understanding of the DALI commissioning ecosystem. These discussions allowed us to stay informed about the limitations and technical constraints involved in the process.',
      },
      {
        type: 'images',
        title: 'SYSTEM ARCHITECTURE',
        images: [
          { src: '/public/image-14@2x.png', alt: 'System architecture diagram' },
          { src: '/public/image-18@2x.png', alt: 'Architecture overview' },
        ],
      },
      {
        type: 'text',
        title: 'COMPETITOR ANALYSIS',
        content: 'In the industry, there was a lack of competition in terms of GUI-based management solutions for motorized spotlights. As a result, we conducted an analysis of interfaces utilized in the management of lighting systems in large auditoriums, hands-free gimbal camera operations, and CCTV operating interfaces.',
      },
      {
        type: 'images',
        title: 'COMPETITOR REFERENCES',
        images: [
          { src: '/public/image-31@2x.png', alt: 'Flos', caption: 'Flos' },
          { src: '/public/image-32@2x.png', alt: 'Alight', caption: 'Alight' },
          { src: '/public/image-36@2x.png', alt: 'Rhino Arc II', caption: 'Rhino Arc II' },
        ],
      },
      {
        type: 'text',
        title: 'USER INTERVIEWS',
        content: 'After brainstorming the problem statement with internal stakeholders, we recognized the significance of the EasyAim solution for Visual Merchandisers at Zara. Being located remotely in India, we had to find effective methods to <strong>empathize with our users.</strong> We conducted extensive research by reading job descriptions of relevant personas online, exploring LinkedIn profiles to understand their roles, and conducting remote meetings to understand their shop window decoration processes.',
      },
      {
        type: 'images',
        title: 'PERSONAS',
        images: [
          { src: '/public/gettyimages1229319543612x612-1@2x.png', alt: 'Visual merchandiser persona' },
          { src: '/public/screenshot-20181124-at-629@2x.png', alt: 'User research notes' },
          { src: '/public/screenshot-20181124-at-644@2x.png', alt: 'Research session' },
        ],
      },
      {
        type: 'text',
        title: 'STORYBOARDING',
        content: 'After finalizing the blueprint of the product architecture and addressing other technical intricacies with our internal stakeholders, our next goal was to present the solution in a manner that customers could easily grasp and comprehend. I developed a storyboard that aimed to clarify our assumptions and visually depict the user journey and experience.',
      },
      {
        type: 'images',
        title: 'STORYBOARD',
        images: [{ src: '/public/image-39@2x.png', alt: 'Storyboard' }],
      },
      {
        type: 'text',
        title: 'DESIGNING THE WIDGET',
        content: 'Designing an intuitive and seamless widget for managing and precisely aiming the light was paramount for the application. Our design process began by thoroughly understanding the <strong>capabilities and limitations of the motorized spot</strong>, ensuring our designs aligned with its functionality.',
      },
      {
        type: 'images',
        title: 'WIDGET EXPLORATIONS',
        images: [
          { src: '/public/image-20@2x.png', alt: 'Widget option 1 — Button-based', caption: 'Option 1: Button-based — "Hard to understand which arrows are for pan and which for tilt"' },
          { src: '/public/image-19@2x.png', alt: 'Widget option 2 — Semi-circle drag', caption: 'Option 2: Semi-circle drag — "Precision control is missing"' },
          { src: '/public/image-22@2x.png', alt: 'Widget option 3 — Center circle drag', caption: 'Option 3: Center circle drag — "Hard to establish hand-eye coordination"' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/image-16@2x.png', alt: 'Widget option 4 — Slider-based', caption: 'Option 4: Slider-based — "UI does represent the actual position of the beam"' },
          { src: '/public/image-17@2x.png', alt: 'Widget option 5 — Gyroscopic', caption: 'Option 5: Gyroscopic — "UI does NOT represent the actual position of the beam"' },
          { src: '/public/easyaimwheel-1@2x.png', alt: 'Widget final — Wheel', caption: 'Final: Wheel widget — selected for its intuitive pan/tilt control' },
        ],
      },
      {
        type: 'text',
        title: 'MIND MAPPING',
        content: 'Through interdisciplinary discussions, we collaboratively populated a Scrum board to outline the tasks required for creating the Minimum Viable Product (MVP) for our initial beta release.',
      },
      {
        type: 'images',
        title: 'MIND MAP',
        images: [
          { src: '/public/image-42@2x.png', alt: 'Mind map 1' },
          { src: '/public/image-43@2x.png', alt: 'Mind map 2' },
          { src: '/public/image-44@2x.png', alt: 'Mind map 3' },
        ],
      },
      {
        type: 'text',
        title: 'WIREFRAMING',
        content: 'To capture the high-level interaction patterns of the application, we utilized quick hand sketches. This allowed us to explore and test our assumptions early in the design process, gaining valuable insights from the start.',
      },
      {
        type: 'images',
        title: 'WIREFRAMES',
        images: [
          { src: '/public/pencilsketch1-2@2x.png', alt: 'Pencil sketch wireframes' },
          { src: '/public/image-57@2x.png', alt: 'Wireframe detail' },
          { src: '/public/image-58@2x.png', alt: 'Wireframe screens' },
        ],
      },
      {
        type: 'images',
        title: 'HIGH FIDELITY SCREENS',
        images: [
          { src: '/public/image-61@2x.png', alt: 'App screen — shop window selection' },
          { src: '/public/image-62@2x.png', alt: 'App screen — spot listing' },
          { src: '/public/image-63@2x.png', alt: 'App screen — spot detail' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/image-68@2x.png', alt: 'App screen — widget view' },
          { src: '/public/image-69@2x.png', alt: 'App screen — pan/tilt widget' },
          { src: '/public/image-70@2x.png', alt: 'App screen — controls' },
        ],
      },
      {
        type: 'images',
        title: 'THE FINAL SCREENS',
        images: [
          { src: '/public/image-81@2x.png', alt: 'Final screen 1' },
          { src: '/public/image-82@2x.png', alt: 'Final screen 2' },
          { src: '/public/image-86@2x.png', alt: 'Final screen 3' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/image-83@2x.png', alt: 'Final screen 4' },
          { src: '/public/image-84@2x.png', alt: 'Final screen 5' },
          { src: '/public/image-85@2x.png', alt: 'Final screen 6' },
        ],
      },
      {
        type: 'text',
        title: 'DEMO TESTING',
        content: 'We invited a select group of ZARA personnel to our testing laboratory for a sample test, where they assessed the integrated hardware and UI. My interviewees were 3x more likely to be efficient and save cost by using the EasyAim solution.',
      },
      {
        type: 'images',
        title: 'TESTING SESSION',
        images: [
          { src: '/public/easyaim-6-1@2x.png', alt: 'Demo testing session' },
          { src: '/public/p6@2x.png', alt: 'Testing with ZARA team' },
        ],
      },
      {
        type: 'bullets',
        title: 'CONCLUSION + LEARNINGS',
        items: [
          '<strong>Iterate relentlessly.</strong> We created approximately 20 different types of UI widget sketches and encountered challenges while conducting usability tests.',
          '<strong>Enhance interactions.</strong> Some design decisions were occasionally influenced by stakeholders. I learned the importance of effectively communicating my logic and reasoning to demonstrate why certain approaches were not working.',
          '<strong>Articulate requirements to materialize your ideas.</strong> By discussing priorities and effort levels with the engineering team, I was able to prioritize design efforts and foster trust between design and engineering.',
          '<strong>You didn\'t fail – you just found 100 ways that didn\'t work.</strong> Embrace failure as part of the process. From identifying UI mistakes to uncovering fundamental UX issues, we actively sought feedback from peers and stakeholders.',
        ],
      },
    ],
  },
  {
    id: 'retailhq',
    slug: 'retailhq',
    title: 'Interact Retail HQ',
    period: '2019 – 2020',
    shortDescription:
      'Transform retail spaces into adaptable environments by implementing zoning strategies and utilizing layers of lighting to elicit desired shopper behaviors.',
    description:
      'Enhance the shopping experience by leveraging location-based technology to deliver personalized offers to shoppers directly on their smartphones through the dedicated mobile app.',
    role: 'Lead Designer and Researcher',
    responsibilities: [
      'Mentor and guide 1 UX and 1 UI Designer',
      'Design thinking workshop',
      'User Research & Testing',
      'UX and UI design',
    ],
    thumbnail: '/public/retail-install-1@2x.png',
    nextProject: 'interactpro',
    prevProject: 'easyaim',
    sections: [
      {
        type: 'heading',
        title: 'PROBLEM',
        content: 'Retail Headquarters have less or no control over creating unified shopping experiences across their stores.',
      },
      {
        type: 'images',
        images: [{ src: '/public/problem-statement-1@2x.png', alt: 'Problem statement' }],
      },
      {
        type: 'challenge',
        title: 'DESIGN CHALLENGE',
        highlight: 'Enable Retail Headquarters to remotely create and deploy store lighting and improve overall shopper experience.',
      },
      {
        type: 'bullets',
        title: 'THE SOLUTION — WHAT CAN IT DO?',
        items: [
          'Scene management for stunning and flexible retail spaces',
          'Energy optimization to decrease operational expenses',
          'Lighting management to monitor and control lighting across all stores',
          'Indoor navigation providing location-based marketing opportunities',
          'Location analytics to understand shopper flows and behaviors',
        ],
      },
      {
        type: 'images',
        title: 'SOLUTION OVERVIEW',
        images: [{ src: '/public/solution-big-full-1@2x.png', alt: 'Solution overview' }],
      },
      {
        type: 'text',
        title: 'THE BIG PICTURE — UNDERSTANDING THE ECOSYSTEM',
        content: 'The Retail industry presented us with a multitude of potential opportunities. We recognized the importance of not getting caught up in building solutions without a clear understanding of the most pressing problem faced by our users. We began by mapping the current eco-system of the Retail industry.',
      },
      {
        type: 'images',
        title: 'ECOSYSTEM MAP',
        images: [
          { src: '/public/hq1-1@2x.png', alt: 'Retail ecosystem map' },
          { src: '/public/hq4-1@2x.png', alt: 'Ecosystem detail' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/hq5-1@2x.png', alt: 'Retail HQ context 1' },
          { src: '/public/hq6-1@2x.png', alt: 'Retail HQ context 2' },
          { src: '/public/hq7@2x.png', alt: 'Retail HQ context 3' },
        ],
      },
      {
        type: 'text',
        title: 'WHY DESIGN THINKING?',
        content: 'People from different disciplines join forces to discover and understand the Formula Manager\'s and Facility Manager\'s real needs, working towards a shared understanding of the challenges and goals. Design Thinking helped us focus on the right problem before jumping to solutions.',
      },
      {
        type: 'images',
        title: 'CO-CREATE DESIGN THINKING WORKSHOPS',
        images: [
          { src: '/public/image-112@2x.png', alt: 'Design thinking workshop' },
          { src: '/public/image-113@2x.png', alt: 'Workshop session' },
          { src: '/public/image-114@2x.png', alt: 'Workshop activities' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/image-115@2x.png', alt: 'Empathy mapping' },
          { src: '/public/image-116@2x.png', alt: 'Clustering insights' },
          { src: '/public/image-117@2x.png', alt: 'Need statements' },
        ],
      },
      {
        type: 'text',
        title: 'PERSONAS',
        content: '<strong>Mike — Formula Manager (25 yrs)</strong> — Develops new store concepts, designs Omnichannel Customer journeys, manages merchandising projects. KPIs: ROI, Efficiency and speed. Pain points: Tools unsuitable for experimentation, uncertainty in roll-out.<br/><br/><strong>Patrick — Facility Manager (37 yrs)</strong> — Manages store infrastructure maintenance, renovations, and energy. KPIs: Cost of infrastructure operations, energy bill. Pain points: Depends on many people, tracking progress is labor-intensive.',
      },
      {
        type: 'images',
        title: 'PERSONA MAPS',
        images: [
          { src: '/public/image-88@2x.png', alt: 'Formula Manager persona' },
          { src: '/public/image-89@2x.png', alt: 'Facility Manager persona' },
        ],
      },
      {
        type: 'images',
        title: 'EMPATHY MAPPING + AS-IS SCENARIO',
        images: [
          { src: '/public/image-91@2x.png', alt: 'Empathy map' },
          { src: '/public/image-92@2x.png', alt: 'As-is scenario' },
          { src: '/public/image-93@2x.png', alt: 'Scenario mapping' },
        ],
      },
      {
        type: 'images',
        title: 'TO-BE USER JOURNEY',
        images: [
          { src: '/public/01flow-1@2x.png', alt: 'To-be user journey flow' },
          { src: '/public/image-94@2x.png', alt: 'Journey detail' },
        ],
      },
      {
        type: 'images',
        title: 'BIG IDEAS + HILL STATEMENTS',
        images: [
          { src: '/public/image-96@2x.png', alt: 'Big ideas' },
          { src: '/public/image-98@2x.png', alt: 'Hill statements' },
          { src: '/public/image-99@2x.png', alt: 'Need statements' },
        ],
      },
      {
        type: 'images',
        title: 'WIREFRAMING',
        images: [
          { src: '/public/image-100@2x.png', alt: 'Wireframe 1' },
          { src: '/public/image-101@2x.png', alt: 'Wireframe 2' },
          { src: '/public/image-102@2x.png', alt: 'Wireframe 3' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/image-103@2x.png', alt: 'Wireframe 4' },
          { src: '/public/image-104@2x.png', alt: 'Wireframe 5' },
          { src: '/public/image-2-1@2x.png', alt: 'Wireframe 6' },
        ],
      },
      {
        type: 'images',
        title: 'UI SCREENS — FORMAT & STORE SELECTION',
        images: [
          { src: '/public/image-121@2x.png', alt: 'Format selection' },
          { src: '/public/image-122@2x.png', alt: 'Store list' },
          { src: '/public/image-123@2x.png', alt: 'Store overview' },
        ],
      },
      {
        type: 'images',
        title: 'UI SCREENS — SCENE MANAGEMENT',
        images: [
          { src: '/public/image-124@2x.png', alt: 'Scene management' },
          { src: '/public/image-125@2x.png', alt: 'Scene editor' },
          { src: '/public/image-126@2x.png', alt: 'Zone lighting' },
        ],
      },
      {
        type: 'images',
        title: 'UI SCREENS — DEPLOY & MONITOR',
        images: [
          { src: '/public/image-128@2x.png', alt: 'Deploy to stores' },
          { src: '/public/image-129@2x.png', alt: 'Deployment status' },
          { src: '/public/image-130@2x.png', alt: 'Store performance dashboard' },
        ],
      },
      {
        type: 'images',
        title: 'FEATURED CUSTOMERS',
        images: [
          { src: '/public/hq8@2x.png', alt: 'Featured customer 1' },
          { src: '/public/hq9@2x.png', alt: 'Featured customer 2' },
          { src: '/public/hq10@2x.png', alt: 'Featured customer 3' },
        ],
      },
      {
        type: 'bullets',
        title: 'CONCLUSION + LEARNINGS',
        items: [
          '<strong>Better navigation exploration.</strong> Upfront planning is needed for scalable navigation, especially for User Management workflows that can grow complex over time.',
          '<strong>Better visuals.</strong> More aesthetic and intuitive visual solutions; ensuring WCAG standard adherence for accessibility across all screens.',
          '<strong>Validate end results.</strong> Involving users earlier in validating workshop outcomes leads to better-aligned solutions and fewer late-stage pivots.',
        ],
      },
    ],
  },
  {
    id: 'interactpro',
    slug: 'interactpro',
    title: 'Interact Pro',
    period: '2018 – 2019',
    shortDescription:
      'The application empowers installers to perform commissioning and testing tasks, while allowing business owners to effectively manage the lighting system in small and medium-sized offices and industries.',
    description:
      'Analytics data revealed that many users faced difficulties navigating through the Registration Flow, which is a crucial initial step in the app.',
    role: 'Lead Designer and Researcher',
    responsibilities: [
      'User Research: Explorations and User interviews',
      'UX design',
      'User Testing',
    ],
    thumbnail: '/public/screenshot-20210602-at-1143-11@2x.png',
    thumbnailFit: 'cover',
    nextProject: 'philipshue',
    prevProject: 'retailhq',
    sections: [
      {
        type: 'images',
        images: [
          { src: '/public/interact-pro-2-1@2x.png', alt: 'Interact Pro app' },
          { src: '/public/interact-pro-2-2@2x.png', alt: 'Interact Pro context' },
        ],
      },
      {
        type: 'heading',
        title: 'PROJECT / TOPIC CONTEXT',
        content: 'Analytics data revealed that many users faced difficulties navigating through the Registration Flow — a crucial initial step in the app that enables installers to commission lighting systems and business owners to manage their setup.',
      },
      {
        type: 'challenge',
        title: 'HOW CAN WE ENHANCE THE REGISTRATION FLOW?',
        highlight: 'How can we enhance the current registration flow and make it more accommodating to different working styles?',
      },
      {
        type: 'bullets',
        title: 'CURRENT CHALLENGES',
        items: [
          'Lack of preparation work before the mechanic arrives on location',
          'Inability for the mechanic to independently create a project',
          'Cumbersome and time-consuming registration process due to excessive information requirements',
          'Mechanics desire to start quickly without unnecessary delays',
        ],
      },
      {
        type: 'text',
        title: 'CONNECT WITH THE END-USERS',
        content: 'We compiled a user research report with direct feedback and pain points gathered from installers and business owners. This was followed by stakeholder discussions and documented user stories. Prototype testing revealed that <strong>"small installation companies require greater flexibility, whereas larger installation companies tend to prepare projects in advance."</strong>',
      },
      {
        type: 'images',
        title: 'RESEARCH INPUTS',
        images: [
          { src: '/public/iap-1-1@2x.png', alt: 'Research input 1' },
          { src: '/public/iap-2-2@2x.png', alt: 'Research input 2' },
          { src: '/public/iap-3-1@2x.png', alt: 'Research input 3' },
        ],
      },
      {
        type: 'text',
        title: 'ACTIVITY: INNOVATION MARKET — WORKSHOP',
        content: 'We ran a co-creation workshop with end-users, product management, product marketers, and UX designers. The agenda included discussing topics related to the registration flow improvement, testing enhanced flows, and gathering real-time feedback from stakeholders.',
      },
      {
        type: 'images',
        title: 'WORKSHOP SESSION',
        images: [
          { src: '/public/iap-4-1@2x.png', alt: 'Workshop activity 1' },
          { src: '/public/iap-5@2x.png', alt: 'Workshop activity 2' },
          { src: '/public/iap-6@2x.png', alt: 'Workshop activity 3' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/iap-7@2x.png', alt: 'Workshop output 1' },
          { src: '/public/iap-8@2x.png', alt: 'Workshop output 2' },
          { src: '/public/iap-9@2x.png', alt: 'Workshop output 3' },
        ],
      },
      {
        type: 'text',
        title: 'FIRST IMPROVEMENT OF THE FLOW',
        content: 'Based on user research and workshop outputs, we redesigned the registration flow to support different working styles — allowing mechanics to begin without completing all information upfront, and giving flexibility to invite service providers at a later stage.',
      },
      {
        type: 'images',
        title: 'IMPROVED FLOW SCREENS',
        images: [
          { src: '/public/iap-10@2x.png', alt: 'Improved flow screen 1' },
          { src: '/public/iap-11@2x.png', alt: 'Improved flow screen 2' },
          { src: '/public/iap-12@2x.png', alt: 'Improved flow screen 3' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/iap-13@2x.png', alt: 'Flow screen 4' },
          { src: '/public/iap-14@2x.png', alt: 'Flow screen 5' },
          { src: '/public/iap-15@2x.png', alt: 'Flow screen 6' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/iap-16@2x.png', alt: 'Flow screen 7' },
          { src: '/public/screenshot-20210603-at-108-1@2x.png', alt: 'App overview screen' },
          { src: '/public/image-21@2x.png', alt: 'App detail screen' },
        ],
      },
    ],
  },
  {
    id: 'philipshue',
    slug: 'philipshue',
    title: 'Philips Hue',
    period: '2019',
    shortDescription:
      'Effortlessly arrange individual lights within rooms, enabling you to conveniently switch them on/off, adjust their color, or modify their brightness to suit your mood.',
    description:
      'Based on surveys, the application requires an enhancement in the scene management functionality.',
    role: 'Senior Designer and Researcher',
    responsibilities: [
      'User Research: Explorations and User interviews',
      'Composting the Data',
      'UX design',
    ],
    thumbnail: '/public/hue5@2x.png',
    thumbnailFit: 'contain',
    nextProject: 'dynalite',
    prevProject: 'interactpro',
    sections: [
      {
        type: 'images',
        images: [
          { src: '/public/hue-1@2x.png', alt: 'Philips Hue app' },
          { src: '/public/hue3-1@2x.png', alt: 'Hue research overview' },
        ],
      },
      {
        type: 'text',
        title: 'THE PHILIPS HUE PRODUCT LINE',
        content: 'Philips Hue allows users to effortlessly arrange individual lights within rooms, enabling them to switch them on/off, adjust color, or modify brightness to suit their mood. A key feature is the ability to combine the light from multiple bulbs, resulting in stunning gradient-like effects — called <strong>"Scenes"</strong>.',
      },
      {
        type: 'challenge',
        title: 'CASE STUDY: IMPROVE SCENE MANAGEMENT',
        highlight: 'Only 46% of users reported using the scene feature on a regular basis, with just 23% actively creating their own scenes.',
      },
      {
        type: 'text',
        title: 'DRAFTING THE PROBLEM STATEMENT',
        content: 'Based on surveys and usage data, the application required an enhancement in scene management functionality. Users found creating and managing scenes cumbersome, leading to low adoption of one of the product\'s most powerful features.',
      },
      {
        type: 'text',
        title: 'USER INTERVIEWS',
        content: 'We conducted eight remote interviews of approximately 30 minutes each, examining user experiences, needs, pain points, and UI satisfaction. Participants were selected from a range of home lighting enthusiasts to professional interior designers.',
      },
      {
        type: 'text',
        title: 'COMPOSTING THE DATA',
        content: 'Analysis used affinity clustering to identify thematic patterns across interviews, followed by the "How Might We" (HMW) framework to reframe problems as opportunities. A value/effort matrix then prioritized features by implementation impact vs. required effort.',
      },
      {
        type: 'images',
        title: 'RESEARCH SYNTHESIS',
        images: [
          { src: '/public/hue3-1@2x.png', alt: 'Affinity clustering — Notes, Cluster, Feature Ideation, Prioritization' },
        ],
      },
      {
        type: 'images',
        title: 'USER JOURNEY + RAPID PROTOTYPING',
        images: [
          { src: '/public/hue1-1@2x.png', alt: 'User journey map' },
          { src: '/public/hue2-1@2x.png', alt: 'Rapid prototype sketches' },
        ],
      },
      {
        type: 'images',
        title: 'APP SCREENS',
        images: [
          { src: '/public/hue4@2x.png', alt: 'Hue app screen 1' },
          { src: '/public/hue5@2x.png', alt: 'Hue app screen 2' },
          { src: '/public/hue6@2x.png', alt: 'Hue app screen 3' },
        ],
      },
    ],
  },
  {
    id: 'dynalite',
    slug: 'dynalite',
    title: 'Dynalite Control',
    period: '2017 – 2018',
    shortDescription:
      'The Philips Dynalite control app empowers users to effortlessly manage scenes, control individual channels, and apply schedules for the Philips Dynalite system in both residential and commercial spaces.',
    description:
      'Provides convenient control over lighting, allowing users to create personalized lighting experiences that enhance the ambiance and functionality of their spaces.',
    role: 'Senior Designer and Researcher',
    responsibilities: ['Information architecture', 'User Interviews', 'UX Design'],
    thumbnail: '/public/screenshot-20210603-at-1219@2x.png',
    nextProject: 'servicetag',
    prevProject: 'philipshue',
    sections: [
      {
        type: 'images',
        images: [
          { src: '/public/dyn1@2x.png', alt: 'Dynalite Control app' },
          { src: '/public/dyn2@2x.png', alt: 'Dynalite app context' },
        ],
      },
      {
        type: 'text',
        title: 'ABOUT THE APP',
        content: 'The Philips Dynalite control app empowers users to manage scenes, control individual channels, and apply schedules for the Philips Dynalite system in both residential and commercial spaces. Key features include scene creation and management, individual channel control for brightness and color adjustment, and scheduling for automated lighting routines.',
      },
      {
        type: 'text',
        title: 'STORYBOARDING',
        content: 'We used storyboarding to understand user priorities and map how different types of users — homeowners, facility managers, and lighting technicians — interact with the system. This helped us align on the key workflows before moving into design.',
      },
      {
        type: 'images',
        title: 'STORYBOARDS',
        images: [
          { src: '/public/dyn3@2x.png', alt: 'Storyboard 1' },
          { src: '/public/dyn4@2x.png', alt: 'Storyboard 2' },
          { src: '/public/dyn5@2x.png', alt: 'Storyboard 3' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/dyn6@2x.png', alt: 'Storyboard 4' },
          { src: '/public/dyn8@2x.png', alt: 'Storyboard 5' },
          { src: '/public/dyn9@2x.png', alt: 'Storyboard 6' },
        ],
      },
      {
        type: 'text',
        title: 'TASK FLOW DIAGRAM',
        content: 'Task flows were developed to validate understanding of user goals and identify obstacles in the current experience. This methodology helped visualize the step-by-step process users would undertake and effectively communicate requirements with stakeholders.',
      },
      {
        type: 'images',
        title: 'TASK FLOWS',
        images: [
          { src: '/public/dyn10@2x.png', alt: 'Task flow 1' },
          { src: '/public/dyn11@2x.png', alt: 'Task flow 2' },
          { src: '/public/dyn12@2x.png', alt: 'Task flow 3' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/dyn13@2x.png', alt: 'Task flow 4' },
          { src: '/public/dyn14@2x.png', alt: 'Task flow 5' },
          { src: '/public/dyn15@2x.png', alt: 'Task flow 6' },
        ],
      },
      {
        type: 'text',
        title: 'USER INTERVIEWS',
        content: 'Questionnaires were used for remote user interviews to gather feedback on how people currently manage their Dynalite systems and what improvements they expected. Findings shaped the information architecture and VAP (Virtual Area Programming) configuration workflows.',
      },
      {
        type: 'images',
        title: 'WIREFRAMING',
        images: [
          { src: '/public/dyn16@2x.png', alt: 'Wireframe 1' },
          { src: '/public/dyn17@2x.png', alt: 'Wireframe 2' },
          { src: '/public/dyn18@2x.png', alt: 'Wireframe 3' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/dyn19@2x.png', alt: 'Wireframe 4' },
          { src: '/public/dyn20@2x.png', alt: 'Wireframe 5' },
          { src: '/public/dyn21@2x.png', alt: 'Wireframe 6' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/dyn22@2x.png', alt: 'Wireframe 7' },
          { src: '/public/6@2x.png', alt: 'Wireframe 8' },
          { src: '/public/7@2x.png', alt: 'Wireframe 9' },
        ],
      },
      {
        type: 'images',
        title: 'FINAL APP SCREENS',
        images: [
          { src: '/public/dyn23@2x.png', alt: 'Final screen 1 — Scenes' },
          { src: '/public/dyn24@2x.png', alt: 'Final screen 2 — Channels' },
          { src: '/public/dyn25@2x.png', alt: 'Final screen 3 — Schedule' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/dyn26-1@2x.png', alt: 'Final screen 4' },
          { src: '/public/dyn28@2x.png', alt: 'Final screen 5' },
          { src: '/public/dyn29@2x.png', alt: 'Final screen 6' },
        ],
      },
      {
        type: 'images',
        images: [
          { src: '/public/dyn30-1@2x.png', alt: 'Final screen 7 — iPad view' },
          { src: '/public/screenshot-20210603-at-1219@2x.png', alt: 'App in context' },
        ],
      },
    ],
  },
  {
    id: 'servicetag',
    slug: 'servicetag',
    title: 'Service Tag',
    period: '2016 – 2017',
    shortDescription:
      'The legendary application for managing lighting systems, such as street lamps, needed a UX and UI revamp.',
    description:
      'Users will have the ability to effortlessly view luminaire configuration details, easily identify required spare parts, and conveniently program LED drivers to factory settings using cutting-edge Near Field Communication (NFC) technology.',
    role: 'Senior Designer and Researcher',
    responsibilities: ['User Research', 'Navigation flow', 'UX Design'],
    thumbnail: '/public/screenshot-20210605-at-1231-1@2x.png',
    thumbnailFit: 'top',
    prevProject: 'dynalite',
    nextProject: 'careerarchitecture',
    sections: [
      {
        type: 'images',
        images: [
          { src: '/public/st1-1@2x.png', alt: 'Service Tag app' },
          { src: '/public/st2-1@2x.png', alt: 'Service Tag context' },
          { src: '/public/st3-1@2x.png', alt: 'Service Tag screens' },
        ],
      },
      {
        type: 'heading',
        title: 'SERVICE TAG 2.0',
        content: 'The legendary application for managing outdoor lighting systems, such as street lamps, needed a comprehensive UX and UI revamp. Users can effortlessly view luminaire configuration details, identify required spare parts, and conveniently program LED drivers to factory settings using Near Field Communication (NFC) technology.',
      },
      {
        type: 'challenge',
        title: 'THE CHALLENGE',
        highlight: 'Revamp the UX/UI while adding new flows based on stakeholder feedback and planned customer features — without disrupting existing workflows technicians rely on daily.',
      },
      {
        type: 'text',
        title: 'USER STORIES',
        content: 'We engaged with the Project Management team to gather customer insights for planned features. User story documentation was combined with story mapping to visualize user journeys — revealing users\' needs, pain points, and desired outcomes at each stage of their interaction with the app.',
      },
      {
        type: 'images',
        title: 'USER STORY MAPS',
        images: [
          { src: '/public/screenshot-20210605-at-1231-1@2x.png', alt: 'User story map 1' },
          { src: '/public/screenshot-20210603-at-137-1@2x.png', alt: 'User story map 2' },
        ],
      },
      {
        type: 'text',
        title: 'TASK FLOW DIAGRAM',
        content: 'Task flows were developed to validate understanding and visualize the step-by-step process that users undertake to accomplish their goals within the app. This methodology helped identify obstacles and clearly communicate requirements with stakeholders.',
      },
      {
        type: 'images',
        title: 'TASK FLOWS',
        images: [
          { src: '/public/st4@2x.png', alt: 'Task flow 1' },
          { src: '/public/st5@2x.png', alt: 'Task flow 2' },
        ],
      },
      {
        type: 'images',
        title: 'WIREFRAMING THE FLOWS',
        images: [
          { src: '/public/st6@2x.png', alt: 'Wireframe flow 1' },
          { src: '/public/st7@2x.png', alt: 'Wireframe flow 2' },
        ],
      },
      {
        type: 'images',
        title: 'PRODUCT REVAMP — FINAL SCREENS',
        images: [
          { src: '/public/screenshot-20210605-at-1231-1@2x.png', alt: 'Service Tag final screen 1' },
          { src: '/public/screenshot-20210604-at-1258-1@2x.png', alt: 'Service Tag final screen 2' },
          { src: '/public/screenshot-20210603-at-137-1@2x.png', alt: 'Service Tag final screen 3' },
        ],
      },
    ],
  },
  {
    id: 'careerarchitecture',
    slug: 'careerarchitecture',
    title: 'Career Architecture Framework',
    period: '2022 – 2023',
    shortDescription:
      'I took on the responsibility of developing a comprehensive Career Architecture framework at Target. This initiative aimed to provide individual designers with clarity and direction.',
    description:
      'Establishing goals and development skills, managing talent effectively, ensuring performance management, and enhancing employee engagement and retention.',
    role: 'Senior Manager UX',
    responsibilities: [
      'Identifying the current conditions',
      'Setting a goal for the initiative',
      'Develop a strategy',
      'Build Career Architecture Framework',
      'Collaboration with leaders across the globe',
    ],
    thumbnail: '/public/selfgrowthandpersonaldevelopmentprogressstagesflatpersonconceptreachingforcareergoalsandsuccessillustrationambitionladdersandpotentialaccomplishmentvisionforfuturevector-3@2x.png',
    thumbnailFit: 'contain',
    passwordProtected: true,
    passwordHash: 'bWVkZXMyMDIz',
    prevProject: 'servicetag',
    sections: [
      {
        type: 'text',
        title: 'OVERVIEW',
        content:
          'During my tenure as Senior Manager UX at Target, I took on the responsibility of developing a comprehensive Career Architecture framework. This initiative aimed to provide individual designers with clarity and direction, establish goals and development skills, manage talent effectively, ensure performance management, and enhance employee engagement and retention.',
      },
      {
        type: 'images',
        title: 'FRAMEWORK VISUALS',
        images: [{ src: '/public/selfgrowthandpersonaldevelopmentprogressstagesflatpersonconceptreachingforcareergoalsandsuccessillustrationambitionladdersandpotentialaccomplishmentvisionforfuturevector-3@2x.png', alt: 'Career Architecture Framework' }],
      },
    ],
  },
]
