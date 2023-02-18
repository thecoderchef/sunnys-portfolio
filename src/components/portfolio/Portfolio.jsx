import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'
import FYLO from '../../assets/fylo-portfolio.png'
import CARDS from '../../assets/cards-portfolio.png'
// import COUNTER from '../../assets/counter.png'
import INNOVFIDE from '../../assets/innovfide.png'

import LCPORTAL from '../../assets/lcportal.png'
import SENDFUNDS from '../../assets/sendFunds.png'
import TODO from '../../assets/todoApp.png'

const data = [
  {
    id: 1,
    image: FYLO,
    title: 'Fylo Landing Page',
    github: 'https://github.com/thecoderchef/Fylo-landing-page',
    demo: 'https://sunny-fylo-landing-page.netlify.app/',
  },

  {
    id: 2,
    image: TODO,
    title: 'Todo Dashboard',
    github: 'https://github.com/thecoderchef/todoapp',
    // demo: 'https://sunny-fylo-landing-page.netlify.app/',
  },

  {
    id: 3,
    image: CARDS,
    title: 'Expanding Cards',
    github: 'https://github.com/thecoderchef/Expanding_cards',
    demo: 'https://expandingcardsbythecodrchef.netlify.app//',
  },


  {
    id: 4,
    image: INNOVFIDE,
    title: 'Innovfide Dashboard',
    github: 'https://github.com/thecoderchef/innovfide-1',
    // demo: 'https://counterbythecoderchef.netlify.app/',
  },
  
  
 

  {
    id: 5,
    image: LCPORTAL,
    title: 'LC Portal',
    // github: 'https://github.com/thecoderchef/color-flipper',
    // demo: 'https://task-color-flipper.netlify.app/',
  },

  

  {
    id: 6,
    image: SENDFUNDS,
    title: 'Funds Transfer Dashboard',
    // github: 'https://github.com/thecoderchef/Fylo-landing-page',
    // demo: 'https://send-funds.netlify.app/',
    demo: 'https://sunnysfundstransfer.netlify.app/',
  },

 
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        { data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
          <img src={image} alt={title} />
          <div className="portfolio__item-image"></div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
         <a href={github} className='btn-port' target='blank'>Github</a>
          <a href={demo} className='btn-port' target='blank'>Live Demo</a>

          {/* <a href={github} className='btn' target='blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a> */}
         </div>
        </article>
          )
        })
          
        }


        {/* THIS METHOD ISN'T THE ARRAY METHOD */}
        {/* <article className='portfolio__item'>
          <img src={IMG1} alt="" />
          <div className="portfolio__item-image"></div>
          <h3>Fylo Landing Page</h3>
         <div className="portfolio__item-cta">
         <a href="https://github.com/thecoderchef/Fylo-landing-page" className='btn' target='_blank'>Github</a>
          <a href="https://sunny-fylo-landing-page.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>

        <article className='portfolio__item'>
          <img src={IMG2} alt="" />
          <div className="portfolio__item-image"></div>
          <h3>Fylo Landing Page</h3>
          <div className="portfolio__item-cta">
         <a href="https://github.com/thecoderchef/Fylo-landing-page" className='btn' target='_blank'>Github</a>
          <a href="https://sunny-fylo-landing-page.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>

        <article className='portfolio__item'>
          <img src={IMG3} alt="" />
          <div className="portfolio__item-image"></div>
          <h3>Fylo Landing Page</h3>
          <div className="portfolio__item-cta">
         <a href="https://github.com/thecoderchef/Fylo-landing-page" className='btn' target='_blank'>Github</a>
          <a href="https://sunny-fylo-landing-page.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>

        <article className='portfolio__item'>
          <img src={IMG4} alt="" />
          <div className="portfolio__item-image"></div>
          <h3>Fylo Landing Page</h3>
          <div className="portfolio__item-cta">
         <a href="https://github.com/thecoderchef/Fylo-landing-page" className='btn' target='_blank'>Github</a>
          <a href="https://sunny-fylo-landing-page.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>

        <article className='portfolio__item'>
          <img src={IMG5} alt="" />
          <div className="portfolio__item-image"></div>
          <h3>Fylo Landing Page</h3>
          <div className="portfolio__item-cta">
         <a href="https://github.com/thecoderchef/Fylo-landing-page" className='btn' target='_blank'>Github</a>
          <a href="https://sunny-fylo-landing-page.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>

        <article className='portfolio__item'>
          <img src={IMG6} alt="" />
          <div className="portfolio__item-image"></div>
          <h3>Fylo Landing Page</h3>
          <div className="portfolio__item-cta">
         <a href="https://github.com/thecoderchef/Fylo-landing-page" className='btn' target='_blank'>Github</a>
          <a href="https://sunny-fylo-landing-page.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio