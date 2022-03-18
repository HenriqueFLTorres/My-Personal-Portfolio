import react, { useState, useEffect } from "react"

import Contacts from "../components/Contacts"
import Introduction from "../components/Introduction"
import MainContent from "../components/MainContent"
import MobileBar from "../components/MobileBar"
import Navbar from "../components/Navbar"
import Polygons from "../components/Polygons"
import Projects from "../components/Projects"

const Home = () => {
  const [width, setWidth] = useState(null);

  const handleWindowSizeChange = async() => {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }

  }, []);

  
  const isMobile = width <= 1200;


  return (
    <div id="MainBG" className="MainBackground">
        <Polygons/>
        { isMobile ? <MobileBar/> : <Navbar/> }
        <MainContent/>
        <Introduction/>
        <Projects/>
        <Contacts/>
    </div>
  )
}

export default Home