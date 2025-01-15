import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users'
function App() {

  return (
    <div className='w-[80%] mt-5 p-5 mx-auto bg-zinc-100'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/:id' element={<Users />} />
      </Routes>
    </div>
  )
}

export default App