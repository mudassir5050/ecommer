import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({name}) => {
  return (
  
    <div className="container mt-3">
        <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><NavLink className="text-dark " to="/">Home</NavLink></li>
    <li className="breadcrumb-item active " aria-current="page">{name}</li>
  </ol>
</nav>
    </div>

  )
}

export default PageNavigation
