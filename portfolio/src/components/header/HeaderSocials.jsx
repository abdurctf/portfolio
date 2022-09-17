import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/abdurrahmanbinsharif"><AiFillLinkedin/></a>
        <a href="https://github.com/abdurctf" ><AiFillGithub/></a>
        <a href="https://www.instagram.com/abdur_rahman117" ><AiFillInstagram/></a>
        
    </div>
  )
}

export default HeaderSocials