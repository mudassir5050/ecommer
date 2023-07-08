import React from 'react'
import HeroSection from './components/HeroSection'
import Trusted from './components/Trusted'
import Services from './components/Services'
import { useProductContext } from './context/ProductContext'
import FeatureProduct from './components/FeatureProduct'




const Home = () => {

const mydata={
  name:"Mudasir stores"
}

  return (
   <>
   <HeroSection data={mydata}/>
   <FeatureProduct/>
   <Services/>
   <Trusted/>
   
  
    
   </>
  )
}

export default Home
