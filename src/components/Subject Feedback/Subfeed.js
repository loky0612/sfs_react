import { Link } from 'react-router-dom';
import './Subfeed.css';

const Subfeed = () => {

  return (
    <div className='man'>
      <div className="subf"><h1 className="sh">SUBJECT FEEDBACKS</h1></div>
      <div className="first">
        <div className='bbox'>
            <div className='cont'>
                <div className='subtext'><Link to="/dbms" onClick={() => {window.scroll({top: 0,left: 0,behavior: "smooth"})}}>DATABASE MANAGEMENT SYSTEM</Link></div>
                
            </div>
        </div>
        <div className='bbox'>
            <div className='cont'>
                <div className='subtext'><Link to={'/pas'} onClick={() => {window.scroll({top: 0,left: 0,behavior: "smooth"})}}>PROBABILITY AND STATISTICS</Link></div>
            </div>
        </div>

        <div className='bbox'>
            <div className='cont'>
                <div className='subtext'><Link to={'/os'} onClick={() => {window.scroll({top: 0,left: 0,behavior: "smooth"})}}>OPERATING SYSTEMS</Link></div>
            </div>
        </div>
      </div>
      
      
      <div className="second">
      <div className='bbox'>
           <div className='cont'>
                <div className='subtext'><Link to={'/ml'} onClick={() => {window.scroll({top: 0,left: 0,behavior: "smooth"})}}>MACHINE LEARNING</Link></div>
            </div>
        </div>
        <div className='bbox'>
            <div className='cont'>
                <div className='subtext'><Link to={'/ibs'} onClick={() => {window.scroll({top: 0,left: 0,behavior: "smooth"})}}>INTRODUCTION TO BUSINESS SYSTEMS</Link></div>
            </div>
        </div>
        <div className='bbox'>
            <div className='cont'>
                <div className='subtext'><Link to={'/evs'} onClick={() => {window.scroll({top: 0,left: 0,behavior: "smooth"})}}>EVS</Link></div>
            </div>
        </div>       
      </div>
    </div>
  )
}

export default Subfeed;