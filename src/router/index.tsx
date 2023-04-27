import SingIn from '@/pages/sign-in'
import { Routes, Route } from 'react-router-dom'
import React from 'react'

const router = () => {
  return (
    <div>
      <Routes>
        <Route path={'/sign-in'} element={<SingIn />}></Route>
      </Routes>
    </div>
  )
}

export default router
