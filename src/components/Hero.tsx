'use client'

import { motion } from 'framer-motion'

import { ComputerCanvas } from './ComputerCanvas'

export function Hero() {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div className="absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-16">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />

          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className="text-white mt-2 text-[40px] font-black xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]">
            Hi, I&apos;m <span className="text-[#915eff]">Mateus</span>
          </h1>

          <p className="mt-2 text-[16px] font-medium text-[#dfd9ff] xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">
            I develop user interfaces and web applications{' '}
            <br className="hidden sm:block" /> with React, Node, React Native
            and Python.
          </p>
        </div>
      </div>

      <ComputerCanvas />

      <div className="absolute bottom-5 flex w-full flex-col items-center justify-center gap-2">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>

        <span className="text-[14px] font-medium uppercase text-[#dfd9ff] lg:text-[16px] lg:leading-[40px]">
          Scroll Down
        </span>
      </div>
    </section>
  )
}
