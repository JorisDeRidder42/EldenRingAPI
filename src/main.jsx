import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import "./style.css";
import App from './App';
import { AuthProvider } from './Context/authContext';
import { ParallaxProvider } from 'react-scroll-parallax';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <ParallaxProvider>
      <App/>
      </ParallaxProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
