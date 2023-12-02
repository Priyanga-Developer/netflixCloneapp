import React from 'react'
import "./Plans.css"

const Plans = () => {


  const productDetails=[
    { 
      id:1,
      plans:"Mobile",
      description:"480p",
      isSubscribe:true
    },
    {
      id:2,
      plans:"Basic",
      description:"720p",
      isSubscribe:false
    },
    {
      id:3,
      plans:"Standard",
      description:"1080p",
      isSubscribe:false
    },
    {
      id:4,
      plans:"Premium",
      description:"4K+HDR",
      isSubscribe:false
    }]
    const handleupdatePlans=(id)=>{
      console.log(id)

    }

  return (
    <>
    {productDetails.map((product)=>
     <div className={`${
      product.isSubscribe && "plansScreen__plan--disabled"
    } plansScreen-plan`} key={product.id}>
     <div className="plansScreen-info" >
       <h5>{product.plans}</h5>
       <h6>{product.description}</h6>
     </div>
      <button onClick={()=>handleupdatePlans(product.id)}>  {product.isSubscribe ? "Current Package" : "Subscribe"}</button>    
   </div>
    )}
   
  </>
)
  }

export default Plans