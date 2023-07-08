

const ProductReducer = (state, action) => {
 
    switch (action.type) {
        case "LODING":
            return{
                ...state,
                isLoding:true

            }
            case "MY_PRODUCT_API":
                const fatureProduct = action.payload.filter((element)=>{
                        return element.featured === true
                })
                return{
                    ...state,
                isLoding:false,
                products:action.payload,
                fatureProducts:fatureProduct
                }
                
        case "ERROR_API":
            return{
                ...state,
                isLoding:false,
                isError:true,

            }
       case"Feature_Loding":
       return{
        ...state,
        singleIsLoding:true,
       }
       case"Feature_Get_Data":
       return{
        ...state,
        singleIsLoding:false,
        singelProducts:action.payload,
       }

case"ERROR":
return{
    ...state,
    singleIsLoding:false,
    singleIsError:true
}

    
        default:
           return state;            
    }
}

export default ProductReducer
