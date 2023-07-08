import React from 'react'
import { Link} from 'react-router-dom'
import './Product.css'
import Price from './Price'


const Product = ({id,name,price,image,category}) => {
    
  return (
    
    <div className="col mt-3">
    <div className="card h-100 newcard">
      <Link to={`singleproduct/${id}`}>
        <figure>
      <figcaption>{category}</figcaption>
      <img src={`${image}`} className="card-img-top" alt="..."/>
      </figure>
    </Link>
    
      <div className="card-body d-flex justify-content-md-between">
      <div >
       {name}
      </div>
      <div >
      <Price price={price}/> 
      </div>
      </div>

    </div>
  </div>
  )
}

export default Product
