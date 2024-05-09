'use client'
import React, { useState } from 'react';
import  Image  from "next/image";
import { TypeStep, steps } from './step'; // Import the TypeStep type and the steps array from step.ts
import './Step.css'
const Steps: React.FC = () => {
    const [stepsData] = useState<TypeStep[]>(steps); // Pass the imported steps array to useState
    return (
        <div className='steps'>
                         <div className='line2'>
                                </div>    
            {stepsData.map((step) => (

                <div key={step.id} className='step'>
                   
                    <div className='circle'>
                        <img src={step.image} alt={step.title} />
                    </div>
                    <div className="step-text">
                    <div className="title">
                        <h2>{step.title}</h2>
                    </div>
                    <div className='description'>
                        <p>{step.description}</p>
                    </div>
                    </div>
                
                </div>

            ))}
                          
        </div>
    )
}

export default Steps;
