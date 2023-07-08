import React from 'react'
import { useProductContext } from '../context/ProductContext';
import Product from './Product';


const FeatureProduct = () => {
    const { isLoding, fatureProducts } = useProductContext()

    if(isLoding){
        return <div className="div">loding</div>
    }
    return (
        <div className="container-fluid">
            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-12 ">

                        <span>check now</span>
                        <h3>Feature Product</h3>
                    
                    </div>

                    {
                        fatureProducts.map((currentElement) => {
                            return <Product  key={currentElement.id} {...currentElement}/>
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default FeatureProduct
