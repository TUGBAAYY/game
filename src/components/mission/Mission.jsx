import React from 'react'
import './mission.css'
import image from '../../assets/mission.png'

const Mission = () => {
    return (
        <div>
            <div className="missionbg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className='img-fluid' src={image} alt="" />
                        </div>
                        <div className="col-md-6 text-start">
                            <div>
                                <h1 class=" missionplatform text-white">Povo &nbsp;
                                    <span class="povo">Mission</span>
                                </h1>
                                <br />
                                <br />
                                
                            </div>
                            <div>
                                <p>Povo is a gaming platform that incorporates blockchain technology. The platform aims at providing its users with multiple services by expanding it horizon to both blockchains and gaming. It aims at providing its users with a multi-chain solution, which allows them to create their own blockchain solutions. It also allows the game players to earn and cash out their rewards without any time limit. Moreover, it offers a lower barrierfor entering an advanced financial ecosystem, with no deposit and withdrawal limits. Lastly, the mission of gPlayer is to provide its users an efficient NFT ecosystem for gaming. Where players can literally own and control whatever they buy, earn or craft. NFT and gaming are the undoubted match made in heaven for the success of a specificplatform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission