import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import pod from '../assets/pod.jpg'
import pod2 from '../assets/pod2.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1 className='h1'>Training</h1>
                <p className='Tra'>Thorough training is a necessity when traveling to space. We offer all inclusive training for pre-flight and in-flight scenarios.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={pod} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={pod2} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Training