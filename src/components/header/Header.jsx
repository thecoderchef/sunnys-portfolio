import React from 'react'
import './header.css'
import CTA from './CTA'
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
// import ME from '../../assets/me.png'
// import ME from '../../assets/avatar1.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className='introName'>Sunny Ogbari</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
      

        <div className='me'>
          {/* <img src={ME} alt="" /> */}
          
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>

    </header>
  )
}

export default Header