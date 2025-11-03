import { StrictMode } from 'react'
import { CardapioProvider } from './components/CardapioProvider/index.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardapioProvider>
      <App />
    </CardapioProvider>
  </StrictMode>,
)
