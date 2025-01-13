import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../Context/Context'
// import UserDetails from './UserDetails'
function User() {
  const { users } = useContext(userContext)
  return (
    <div>
      <h1 className='text-2xl'>
        Users List
        <div className='mt-10 w-1/2 flex flex-col'>
          {users.map((elem, index) => (
            <Link key={index} to={`/users/${elem.id}`} className="mb-3 p-3  bg-blue-100 ">{elem.username}</Link>
          ))}
        </div>
      </h1>
    </div>
  )
}

export default User