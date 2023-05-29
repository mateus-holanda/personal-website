'use client'

import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import PulseLoader from 'react-spinners/PulseLoader'
import { z } from 'zod'

import { SectionWrapper } from '@/hoc'

import AnimatedCheckIcon from './AnimatedCheckIcon'
import { EarthCanvas } from './EarthCanvas'

import { slideIn } from '@/utils/motion'

const sendMessageFormSchema = z.object({
  name: z.string().nonempty('Please, inform your name.'),
  email: z
    .string()
    .nonempty('Please, inform your e-mail.')
    .email('Please, inform a valid e-mail.')
    .toLowerCase(),
  message: z.string().nonempty('Please, write a message.'),
})

const defaultValues = {
  name: '',
  email: '',
  message: '',
}

type SendMessageFormData = z.infer<typeof sendMessageFormSchema>

function Contact() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendMessageFormData>({
    resolver: zodResolver(sendMessageFormSchema),
    defaultValues,
  })

  const formRef = useRef<HTMLFormElement>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const modalRef = useRef<HTMLDivElement>(null)

  function handleClickOutsideModal(event: Event) {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModalIsOpen(false)
    }
  }

  function timeout(delay: number) {
    // eslint-disable-next-line promise/param-names
    return new Promise((res) => setTimeout(res, delay))
  }

  async function handleSubmitForm(data: SendMessageFormData) {
    setIsLoading(true)

    console.log(data)

    try {
      if (process.env) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            from_name: data.name,
            to_name: 'Mateus',
            from_email: data.email,
            to_email: 'mateus23ita@gmail.com',
            message: data.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_KEY,
        )

        await timeout(1000)
        reset(defaultValues)

        setModalIsOpen(true)
      }
    } catch (error) {
      console.log(error)
      alert('Something went wrong. Please, try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideModal, true)
    return () => {
      document.removeEventListener('click', handleClickOutsideModal, true)
    }
  })

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
          Let&apos;s get in touch
        </p>
        <h3 className="text-white text-[30px] font-black xs:text-[40px] sm:text-[50px] md:text-[60px]">
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit(handleSubmitForm)}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col" htmlFor="name">
            <span className="text-white mb-4 font-medium">Your Name</span>
            <input
              type="text"
              placeholder="What's your name?"
              className="text-white outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium placeholder:text-secondary"
              {...register('name')}
            />
            {errors.name && (
              <span className="ml-2 mt-2 text-[14px] font-semibold text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>

          <label className="flex flex-col" htmlFor="email">
            <span className="text-white mb-4 font-medium">Your E-mail</span>
            <input
              type="email"
              placeholder="Your best e-mail"
              className="text-white outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium placeholder:text-secondary"
              {...register('email')}
            />
            {errors.email && (
              <span className="ml-2 mt-2 text-[14px] font-semibold text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>

          <label className="flex flex-col" htmlFor="message">
            <span className="text-white mb-4 font-medium">Your Message</span>
            <textarea
              rows={7}
              placeholder="Send me a message with your thoughts and hopefully we can work together!"
              className="text-white outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium placeholder:text-secondary"
              {...register('message')}
            />
            {errors.message && (
              <span className="ml-2 mt-2 text-[14px] font-semibold text-red-500">
                {errors.message.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="text-white w-fit rounded-xl bg-[#2765a3] px-8 py-3 font-bold shadow-md shadow-[#1a446d] outline-none hover:bg-[#3384d4] disabled:bg-[#2765a3]"
          >
            {isLoading ? <PulseLoader color="#fff" size={8} /> : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>

      <motion.div
        ref={modalRef}
        className={`flex-column text-white transform ${
          modalIsOpen
            ? 'visible scale-100 duration-500 ease-in'
            : 'invisible hidden scale-0'
        } absolute left-[15%] top-[50%] flex overflow-hidden rounded-3xl border bg-transparent text-center shadow-md backdrop-blur-[50px] lg:left-[30%] lg:top-[35%]`}
        // variants={fadeIn('down', 'spring', 0, 2)}
      >
        <button
          onClick={() => setModalIsOpen(false)}
          className="z-1 absolute right-0 top-0 flex h-9 w-9 cursor-pointer items-center justify-center rounded-bl-2xl bg-tertiary p-2 text-[18px] font-extrabold lg:h-11 lg:w-11 lg:text-[30px]"
        >
          X
        </button>
        <div className="items-center justify-center px-4 py-6 lg:px-24 lg:py-10">
          <h1 className="text-[32px] font-bold lg:text-[48px]">Confirmation</h1>
          <div className="mt-8 flex flex-col text-[16px] font-medium leading-4 lg:text-[18px]">
            <span>Your message has been sent.</span>
            <br />
            <span>I&apos;ll reply as soon as possible.</span>
            <br />
            <span>Thank you!</span>
          </div>

          <div className="mt-8 flex justify-center">
            <AnimatedCheckIcon />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
