import { type Configuration } from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolves } from './buildResolves'
import { type BuildOptions } from './types/buildTypes'

export function buildWebpackConfig (options: BuildOptions): Configuration {
  const { paths, isDev, mode } = options

  return {
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
      publicPath: '/'
    },
    mode,
    devtool: isDev ? 'inline-source-map' : undefined,
    resolve: buildResolves(options),
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
