import React from 'react'
import './FormStyles.css'

function Form() {
  return (
    <div>
        <form>
            <label>Your Name</label>            
            <textarea rows='1'placeholder='Murad Bagirov'/>
            <label>Email</label>
            <textarea rows='1'placeholder='bagirovmurad224@gmail.com'/>
            <label>Subject</label>
            <input type='subject'></input>
            <label>Details</label>
            <label type='detales'></label>
            <textarea rows='6' placeholder='Type a short message here'/>
            <button className='btc'>Submit</button>
        </form>
    </div>
  )
}

export default Form
