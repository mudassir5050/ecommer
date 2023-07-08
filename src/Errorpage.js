import React from 'react'
import {Link} from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="container">
    <div className="row ">
        <div className="col-12 text-center ">
          <div  style={{height:500, marginTop:250,}}>
            <h1 style={{fontWeight:900}}>404 error </h1>
            <Link className='btn btn-primary' to="/">Home</Link>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Errorpage
