import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Clubs from './components/clubs/Clubs'



const App = () => {
  return (
    <><Header/>
    <Nav/>
    <About/>
   
    <Experience/>
    <Projects/>
    <Clubs/>
    <Contact/>
    <Footer/>
    
    </>
    
  )
}

export default App