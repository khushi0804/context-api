import React, { createContext, useState } from 'react'

export const userContext = createContext();

function Context(props) {
  const [users, setUsers] = useState([
    { id: 0, username: "John Doe", city: "USA" },
    { id: 1, username: "Joe", city: "Russia" },
    { id: 2, username: "phobe", city: "LA" },
    { id: 3, username: "Ross", city: "USA" },
  ])
  // console.log(props)
  return (
    <div>
      <userContext.Provider value={{ users, setUsers }}> {props.children
      }</userContext.Provider>
    </div>
  )
}

export default Context