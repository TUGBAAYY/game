import React from 'react'
import './staking.css'
import image1 from '../../assets/stakeplatform.png'

const Staking = () => {
    return (
        <div>
            <div className="stakingbg">
                <div className="container text-center stakingPlatform">
                    <div className="row">
                        <div className="col-md-7">
                            <img className='img-fluid' src={image1} alt="" />
                        </div>
                        <div className="col-md-5 ">
                            <div>
                                <h1 className='povo'>Povo &nbsp;
                                    <span className='platform'>
                                        Staking Platform
                                    </span>
                                </h1>
                            </div> <br />
                            <div>
                                <button type="button" className="btn btn-warning btn-lg">Launched, Povo Staking</button> &nbsp;
                            </div> <br />
                            <div className="governance-list  text-start">
                                <span><b>Key Feature:</b></span>
                                <ul>
                                    <li>You can stake your POVO at any time you choose. You can stake any amount of POVO you wish.</li>
                                    <li>Once staked, the contract will deliver a reward continuously for as long as tokens remain staked.</li>
                                    <li>You can withdraw any amount of staked POVO tokens without any locking period</li>
                                    <li>You are free to stake additional amounts at any time</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Staking