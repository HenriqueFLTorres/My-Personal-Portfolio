import Link from "next/link"

import About from "../components/About"
import MainContent from "../components/MainContent"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="MainBackground">
        <Navbar tab={0}/>
        <MainContent/>
        <About/>
    </div>
  )
}

export default Home