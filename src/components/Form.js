import React from 'react'
import './FormStyles.css'

function Form() {
  return (
    <div className='back'>
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='text'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Details</label>
            <textarea><text row='6' aria-placeholder='Type a short massage here' /></textarea>

            <button className='btc'>Submit</button>
        </form>
    </div></div>
  )
}

export default Form