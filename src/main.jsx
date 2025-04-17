import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cinder from './components/projects/cinder.jsx'
import Visa from './components/projects/visa.jsx'
import Hpb from './components/projects/hpb.jsx'
import Nuss from './components/projects/nuss.jsx'
import Spray from './components/projects/spray.jsx'
import Lozenges from './components/projects/lozenges.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/cinder',
    element: <Cinder />,
  },
  {
    path: '/visa',
    element: <Visa />
  },
  {
    path: '/hpb',
    element: <Hpb />
  },
  {
    path: '/nuss',
    element: <Nuss />
  },
  {
    path: '/spray',
    element: <Spray />
  },
  {
    path: '/lozenges',
    element: <Lozenges />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)