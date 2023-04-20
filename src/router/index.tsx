import SingIn from '@/pages/sign-in'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: SingIn()
  }
])

export default router
