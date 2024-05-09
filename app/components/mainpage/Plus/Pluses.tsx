"use client";
import React, { useState } from "react";
import { TypePlus, pluses } from "./plus";
import "./Plus.css";
import arrow from '../../../img/arrow.png'
import Arrow from "../../Arrow/Arrow";
import Image from "next/image";
import grey from './grey-remove.png';
const Plus: React.FC = () => {
  const [plusesData] = useState<TypePlus[]>(pluses);

  return (
    <div className="pluses">
      {plusesData.map((plus, index) => (
        <div key={plus.id} className="plus">
          {index % 2 === 0 ? (
            <>
              <div className="context">
                <div className="title">
                  <h2>{plus.title}</h2>
                </div>
                <div className="description">
                  <p>{plus.description}</p>
                </div>
                <button><a href="/about">Learn more</a></button>
              </div>
           
              <div className="plus-img">
                <img src={plus.image} alt={plus.title} />
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
                <img src={plus.image} alt={plus.title} />
              </div>
           


              {/* <Arrow /> */}
              <div className="context">
                <div className="title">
                  <h2>{plus.title}</h2>
                </div>
                <div className="description">
                  <p>{plus.description}</p>
                </div>
                <button><a href="/about">Learn more</a></button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Plus;