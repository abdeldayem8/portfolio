import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dfw5zdh', 'template_f4b3up7', form.current, 'gNiz-3QJG94NGjItT')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  const{ref,inView} = useInView();
  const animation =useAnimation();
  useEffect(()=>{
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:'spring',duration:1,bounce:0.3
        }
      });
    }
    if(!inView){
      animation.start({x:'-100vw'})
    }
    console.log("framer"+inView);
   },[inView]);
  return <>
 
  <section id="contact">
  <div className='contact'>
  <div ref={ref}  className='container py-4 contact'>
   
         <form  ref={form} onSubmit={sendEmail}>
      <motion.label animate={animation}>Name</motion.label>
      <motion.input animate={animation} type="text" name="to_name" className='form-control' />
      <motion.label animate={animation}>Email</motion.label>
      <motion.input animate={animation} type="email" name="from_name" className='form-control' />
      <motion.label animate={animation}>Message</motion.label>
      <motion.textarea animate={animation} name="message" className='form-control' />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <motion.input animate={animation} type="submit" className='btn btn-outline-primary w-25' value="Send" />
      </div>
    </form>
    </div>
    </div>
  </section>

   
  </>
}
