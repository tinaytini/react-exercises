import React from "react";
import { Routes, Route } from "react-router-dom";
import Exercise1 from './Exersices/Exercise1';
import Exercise2 from './Exersices/Exercise2';
import Exercise3 from './Exersices/Exercise3';
import Exercise4 from './Exersices/Exercise4';
import Exercise5 from './Exersices/Exercise5';
import Exercise6 from './Exersices/Exercise6';
import Header from "./Components/header";
import { useParams } from "react-router-dom";


export default function App() {
  const param = useParams()
  return (
    <div>
      <Header/>
      <ul style={{display: 'grid', gridAutoFlow: 'column', gap: 12}}>
        <Routes>
          <Route path="/Exercise1" element={<div><Exercise1 /></div>}/>
          <Route path="/Exercise2" element={<div><Exercise2 /></div>}/>
          <Route path="/Exercise3" element={<div><Exercise3 /></div>}/>
          <Route path="/Exercise4" element={<div><Exercise4 /></div>}/>
          <Route path="/Exercise5" element={<div><Exercise5 /></div>}/>
          <Route path="/Exercise6" element={<div><Exercise6 /></div>}/>
        </Routes>  
      </ul>
    </div>
  );
}

