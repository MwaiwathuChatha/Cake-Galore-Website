import React from 'react';
import back from '@/public/colorBack3.jpg'
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${back.src})` }}
    className="w-screen bg-cover bg-center text-white border-b-8 border-b-solid border-b-slate-400">
    <Navbar2 />
    <div className="w-full">
      <div className="justify-center text-4xl text-center p-5 font-bold">
        <h1>Get in touch with us</h1>
      </div>

      <div className="flex flex-col mx-20">
<div className="divider divider-primary">   </div>
</div>

      <label className="form-control w-full items-center align-middle justify-center justify-between">
  <div className="label">
    <span className="label-text text-2xl font-bold text-white">First Name</span>
    
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs textarea-primary" />
  <div className="label">
 
  </div>
</label>

<label className="form-control w-full items-center align-middle justify-center justify-between">
  <div className="label">
    <span className="label-text text-2xl font-bold text-white">Last Name</span>
    
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs textarea-primary" />
  <div className="label">
    
  </div>
</label>

<label className="form-control w-full items-center align-middle justify-center justify-between">
  <div className="label">
    <span className="label-text text-2xl font-bold text-white">Email</span>

  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs textarea-primary" />
  <div className="label">
   
  </div>
</label>

<label className="form-control items-center justify-center flex flex-row">
  <div className="label">
    <span className="label-text text-2xl font-bold text-white">Your message</span>
  </div>
</label>

<div className='items-center justify-center flex flex-row'>
  <textarea placeholder="Bio" className="textarea textarea-primary textarea-lg w-full max-w-xs basis-1/2" ></textarea>
</div>





      </div>
      <Footer />
  </div>
  );
}
