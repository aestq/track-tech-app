import { type StoryFn } from '@storybook/react'
import 'app/styles/index.scss'

export const StyleDecorator = (StoryComponent: StoryFn) => {
  return (
    <StoryComponent />
  )
}
