import React from 'react'
import Login from './pages/Login-signup/Login'
import Register from './pages/Login-signup/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/" element={<Register />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
