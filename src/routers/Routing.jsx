import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import TestimonialsF from '../components/testimonials/TestimonialsF'

const Routing = createBrowserRouter ([
    {path: '/',
        element: <TestimonialsF />,
        children: [
            {path: 'form',
                element: <TestimonialsF />
            }
        ]
    }
])

export default Routing
