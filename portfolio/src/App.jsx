import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Services  from './components/services/Services'

import Testimonials from './components/testimonials/Testimonials'


const App = () => {
  return (
    <><Header/>
    <Nav/>
    <About/>
    <Contact/>
    <Experience/>
    <Services/>
    <Testimonials/>
    <Footer/>
    
    </>
    
  )
}

export default App