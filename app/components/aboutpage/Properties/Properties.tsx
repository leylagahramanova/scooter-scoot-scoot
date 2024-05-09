'use client'
import React, { useState } from 'react';
import  Image  from "next/image";
import '../../mainpage/Plus/Plus.css'
import grey from '../../mainpage/Plus/grey-remove.png';
import { TypeProperties, properties } from './property'; // Import the Typeproperty type and the propertys array from property.ts
import arrow from '../../../img/arrow.png'
import '../../mainpage/Plus/Plus.css';
const Properties: React.FC = () => {
    const [propertiesData] = useState<TypeProperties[]>(properties);
    return (
      <div className="pluses" >
      {propertiesData.map((property, index) => (
        <div key={property.id} className="plus">
          {index % 2 === 0 ? (
            <>
              <div className="context">
                <div className="title">
                  <h2>{property.title}</h2>
                </div>
                <div className="description">
                  <p>{property.description}</p>
                </div>
                <button><a href="/careers">Learn more</a></button>
              </div>
           
              <div className="plus-img">
                <img src={property.image} alt={property.title} />
              </div>
              <div
                className={`grey-circle ${index % 2 === 0 ? "left" : "right"}`}
              ><Image src={grey} alt="Grey Circle" /></div>
              <div className='first-arrow'>
                <Image src={arrow} alt="Arrow" />
              </div>
            </>
          ) : (
            <>
               <div className='coming'>
                <Image src={arrow} alt="Arrow" />
              </div>
              <div
                className={`grey-circle ${index % 2 === 0 ? "left" : "right"}`}
              >
                <Image src={grey} alt="Grey Circle" />
              </div>
              <div className="plus-img">
                <img src={property.image} alt={property.title} />
              </div>
           


              {/* <Arrow /> */}
              <div className="context">
                <div className="title">
                  <h2>{property.title}</h2>
                </div>
                <div className="description">
                  <p>{property.description}</p>
                </div>
                <button ><a href="/careers">Learn more</a></button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
    )
}

export default Properties