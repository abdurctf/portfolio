import React from 'react'
import IMG1 from '../../assets/project1.jpg'
import './projects.css'
import IMG2 from '../../assets/reminders_webapp.png'

const Projects = () => {
  return (
    <section id='projects'>
      
      <h2>My projects</h2>

      <div className='container project__container'>
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>USF Student Mental Health Blog</h3>
          <div className='project__item-cta'>
          <a href='https://github.com/abdurctf/hackabullproject2022' className='btn' target='_blank'>Github</a>
          <a href='https://devpost.com/software/usf-student-mental-health-support' className='btn btn-primary' target='_blank'>Demo</a>
        </div>
        </article>
        <article className='project__item'>
          <div className='project__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Mini Reminders Web App</h3>
          <div className='project__item-cta'>
          <a href='https://github.com/abdurctf/reminders-webapp' className='btn' target='_blank'>Github</a>
          <a href='https://reminderswebapp.netlify.app/' className='btn btn-primary' target='_blank'>Demo</a>
        </div>
        </article>
      </div>

      </section>
  )
}

export default Projects