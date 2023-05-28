'use client'

import { motion } from 'framer-motion'

import { ProjectCard } from './ProjectCard'

import { SectionWrapper } from '@/hoc'

import { projects } from '@/constants'

import { fadeIn, textVariant } from '@/utils/motion'

function Projects() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          My work
        </p>
        <h2 className="text-white text-[30px] font-black xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Projects.
        </h2>
      </motion.div>

      <div>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          Teste teste teste teste teste
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            isPublic={project.isPublic}
            status={project.status}
            image={project.image}
            sourceCodeUrl={project.sourceCodeUrl}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, 'projects')
