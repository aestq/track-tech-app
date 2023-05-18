import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/buildTypes'

export function buildResolves (options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [options.paths.src, 'node_modules'],
    preferAbsolute: true,
    mainFiles: ['index']
  }
}
