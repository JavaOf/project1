import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'
import icon1 from '../images/icon1.png'
import icon2 from '../images/Menu.png'
export default function Header() {
  return (
    <div>
      <div className="parent_1">
        <div className="parent_2">
        <img src={icon1} alt="" className='icon1'/>
        <h1 className='font_h1'><strong>Bull</strong>king</h1>
        </div>
      <Link className='link' to={'/'}>Home</Link>
      <Link className='link' to={'/programms'}>Programms</Link>
      <Link className='link' to={'/trainers'}>Trainers</Link>
      <Link className='link' to={'/membership'}>Membership</Link>
      <Link className='link' to={'/contact'}>Contact</Link>
      <div className="parent_3">
      <img src={icon2} alt="" className='icon2'/>
      <button className='button1'>Log in</button>
      <button className='button2'>Sign Up</button>
      </div>
      </div>
    </div>
  )
}