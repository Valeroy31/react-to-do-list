import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Props from './props.jsx'
import "bootstrap/dist/css/bootstrap.min.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Props />
  </StrictMode>,
)
