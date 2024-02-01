import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegistrationFormPage from './components/RegistrationFormPage';
import LifeCklsHomePage from './components/LifeCklsHomePage'
import "./App.css"
import logo from "./lifeCkls_Logo1.png"

function App() {
  return (
    <BrowserRouter>
      <div>
      <img src={logo} alt="Logo" className="logo" />
        <Routes>
          <Route path="/register" element={<RegistrationFormPage/>}/>
          <Route path="/" element={<LifeCklsHomePage/>} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;