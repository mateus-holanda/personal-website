'use client'

import { motion } from 'framer-motion'

import { SectionWrapper } from '@/hoc'

import { TestimonialCard } from './TestimonialCard'

import { textVariant } from '@/utils/motion'

const testimonials = [
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
