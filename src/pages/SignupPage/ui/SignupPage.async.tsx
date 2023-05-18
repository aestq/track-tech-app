import { lazy } from 'react'

export const SignupPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./SignupPage'))
  }, 1000)
}))
