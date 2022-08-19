import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'


import spaceVideo from '../assets/Blue.mp4'

const Video = () => {
    return (
    <div className='back'>   
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Galaxy. Travel.</h1>
                <p>World's first civilian space travel.</p>
                <div>
                    <Link to='/training' className='btn'><strong>Training</strong></Link>
                    <Link to='/contact' className='btn btn-light'><strong>Launch</strong></Link>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default Video
