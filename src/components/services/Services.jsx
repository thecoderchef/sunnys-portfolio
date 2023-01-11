import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Figma</p>
            </li>
            {/* <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum?</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, cum?</p>
            </li> */}
          </ul>
        </article>

        {/* END OF UI/UX  */}

        <article className="service">
          <div className="service__head">
            <h3>WEB Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>I enjoy bringing ideas to life in the browser. </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>HTML5</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>CSS3</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>SASS</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Javascript</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>React</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX  */}

        <article className="service">
          <div className="service__head">
            <h3>Software Testing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, eos..</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, at!.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, necessitatibus.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, cumque.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nulla.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* END OF  WEB DEVELOPMENT  */}

      </div>
    </section>
  )
}

export default Services