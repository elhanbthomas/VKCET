
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import './css/login_container.css';
import LoginContainer from './components/login_container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes> 
        <Route path='*' element={<LoginContainer />}></Route>
      </Routes>
    </Router>
  )
}

export default App
