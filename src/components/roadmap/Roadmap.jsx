import React from 'react'
import image from '../../assets/povoroadmap.png'
import './roadmap.css'

const Roadmap = () => {
  return (
    <div className='roadmapbg'>
        <div className='container py-5'>
        <img className='img-fluid' src={image} alt="Povo Roadmap" />
        </div>

    </div>
  )
}

export default Roadmap