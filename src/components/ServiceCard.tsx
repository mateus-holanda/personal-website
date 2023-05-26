/* eslint-disable react/no-unknown-property */

import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { Tilt } from 'react-tilt'

import { fadeIn } from '@/utils/motion'

interface ServiceCardProps {
  index: number
  title: string
  icon: StaticImageData
}

export function ServiceCard({ index, title, icon }: ServiceCardProps) {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
        >
          <Image src={icon} alt={title} className="h-16 w-16 object-contain" />

          <h3 className="text-white text-center text-[20px] font-bold">
            {title}
          </h3>
        </Tilt>
      </motion.div>
    </Tilt>
  )
}
