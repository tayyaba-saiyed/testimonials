import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import TestimonialsF from '../components/testimonials/TestimonialsF'
import TestimonialList from '../components/list/TestimonialList'

const Routing = createBrowserRouter([
    {
        path: '/',

        element: <TestimonialsF />
    },
    {
        path: 'form',
        element: <TestimonialsF />
    },
    {
        path: 'list',
        element: <TestimonialList />
    }

])

export default Routing
