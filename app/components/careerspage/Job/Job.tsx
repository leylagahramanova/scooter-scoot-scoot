'use client'
import React, { useState } from 'react';
import { TypeJob, job } from './jobs'; // Import the TypeJob type and the Jobs array from Job.ts
import './Job.css'
const Job: React.FC = () => {
    const [JobesData] = useState<TypeJob[]>(job);
    return (
        <div className="jobs">
              {JobesData.map((job) => (
            <div key={job.id}className="job">
                <div className='context2'>
                    <div className="title1">
                    <h2>{job.title}</h2>
                    </div>
                    <div className='description1'>
                    <p>{job.description}</p>
                    </div>
                    
                </div>
                <div className='buttonjob'>
                <button>Apply</button>
                </div>
            </div>
                ))}
        </div>
    )
}

export default Job
