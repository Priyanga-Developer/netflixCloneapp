import React ,{useState }from 'react'
import "./Plans.css"

const Plans = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const productDetails=[
    { 
      id:1,
      plans:"Mobile",
      description:"480p",

    },
    {
      id:2,
      plans:"Basic",
      description:"720p",
  
    },
    {
      id:3,
      plans:"Standard",
      description:"1080p",
     
    },
    {
      id:4,
      plans:"Premium",
      description:"4K+HDR",
      
    }]
    const handleupdatePlans=(id)=>{
      setSelectedButton(id);
    }

  return (
    <>
    {productDetails.map((product)=>
     <div className={`${
      selectedButton === product.id && "plansScreen__plan--disabled"
    } plansScreen-plan`} key={product.id}>
     <div className="plansScreen-info" >
       <h5>{product.plans}</h5>
       <h6>{product.description}</h6>
     </div>
      <button onClick={()=>handleupdatePlans(product.id)}>  {selectedButton === product.id ? "Current Package" : "Subscribe"}</button>    
   </div>
    )}
   
  </>
)
  }

export default Plans