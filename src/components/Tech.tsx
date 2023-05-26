'use client'

import { motion } from 'framer-motion'

import { SectionWrapper } from '@/hoc'

import { BallCanvas } from './BallCanvas'

import { textVariant } from '@/utils/motion'

import {
  css,
  git,
  html,
  javascript,
  mongodb,
  nestjs,
  nextjs,
  nodejs,
  python,
  reactjs,
  reactnative,
  redux,
  tailwind,
  threejs,
  typescript,
} from '@/assets'

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
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
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Nest JS',
    icon: nestjs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'React Native',
    icon: reactnative,
  },
  // {
  //  name: 'Expo',
  //  icon: expo,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //  name: 'figma',
  //  icon: figma,
  // },
  // {
  //  name: 'docker',
  //  icon: docker,
  // },
]

function Tech() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          The technologies I use
        </p>

        <h2 className="text-white text-[30px] font-black xs:text-[40px] sm:text-[50px] md:text-[60px]">
          My Stack.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div
            key={technology.name}
            // variants={zoomIn(0.1 * index, 0.5)}
            className="h-28 w-28 cursor-grab"
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
