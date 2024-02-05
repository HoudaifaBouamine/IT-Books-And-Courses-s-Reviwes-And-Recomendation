import React from 'react'
import NavBar from './navBar'
import './Style/index.css'
import GetStarted from "../component/CTA_Button"
import LogIn  from "../component/SecondaryButton"

import Hightlight_05 from './Style/assets/Highlight_05.svg'
import Star  from './Style/assets/Misc_01.svg'
import HeroImage from './Style/assets/pngo-removebg-preview.svg'
import Object1 from './Style/assets/shape0.svg'
import Object from "./Style/assets/shape1.svg"
const LandingPg = () => {
  return (
       <div>
        <NavBar/>
        <img src={Object} className='left-side-sercal'></img>
        <img src={Object1} className='top-side-sercal'></img>
        {/*<img src={Hightlight_05} className='diamond-bright'></img>*/}
           <div className='hero-Landing-page'>
          <div className='hero-text'>
            <h1 className='your-guide-to-honest-reviews-parent'>Your Guide to Honest <span className='reviews'> Reviews </span><img src={Star} className='star'></img></h1>
            <p className='unveiling-the-tech'>Unveiling the Tech Truths: Your Ultimate IT Review Hub</p>        
            <p className='honest-IT-reviews'>Your concise guide to honest IT reviews. Dive into expert insights and user experiences. Trust the reviews that matter, empower your tech choices</p>
             <div className='hero-button'>
              <LogIn text={"Log in"}/>
                <GetStarted text={"Get Started"}/>
                 </div>
                <div className='hero-button1'>
              <LogIn text={"Log in"}/>
                <GetStarted text={"Get Started"}/>
                 </div>
          </div>
          <img src={HeroImage} className='hero-image' ></img>
        </div>
    </div>
  )
}

export default LandingPg
