import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {App} from './App.jsx'

// import bootstrap css & javascript  links 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

//import bootstrap icons 
import 'bootstrap-icons/font/bootstrap-icons.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
