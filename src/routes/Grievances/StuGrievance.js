import React from 'react';
import Grievanceform from '../../components/Grievance form/Grievanceform';
import './stugrive.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar'

const StuGrievance = () => {
  return (
    <div className='nj'>
        <div>
          <Navbar />
        </div>
        <div>
            <Grievanceform />
        </div>
        <div className='fot'>
            <Footer />
        </div>
    </div>
  )
}

export default StuGrievance