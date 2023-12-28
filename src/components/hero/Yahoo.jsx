import React from 'react'
import './hero.css'
import image1 from '../../assets/yahoofinance.png'
import image2 from '../../assets/povobenzinga.png'

const Yahoo = () => {
  return (
    <div>
        <div className="yahoobg">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <img className='img fluid yahoo' src={image1} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 text-end">
                        <div>
                            <img className=' img-fluid bezinga' src={image2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Yahoo