// App.js
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegistrationFormPage from './components/RegistrationFormPage';
import LifeCklsHomePage from './components/LifeCklsHomePage'
import "./App.css";
import logo from "./lifeCkls_Logo1.png";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/register" component={RegistrationFormPage} />
          <Route path="/" component={LifeCklsHomePage} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
