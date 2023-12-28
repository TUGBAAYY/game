import React from 'react'
import './navbarr.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { useState } from 'react'
import povologo from '../../assets/povologo.png'


const Navbartest = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar ')

  }

  const removeNavbar = () => {
    setActive('navBar')
  }
  return (
    <div className='sectionbg'>
      <div className="container">
        <section className='navBarSection'>
          <header className="header flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <img src={povologo} alt="" />
              </a>
            </div>

            <div className={active}>
              <ul className="navLists flex text-white">
                <li className="navItem">
                  <a href="#" className="navLink text-white">Home</a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink text-white">Staking
                  </a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink text-white">Governance
                  </a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink text-white">
                    Tokenaoic
                  </a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink text-white">Roadmap
                  </a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink text-white">Rugpul
                  </a>
                </li>
                <li className="navItem">
                  <a href="#" className="navLink text-white">FAQ
                  </a>
                </li>
                <li className="navItem">

                  <button className='btn btnButton'>
                    <a href="#">Connet Wallet</a>
                  </button>
                </li>

              </ul>
              <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className="icon" />
              </div>
            </div>
            <div onClick={showNav} className="toggleNavbar">
              <TbGridDots className="icon" />
            </div>
          </header>
        </section>
      </div>
    </div>
  )
}

export default Navbartest