import React from 'react'
import './footer.css'
import {FiTwitter} from 'react-icons/fi'
import {FaBloggerB} from 'react-icons/fa'
// import {BsInstagram} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="home" className='footer__logo'>Sunny Ogbari</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

        <div className="footer__socials">
          <a href="https://twitter.com/thecoderchef" target='blank'> <FiTwitter /> </a>
          <a href="https://thecoderchef.hashnode.dev/"> <FaBloggerB /> </a>
          <a href="https://www.linkedin.com/in/sunnyogbari" target='blank'> <AiOutlineLinkedin /> </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Sunny Ogbari</small>
        </div>

      
    </footer>
  )
}

export default Footer