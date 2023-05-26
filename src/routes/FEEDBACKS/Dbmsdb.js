import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {db} from '../../Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './Dbmsdb.css';

const Dbmsdb = () => {
    const [users,setUsers] = useState([]);
    const userCollectionRef = collection(db,"DBMS");

    useEffect(()=>{
        const getUsers = async () => {
        const data = await getDocs(userCollectionRef);
        setUsers(data.docs.map((doc)=>({ ...doc.data(),id: doc.id})));
    };
    getUsers();
  }, []);  
  return (
    <div className='dbmsdbmain'>
        <div className='fdheader'>
            <Link to={'/staff'} className='logo'><h1>CSBS-SFS</h1></Link>
            <ul className='fdnav-menu'>
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
        <div className='data'>
            {users.map((user)=>{
            return(
            <div className='main'>
                <div className='submain'>
                    <br></br>
                    <h3>{user.one}</h3>
                    <h3>{user.two}</h3>
                    <h3>{user.three}</h3>
                    <h3>{user.four}</h3>
                    <h3>{user.five}</h3>
                    <h3>{user.six}</h3>
                    <h3>{user.seven}</h3>
                    <h3>{user.eight}</h3>
                    <h3>{user.nine}</h3>
                    <h3>{user.ten}</h3>
                    <br></br>
                    <hr></hr>
                </div>
            </div>
            )
            })}
        </div>
    </div>
  )
}

export default Dbmsdb;