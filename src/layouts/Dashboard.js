import React from 'react'
import Employers from '../pages/Employers';
import JobSeekers from '../pages/JobSeekers';
import SystemWorkers from '../pages/SystemWorkers';

export default function Dashboard() {
    return (
    <div>
      <Employers/>
      <SystemWorkers/>
      <JobSeekers/>
    </div>
  );
    
}
