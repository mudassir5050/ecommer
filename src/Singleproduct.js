import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './context/ProductContext'
import PageNavigation from './components/PageNavigation'
import FeaturePic from './components/FeaturePic'
// import FeatureDetail from './components/FeatureDetail'
import Price from './components/Price'

const API = "https://api.pujakaitem.com/api/products"
const Singleproduct = () => {
  const { id} = useParams();

  // console.log(id);


  
  const { featureProduct, singleIsLoding, singelProducts } = useProductContext()
  // console.log(singelProducts);

  // console.log(id);
  
  const { id:my,
    name,
    company,
    price,
    description,
    stock,
    reviews,
    stars,
    image
  } = singelProducts
  useEffect(() => {
    
     featureProduct(`${API}?id=${id}`);
  
  
  // console.log(featureProduct());
 
  },[])
  if (singleIsLoding) {
    return <div>....loding</div>
  }
  return (
    <>
      <PageNavigation name={name} />
      <div className="container">
        <div className="row">
          <FeaturePic singlepic={image} />
          <div className="col-6">
            <div className="row">
              <div className="col-12">
                <h1>{name}</h1>
                <p>{stars}</p>
                <p>{reviews} reviews</p>
                <p>
                  MRP:{
                    <del>
                      <Price price={price + 250000} />
                    </del>
                  }
                </p>
                <p className='text-danger'>
                  Deal of the day: <Price price={price} />
                </p>
                <p>
                  {description}
                </p>
                <div className='d-flex '>
                  <div>
                    delevery
                  </div>
                  <div>
                    delevery
                  </div>
                  <div>
                    delevery
                  </div>
                  <div>
                    delevery
                  </div>
                </div>
                <hr />
                <div>
                  <p>Avible: <span> {stock > 0 ? "instock" : "outstock"}</span></p>
                </div>
                <p>ID : <span>{my}</span></p>
                <p>Brand : <span>{company}</span></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Singleproduct
