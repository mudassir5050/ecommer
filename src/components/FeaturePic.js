import React from 'react'

const FeaturePic = ({singlepic =[{url:""}]}) => {

   console.log(singlepic);

  return (
    <div className="col-6">
  
  {/* <div class="row g-2">
    <div class="col-3">
    {
        imagess.map((element, index)=>{
            return(
                <figure>
                    <img src={element.url} alt={element.filename}  />
                </figure>
            )

        })
    }
        
      <div class=" border bg-light">Custom column padding</div>
      <div class=" border bg-light">Custom column padding</div>
    </div>
    <div class="col-9 h-100vh">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    
</div> */}
    </div>
  )
}

export default FeaturePic
