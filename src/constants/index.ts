import {
  backend,
  carrent,
  casadosventos,
  css,
  datascience,
  docker,
  expo,
  fieldpro,
  figma,
  fortbrasil,
  git,
  graphql,
  html,
  javascript,
  jobit,
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
  tailwind,
  threejs,
  tripguide,
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
      "Developed new features to the company's website to improve the user experience and increase the adoption of the product using React, NodeJS, Sequelize",
      'Integrated third-party applications such as Apollo, Charm and SEMRush to the product',
      "Maintenance of the company's data on Google Cloud BigQuery",
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
      'Maintenance of an internal web application using vanilla Javascript, PHP, Postgis and Postgres',
      'Migration to React and Node for better performance and cleaner, easier to maintain code',
      'Creation of a database infrastructure from scratch using Google Cloud Platform and tools such as Cloud Functions, Cloud Run and Big Query',
      'Make a complete automate database from several sources for energy trading in the brazilian market, using Python, Flask and GCP',
      'Write prediction models using ML algorithms to predict prices in the brazilian energy market',
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
      'Developed an application for internal use by employees that monitors the location and status of the company’s products using ReactJS, Redux, NodeJS and MongoDB',
      'Developed the company’s website in React',
      'Developed a Landing Page to attract qualified leads using vanilla Javascript',
      'Developed the company’s mobile application as PWA, with React',
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
      "Increase qualified traffic and conversion rates on the company's website",
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
      'Worked with Big Data using Python',
      "Analysed clients' profiles and divided them in similar behavior groups using K-means clustering",
      "Reduced company's costs by filtering text messages via SMS with new sales and special deals to the right clients",
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
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeUrl: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeUrl: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeUrl: 'https://github.com/',
  },
]

export const testimonials = [
  {
    description:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    description:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    description:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]
