import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GiphyApp } from './GiphyApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <GiphyApp />
  </StrictMode>,
)
