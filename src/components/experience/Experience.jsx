import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>Languages I Speak</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div><h4>HTML5</h4>
              {/* <small className='text-light'>Lorem, ipsum.</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div><h4>CSS3</h4>
              {/* <small className='text-light'>Lorem, ipsum.</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div><h4>Javascript</h4>
              {/* <small className='text-light'>Lorem, ipsum.</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div><h4>ReactJS</h4>
              {/* <small className='text-light'>Lorem, ipsum.</small> */}
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div><h4>Typescript</h4>
              {/* <small className='text-light'>Lorem, ipsum.</small> */}
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div><h4>Git</h4>
              {/* <small className='text-light'>Lorem, ipsum.</small> */}
              </div>
            </article>
          </div>

        </div>
        {/* END OF FRONTEND */}
        <div className="experience__testing">
        <h3>Software Testing & Design</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Jira</h4>
              {/* <small className='text-light'>Lorem, ipsum.</small> */}
              </div> 
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div> <h4>Figma</h4>
              {/* <small className='text-light'>Lorem, ipsum.</small> */}
              </div>
            </article>

            {/* <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div><h4>Figma</h4>
              <small className='text-light'>Lorem, ipsum.</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div><h4>ReactJS</h4>
              <small className='text-light'>Lorem, ipsum.</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div><h4>Bootstrap</h4>
              <small className='text-light'>Lorem, ipsum.</small></div>
            </article> */}
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience
