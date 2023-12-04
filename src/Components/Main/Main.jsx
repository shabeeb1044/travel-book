import React, { useEffect } from 'react'
import "./main.css"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2Check } from "react-icons/bs";

import img01 from "./imges/img01.jpg"
import img02 from "./imges/img02.jpg"
import img03 from "./imges/img03.jpg"
import img04 from "./imges/img04.jpg"
import img05 from "./imges/img05.jpg"

import Aos from 'aos';
import "aos/dist/aos.css"

const Data = [
  {
    "id": 1,
    "imgsrc": img01,
    "destTitle": "Bora Bora",
    "location": "French Polynesia",
    "grade": "CULTURAL RELAX",
    "fees": "$700",
    "description": "The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities."
  },
  {
      "id": 2,
      "imgsrc": img02,
      "destTitle": "Santorini",
      "location": "Greece",
      "grade": "BEACH GETAWAY",
      "fees": "$850",
      "description": "Santorini offers stunning sunsets, beautiful beaches, and rich cultural experiences. It's a perfect destination for relaxation and exploration."
  },
  {
      "id": 3,
      "imgsrc": img03,
      "destTitle": "Kyoto",
      "location": "Japan",
      "grade": "CULTURAL IMMERSION",
      "fees": "$600",
      "description": "Kyoto is a city steeped in tradition and culture. Explore ancient temples, beautiful gardens, and immerse yourself in the essence of Japan."
  },
  {
      "id": 4,
      "imgsrc": img04,
      "destTitle": "Machu Picchu",
      "location": "Peru",
      "grade": "HISTORICAL ADVENTURE",
      "fees": "$900",
      "description": "Visit the awe-inspiring Machu Picchu and trek through the Andes mountains. It's a journey back in time to the ancient Inca civilization."
  },
  {
      "id": 5,
      "imgsrc": img05,
      "destTitle": "Iceland",
      "location": "Iceland",
      "grade": "NATURE WONDERLAND",
      "fees": "$750",
      "description": "Iceland's dramatic landscapes include waterfalls, geysers, and the Northern Lights. It's a paradise for nature enthusiasts and photographers."
  },
]

const Main = () => {

  useEffect(() => {
    
    Aos.init({duration:2000})
      
    }, [])
  return (
    <section  className='main container section'>
      <div   className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({ id, imgsrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className='singleDestination'>
                <div className="imgDiv">
                  <img src={imgsrc} alt="" />
                </div>
                <div className='cardInfo'>
                  <h4 className="destTitle">  {destTitle}</h4>
                  <span className="content flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className='desc'>
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                   DETAILS <BsClipboard2Check className='icon' />
                  </button>
                </div>
              </div>

            )
          })


        }
      </div>
    </section>
  )
}

export default Main