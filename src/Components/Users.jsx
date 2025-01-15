import React, { useContext } from 'react'
import { userContextdata } from '../Context/Context'
import { useParams } from 'react-router-dom';
function Users() {
  const {id } = useParams()
  const{users} = useContext(userContextdata)

  let user = users && users.find((user) => user.id === Number(id));
  return user ? (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col items-center py-10">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-11/12 max-w-md">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center text-2xl font-bold rounded-full">
            {user.name[0]}
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 ml-4">{user.name}</h1>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Username:</span> @{user.username}
          </p>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Website:</span>{' '}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          </p>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
       
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center">
      <h1 className="text-2xl text-gray-600">Loading...</h1>
    </div>
  );
}

export default Users