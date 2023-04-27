import React from 'react'
import './App.css'
import './global.css'
import SingIn from './pages/sign-in'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SingIn />}></Route>
        <Route path="/" element={<Navigate to="/sign-in" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
