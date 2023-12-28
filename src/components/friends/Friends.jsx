import React from 'react'
import './friends.css'
import image1 from '../../assets/coinmarket.png'
import image2 from '../../assets/coingecko.svg'
import image3 from '../../assets/bcnscane.png'
import image4 from '../../assets/pencake.png'
import image5 from '../../assets/cointoplist.png'
import image6 from '../../assets/coinhunter.png'
import image7 from '../../assets/gemfinder.png'
import image8 from '../../assets/coinspiner.png'
import image9 from '../../assets/coinscop.png'

function Friends() {
  return (
    <div className='friendbg'>
        <div className="container text-center py-5">
            <div className="row">
                <h1>Friends of <span className='povo'>Povo</span> </h1>
            </div>
            <div className="row pt-5">
                <div className="col text-start pt-2">
                    <img className='img-fluid' src={image1} alt="Coin Market" />
                </div>
                <div className="col text-start ">
                    <img className='img-fluid' src={image2} alt="Coin Market" />
                </div>
                <div className="col text-start">
                    <img className='img-fluid' src={image3} alt="Coin Market" />
                </div>
                <div className="col text-start pb-3">
                    <img className='img-fluid' src={image4} alt="Coin Market" />
                </div>

            </div>
            <div className="row py-1">
            <div className="col text-start">
                    <img className='img-fluid' src={image5} alt="Coin Market" />
                </div>
                <div className="col text-start pb-3">
                    <img className='img-fluid' src={image6} alt="Coin Market" />
                </div>

            </div>
            <div className="row">
            <div className="col text-start ">
                    <img className='img-fluid' src={image7} alt="Coin Market" />
                </div>
                <div className="col text-start">
                    <img className='img-fluid' src={image8} alt="Coin Market" />
                </div>
                <div className="col text-start pb-3">
                    <img className='img-fluid' src={image9} alt="Coin Market" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Friends