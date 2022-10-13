import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import RequestForm from './pages/RequestForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/form" element={<RequestForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
