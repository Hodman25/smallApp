import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Rpoters from './routers.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Rpoters />
  </BrowserRouter>,
)
