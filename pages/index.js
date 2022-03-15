import Link from "next/link"

import About from "../components/About"
import Contacts from "../components/Contacts"
import Introduction from "../components/Introduction"
import MainContent from "../components/MainContent"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import WIP from "../components/WIP"

const Home = () => {
  return (
    <div className="MainBackground">
        <Navbar tab={0}/>
        <MainContent/>
        <Introduction/>
        {/* <About/> */}
        <Projects/>
        <Contacts/>
        <WIP/>
    </div>
  )
}

export default Home