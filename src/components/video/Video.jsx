import React from 'react'
import video from '../../media/anime_-_103434 (540p) (3).mp4'
import './video.css'

const Video = () => {
  return (
    <div className='videobg'>
        <div className=" container">
            <div className="row">
                <div className="col-md-12">

            </div>
        <video width="840" height="560"  autoPlay loop muted  src={video}></video>
        </div>
                </div>
    </div>
  )
}

export default Video