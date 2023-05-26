'use client'

import { motion } from 'framer-motion'

import { SectionWrapper } from '@/hoc'

import { slideIn, textVariant } from '@/utils/motion'

import {
  css,
  docker,
  expo,
  figma,
  git,
  graphql,
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

import { BallCanvas } from './BallCanvas'

const technologies = [
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

      <motion.div
        variants={slideIn('up', 'spring', 1, 2)}
        className="flex justify-center"
      >
        <div className="h-[850px] w-full">
          <BallCanvas technologies={technologies} />
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
