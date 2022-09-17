import React from 'react'
import './about.css'
import ME from '../../assets/image2.jpg'
import {FaAward} from 'react-icons/fa'
import {TbBooks} from 'react-icons/tb'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
    <h5>Get to know</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
        <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>SOFTWARE ENGINEERING INTERN, LEADS CORPORATION </small>
            
          </article>
          <article className='about__card'>
          <TbBooks className='about__icon'/>
            <h5>Education</h5>
            <small>Junior, CS, USF </small>
            
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>Majoring in Computer Science at USF</small>
          </article>
            
          
        </div>
      <p>
      I am just learning React thanks!
      </p>

      <a href="#contact" className='btn btn-primary'>Let's chat!</a>

      </div>
      
    </div>
   </section>
  )
}

export default About