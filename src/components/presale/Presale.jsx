import React from 'react'
import './presale.css'

function Presale() {
  return (
    <div className='presalebg'> 
    <div className='contianer text-center platform'>
        <div className="row py-5 m-auto">
            <div>
                <h2>Platform going <span className='povo'>Live</span>  after PreSale</h2>
            </div>
        </div>
        <div className="row m-auto mt-5">
            <div className='col-md-4 col-12 text-center py-2'>
                <h1>Frictionless Yield</h1> <br />
                <button type="button" className="btn btn-primary Readmore"><b>Read More</b></button>
            </div>
            <div className='col-md-4 col-12 text-center py-2'>
            <h1>Governance in Gaming</h1> <br />
            <button type="button" className="btn btn-primary Readmore"><b>Read More</b></button>
                
            </div>
            <div className='col-md-4 col-12 text-center py-2'>
            <h1>Staking in Gaming</h1><br />
            <button type="button" className="btn btn-primary Readmore"><b>Read More</b></button>
                
            </div>
        </div>

    </div>
    </div>
  )
}

export default Presale