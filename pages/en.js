import React, { useState, useEffect } from "react"

import Contacts from "../components/Contacts"
import Introduction from "../components/Introduction"
import MainContent from "../components/MainContent"
import MobileBar from "../components/MobileBar"
import Navbar from "../components/Navbar"
import Polygons from "../components/Polygons"
import Projects from "../components/Projects"

const en = () => {
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
          <Head>
            <title>Henrique Torres</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="/Logo.png"></link>
          </Head>
          <Polygons/>
          { isMobile ? <MobileBar lang="en"/> : <Navbar lang="en"/> }
          <MainContent lang="en"/>
          <Introduction lang="en"/>
          <Projects lang="en"/>
          <Contacts lang="en"/>
      </div>
    )
  }
  

export default en