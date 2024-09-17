import React from 'react'
import '../styles/footer.css'
import icon1 from '../images/icon1.png'
import svg from '../images/Social Media List.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='ppp'>
      <div className="ppppp">
      <div className="footer_parent">
         <div className="footer_p">
          <img src={icon1} alt="" />
          <h1 className='footer_p_h'>Bulking</h1>
         </div>
        <div className="footer_p1">
        <p className='people'>Get fit, stay healthy, and live life on their terms without fitness being an obstacle.</p>
        </div>
      </div>
      <div className="footer_parernt2">
        <div className="footer_q1">
         <Link className='li' to={'/'}>Home</Link>
         <Link className='li' to={'/programms'}>Programs</Link>
         <Link className='li' to={'/membership'}>Membership</Link>
        </div>
       <div className="footer_q2">
         <Link className='li' to={'/blog'}>Blog</Link>
         <Link className='li' to={'/contact'}>Contact</Link>
         <Link className='li' to={'/trainers'}>Trainers</Link>
       </div>
      </div>
      <div className="footer_parent3">
        <div className="parent_r1">
           <p className='peop'>Newsletter</p>
        </div>
        <div className="parent_r2">
         <input type="text" className='input1'placeholder='Your email her'/>
         <button className='ntt'>Send</button>
        </div>
      </div>           
      </div>
      
         <div className="ded">
             <div className="ded1"></div>
      </div>
      <div className="parent_end">
        <div className="pe">
        <p className='prop1'>© 2022 Nguli® Global Inc.</p>
        </div>
         <div className="pe2">
           <img src={svg} alt=""/>
           <img src={svg} alt=""/>
           <img src={svg} alt=""/>
           <img src={svg} alt=""/>
           <img src={svg} alt=""/>
         </div>
         <div className="pe3">
          <p className='font_size'>Terms of Service</p>
          <p className='font_size'>Privacy Policy</p>
         </div>
      </div>
    </div>
  )
}
