import React from 'react'
import cookies from "@/public/cookiesbuttah.jpg"
import biscuit2 from "@/public/biscuit2.jpg"
import sab from "@/public/pexels-sebastian-coman-photography-3791088.jpg"
import cast from "@/public/pexels-castorly-stock-3650436.jpg"

const CakeCard = () => {
  return (
    <div className='text-black'>
    <div className='flex flex-row'>
        <div className="card basis-1/2 bg-base-100 shadow-xl m-5" >
            <figure><img src={sab.src}/></figure>
            <div className="card-body" >
                <h1 className="card-title text-black text-3xl font-bold">Cakes</h1>
                   <span className='text-xl'> <p>We got a sweet treat to light up any occasion!</p></span>
                        
            </div>
        </div>

        <div className="card basis-1/2 bg-base-100 shadow-xl m-5">
            <figure><img src={cast.src}/></figure>
            <div className="card-body" >
                <h1 className="card-title  text-black text-3xl font-bold">Cupcakes</h1>
                <span className='text-xl'><p>Cupcakes, cupcakes and more cupcakes!!</p></span>
                        
            </div>
        </div>

    </div>

    <div className='flex flex-row'>
        <div className="card basis-1/2 bg-base-100 shadow-xl m-5">
            <figure><img src={cookies.src}/></figure>
            <div className="card-body" >
                <h1 className="card-title  text-black text-3xl font-bold">Cookies</h1>
                <span className='text-xl'> <p>Freshly baked cookies make a wondeful treat anytime</p></span>
                       
            </div>
        </div>

        <div className="card basis-1/2 bg-base-100 shadow-xl m-5">
            <figure><img src={biscuit2.src}/></figure>
            <div className="card-body" >
                <h1 className="card-title  text-black text-3xl font-bold">Biscuits</h1>
                <span className='text-xl'><p>Nothing like some home baked bisuits to go along with a nice cup of tea</p></span>
                        
            </div>
        </div>

    </div>




    </div>
  )
}

export default CakeCard