import React from 'react'
import TestimonialsF from './components/testimonials/TestimonialsF'
import { RouterProvider } from 'react-router-dom'
import Routing from './routers/Routing'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <RouterProvider router={Routing}></RouterProvider>
      <ToastContainer />

    </div>
  )
}

export default App
