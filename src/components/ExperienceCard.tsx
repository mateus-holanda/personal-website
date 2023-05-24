'use client'

import Image, { StaticImageData } from 'next/image'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

interface ExperienceCardProps {
  date: string
  company: string
  linkedinUrl: string
  title: string
  roles: Array<string>
  icon: StaticImageData
  iconBg: string
}

export function ExperienceCard({
  date,
  company,
  linkedinUrl,
  title,
  roles,
  icon,
  iconBg,
}: ExperienceCardProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={icon}
            alt={company}
            className="h-[100%] w-[100%] rounded-full object-contain"
          />
        </div>
      }
      date={date}
    >
      <div>
        <h3 className="text-white whitespace-pre-wrap text-[24px] font-bold">
          {title}
        </h3>

        <p
          className="text-[16px] font-semibold text-secondary"
          style={{ margin: 0 }}
        >
          <a href={linkedinUrl}>{company}</a>
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {roles.map((role, index) => (
          <li
            key={`experience-role-${index}`}
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {role}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
