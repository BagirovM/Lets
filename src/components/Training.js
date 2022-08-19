import React from 'react'
import './TrainingStyles.css'

import { Link } from 'react-router-dom'

import Cosmonaut from '../assets/cosmonaut.jpg'
import moon from '../assets/moon.jpg'
function Training() {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>"GLS TRVL" turizm şirkəti 2001-ci ildə yaradılıb. Biz yüksək keyfiyyətli turizm xidmətlərinin göstərilməsi üzrə ixtisaslaşmışıq və sizə bizim xidmətimizdən həqiqətən həzz alacağınıza söz veririk. Sizə keyfiyyətli istirahət və sənədlərin hazırlanmasında və xaricə səfərlərdə əla xidmətə zəmanət veririk.</p>
            <Link to='/contact'><button className='button btc'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={moon} className='img' alt=''/>
                </div>
                <div className='image-stack bottom'>
                    <img src={Cosmonaut} className='img' alt=''/>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training
