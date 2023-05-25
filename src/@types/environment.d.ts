/* eslint-disable no-unused-vars */
export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_EMAILJS_KEY: string
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: string
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string
      ENV: 'test' | 'dev' | 'prod'
    }
  }
}
