'use client'

import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FormEvent, useRef, useState } from 'react'

import { SectionWrapper } from '@/hoc'

import { EarthCanvas } from './EarthCanvas'

import { slideIn } from '@/utils/motion'

function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()

    setIsLoading(true)

    try {
      if (process.env) {
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            to_name: 'Mateus',
            from_email: email,
            to_email: 'mateus23ita@gmail.com',
            message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_KEY,
        )

        alert('Thank you. I will get back to you as soon as possible.')
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong. Please, try again later.')
    } finally {
      setIsLoading(false)

      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          Get in touch
        </p>
        <h3 className="text-white text-[30px] font-black xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmitForm}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Your Name</span>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="What's your name?"
              onChange={(e) => setName(e.target.value)}
              className="text-white outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium placeholder:text-secondary"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Your E-mail</span>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Your best e-mail"
              onChange={(e) => setEmail(e.target.value)}
              className="text-white outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium placeholder:text-secondary"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={message}
              placeholder="Let's get in touch and hopefully we can work together!"
              onChange={(e) => setMessage(e.target.value)}
              className="text-white outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium placeholder:text-secondary"
            />
          </label>

          <button
            type="submit"
            className="text-white w-fit rounded-xl bg-[#2765a3] px-8 py-3 font-bold shadow-md shadow-primary outline-none hover:bg-[#3384d4]"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
