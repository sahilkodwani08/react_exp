import {Navigation} from "./components/Navigation";
import Image from "./components/Image";
import Card from "./components/Card";
import Home from "./components/Home";

import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
  <Home/>

  <div>
    <Contact/>
    </div>
    </div>
  );
}

export default App;
