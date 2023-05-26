'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { navbarLinks } from '@/constants'

import { close, menu } from '../assets'
import profile from '../assets/profile.jpg'

export function Navbar() {
  const [active, setActive] = useState('')
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {}, [])

  return (
    <nav className="fixed top-0 z-20 flex w-full items-center bg-primary px-6 py-5 sm:px-16">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src={profile}
            quality={100}
            width={64}
            className="w-object-contain mr-3 rounded-full"
            alt="Profile picture"
          />

          <p className="text-white cursor-pointer text-[20px] font-bold">
            Mateus Holanda&nbsp;
            <br />
            <span className="hidden font-normal sm:block">
              |&nbsp;&nbsp;Full Stack Developer
            </span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navbarLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } cursor-pointer text-[18px] font-medium hover:text-white-100`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <Image
            src={toggleMenu ? close : menu}
            alt="menu"
            className="h-7 w-7 cursor-pointer object-contain"
            onClick={() => setToggleMenu(!toggleMenu)}
          />

          <div
            className={`${
              !toggleMenu ? 'hidden' : 'flex'
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navbarLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins cursor-pointer text-[16px] font-medium`}
                  onClick={() => {
                    setToggleMenu(!toggleMenu)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
