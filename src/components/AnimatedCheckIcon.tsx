import { motion } from 'framer-motion'

export default function AnimatedCheckIcon() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeWidth="8"
      viewBox="0 0 98.5 98.5"
      stroke="green"
      xmlSpace="preserve"
      width={64}
      height={64}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
        d="M81.7,17.8C73.5,9.3,62,4,49.2,4
        C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"
      />
    </svg>
  )
}
