import { createRoot } from 'react-dom/client'
import { App } from 'app/App'
import { StoreProvider } from 'app/providers/Store'
import 'app/styles/index.scss'
import { Toaster } from 'shared/ui/redesign/sonner'

const rootContainer = document.getElementById('root')

if (rootContainer === null) {
    throw new Error('Not found root')
}

const root = createRoot(rootContainer)

root.render(
    <StoreProvider>
        <App />
        <Toaster />
    </StoreProvider>
)
