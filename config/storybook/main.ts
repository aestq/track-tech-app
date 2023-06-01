import { resolve } from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'
import { DefinePlugin, type RuleSetRule } from 'webpack'
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
    // config.output!.publicPath = '/'
    const src = resolve(__dirname, '..', '..', 'src')
    config.resolve!.modules!.push(src)
    config.resolve!.extensions!.push('.ts', '.tsx')
    config.module!.rules!.push(buildCssLoader(true))
    // @ts-expect-error
    config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
      // eslint-disable-next-line
      if(/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }
      return rule
    })
    config.module!.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    })
    config.plugins!.push(new DefinePlugin({
      __API__: '',
      __IS_DEV__: true,
      __PROJECT__: JSON.stringify('storybook')
    }))

    return config
  }
}
export default config
