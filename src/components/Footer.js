import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#ffffff', marginRight:'2rem'}}/>
                <div>
                    <p>123 Acne St.</p>
                    <h4>Houston, Tx</h4>
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color:'#ffffff', marginRight:'2rem'}}/> (+994)50-210-88-92</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color:'#ffffff', marginRight:'2rem'}}/>trips@galaxy.com</h4>
            </div>
        </div>
        <div className='right'>
            <h4>About the company </h4>
            <p>Welcome to our company GLX TRVL, we are glad to see you. Our company has been serving for more than 10 years. Every year we have more than 1,000+ people who have flown into space with us. We offer you the cheapest prices for today. To get more information please contact dreams</p>
            <div className='serial'>
                <FaFacebook  size={30} style={{color:'#ffffff', marginRight:'1rem'}}/>
                <FaTwitter  size={30} style={{color:'#ffffff', marginRight:'1rem'}}/>
               

            </div>
        </div>
    </div>
</div>
  )
}

export default Footer
