'use client'

import { motion } from 'framer-motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

import { SectionWrapper } from '@/hoc'
import { ExperienceCard } from './ExperienceCard'

import { textVariant } from '@/utils/motion'

import { casadosventos, fieldpro, fortbrasil, primer, quero } from '@/assets'

const experiences = [
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

function Experience() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          What I have done so far
        </p>

        <h2 className="text-white text-[30px] font-black xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={true}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              date={experience.date}
              company={experience.company}
              linkedinUrl={experience.linkedinUrl}
              title={experience.title}
              roles={experience.roles}
              icon={experience.icon}
              iconBg={experience.iconBg}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
