import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import { auth } from '../../Firebase/firebase'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [paassword, setPassword] = useState("");
    const [aemail, setaEmail] = useState("");
    const [apaassword, setaPassword] = useState("");


    const signIn = () =>{
        signInWithEmailAndPassword(auth,email,paassword)
        .then(auth=>{navigate('/home')})
        .catch(error=>console.error(error))
     }
    const signaIn = () =>{
        signInWithEmailAndPassword(auth,aemail,apaassword)
        .then(auth=>{navigate('/staff')})
        .catch(error=>console.error(error))
    }
  return (
    <div className='loginpage'>
        <div className="lolef">
            <h2>CSBS-SFS STUDENT LOGIN</h2>
            <div className='form'>
                <div className="txt_field">
                    <input onChange={(event)=>setEmail(event.target.value)} autoComplete="off" classname="input" type="{'email'}" name="email" required />
                    <span />
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" onChange={(event)=>setPassword(event.target.value)} autoComplete="off" classname="input"  name="password" required />
                    <span />
                    <label>Password</label>
                </div>
                <button className='button' onClick={signIn}>Sign In</button>
            </div>
        </div>
        <div className="lorig">
            <h2>CSBS-SFS STAFF LOGIN</h2>
            <div className='form'>
                <div className="txt_field">
                    <input onChange={(event)=>setaEmail(event.target.value)} autoComplete="off" classname="input" type="{'email'}" name="email" required />
                    <span />
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" onChange={(event)=>setaPassword(event.target.value)} autoComplete="off" classname="input"  name="password" required />
                    <span />
                    <label>Password</label>
                </div>
                <button className='button' onClick={signaIn}>Sign In</button>
            </div>
        </div>
    </div>
  )
};

export default Login;