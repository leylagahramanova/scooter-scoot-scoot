import React from 'react'

import './Scooter.css'
import scooter from '../../../img/scooterself.png'
import Image from 'next/image'
function Scooter() {
  return(
    <div className="">

      <div className="containerscoot">
      <h2>Our amazing scooters</h2>
        <div className="circle">
           
          <Image src={scooter} alt="Scooter" layout="fill" objectFit="contain"/>
        </div>
      </div>
    </div>
  );


}

export default  Scooter