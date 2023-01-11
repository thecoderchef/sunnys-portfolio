import React, { useRef }  from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z9v00xc', 'template_w2z0pdk', form.current, 'Li6c8oD_7A7kuBkP1')
     
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sunny.ogbari@gmail.com</h5>
            <a href="mailto:sunny.ogbari@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <IoLogoLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Let's connect on LinkedIn</h5>
            <a href="https://www.linkedin.com/in/sunnyogbari" target='blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+234 817 014 3886</h5>
            <a href="https://api.whatsapp.com/send?phone=2348170143886" target='blank'>Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email'required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn-grad'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
