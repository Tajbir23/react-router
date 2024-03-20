import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import User from './components/User.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <h1>Home</h1>,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/team',
        element: <Team />,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        children: [
          {
            path: '/team/:id',
            element: <User />,
            loader: ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
