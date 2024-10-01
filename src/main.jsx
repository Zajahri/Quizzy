import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import English from './subjects/English.jsx'
import History from './subjects/History.jsx'
import Science from './subjects/Science.jsx'
import Mathematics from './subjects/Mathematics.jsx'
import Error from './Error.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error />
  },
  {
    path: '/english',
    element: <English />
  },
  {
    path: '/mathematics',
    element: <Mathematics />
  },
  {
    path: '/science',
    element: <Science />
  },
  {
    path: '/history',
    element: <History />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
