import React from 'react'
import cake1 from "@/public/pexels-lil-artsy-1793037.jpg"
import cake3 from "@/public/pexels-sadman-chowdhury-1619483.jpg"
import cookies from "@/public/cookiesbuttah.jpg"
import biscuit from "@/public/biscuit.jpg"
import biscuit2 from "@/public/biscuit2.jpg"
import cake4 from "@/public/pexels-maria-orlova-4946407.jpg"
import yin from "@/public/yin.jpg"
import sadman from "@/public/sadman.jpg"
import sab from "@/public/pexels-sebastian-coman-photography-3791088.jpg"
import yes1 from "@/public/yes1.jpg"
import yes2 from "@/public/yes2.jpg"
import cast from "@/public/pexels-castorly-stock-3650436.jpg"

const CakeCard = () => {
  return (
    <div>
    <div className='flex flex-row'>
        <div className="card basis-1/2 bg-base-100 shadow-xl m-5">
            <figure><img src={sab.src}/></figure>
            <div className="card-body" >
                <h1 className="card-title">Cakes</h1>
                    <p>We got a sweet treat to light up any occasion!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
            </div>
        </div>

        <div className="card basis-1/2 bg-base-100 shadow-xl m-5">
            <figure><img src={cast.src}/></figure>
            <div className="card-body" >
                <h1 className="card-title">Cupcakes</h1>
                    <p>Cupcakes, cupcakes and more cupcakes!!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
            </div>
        </div>

    </div>

    <div className='flex flex-row'>
        <div className="card basis-1/2 bg-base-100 shadow-xl m-5">
            <figure><img src={cookies.src}/></figure>
            <div className="card-body" >
                <h1 className="card-title">Cookies</h1>
                    <p>Freshly baked cookies make a wondeful treat anytime</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
            </div>
        </div>

        <div className="card basis-1/2 bg-base-100 shadow-xl m-5">
            <figure><img src={biscuit2.src}/></figure>
            <div className="card-body" >
                <h1 className="card-title">Biscuits</h1>
                    <p>Nothing like some home baked bisuits to go along with a nice cup of tea</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Order Now</button>
                        </div>
            </div>
        </div>

    </div>




    </div>
  )
}

export default CakeCard