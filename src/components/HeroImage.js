import React, { Component } from 'react'
import './HerolmageStyles.css'


class Herolmage extends Component {
  render() {
    return (
      <div className='hero-img'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>


        </div>
      </div>
    )
  }
}

export default Herolmage
