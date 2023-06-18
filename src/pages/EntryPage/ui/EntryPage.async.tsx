import { lazy } from 'react'

export const EntryPageAsync = lazy(async () => await import('./EntryPage'))
