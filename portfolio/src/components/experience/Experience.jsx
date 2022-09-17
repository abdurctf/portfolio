import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
<h5>WHat Skills I have</h5>
<h2>My Experience</h2>

<div className='container experience__container'>
  <div className='experience__frontend'>
    <h3>Familiar with:</h3>
    <div className='experience__content'>
      <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>HTML</h4>
    </article>

    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>CSS</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>Javascript</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>Vue.JS</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>C++</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>Python</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>Flask</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>C#</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>.NET Core 3.1</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>SQL</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>Vuex</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>mySQL</h4>
    </article>
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <h4>Oracle</h4>
    </article>
    </div>
  </div>
</div>


      Experience</section>
  )
}

export default Experience