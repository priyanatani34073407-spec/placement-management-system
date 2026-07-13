import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
  //Saftey to components by strict mode . 
  //enable to detect changes in URL and not reload the page
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
