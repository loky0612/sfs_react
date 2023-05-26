import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './sem.css';
import dbclogo from '../../components/Image/logo.jpg';
import Footer from '../../components/Footer/Footer';
import { useState } from "react";
import { db } from '../../Firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ibs = () => {
    const [number, setNumber] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);

    const[one,setone] = useState("");
    const[two,settwo] = useState("");
    const[three,sethree] = useState("");
    const[four,setfour] = useState("");
    const[five,setfive] = useState("");
    const[six,setsix] = useState("");
    const[seven,setseven] = useState("");
    const[eight,seteight] = useState("");
    const[nine,setnine] = useState("");

    const userCollectionRef = collection(db,"IBS");
    const handleClick = () => {
        addDoc(userCollectionRef,{
         one: one,
         two: two,
         three: three,
         four: four,
         five: five,
         six: six,
         seven: seven,
         eight: eight,
         nine: nine
        })
        alert("Thankyou for submiting your feedback");
     }
  return (
    <div className='dbody'>
        <div className='dbmsnav'>
            <Navbar />
            <div className='dbfeed'>
                <h1 className='dbhead'>INTRODUCTION TO BUSINESS SYSTEMS</h1>
                <br></br><hr></hr>
                <div className='dbinfo'>
                    <div className='scinfo'>
                        <h3 className='sc'>Subject Code: CW3401</h3>
                        <h3 className='fi'>Faculty Incharge: Dr.N.Kirubakaran</h3>
                        <h3 className='cr'>Credit: 3</h3>
                        </div>
                    <div className='dbclogodiv'><img className='dbclogo' src={dbclogo} alt="citlogo"/></div>
                </div>
                <div><br></br><hr></hr></div>
                <div className='ques'>
                    <h3 className='labeldb'>1. What did you enjoy most about this subject !</h3>
                    <textarea onChange={(event)=>setone(event.target.value)} placeholder='Your answer' className='dbfeedta'></textarea>
                </div>
                <div className='ques'>
                    <h3 className='labeldb'>2. Did you find the material cover in this class challenging or manageable?</h3>
                    <textarea onChange={(event)=>settwo(event.target.value)} placeholder='Your answer' className='dbfeedta'></textarea>
                </div>
                <div className='ques'>
                    <h3 className='labeldb'>3. Were the learning objectives of the class clear to you?</h3>
                    <textarea onChange={(event)=>sethree(event.target.value)} placeholder='Your answer' className='dbfeedta'></textarea>
                </div>
                <div className='ques'>
                    <h3 className='labeldb'>4. Did you feel like you had enough opportunities to ask questions and receive help? </h3>
                    <textarea onChange={(event)=>setfour(event.target.value)} placeholder='Your answer' className='dbfeedta'></textarea>
                </div>
                <div className='ques'>
                    <h3 className='labeldb'>5. Were the assesments fair and acurately reflective of the material covered?</h3>
                    <textarea onChange={(event)=>setfive(event.target.value)} placeholder='Your answer' className='dbfeedta'></textarea>
                </div>
                <div className='ques'>
                    <h3 className='labeldb'>6. Did you feel like the instrutor was accessible and available outside of class time?</h3>
                    <textarea onChange={(event)=>setsix(event.target.value)} placeholder='Your answer' className='dbfeedta'></textarea>
                </div>
                <div className='ques'>
                    <h3 className='labeldb'>7. Was the pace of the class too fast,too slow or just right?</h3>
                    <textarea onChange={(event)=>setseven(event.target.value)} placeholder='Your answer' className='dbfeedta'></textarea>
                </div>
                <div className='ques'>
                    <h3 className='labeldb'>8. Were the teaching methods engaging and effective for learning style?</h3>
                    <textarea onChange={(event)=>seteight(event.target.value)} placeholder='Your answer' className='dbfeedta'></textarea>
                </div>
                <div className='ques'>
                    <h3 className='labeldb'>9. Did the instructor provide enough feedback on your work?</h3>
                    <textarea onChange={(event)=>setnine(event.target.value)} placeholder='Your answer' className='dbfeedta'></textarea>
                </div>
                <div className='ques'>
                    <h3 className='labeldb'>10. Rate the subject out of 10.</h3>
                    <div className='rat'>
                    {Array(10)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}                    
                    </div>                    
                </div>
                <div className='dbutt'><button className='dbmbutt' onClick={handleClick}>SUBMIT</button></div>
            </div>
            <div className='dbfoo'>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Ibs;