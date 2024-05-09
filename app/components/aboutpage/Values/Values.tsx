'use client'
import React, { useState } from 'react';
import { TypeValues, values } from './value'; 
import  Image  from "next/image";
import './Values.css'
const Values: React.FC = () => {
    const [valuesData] = useState<TypeValues[]>(values); 
    return (
                            <div className='values'> 
                            <div className='vall'><h2>Our values</h2></div>
            {valuesData.map((value) => (
                <div key={value.id} className='value'>
                     <div className='circles'>
                        <img src={value.image} alt=""/>
                     <div className='circle2'>
                        <div className="number">{value.number}</div>
                    </div>
                     </div>
                 
                    <div className="title">
                        <h2>{value.title}</h2>
                    </div>
                    <div className='description'>
                        <p>{value.description}</p>
                    </div>
                </div>
            ))}
            </div>  
    )
}

export default Values;
