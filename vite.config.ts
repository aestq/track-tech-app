import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ command }) => {
    return {
        plugins: [
            react(),
            svgr({
                include: '**/*.svg',
            }),
        ],
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                shared: path.resolve(__dirname, 'src', 'shared'),
                entities: path.resolve(__dirname, 'src', 'entities'),
                features: path.resolve(__dirname, 'src', 'features'),
                widgets: path.resolve(__dirname, 'src', 'widgets'),
                pages: path.resolve(__dirname, 'src', 'pages'),
                app: path.resolve(__dirname, 'src', 'app'),
            },
        },
        define: {
            __API__: JSON.stringify(process.env.URL),
            __IS_DEV__: JSON.stringify(command === 'serve'),
            __PROJECT__: JSON.stringify('frontend'),
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },
    }
})
