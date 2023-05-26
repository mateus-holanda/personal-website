'use client'

import { motion } from 'framer-motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'

import { ExperienceCard } from './ExperienceCard'

import { SectionWrapper } from '@/hoc'

import { experiences } from '@/constants'

import { textVariant } from '@/utils/motion'

import 'react-vertical-timeline-component/style.min.css'

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
