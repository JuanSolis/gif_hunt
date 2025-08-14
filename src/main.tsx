import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifHunt } from './GifHunt'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <GifHunt />
  </StrictMode>,
)
