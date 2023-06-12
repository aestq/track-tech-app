import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack'
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { type BuildOptions } from './types/buildTypes'

export function buildPlugins (options: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    // new BundleAnalyzerPlugin(),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
      __API__: JSON.stringify(options.apiUrl),
      __PROJECT__: JSON.stringify(options.project)
    })
  ]
}
