import { type RuleSetRule } from 'webpack'
import { buildCssLoader } from './loader/buildCssLoader'
import { type BuildOptions } from './types/buildTypes'

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoader = buildCssLoader(isDev)

  const fileLoader = {
    test: /\.(png|jpe?g|gif|ttf)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    ]
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  }

  return [
    tsLoader,
    cssLoader,
    fileLoader,
    svgLoader
  ]
}
