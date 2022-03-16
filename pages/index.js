import react, { useState, useEffect } from "react"
import About from "../components/About"
import Contacts from "../components/Contacts"
import Introduction from "../components/Introduction"
import MainContent from "../components/MainContent"
import MobileBar from "../components/MobileBar"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import WIP from "../components/WIP"

const Home = () => {
  const [width, setWidth] = useState(null);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }

  }, []);

  
  const isMobile = width <= 1200;


  return (
    <div className="MainBackground">
        { isMobile ? <MobileBar/> : <Navbar/> }
        <WIP/>
        <MainContent/>
        <Introduction/>
        {/* <About/> */}
        <Projects/>
        <Contacts/>
    </div>
  )
}

export default Home