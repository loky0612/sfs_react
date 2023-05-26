import React,{ useState } from 'react';
import { db } from '../../Firebase/firebase'
import { addDoc, collection } from 'firebase/firestore';
import './Grievanceformstyle.css';

const Grievanceform = () => {
  const[stuname,setstuname] = useState("");
  const [stuemail, setstuemail] = useState("");
  const [issue, setissue] = useState("");
  const [sub, setsub] = useState("");
  const [phone, setphone] = useState("");
  const userCollectionRef = collection(db,"Students-Grievances");
    
  const handleSubmit =() => {
    addDoc(userCollectionRef,{
    Name: stuname,
    Email: stuemail,
    Subject: sub,
    Grivance: issue,
    Mobile: phone
    })
  }

  return (
  <div className='grivbody'>
    <div className='containerr'>
      <h1 className='uu'>STUDENT GRIEVANCES FORM</h1>
      <p className='oo'>Have any questions or suggestions?</p>
      <div className='stuform'>
        <div className='row'>
            <div className='coloumn'>
              <label for='nam'>Name</label>
              <input className='it' type={Text} onChange={(event)=>setstuname(event.target.value)} id='nam' placeholder='Your name here' />
            </div>
            <div className='coloumn'>
              <label for='email'>Email</label>
              <input className='it' type={Text} onChange={(event)=>setstuemail(event.target.value)} id='email' placeholder='Your email here' />
            </div>
        </div>
        <div className='row'>
            <div className='coloumn'>
              <label for='sub'>Subject</label>
              <input className='it' type={Text} onChange={(event)=>setsub(event.target.value)} id='sub' placeholder='You issue?' />
            </div>
            <div className='coloumn'>
              <label for='phone'>Contact</label>
              <input className='it' type={Text} onChange={(event)=>setphone(event.target.value)} id='phone' placeholder='Your email here' />
            </div>
        </div>
        <div className='row'>
            <div className='coloumn'>
              <label for='issue'>Describe Your Issue</label>
              <textarea className='isutext' onChange={(event)=>setissue(event.target.value)} id='issue' placeholder='Tell us about you issue detailed here'></textarea>
            </div>
        </div>
        <button className='fb' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  </div>
  )
}

export default Grievanceform;