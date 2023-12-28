import React from 'react'
import image from '../../assets/tokenomics.png'
import './tokenomics.css'

function Tokenomics() {
  return (
    <div className='tokenomicsbg'>
        <div className="container text-center py-5">
            <div className="row m-auto">
                <h1>Povo <span className='povo'>Tokenomics</span></h1>

            </div>
            <div className="row m-auto">
                <div className="col-md-6 text-start pt-5">
                    <h3 className='supply'>Total Supply: 10,000,000</h3>
                    <h2 className='token'>Token <b className='supply'>Distribution</b> (Gemnomics)</h2><br />
                    <ul>
                        <li><span className='presale'><b>presale</b></span> 30% </li> <br />
                        <li><span className='staking'>Staking Pool</span> 23% </li> <br />
                        <li><span className='liquidity'>Liquidity Pool</span> 20% </li> <br />
                        <li><span className='advisor'>Advisor</span> 10% </li> <br />
                        <li><span className='airdrop'>Airdrop</span> 7% </li> <br />
                        <li><span className='gaming'>Gaming</span> 7% </li> <br />
                        <li><span className='team'>Team</span> 3% </li> <br />
                    </ul>


                </div>
                <div className="col pt-5">
                    <img className='img-fluid' src={image} alt="Tokenomics" />                   
                </div>

            </div>
        </div>

    </div>
  )
}

export default Tokenomics   