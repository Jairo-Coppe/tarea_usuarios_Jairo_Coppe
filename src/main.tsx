import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import {Usuarios} from './pages/Usuarios.tsx'
import {Home} from './pages/Home.tsx'
import {UsuariosPais} from './pages/UsuariosPais.tsx'

export const router = createBrowserRouter{[
  {
    path: "/"
    element:<Home />
  }
  {
    path: "/usuarios:"
    element:<Usuarios />
  }
  {
    path: "/usuarios/Pais:"
    element:<UsuariosPais />
  }
]}

createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
