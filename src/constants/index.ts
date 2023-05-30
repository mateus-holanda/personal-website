import {
  backend,
  casadosventos,
  copa,
  css,
  datascience,
  docker,
  esports,
  expo,
  fieldpro,
  figma,
  fortbrasil,
  git,
  graphql,
  gustavostein,
  habits,
  html,
  javascript,
  mobile,
  mongodb,
  nestjs,
  nextjs,
  nodejs,
  primer,
  python,
  quero,
  reactjs,
  reactnative,
  redux,
  ricardosodre,
  robertooikawa,
  tailwind,
  threejs,
  timemachine,
  typescript,
  web,
} from '@/assets'

export const navbarLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'tech',
    title: 'Tech',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

export const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Data Scientist',
    icon: datascience,
  },
]

export const experiences = [
  {
    date: 'June 2022 - December 2022',
    company: 'Primer Labs',
    linkedinUrl: 'https://www.linkedin.com/company/sayprimer/',
    title: 'Full Stack Developer',
    roles: [
      "Develop new features to the company's website to improve the user experience and increase the adoption of the product using React, NodeJS and Sequelize as ORM",
      'Integration of third-party applications APIs to the product such as Apollo, Charm.io and SEMRush',
      "Management of user's permission on Google Cloud IAM and data maintenance on Google Cloud BigQuery",
    ],
    icon: primer,
    iconBg: '#fff',
  },
  {
    date: 'August 2020 - July 2022',
    company: 'Casa dos Ventos Energias Renováveis',
    linkedinUrl:
      'https://www.linkedin.com/company/casa-dos-ventos-energias-renov-veis/',
    title: `React.js Developer & \n Data Engineer`,
    roles: [
      'Maintenance of an internal web application in vanilla Javascript, PHP, Postgis and Postgres',
      'Migration to React and Node for better performance, componentization and cleaner, easier to maintain code',
      'Creation of a database architecture from scratch using Google Cloud Platform and tools such as CLoud Storage, Cloud Functions, Cloud Run and BigQuery',
      'Make a complete automate database from several sources for energy trading in the Brazilian market, using Python and Flask',
      'Write prediction models using ML algorithms to predict prices in the Brazilian energy market',
    ],
    icon: casadosventos,
    iconBg: '#fff',
  },
  {
    date: 'July 2019 - August 2020',
    company: 'FieldPro',
    linkedinUrl: 'https://www.linkedin.com/company/fieldproag/',
    title: 'Node.js Developer',
    roles: [
      'Develop an application for internal use by employees for quality assurance and location of the company’s products using React, Redux, Node and MongoDB',
      'Develop the company’s website in Desktop and mobile as PWA in React',
      'Develop Landing Pages in Javascript to attract qualified leads',
    ],
    icon: fieldpro,
    iconBg: '#fff',
  },
  {
    date: 'August 2018 - July 2019',
    company: 'Quero Educação',
    linkedinUrl: 'https://www.linkedin.com/company/queroedu/',
    title: 'Business Intelligence Analyst',
    roles: [
      'Create and manage ads on paid social media (Facebook and Instagram)',
      "Learn the company's practices on SEO, SEM, CRM, Google AdWords and Google Analytics",
      "Increase qualified traffic and conversion rates on the company's website using practices of Growth Marketing",
      "Access the company's database, create queries and extract relevant reports for B2B analyses and report to Key Accounts",
    ],
    icon: quero,
    iconBg: '#fff',
  },
  {
    date: 'January 2017 - March 2017',
    company: 'FortBrasil (Summer Job)',
    linkedinUrl: 'https://www.linkedin.com/company/fortbrasil/',
    title: 'Business Intelligence Analyst',
    roles: [
      'Work with the entire data history of the company using Big Data techniques with Python',
      "Analyse clients' profiles and divided them in similar behavior groups using K-means clustering",
      "Reduce company's costs by filtering text messages via SMS targetting the right clients with new sales and special deals",
    ],
    icon: fortbrasil,
    iconBg: '#fff',
  },
]

export const technologies = [
  {
    name: 'HTML5',
    icon: html,
  },
  {
    name: 'CSS3',
    icon: css,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'ReactJS',
    icon: reactjs,
  },
  {
    name: 'NextJS',
    icon: nextjs,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'TailwindCSS',
    icon: tailwind,
  },
  {
    name: 'ThreeJS',
    icon: threejs,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'NestJS',
    icon: nestjs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'React Native',
    icon: reactnative,
  },
  {
    name: 'Expo',
    icon: expo,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Docker',
    icon: docker,
  },
]

export const projects = [
  {
    name: 'Time Machine',
    description:
      'Web and mobile platform to add photos, videos and description of your most valuable memories and create a timeline that you can share with your friends or keep it private just for you.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactnative',
        color: 'pink-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'next',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'gold-text-gradient',
      },
      {
        name: 'fastify',
        color: 'violet-text-gradient',
      },
    ],
    isPublic: true,
    status: 'Active',
    image: timemachine,
    sourceCodeUrl: 'https://github.com/mateus-holanda/time-machine',
  },
  {
    name: 'E-game Duos',
    description:
      'Web and mobile-based platform that allows users to post their availability and personal contacts on different online games and search for duo partners to play.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactnative',
        color: 'pink-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'vite',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'gold-text-gradient',
      },
      {
        name: 'express',
        color: 'violet-text-gradient',
      },
    ],
    isPublic: true,
    status: 'Less active',
    image: esports,
    sourceCodeUrl: 'https://github.com/mateus-holanda/esports-teams',
  },
  {
    name: 'Daily Habits',
    description:
      'An app built for both Desktop and Mobile platforms to add and keep track of your activities during your day. Highly performatic and focused on user accessibility using the Radix UI library.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactnative',
        color: 'pink-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'vite',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'gold-text-gradient',
      },
      {
        name: 'fastify',
        color: 'violet-text-gradient',
      },
    ],
    isPublic: true,
    status: 'Less active',
    image: habits,
    sourceCodeUrl: 'https://github.com/mateus-holanda/habits-app',
  },
  {
    name: 'Copa',
    description:
      'A project that uses Google OAuth authentication to create all sorts of pools with your group of friends to bet on the stats of soccer matches (score, penalties, yellow and red cards etc).',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'reactnative',
        color: 'pink-text-gradient',
      },
      {
        name: 'node',
        color: 'green-text-gradient',
      },
      {
        name: 'next',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'gold-text-gradient',
      },
      {
        name: 'fastify',
        color: 'violet-text-gradient',
      },
    ],
    isPublic: true,
    status: 'Highly active',
    image: copa,
    sourceCodeUrl: 'https://github.com/',
  },
]

export const testimonials = [
  {
    description:
      'Mateus was a key player during the early stages of the company and developed a high-quality application for our employees to use.',
    name: 'Ricardo Sodre',
    designation: 'CEO',
    company: 'FieldPro',
    image: ricardosodre,
  },
  {
    description:
      "Mateus' work was extremely important for our newly formed sales team. Without him, we wouldn't have grown so quickly.",
    name: 'Roberto Oikawa',
    designation: 'CTO',
    company: 'Casa dos Ventos',
    image: robertooikawa,
  },
  {
    description:
      "After Mateus optimized our paid social campaigns, our traffic increased by almost 30%. We can't thank him enough!",
    name: 'Gustado Stein',
    designation: 'Head of Growth',
    company: 'Quero Educação',
    image: gustavostein,
  },
]
