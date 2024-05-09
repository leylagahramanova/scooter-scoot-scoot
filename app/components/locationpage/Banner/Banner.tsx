import React from 'react'
import  Image  from "next/image";
import '../../aboutpage/Banner/Banner.css'
import circle from '../../mainpage/Banner/circle-image.png';
import { FaRegCircle } from "react-icons/fa";
import '../../aboutpage/Banner/Banner.css'
function Banner() {
  return (
    <div className='about'>
    <div className='about-back'>
    <div className="white-circles">
              <div className="white-circle">
                <FaRegCircle style={{ width: "62px", height: "62px" }} />
              </div>
              <div className="white-circle">
                <FaRegCircle style={{ width: "62px", height: "62px" }} />
              </div>
              <div className="white-circle1">
              <Image src={circle} alt=" Circle"/>
              </div>
            </div>
    <h1>Location </h1>
    </div>
</div>
  )
}

export default Banner