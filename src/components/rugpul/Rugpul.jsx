import React from 'react'
import './rugpul.css'
import image from '../../assets/rugpul.png'

function Rugpul() {
  return (
    <div className='rugpulbg'>
        <div className="container text-center py-5">
            <div className="row">
                <div>
                    <h1>How <span className='povo'>Povo</span>  is Rugpul Protected</h1>
                </div></div>
                <div className="row pt-5">
                <div className="col-md-6 text-start rugpulpara">
                    <ul>
                        <li>Povo Presale is going held on UniCrypt which prevents rug-pull by offering auto liquidity lock functionality</li>
                        <li>60% of raised funds in presale is locked into liquidity by UniCrypt for 266 years</li>
                        <li>Transaction fee is never above 7% max.</li>
                        <li>Newly created LP tokens are locked in order to ensure transparency.</li>
                        <li>Smart Contract is audited by CertTik.</li>
                    </ul>

                </div>
                <div className="col-md-6 py-5">
                    <img className='img-fluid' src={image} alt="Rugpul" />
                    
                </div>
            </div>

        </div>

    </div>
  )
}

export default Rugpul;