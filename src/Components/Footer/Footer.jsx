import React, { useEffect } from 'react'
import "./footer.css"
// import video2 from "./videos/video2.mp4"
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md"
import { FaTripadvisor } from "react-icons/fa"
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi"

import Aos from 'aos';
import "aos/dist/aos.css"
const Footer = () => {
  useEffect(() => {
    
    Aos.init({duration:2000})
      
    }, [])
  return (
    <section data-aos="fade-up" className="footer">
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted typeof='video/mp4'>


        </video>
      </div>

      <div className='secContent container '>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us </h2>

          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button  data-aos="fade-up" className='btn flex' type='submit'>
              SEND
              <FiSend className='icon' />

            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className='footerIntro flex'>
            <div className="logoDiv">
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> .Travel
              </a>
            </div>
            <div data-aos="fade-up" className='footerParagraph'>
            Traveling is a transformative experience that opens our eyes to new cultures, perspectives, and landscapes. Whether it's wandering through bustling city streets or exploring the serene beauty of nature, each journey leaves an indelible mark on our souls.
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
               
          <div className="footerLinks grid">

            {/* //group one */}
            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourisam
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>
            {/* //group two */}
            <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
              <span className="groupTitle">
                PATNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                BOOKING
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                RENTCARS
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HOTALWORLD
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TRIVAGO
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tripadvisor
              </li>
            </div>
            {/* //group three */}
            <div data-aos="fade-up"
            data-aos-duration="5000"
            
            className='linkGroup'>
              <span className="groupTitle">
              LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                landon
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                indianesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Eroup
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>
          </div>
          <div className='footerDiv flex'>
             <small>BEST TRAVEL WEBSITE THEME</small>
             <small>COPPYRIGHTS RESERVED SHABEEB-DEV 2023</small>
             
          </div>
        </div>
      </div>


    </section>
  )
}

export default Footer