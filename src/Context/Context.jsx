import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
export const userContextdata = createContext()
function Context(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const api = 'https://jsonplaceholder.typicode.com/users';
    axios.get(api)
    .then((res) => {
      // console.log(res)
      setUsers(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
      <userContextdata.Provider value={{users, setUsers}}>
        {props.children}
      </userContextdata.Provider>
    </div>
  )
}

export default Context