import CakeCard from './components/CakeCard'
import back3 from "@/public/colorBack3.jpg"
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
