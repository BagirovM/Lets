import React from 'react'
import { Link } from 'react-router-dom'
import './VidioStules.css'
import BlueVidio from '../assets/Blue.mp4'

export const Vidio = () => {
  return (
    <div className='here'>
        <video autoPlay loop muted id='video'>
            <source src={BlueVidio} type='video/mp4'/>
        </video>
        <div className='content'>
            <h1>Galaxy, Travel</h1>
            <p>World's first civilian space travel.</p>
        <div>
            <Link to='/training' className='btn'>Training</Link>
            <Link to='/contact' className='btn btn-light'>Launch</Link>
        </div>
        </div>
     </div>
    
  )
}
