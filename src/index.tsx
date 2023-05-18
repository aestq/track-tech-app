import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import { StoreProvider } from 'app/providers/Store'
import 'app/styles/index.scss'

const rootContainer = document.getElementById('root')

if(rootContainer === null) {
  throw new Error('Not found root')
}

const root = createRoot(rootContainer)

root.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
)
