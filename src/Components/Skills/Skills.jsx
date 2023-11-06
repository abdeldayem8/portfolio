
import React, { useEffect } from 'react'
import './Skills.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
export default function Skills() {
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

  <section className='skills-section' id="skills">
  <div ref={ref} className='container'>
      <div className='skills-title text-center'>
        <p>Why Choose Me</p>
        <h2>My Experience Area</h2>
      </div>
      <div  className='skills-items'>
        <motion.div animate={animation} className='skills-item'>
          <div className='skills-info'>
            <p>HTML5</p>
            <p>95%</p>
          </div>
          <div className='progress-line' data-percent='95%'>
            <span style={{width:'95%'}}></span>
          </div>
        </motion.div>
        <motion.div animate={animation} className='skills-item'>
          <div className='skills-info'>
            <p>CSS3</p>
            <p>90%</p>
          </div>
          <div className='progress-line' data-percent='90%'>
            <span style={{width:'90%'}}></span>
          </div>
        </motion.div>
       
        <motion.div animate={animation} className='skills-item'>
          <div className='skills-info'>
            <p>Bootstrap</p>
            <p>85%</p>
          </div>
          <div className='progress-line' data-percent='85%'>
            <span style={{width:'85%'}}></span>
          </div>
        </motion.div>
        <motion.div animate={animation} className='skills-item'>
          <div className='skills-info'>
            <p>JavaScript</p>
            <p>85%</p>
          </div>
          <div className='progress-line' data-percent='85%'>
            <span style={{width:'85%'}}></span>
          </div>
        </motion.div>
        <motion.div animate={animation} className='skills-item'>
          <div className='skills-info'>
            <p>React</p>
            <p>75%</p>
          </div>
          <div className='progress-line' data-percent='75%'>
            <span style={{width:'75%'}}></span>
          </div>
        </motion.div>
        <motion.div animate={animation} className='skills-item'>
          <div className='skills-info'>
            <p>Next Js</p>
            <p>75%</p>
          </div>
          <div className='progress-line' data-percent='75%'>
            <span style={{width:'75%'}}></span>
          </div>
        </motion.div>
        <motion.div animate={animation} className='skills-item'>
          <div className='skills-info'>
            <p>TypeScript</p>
            <p>80%</p>
          </div>
          <div className='progress-line' data-percent='80%'>
            <span style={{width:'80%'}}></span>
          </div>
        </motion.div>
        <motion.div animate={animation} className='skills-item'>
          <div className='skills-info'>
            <p>JQuery</p>
            <p>75%</p>
          </div>
          <div className='progress-line' data-percent='75%'>
            <span style={{width:'75%'}}></span>
          </div>
        </motion.div>
        <motion.div animate={animation} className='skills-item'>
          <div className='skills-info'>
            <p>C#</p>
            <p>70%</p>
          </div>
          <div className='progress-line' data-percent='70%'>
            <span style={{width:'70%'}}></span>
          </div>
        </motion.div>
        <motion.div animate={animation} className='skills-item'>
          <div className='skills-info'>
            <p>OOP</p>
            <p>80%</p>
          </div>
          <div className='progress-line' data-percent='80%'>
            <span style={{width:'80%'}}></span>
          </div>
        </motion.div>
      </div>
     </div>
 
  </section>

 
    
  </>
}
