import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';


function App() {
  return (
    <React.Fragment>
      <Routes>  
          <Route index element={<Landing />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;