import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./components/pages/all/All";
import Blocked from "./components/pages/blocked/Blocked";
import Your from "./components/pages/your/Your";
import "./App.css"


function App() {
  return (
  
    <div className="container" >

      <p className="h1" >Virtual Cards</p>
    
    <BrowserRouter>
    <Routes>
    <Route exact  path="/" element={<All/>} />
    <Route exact  path="/blocked" element={<Blocked/>} />
    <Route exact  path="/your" element={<Your/>} />
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
