import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Contact.css'
import Contactform from '../../components/Contactusform/Contactform';

const Contact = () => {
  return (
    <div className='co'>
      <div className='cbo'>
        <div className='hh'>
          <Navbar />
        </div>
        <div>
          <Contactform />
        </div>
      </div>
      <div className='cf'>
        <Footer />
      </div>
    </div>
  )
}

export default Contact;