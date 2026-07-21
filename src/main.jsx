import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  // safety to components
  // enables to detect changes in URL and 
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
