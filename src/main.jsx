import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  //Saftey to components by strict mode . 
  <StrictMode>
    <App />
  </StrictMode>
)
