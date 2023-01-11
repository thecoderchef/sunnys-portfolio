import React from 'react'
import './about.css'
// import ME2 from '../../assets/meAvi.png'
import newMeImage3 from '../../assets/newMeImage1.png'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {BsFolder} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={newMeImage3} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Experience</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>20+ Clients Worldwide</small>
            </article> */}

            <article className='about__card'>
              <BsFolder className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Projects</small>
            </article>
          </div>

          <p>
          Hi there I'm Sunny. Nice to meet you. I'm a self-taught software developer with 2+ years experience majorly in web development languages with an ability to integrate any user interface into real intuitive designs and development. Always open to learning and working with other people with the mindset of satisfying the end users.

          </p>

          {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}

          
          <a href="#contact" className='btn-grad'>Let's Talk</a>
         

        </div>
      </div>
    </section>
  )
}

export default About
