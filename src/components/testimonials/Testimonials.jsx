import React from 'react'
import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination, } from 'swiper';
// import SwiperCore, { EffectFlip, Navigation} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// SwiperCore.use([EffectFlip, Navigation, Pagination]);

const data = [
  {
    id: 1,
    // image: AVTR1,
    client_name: 'Nengi Nelson',
    client_review: 'Sunny is an excellent frontend developer who is well-versed in the most recent frontend technology advancements.'
  },

  {
    id: 2,
    // image: AVTR2,
    client_name: 'Temitope',
    client_review: 'Working with Sunny at Tabtech was a great experience. She is a team player and she is eager to learn and ivested in self development'
  },

  {
    id: 3,
    // image: AVTR3,
    client_name: 'Ayobami Adekola',
    client_review: 'Sunny is an expert in frontend development, working with her to development my site was an intersting experience. Definitely recommend.  . '
  },

  {
    id: 4,
    // image: AVTR4,
    client_name: 'Busola Olubiyi',
    client_review: 'Sunny can ensure the technical feasibility of UI/UX designs by creating reusable code and libraries, working with her to bring my website to life was a good experience.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper  // install Swiper modules
      modules={[ Pagination,]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

      // pagination={{ clickable: true }}
      // spaceBetween={0}
      // slidesPerView={1}
      // speed={500}
      // loop={true}
      // touchRatio={1.5}
      // navigation={true}
      // effect={"flip"}
      className="container testimonials__container">
        { data.map(({id, image, client_name, client_review}) => {
          return (
            <SwiperSlide key={id} className='testimonial'>
              {/* <div className="client__avatar">
                <img src={image} alt="Client avatar" />
              </div> */}
                <h5 className='client__name'>{client_name}</h5>
                <small className='client__review'>{client_review}</small>
        </SwiperSlide>
          )
        })
        }
        {/* <article  className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Client avatar" />
            <h5 className='client__name'>Nengi Nelson</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rerum porro qui praesentium maxime fugiat cupiditate pariatur, culpa, maiores animi saepe? Optio mollitia sunt a officiis eius corrupti libero quos.</small>
          </div>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonials