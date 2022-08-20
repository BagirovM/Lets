import React from 'react'
import{Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h1>-Basic-</h1>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>-3 Days-</p>
                <p>-Views-</p>
                <p>-Feature-</p>
                <p>-Private Quarters-</p>
                <Link to='/contact' className='btn'>Book</Link>

            </div>
            <div className='card'>
                <h1>-Suite-</h1>
                <span className='bar'></span>
                <p className='btc'>2 BTC</p>
                <p>-5 Days-</p>
                <p>-Views-</p>
                <p>-Video-</p>
                <p>-Private Quarters-</p>
                <Link to='/contact' className='btn'>Book</Link>

            </div>
            <div className='card'>
                <h1>-VIP-</h1>
                <span className='bar'></span>
               <p className='btc'>3 BTC</p>
                <p>- 9 Days-</p>
                <p>-Views-</p>
                <p>-Video-</p>
                <p>-Photo-</p>
                <p>-Private Quarters-</p>
                <Link to='/contact' className='btn'>Book</Link>

            </div>
        </div>
    </div>
  )
}

export default Pricing
