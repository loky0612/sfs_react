import React from 'react';
import { Link } from 'react-router-dom';
import './staffsubfeed.css';

const Staffsubfeed = () => {
  return (
    <div className='stafffeedmain'>
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
        <div className='subs'>
            <div className='semd'>
               <Link to="/dbmsdb"><h2 className='e'>DATABASE MANAGEMENT SYSTEM</h2></Link>
            </div>
            <br></br>
            <div className='semp'>
               <Link to='/pasdb'><h2 className='e'>PROBABILITY AND STATISTICS</h2></Link>
            </div>
            <br></br>
            <div className='semo'>
                <Link to='/osdb'><h2 className='e'>OPERATING SYSTEMS</h2></Link>
            </div>
            <br></br>
            <div className='semm'>
                <Link to='/mldb'><h2 className='e'>MACHINE LEARNING</h2></Link>
            </div>
            <br></br>
            <div className='semi'>
                <Link to='/ibsdb'><h2 className='e'>INTRODUCTION TO BUSINESS SYSTEMS</h2></Link>
            </div>
            <br></br>
            <div className='seme'>
                <Link to='/evsdb'><h2 className='e'>ENVIRONMENTAL SCIENCE AND SUSTAINABILITY</h2></Link>
            </div>
        </div>       
    </div>
  )
}

export default Staffsubfeed;