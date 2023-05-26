'use client'

import { motion } from 'framer-motion'

import { TestimonialCard } from './TestimonialCard'

import { SectionWrapper } from '@/hoc'

import { testimonials } from '@/constants'

import { textVariant } from '@/utils/motion'

function Testimonials() {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div className="min-h-[300px] rounded-2xl bg-tertiary px-6 py-10 sm:px-16 sm:py-16">
        <motion.div variants={textVariant()}>
          <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
            What others say
          </p>
          <h2 className="text-white text-[30px] font-black xs:text-[40px] sm:text-[50px] md:text-[60px]">
            Testimonials.
          </h2>
        </motion.div>
      </div>

      <div className="-mt-20 flex flex-wrap gap-7 px-6 pb-14 sm:px-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            index={index}
            name={testimonial.name}
            company={testimonial.company}
            designation={testimonial.designation}
            description={testimonial.description}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Testimonials, 'testimonials')
