import React from 'react'
import CV from '../../assets/Sunny-Ogbari-CV.pdf'



const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn-grad'>Download CV</a>
        <a href="#contact" className='btn-grad'>Let's Talk</a>

        {/* <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}

    </div>
  )
}

export default CTA