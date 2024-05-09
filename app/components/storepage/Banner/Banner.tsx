import React from 'react'
import './Banner.css'
import circle from '../../mainpage/Banner/circle-image.png';
import scooter from '../../../img/scooterself.png'
import Image from 'next/image'
import { FaRegCircle } from "react-icons/fa";
import { BiSolidCircleHalf } from "react-icons/bi";
function Banner() {
  return(
       <div className='store'>
    <div className='store-back'>
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
            <div className="containerscoot">
      <h1>Our amazing scooters</h1>
        <div className="circlescoot">
           
          <Image src={scooter} alt="Scooter" layout="fill" objectFit="contain"/>
        </div>
      </div>
    </div>
</div>
  );


}

export default Banner