import React, { useEffect,ref,inView } from 'react';
import pdffile from '../../assats/mohamedresume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './About.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
export default function About() {
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

  const handleResume = () => {
    return (
     <button className=' btn btn-outline-primary'> <a className='resumelink' href={pdffile} download='Mohamed Ahmed Cv' target='_blank' rel='noopener noreferrer'>
        Resume
      </a>
      </button>
      
    );
  }

  

  return (
    
  <section id="about">
  <div className='container py-4'>
      <div ref={ref} className='row g-4 py-4'>
        <motion.div className='col-sm-6' animate={animation}>
          <div className='description'>
            <p>
              Hello, I'm <span>Mohamed Abdeldaim</span>, a dedicated student and aspiring Front-End Developer with a passion for creating engaging web experiences. While I may not have extensive professional experience just yet, I've been diligently honing my skills and working on a variety of exciting projects.
            </p>
            {handleResume()}
            <AnchorLink href='#contact'>
            <button   className='btnres btn btn-outline-primary ms-2'>
              <span  className='reslink'>Hire Me!</span>
            </button>
            </AnchorLink>
      
          </div>
        </motion.div>
        <div className='col-sm-1'></div>
        <motion.div animate={animation} className='col-sm-5  d-flex justify-content-center '>
          <img src={require('../../assats/photoabout.png')} />
         </motion.div> 
      </div>
    </div>
  </section>

   
  );
}
