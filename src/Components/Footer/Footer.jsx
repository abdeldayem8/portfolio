
import React from 'react'
import './Footer.css'
export default function Footer() {
  const github='https://github.com/abdeldayem8';
  const twitter='https://twitter.com/forloop22';
  const linkedin ='https://www.linkedin.com/in/mohamed-ahmed420/';
  return <>
    <div className='footer'>
      <div className='container'>
         <ul>
           <li>
            <a href={linkedin} target='_blank' rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
            </a >
            </li>

           <li>
            <a href={github} target='_blank' rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
            </a>
            </li>
           <li>
            <a href={twitter} target='_blank' rel="noopener noreferrer">              
            <i className="fa-brands fa-twitter"></i>
            </a >            </li>
         </ul>
         <h4 className='text-center text-white'>Designed By Mohamed Abdeldaim</h4>
      </div>
    </div>
  </>
}
