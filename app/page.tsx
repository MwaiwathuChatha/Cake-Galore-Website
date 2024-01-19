import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import CakeCard from './components/CakeCard'
import back1 from "@/public/colorBack.jpg"
import back2 from "@/public/colorBack2.jpg"
import back3 from "@/public/colorBack3.jpg"
import back4 from "@/public/colorBack4.jpg"
import back5 from "@/public/colorBack5.jpg"
import back6 from "@/public/colorBack6.jpg"
import back7 from "@/public/colorBack7.jpg"
import back8 from "@/public/colorBack8.jpg"
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2'




export default function Home() {
  return(
    <main style={{ backgroundImage: `url(${back3.src})` }}
    className="w-screen bg-cover bg-center text-white border-b-8 border-b-solid border-b-slate-400">
      <Navbar2 />
      <CakeCard />
      <Footer />
    </main>
  )
}
