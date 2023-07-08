
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer"
const api="https://api.pujakaitem.com/api/products"

const AppContext=createContext();
const initializer={
    isLoding:false,
    isError:false,
    products:[],
    fatureProducts:[],
    singleIsLoding:false,
    singleIsError:false,
    singelProducts:{}
}

const AppProvider=({children})=>{

const [state, dispatch] = useReducer(reducer, initializer)

    const getProduct= async (api)=>{
        dispatch({type:"LODING"})
        try {
            const res= await axios.get(api);
            const dataProduct= await res.data;
            // console.log(dataProduct);
            dispatch({type:"MY_PRODUCT_API", payload:dataProduct})
            
        } catch (error) {
            dispatch({type:"ERROR_API"})
        }
    
    }


    const featureProduct=async (url)=>{
        dispatch({type:"Feature_Loding"})
       try {
        const res = await axios.get(url)
        const singleProduct= await res.data
        dispatch({type:"Feature_Get_Data", payload:singleProduct})
       } catch (error) {
        dispatch({type:"ERROR"})
       }

    }
    useEffect(()=>{

        getProduct(api)
    },[])


return <AppContext.Provider value={{...state,featureProduct}}>
{children}
</AppContext.Provider>
}

const useProductContext=()=>{

    return useContext(AppContext)
}

export {AppProvider,AppContext,useProductContext }