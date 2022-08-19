import React from 'react'
import { Link } from 'react-router-dom'
import './PricingStyles.css'

function Pricing() {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p className='p'>Private Quarters</p>
                <Link to='/contact' className='btc book'>Book</Link>
            </div>
            <div className='card'>
                <h3>-Suite-</h3>
                <span className='bar'></span>
                <p className='btc'>2 BTC</p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p className='p'>Private Quarters</p>
                <Link to='/contact' className='btc'>Book</Link>
            </div>
            <div className='card'>
                <h3>-VIP-</h3>
                <span className='bar'></span>
                <p className='btc'>3 BTC</p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p className='p'>Private Quarters</p>
                <Link to='/contact' className='btc'>Book</Link>
            </div>
            

        </div>
    </div>
  )
}

export default Pricing