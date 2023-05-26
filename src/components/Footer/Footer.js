import React from 'react';
import './footer.css'
import {FaFacebook, FaGooglePlus, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';

const footer = () => {
  return (
    <footer>
        <div className='footercontents'>
            <h3><span>CIT</span> CSBS-SFS</h3>
            <p>Hello Student this website is meant for getting feedback from you. Please dont't miss use</p>
            <ul className='social'>
                <li><FaFacebook size={20} style={{color:"fff",margin:"1rem"}} /></li>
                <li><FaTwitter size={20} style={{color:"#fff",margin:"1rem"}} /></li>
                <li><FaGooglePlus size={20} style={{color:"#fff",margin:"1rem"}} /></li>
                <li><FaYoutube size={20} style={{color:"#fff",margin:"1rem"}} /></li>
                <li><FaLinkedin size={20} style={{color:"#fff",margin:"1rem"}} /></li>
            </ul>
        </div>
        <div className='footer-bottom'>
            <p>Copyright &copy;2023 CIT Csbs-Sfs. Designed by <span>Loky.</span></p>
        </div>
    </footer>
  )
}

export default footer;