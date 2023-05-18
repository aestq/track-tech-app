import { resolve } from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import { DefinePlugin } from 'webpack'
import { buildCssLoader } from '../webpack/loader/buildCssLoader'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: (config) => {
    const src = resolve(__dirname, '..', '..', 'src')
    config.resolve!.modules!.push(src)
    config.resolve!.extensions!.push('.ts', '.tsx')
    config.module!.rules!.push(buildCssLoader(true))

    config.plugins!.push(new DefinePlugin({
      __API__: '',
      __IS_DEV__: true
    }))

    return config
  }
}
export default config
