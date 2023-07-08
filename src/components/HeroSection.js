import React from 'react'
import {Link} from "react-router-dom";

const HeroSection = ({data}) => {

    const {name}=data
   
    return (
        <div className='container mt-3 bg-warning'>
            <div className='row'>
                <div className='col-md-6 m-auto '>
                    <span className="text-muted">welcome</span>
                    <h1>{name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat error itaque ratione repudiandae. Rerum ducimus animi doloribus ipsam, libero amet. Eligendi laudantium accusantium est repellendus itaque dolor earum ipsum. At exercitationem ea a.</p>
                    <Link className='btn btn-primary mb-3' to="/about">Shop now</Link>
                </div>
                <div className='col-md-6 '>
                    <img className='img-fluid h-100' src="./images/consumer-image.webp" alt=""  />

                </div>
            </div>

        </div>
    )
}

export default HeroSection
