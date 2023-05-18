import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { type BuildOptions } from './types/buildTypes'

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
  return {
    historyApiFallback: true,
    hot: true,
    open: true
  }
}
