import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import WorkshopPage from './components/WorkshopPage.jsx'
import CollabPage from './components/CollabPage.jsx' // Corrected import
import LoginPage from './components/LoginPage.jsx'
import Interface from './Interface/Interface.jsx'
import Home from './vamsi/Home.jsx'
import AuthPage from './diptesh/Auth.jsx'
import Register from './diptesh/register/Register.jsx'



const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home/>} />
      <Route path='/login' element={<LoginPage />} /> {/* Use index instead of an empty string */}
      <Route path='/register' element={<Register />} /> 
      <Route path='/auth' element={<AuthPage />} />

      <Route path='interface' element={<Interface />}>

         <Route path='' element={<Dashboard />} />
        <Route path='workshop' element={<WorkshopPage />} />
        <Route path='collab' element={<CollabPage />} />     {/* Corrected route */}

      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
