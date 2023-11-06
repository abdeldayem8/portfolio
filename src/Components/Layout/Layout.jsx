import React from 'react'
import NavbarComp from '../Navbar/NavbarComp'
import Footer from  '../Footer/Footer'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'


export default function Layout() {
  return <>
   <NavbarComp/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
  </>
}
