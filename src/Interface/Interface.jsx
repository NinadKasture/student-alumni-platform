import { useState } from 'react'

import { Outlet } from 'react-router-dom'
import TopSection from '../components/TopSection'
import WorkshopPage from '../components/WorkshopPage'
import CollapPage from '../components/CollabPage'
import Dashboard from '../components/Dashboard'

function Interface() {

  return (
    <div>
     <TopSection/>
     <Outlet/>
    </div>
  )
}

export default Interface;
