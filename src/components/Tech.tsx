'use client'

import { motion } from 'framer-motion'

import { SectionWrapper } from '@/hoc'

import { slideIn, textVariant } from '@/utils/motion'

import { technologies } from '@/constants'

import { BallCanvas } from './BallCanvas'

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
        variants={slideIn('up', 'spring', 0.3, 2)}
        className="flex justify-center"
      >
        <div className="h-[1000px] w-full">
          <BallCanvas technologies={technologies} />
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
