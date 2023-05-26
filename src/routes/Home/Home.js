import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Feedlink from '../../components/Feedlink/Feedlink'
import './Home.css';
import Footer from '../../components/Footer/Footer';
import Subfeed from '../../components/Subject Feedback/Subfeed';


const Home = () => {
  return (
    <div className="h">
        <div className='top'>
          <Navbar/>
          <Feedlink />
        </div>
        <div className='middle'>
          <Subfeed />
        </div>
        <div className='bottom'>
          <Footer />
        </div>
    </div>
  )
}
export default Home;