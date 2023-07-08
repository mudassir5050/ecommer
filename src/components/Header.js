import React,{useState} from 'react'
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {

 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"><img src="./logo192.png" alt="" className='w-25 img-fluid' /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link  " to="/cart">
          <i className="bi bi-cart position-relative"> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-secondary">1 <span className="visually-hidden">1</span></span></i>
      
         </NavLink>
        </li>
    
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
