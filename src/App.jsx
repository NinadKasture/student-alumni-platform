import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'

import { DataContext, DataProvider } from './context/DataContext'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState();
  const [pw,setPw] = useState();

  const [naam,setNaam] = useState();
  const [digit,setDigit] = useState();

  return (

    <DataProvider value={{name,pw,setName,setPw}}>

    <div>
     <Outlet/>
    </div>

    </DataProvider>
  )
}

export default App;
