
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import './css/login_container.css';
import LoginContainer from './components/login_container'
import ProtectedPath from './components/protectedpath';
import Dashboard from './components/dashboard';
import Choices from './components/login_choices';
import Login from './components/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes> 
        <Route path="/" element={<LoginContainer />} >
          <Route path="/" element={<Login />} />
        </Route>
      
        <Route path="/dashboard" element={
          <ProtectedPath> <Dashboard /> </ProtectedPath>  
        } />
    </Routes>
      
    </Router>
  )
}

export default App
