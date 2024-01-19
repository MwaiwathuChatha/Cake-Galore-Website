import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import CakeCard from './components/CakeCard'

export default function Home() {
  return(
    <main>
      <Navbar />
      <CakeCard />
    </main>
  )
}
