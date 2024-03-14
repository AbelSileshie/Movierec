import React from 'react'
import { Link } from 'react-router-dom'

function Navigtion() {
  return (
    <div className="border-solid-2px-red">

     <Link to="/">Home</Link>
     <Link to="/Test">test</Link>
     <Link to ="/Login">Login</Link>    


    </div>
  )
}

export default Navigtion