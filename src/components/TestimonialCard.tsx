import { motion } from 'framer-motion'
import Image from 'next/image'

import { quotemark } from '@/assets'
import { fadeIn } from '@/utils/motion'

interface TestimonialCardProps {
  index: number
  name: string
  company: string
  designation: string
  description: string
  image: string
}

export function TestimonialCard({
  index,
  name,
  company,
  designation,
  description,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeIn('', 'spring', 0.5 * index, 0.75)}
      className="w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"
    >
      <p className="text-white text-[48px] font-black">
        <Image src={quotemark} alt="quote mark" width={64} />
      </p>

      <div className="mt-4">
        <p className="text-white text-[18px] tracking-wider">{description}</p>

        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-white text-[16px] font-medium">
              <span className="blue-text-gradient">@</span> {name}
            </p>

            <p className="mt-1 text-[12px] text-secondary">
              {designation} of {company}
            </p>
          </div>

          <Image
            src={image}
            alt={`testimonial-by-${name}`}
            className="rounded-full object-cover"
            width={40}
            height={40}
          />
        </div>
      </div>
    </motion.div>
  )
}
