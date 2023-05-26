import React from 'react';
import './feedlink.css';
import citlogo from "../Image/logo.jpg";

const Feedlink = () => {
  return (
    <div className='feedcontent'>
      <div className='hero'>
        <div className='content'>
            <h1>CSBS - STUDENT FEEDBACK SYSTEM</h1>
            <hr></hr>
            <img className='clogo' src={citlogo} alt="citlogo"/>
            <h4>This particular webiste is meant for students to give feedback about the classes, trainings and infrastructure in our college.</h4>
            <button className='fbutton'>Scroll Down to Give Feedback !</button>
        </div>
    </div>
    </div>
    
  )
}

export default Feedlink