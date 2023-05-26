import React from 'react';
import { Link } from 'react-router-dom';
import './staff.css';
import analysis from '../../components/Image/data-analytics.jpg';
import feedback from '../../components/Image/Feedback-1.jpg';

const Staff = () => {
  return (
    <div className='staffmain'>
        <div className='sheader'>
            <Link to={'/staff'} className='logo'><h1>CSBS-SFS</h1></Link>
            <ul className='snav-menu'>
                <li>
                    <Link to={'/staff'}>Home</Link>
                </li>
                <li>
                    <Link to={'/sabout'}>About</Link>
                </li>
                 <li>
                    <Link to={'/grievances'}>CSBS Grievances</Link>
                </li>
                <li>
                    <Link to={'/'}>Log Out</Link>
                </li>
            </ul>
        </div>
        <div className='subflex'>
            <div className='sbbox'>
                <div className='scont'>
                    <div className='ssubtext'><Link to="/staffsubjectfeedback" onClick={() => {window.scroll({top: 0,left: 0,behavior: "smooth"})}}>FEEDBACKS DATA</Link></div>
                    <img className='feedback' src={feedback} alt="feedback"/>
                </div>
            </div>
            <div className='sbbox'>
                <div className='scont'>
                    <div className='ssubtext'><Link to="/feedanalysis" onClick={() => {window.scroll({top: 0,left: 0,behavior: "smooth"})}}>FEEDBACKS ANALYSIS</Link></div>
                    <img className='feedback' src={analysis} alt="feedback analysis"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Staff;