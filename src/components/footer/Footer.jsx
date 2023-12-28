import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaMediumM } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { BsTelegram } from "react-icons/bs";
import './footer.css'
import image1 from '../../assets/povologo.png'

function Footer() {
  return (
    <div className="footerbg">
      <div className="container text-center py-5">
        <div className="row">
          <div className="col-md-5 text-start">
            <div className="povofooter">
              <div className="footerimg m-2">
                <img
                  className="img-fluid"
                  src={image1}
                  width={"100px"}
                  alt="porkswap logo"
                />{" "}
              </div>
              <br /> <br />
              <div>
                <strong>
                  PLAY TO WIN REWARD ON HOLDING <br />
                </strong>
                <b>
                  Frictionless yield & liquidity generation protocol <br />
                </b>
                <b>
                  for game lover. Povo is deflationary in it's nature
                </b>
              </div>
            </div>
          </div>
          <div className="col"></div>
          <div className="col footericons">
            <div>
              <FaMediumM size={"40px"} />
              &nbsp;&nbsp;
              <BsTwitter size={"40px"} />
              <FaFacebookF size={"40px"} />
              <TiSocialYoutubeCircular size={"50px"} /> &nbsp;
              <BsTelegram size={"40px"} />
              &nbsp;
            </div>{" "}
            <br />
           
          </div>
        </div>
        <br />
        <hr />
        <br />
        <p>Copyright © 2022 PorkSwap.finance</p>
      </div>
    </div>
  );
}

export default Footer;