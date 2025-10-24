import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router"
import App from './App.jsx'
import Create from './Create.jsx'
import { ActionCreate } from './Action/ActionCreate.jsx'
import { LoaderAuth } from './Loader/LoaderAuth.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App/>,loader:LoaderAuth},
  {path:"/create",element:<Create/>,action:ActionCreate}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
