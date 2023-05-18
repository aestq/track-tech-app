import { lazy } from 'react'

export const LoginPageAsync = lazy(async () => await new Promise(resolve => {
  setTimeout(() => {
    // @ts-expect-error
    resolve(import('./LoginPage'))
  }, 1000)
}))
