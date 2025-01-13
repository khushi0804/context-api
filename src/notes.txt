import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import User from './Components/User'
import About from './Components/About'
import UserDetails from './Components/UserDetails'


function App() {
  return (
    <div className='p-1 m-auto'>
      <nav className="bg-slate-600 text-white p-4 shadow-lg mt-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold">
            <Link to="/">MyWebsite</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="hover:text-blue-300 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/user"
              className="hover:text-blue-300 transition duration-300 ease-in-out"
            >
              User
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-300 transition duration-300 ease-in-out"
            >
              About
            </Link>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/users/:elem' element={<UserDetails/>} />
        <Route path='/about' element={<About />} />

      </Routes>
    </div>
  )
}

export default App