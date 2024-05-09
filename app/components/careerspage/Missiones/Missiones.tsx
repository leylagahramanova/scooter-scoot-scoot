'use client'
import React, { useState } from 'react';
import { TypeMission, missiones } from './mission'; // Import the TypeMission type and the missiones array from mission.tsx
import '../../mainpage/Plus/Plus.css';
import  Image  from "next/image";
import arrow from '../../../img/arrow.png'
import grey from '../../mainpage/Plus/grey-remove.png';
const Missiones: React.FC = () => {
    const [missionesData] = useState<TypeMission[]>(missiones);
    return (
        <div className="pluses">
             {missionesData && missionesData.map((mission) => (
                <div key={mission.id} className="plus">
                    <div className='context'>
                        <div className="title">
                            <h2>{mission.title}</h2>
                        </div>
                        <div className='description'>
                            <p>{mission.description}</p>
                        </div>
                        <button>Learn more</button>
                    </div>
                    <div className='plus-img'>
                        <img src={mission.image} alt={mission.title}/>
                    </div>
                    <div className='first-arrow'>
                <Image src={arrow} alt="Arrow" />
              </div>
                    <div
                className={'grey-circle left'}
              ><Image src={grey} alt="Grey Circle"/></div>
                </div>
           
            ))}
        </div>
    );
}

export default Missiones;
