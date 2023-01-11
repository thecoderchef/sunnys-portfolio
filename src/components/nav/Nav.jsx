import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {MdWorkOutline} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      {/* <a href="#home" onClick={() => setActiveNav('#home')}  className={activeNav === '#home' ? 'active' : '' }> <AiOutlineHome /></a> */}
      <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : '' }> <AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': '' }><AiOutlineUser /></a>
     <a href="#experience"onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': '' }><BiBookAlt /></a>
     <a href="#portfolio"onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active': '' }><MdWorkOutline /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active': '' }><RiServiceFill /></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': '' }><RiServiceFill /></a> */}
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': '' }><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav