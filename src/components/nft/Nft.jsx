import React from "react";
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import image7 from '../../assets/image7.png'

import './nft.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function Nft() {
  return (
    <div className="nftbg">
      <div className="container text-center py-3">
        <div className="row py-3">
          <h1>
            {" "}
            <span>Povo</span> Exclusive NFT's
          </h1>
        </div>
        <div className="row py-3">
          <Carousel
          responsive={responsive}
            autoPlay="true"
            interval={2000}
            infinite="true"
            rewind={true}
           
            arrows={false}
            
            >
              <div>
                <img className="img-fluid " src={image1} alt="image1" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src={image2} alt="image2" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src={image3} alt="image3" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src={image4} alt="image4" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src={image5} alt="image5" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src={image6} alt="image6" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src={image7} alt="image7" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
             

            </Carousel>
           
            
        </div>
      </div>
    </div>
  );
}

export default Nft;