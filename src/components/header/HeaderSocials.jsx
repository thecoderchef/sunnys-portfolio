import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaTwitterSquare} from 'react-icons/fa'
import {FaBloggerB} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/sunnyogbari" target='blank'><BsLinkedin /></a>
        <a href="https://github.com/thecoderchef" target='blank'><FaGithub /> </a>
        <a href="https://thecoderchef.hashnode.dev/"> <FaBloggerB /> </a>
        <a href="https://twitter.com/thecoderchef" target='blank'><FaTwitterSquare /></a>

    </div>
  )
}

export default HeaderSocials