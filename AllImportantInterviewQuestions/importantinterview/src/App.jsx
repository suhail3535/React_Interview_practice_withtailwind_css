import React from 'react'
import Login from './pages/Login-signup/Login'
import Register from './pages/Login-signup/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Randombg from './pages/Randombackgronudcolorgenrator/Randombg';
import DataFetchingComponent from './pages/customHook/UseCustomHook';
import Useref from './pages/useRefHook/Useref';
import FocusInput from './pages/useRefHook/Useref';
import Counter from './pages/useRefHook/Useref';
import MyComponent from './pages/useRefHook/Newref';
const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/" element={<Register />} />

        </Routes>

      </BrowserRouter> */}
      {/* <Randombg /> */}
      {/* <h1>Welcome to app</h1> */}
      <Counter />
      {/* <MyComponent /> */}
      {/* <DataFetchingComponent /> */}

    </div>
  )
}

export default App
