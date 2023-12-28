import './benefit.css'
import image from '../../assets/benefit.png'

import React from 'react'

const Benefit = () => {
  return (
    <div className='benefitbg'>
        <div className="container text-center py-3">
        <div className="row">
                <div className='pt-5'>
                    <h1>Benefit of Povo</h1>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 text-start benefitpara pt-5 ">
                    <h5>Anyone Who Owns Gaming Assets </h5> <br />
                    <ul className='listpara'>
                        <li>Transfer items to another account</li> <br />
                        <li>Renders the items to mount reserve values</li> <br />
                        <li>Ease of using the items accross other supported games</li>    
                    </ul><br />
                    <h5>Game tournament and receive winnings in your wallet</h5> <br />
                    <h5>Artificial Intelligence improve players expericne</h5> <br />
                    <h5>Withdraw funds using PayPal</h5>

                </div>
                <div className="col-md-6 py-5">
                    <img className='img-fluid' src={image} alt="benefit" />
                    
                </div>
            </div>

        </div>

    </div>
  )
}

export default Benefit