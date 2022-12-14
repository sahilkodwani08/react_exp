import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Router>
    
    <Routes>
    <Route exact path='/' element={<App/>} />
  
    <Route exact path = '/home' element = {<Home/>} />
    </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
