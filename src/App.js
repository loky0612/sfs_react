import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import StuGrievance from './routes/Grievances/StuGrievance';
import Dbms from './routes/Semfour/Dbms';
import Pas from './routes/Semfour/Pas';
import Os from './routes/Semfour/Os';
import Ml from './routes/Semfour/Ml';
import Ibs from './routes/Semfour/Ibs';
import Evs from './routes/Semfour/Evs';
import Staff from './routes/STAFF/staff';
import Staffsubfeed from './routes/STAFF/staffsubfeed';
import SAbout from './routes/STAFF/sAbout';
import './App.css';
import Dbmsdb from './routes/FEEDBACKS/Dbmsdb';
import Evsdb from './routes/FEEDBACKS/Evsdb';
import Feedanalysis from './routes/STAFF/feedanalysis';


function App() {
  return (
    <>
      <Routes>
        <Route path ='/home' element={<Home />} />
        <Route path ='/' element={<Login/>} />
        <Route path = '/about' element={<About />} />
        <Route path = '/grievances' element={<StuGrievance />} />
        <Route path = '/contact' element={<Contact />} />
        <Route path = '/dbms' element={<Dbms />} />
        <Route path = '/pas' element={<Pas />} />
        <Route path = '/os' element={<Os />} />
        <Route path = '/ml' element={<Ml />} />
        <Route path = '/ibs' element={<Ibs />} />
        <Route path = '/evs' element={<Evs />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/staffsubjectfeedback' element={<Staffsubfeed />} />
        <Route path='/sabout' element={<SAbout />} />
        <Route path ='/dbmsdb' element={<Dbmsdb />} />
        <Route path ='/evsdb' element={<Evsdb />} />
        <Route path ='/ibsdb' element={<Evsdb />} />
        <Route path ='/mldb' element={<Evsdb />} />
        <Route path ='/osdb' element={<Evsdb />} />
        <Route path ='/pasdb' element={<Evsdb />} />
        <Route path='/feedanalysis' element={<Feedanalysis />} />
      </Routes>
    </>
    
  );
}

export default App;
