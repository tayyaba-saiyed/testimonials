import React from 'react'
import TestimonialsF from './components/testimonials/TestimonialsF'
import { RouterProvider } from 'react-router-dom'
import Routing from './routers/Routing'

const App = () => {
  return (
    <div>
     <RouterProvider router={Routing}></RouterProvider>
    </div>
  )
}

export default App
