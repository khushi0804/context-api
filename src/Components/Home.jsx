import React, { useContext } from 'react'
import { userContextdata } from '../Context/Context'
import { Link } from 'react-router-dom'
function Home() {
  let { users } = useContext(userContextdata)
  return ( 
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">User List</h1>
      {users ? (
        <ul className="w-11/12 max-w-2xl bg-white shadow-md rounded-lg p-6">
          {users.map((user) => (
            <li
              key={user.id}
              className="border-b last:border-none py-4 px-2 hover:bg-gray-50 transition-all"
            >
              <Link
                to={`/users/${user.id}`}
                className="flex items-center gap-4 text-lg text-blue-600 hover:underline"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
                  {user.name[0]}
                </div>
                <span>{user.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-xl text-gray-500">Loading...</h1>
      )}
    </div>
  )
}

export default Home