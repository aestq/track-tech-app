import { resolve } from 'path'
import { type Configuration } from 'webpack'
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'
import { type BuildEnv, type Paths } from './config/webpack/types/buildTypes'

export default (env: BuildEnv): Configuration => {
  const mode = env.mode ?? 'development'
  const isDev = mode === 'development'
  const apiUrl = env.apiUrl ?? 'http://localhost:9000'

  const paths: Paths = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    output: resolve(__dirname, 'build'),
    html: resolve(__dirname, 'public', 'index.html'),
    src: resolve(__dirname, 'src')
  }

  const config: Configuration = buildWebpackConfig({
    isDev, mode, paths, apiUrl
  })

  return config
}
