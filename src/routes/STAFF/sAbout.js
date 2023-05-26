import React from 'react'
import './sAbout.css'
import citimg from '../../components/Image/citimage.jpeg';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const SAbout = () => {
  return (
    <div className='aboutbody'>
        <div className='sheader'>
            <Link to={'/home'} className='logo'><h1>CSBS-SFS</h1></Link>
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
      <div className='aboutmain'>
        <div className='acmain'>
          <img className='citimage' src={citimg} alt='citimage'/>
          <div className='abouttext'>
            <h1 className='abouth'>About Us</h1>
            <h5 className='abouthfi'>Developer and <span className='aboutspan'>Designer</span></h5>
            <p className='aboutp'>Hey all this our csbs team to give you this particular website to give ratings to our respective staff teachings and infrastructure of the college. The details given in this website is stored in our database and the teachers can access these details to know more about you. We have also given the student grivances form in this website to give any queiries in our college. Thank you!!!</p>
            <button type='button' className='aboutbutt'>Contact us</button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default SAbout;