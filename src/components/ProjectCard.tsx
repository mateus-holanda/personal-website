import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { Tilt } from 'react-tilt'

import { fadeIn } from '@/utils/motion'

import { github, rocket } from '@/assets'

interface ProjectCardProps {
  index: number
  name: string
  description: string
  tags: Array<{
    name: string
    color: string
  }>
  isPublic: boolean
  status: string
  image: StaticImageData
  sourceCodeUrl: string
}

export function ProjectCard({
  index,
  name,
  description,
  tags,
  isPublic,
  status,
  image,
  sourceCodeUrl,
}: ProjectCardProps) {
  return (
    <motion.div variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-[490px]"
      >
        <div className="relative h-[260px] w-full">
          <Image
            src={image}
            alt={name}
            className="object-resize h-full w-full rounded-2xl"
          />

          <div className="card-img_hover absolute right-0 top-0 m-3 flex justify-end gap-1">
            <div
              onClick={() => window.open(sourceCodeUrl, '_blank')}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow-lg shadow-black-100 hover:scale-110"
            >
              <Image
                src={github}
                alt="github"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(sourceCodeUrl, '_blank')}
              className="green-pink-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow-md shadow-[#bf61ff] hover:scale-110"
            >
              <Image
                src={rocket}
                alt="rocket"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <p className="green-darkpink-gradient py-1/2 rounded bg-blue-900 px-2 text-sm font-medium text-blue-300">
            {isPublic ? 'Public' : 'Private'} Repo
          </p>
          <p className="green-darkpink-gradient py-1/2 rounded bg-blue-900 px-2 text-sm font-medium text-blue-300">
            {status}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
