import React from 'react'
import './hero.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pancake from '../../assets/pancakeslogo.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import image7 from '../../assets/image7.png'
import image8 from '../../assets/certik.png'
import image9 from '../../assets/pcs.png'
import image10 from '../../assets/xt.png'
import Navbartest from '../navbartest/Navbartestt';

const Hero = () => {
    return (
        <div>
            <div className="herobg">
                <Navbartest />
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 ">
                            <h1>PLAY TO WIN <br />
                                REWARD ON HOLDING
                            </h1>
                            <br />
                            <h2>
                                Frictionless yield & liquidity generation protocol for game lover. Povo is deflationary in it's nature
                            </h2>
                            <br />

                            <button type="button" class="btn btn-primary herobtn btn-lg mb-4">
                                <img class="img-fluid" width="30px" src={pancake} alt="pencakelogo" />&nbsp;
                                <img src="" alt="" />
                                Trade on PancakeSwap</button>
                            <div><button type="button" class="btn mb-4  whitebtn btn-lg">Whitepaper</button></div>

                            <div>
                                <a href="">

                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"></path></svg></a>
                                <a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></a>
                                <a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></a>
                                <a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="Layer_1" viewBox="0 0 24 24" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><polygon points="8.48,13.14 9.21,13.14 9.21,16.75 9.91,16.75 9.91,13.14 10.64,13.14 10.64,12.53 8.48,12.53 "></polygon><path d="M12.17,16c-0.12,0.14-0.53,0.42-0.53,0.02v-2.39h-0.62v2.61c0,0.79,0.79,0.58,1.16,0.17v0.34h0.62v-3.12h-0.62V16H12.17z"></path><path d="M14.48,13.61c-0.36,0-0.59,0.27-0.59,0.27v-1.36h-0.63v4.23h0.63v-0.24c0,0,0.21,0.28,0.59,0.28c0.33,0,0.58-0.29,0.58-0.69
	c0,0,0-1.26,0-1.73S14.84,13.61,14.48,13.61z M14.41,16.02c0,0.23-0.16,0.34-0.37,0.25c-0.05-0.02-0.1-0.06-0.15-0.11v-1.94
	c0.04-0.04,0.09-0.07,0.13-0.1c0.22-0.11,0.39,0.06,0.39,0.29L14.41,16.02L14.41,16.02z"></path><path d="M16.72,15.86c0,0.24-0.13,0.4-0.28,0.41c-0.16,0.01-0.32-0.12-0.32-0.41v-0.59h1.19v-0.8c0-0.29-0.11-0.51-0.26-0.66
	c-0.17-0.16-0.4-0.24-0.63-0.24c-0.22,0-0.45,0.07-0.63,0.21c-0.19,0.15-0.31,0.38-0.31,0.69v1.4c0,0.28,0.09,0.5,0.23,0.66
	c0.17,0.18,0.4,0.28,0.64,0.29c0.29,0.01,0.6-0.11,0.78-0.36c0.11-0.15,0.18-0.35,0.18-0.59v-0.16h-0.59
	C16.72,15.71,16.72,15.76,16.72,15.86z M16.12,14.47c0-0.17,0.1-0.37,0.29-0.37s0.31,0.18,0.31,0.37s0,0.32,0,0.32h-0.6
	C16.12,14.78,16.12,14.64,16.12,14.47z"></path><path d="M12.97,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9S17.94,3,12.97,3z M14.55,6.37h0.8v2.68c0,0.17,0.08,0.17,0.11,0.17
	c0.12,0,0.3-0.13,0.39-0.22V6.36h0.8V9.9h-0.8V9.59c-0.11,0.1-0.22,0.18-0.33,0.24c-0.15,0.08-0.29,0.11-0.43,0.11
	c-0.18,0-0.31-0.06-0.41-0.17c-0.09-0.11-0.13-0.28-0.13-0.49V6.37z M12,7.3c0-0.55,0.45-1,1-1s1,0.45,1,1V9c0,0.55-0.45,1-1,1
	s-1-0.45-1-1V7.3z M9.92,5.15l0.48,1.76l0.49-1.76h0.91l-0.94,2.78V9.9H9.97V7.93L9.01,5.15H9.92z M17.82,17.69
	c-0.51,0.5-4.83,0.51-4.83,0.51s-4.31-0.01-4.83-0.51c-0.51-0.5-0.51-2.99-0.51-3.01c0-0.01,0-2.5,0.51-3.01
	c0.51-0.5,4.83-0.51,4.83-0.51s4.31,0.01,4.83,0.51c0.51,0.5,0.52,2.99,0.52,3.01C18.34,14.68,18.34,17.18,17.82,17.69z"></path><path d="M12.98,9.35c0.17,0,0.25-0.1,0.26-0.26v-1.9c0-0.13-0.13-0.24-0.25-0.24s-0.25,0.1-0.25,0.24v1.9
	C12.74,9.24,12.81,9.34,12.98,9.35z"></path></svg></a>
                                <a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path></svg></a>
                                <a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg></a>
                                <a href=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z"></path><path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z"></path></svg></a>
                            </div>

                            <div className="d-flex my-2">
                                <div>
                                    <h5>Buying FEE is 5%</h5>
                                    <ul>
                                        <li>3% to buy back funds</li>
                                        <li>1% Marketing and Development</li>
                                        <li>1% Reflection to holders</li>

                                    </ul>
                                </div>
                                <div>
                                    <h5>Selling FEE is 7%</h5>
                                    <ul>
                                        <li>4% to buy back funds</li>
                                        <li>1% Marketing and Development</li>
                                        <li>2% Reflection to holders</li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <Carousel
                                autoPlay="true"
                                interval={3000}
                                infiniteLoop="true"
                                axis="horizontal"
                                labels={false}
                                showArrows={false}
                                showStatus={false}
                                showIndicators={false}
                                showThumbs={false} >
                                <div>
                                    <img className="img-fluid " src={image1} alt="image1" style={{ width: "300px" }} />

                                </div>
                                <div>
                                    <img className="img-fluid " src={image2} alt="image2" style={{ width: "300px" }} />

                                </div>
                                <div>
                                    <img className="img-fluid " src={image3} alt="image3" style={{ width: "300px" }} />

                                </div>
                                <div>
                                    <img className="img-fluid " src={image4} alt="image4" style={{ width: "300px" }} />

                                </div>
                                <div>
                                    <img className="img-fluid " src={image5} alt="image5" style={{ width: "300px" }} />

                                </div>
                                <div>
                                    <img className="img-fluid " src={image6} alt="image6" style={{ width: "300px" }} />

                                </div>
                                <div>
                                    <img className="img-fluid " src={image7} alt="image7" style={{ width: "300px" }} />

                                </div>
                            </Carousel>
                            <br />
                            <div class="input-group mb-3">
                                <span class="input-group-text token1">
                                    <b>Token Address</b>
                                </span>
                                <label type="text" class="form-control token2"> 0x2a2d...</label>
                            </div>
                            <div>
                                <img className="img-fluid m-3" style={{ width: "150px" }} src={image8} alt="Cerik" />
                                <img className="img-fluid m-3" style={{ width: "150px" }} src={image9} alt="Cerik" />
                                <img className="img-fluid m-3" style={{ width: "150px" }} src={image10} alt="Cerik" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero
