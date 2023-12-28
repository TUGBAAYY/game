import React from 'react'
import './work.css'
import image from '../../assets/work.png'

function Work() {
  return (
    <div className='workbg'>
        <div className='container py-5'>

        <img className='img-fluid' src={image} alt="How staking going to work" />
        </div>
    </div>
  )
}

export default Work