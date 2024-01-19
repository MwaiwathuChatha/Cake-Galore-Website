import React from 'react'
import AddToCart from './AddToCart'



const ProductCart = () => {
  return (
    /*Below after classname are Tailwind classes which can be applied individually to every single component*/
    <div className='p-5 my-5 bg-primary text-black text-xl hover:bg-sky-700'> 
      <AddToCart />  
    </div>
  ) 
}

export default ProductCart