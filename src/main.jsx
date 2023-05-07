import React from 'react'
import './index.css'
import App from './App';
import Home from './component/Home'
import Weather from './component/Weather';
import { Open_Weather } from './utils/Open_Weather';
import Login from './page/Login';
import Auth0ProviderWithNavigate from './auth0-provider-with-navigate';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

//  REACT-DOM-17
// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';


ReactDOM.render(  

  <StrictMode>
    <Router forceRefresh={true}>
      <Auth0ProviderWithNavigate>
      <Routes >
        <Route exact path='/' element={<App />} />
      </Routes> 
      <Open_Weather>
      <Routes>
        <Route  path='home' element={<Home />} />
        <Route  path='weather' element={<Weather />} />
      </Routes>
      </Open_Weather>  
      <Routes>
          <Route path='/login' element={<Login />}>

          </Route>
      </Routes>
      </Auth0ProviderWithNavigate>
    </Router>
</StrictMode>
 , document.getElementById('root'))
