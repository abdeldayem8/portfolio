import React from 'react'
import './Projects.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
export default function Projects() {
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
  
  <section id="Projects">
  <div className='container py-4'>
      <h2 className='text-center project-title'>Projects</h2>
      <div ref={ref} className='row g-4'>
        <motion.div animate={animation} className='projects col-sm-6'>
        <a href='https://abdeldayem8.github.io/freshcartreactjs/' target='_blank'>  <div className='project rounded-6'>
             <div className='img-holder'>
              <img className='img-fluid w-100' src={require('../../assats/fresh.webp')}/>
              </div>    
              <div className='text p-4'>
                <h3 className='text-center'>FreshCart Ecommerce</h3>
                <p>Ecommerce Website Can Add Products To Cart , Make Crud Operation on it ,Have online Payment ,Authentication and Authorization and API </p>
                <div>
                  <div className='d-flex justify-content-between spans'>
                <span className="text-bg-primary ">React js</span>
                <span className="text-bg-primary ">JavaScript</span>
                <span className="text-bg-primary ">useformik</span>
                <span className="text-bg-primary ">react hooks</span>
                <span className="text-bg-primary ">react-Query</span>
                </div>
                </div>
              </div>
          </div>
          </a>
        </motion.div>
        <motion.div animate={animation} className='projects col-sm-6'>
        <a href='https://abdeldayem8.github.io/QuizApp/' target='_blank'>  <div className='project rounded-6'>
             <div className='img-holder'>
              <img className='img-fluid w-100' src={require('../../assats/quiz.png')}/>
              </div>    
              <div className='text p-4'>
                <h3 className='text-center'>Quiz App</h3>
                <p>retrive data from API,Choose Difficult of Question, number of Questions ,category of Question and the submit answers for degree </p>
                <div>
                  <div className='d-flex justify-content-between spans'>
                <span className="text-bg-primary ">HTML5</span>
                <span className="text-bg-primary ">CSS3</span>
                <span className="text-bg-primary ">animate.css</span>
                <span className="text-bg-primary ">Bootstrap</span>
                <span className="text-bg-primary ">API</span>
                <span className="text-bg-primary ">JavaScript</span>
                </div>
                </div>
              </div>
          </div>
          </a>
        </motion.div>
        <motion.div animate={animation} className='projects col-sm-6'>
        <div className='project'>
        <a href='https://abdeldayem8.github.io/weatherapp/' target='_blank'>  <div className='project rounded-6'>
             <div className='img-holder'>
              <img className='img-fluid w-100' src={require('../../assats/Apple-Weather-app.webp')}/>
              </div>    
              <div className='text p-4'>
                <h3 className='text-center'>Weather App</h3>
                <p>retrive data from API,show the weather for today and next two days ,can search for specific city and show the weather for it </p>
                <div>
                  <div className='d-flex justify-content-between spans'>
                <span className="text-bg-primary ">HTML5</span>
                <span className="text-bg-primary ">CSS3</span>
                <span className="text-bg-primary ">Bootstrap</span>
                <span className="text-bg-primary ">API</span>
                <span className="text-bg-primary ">JavaScript</span>
                </div>
                </div>
              </div>
          </div>
          </a>
       </div>
        </motion.div>
        <motion.div animate={animation} className='projects col-sm-6'>
        <div className='project'>
        <a href='https://abdeldayem8.github.io/JS_Assignment3/' target='_blank'>  <div className='project rounded-6'>
             <div className='img-holder'>
              <img className='img-fluid w-100' src={require('../../assats/crud.webp')}/>
              </div>    
              <div className='text p-4'>
                <h3 className='text-center'>CRUD System</h3>
                <p>Create ,Read ,Update ,Delete data that store in localstorage and make search also with good Design </p>
                <div>
                  <div className='d-flex justify-content-between spans'>
                <span className="text-bg-primary ">HTML5</span>
                <span className="text-bg-primary ">CSS3</span>
                <span className="text-bg-primary ">Bootstrap</span>
                <span className="text-bg-primary ">Regex</span>
                <span className="text-bg-primary ">JavaScript</span>
                </div>
                </div>
              </div>
          </div>
          </a>
        </div>
        </motion.div>
        <a href='https://github.com/abdeldayem8?tab=repositories' target='_blank'>
          <div className='text-center bg-primary p-3 text-white link'>Find More Projects On Github</div>
        </a>
      </div>
     </div>
  </section>

   
  </>
}
