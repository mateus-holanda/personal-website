'use client'

import { motion } from 'framer-motion'

import { ServiceCard } from './ServiceCard'

import { SectionWrapper } from '@/hoc'

import { services } from '@/constants'

import { fadeIn, textVariant } from '@/utils/motion'

function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          Introduction
        </p>

        <h2 className="text-white text-[30px] font-black xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-4xl text-[17px] leading-[30px] text-secondary"
      >
        I&apos;m a full stack software developer with 5 years of experience in
        Typescript, Javascript and Python, and expertise with the stack React,
        React Native and Node.js, as well as frameworks such as Next.js,
        Nest.js, Three.js and Jest. I&apos;m a quick learner and collaborate
        closely with clients to create efficient, scalable and user-friendly
        solutions that solve real-world problems. Let&apos;s work together to
        bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            icon={service.icon}
            title={service.title}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
