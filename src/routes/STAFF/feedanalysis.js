import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './feedsem.css';
import dbclogo from '../../components/Image/logo.jpg';
import Footer from '../../components/Footer/Footer';




const Feedanalysis = () => {

  return (
    <div className='dbody'>
        <div className='dbmsnav'>
            <Navbar />
            <div className='dbfeed'>
                <h1 className='dbhead'>FEEDBACK ANALYSIS</h1>
                <br></br><hr></hr>
                <div className='dbinfo'>
                    <div className='scinfo'>
                        <h3 className='sc'>Subject Code: CS3492</h3>
                        <h3 className='fi'>Faculty Incharge: Mr.G.Senthil Kumar</h3>
                        <h3 className='cr'>Credit: 3</h3>
                        </div>
                    <div className='dbclogodiv'><img className='dbclogo' src={dbclogo} alt="citlogo"/></div>
                </div>
                <br></br>
                <div className='ques'>
                    <h3 className='labeldb'>The Subject is both skillfull and enjoyable and mostly liked by many students.Yes, the material covered in the class is manageable and helpfull too. The learning techniques are good and understandable. The opportunities are more and practices makes students to ghet good exposure to the subject. The pace of the class is normal. The teaching methods are effective and engaging though. The feedback given by the staff are helpful. </h3>
                </div>
                <br></br><hr></hr>

                <div className='dbinfo'>
                    <div className='scinfo'>
                        <h3 className='sc'>Subject Code: GE3451</h3>
                        <h3 className='fi'>Faculty Incharge: Mrs.A.Hanusha</h3>
                        <h3 className='cr'>Credit: 2</h3>
                        </div>
                    <div className='dbclogodiv'><img className='dbclogo' src={dbclogo} alt="citlogo"/></div>
                </div>
                <br></br>
                <div className='ques'>
                    <h3 className='labeldb'>The Subject is both skillfull and enjoyable and mostly liked by many students.Yes, the material covered in the class is manageable and helpfull too. The learning techniques are good and understandable. The opportunities are more and practices makes students to ghet good exposure to the subject. The pace of the class is normal. The teaching methods are effective and engaging though. The feedback given by the staff are helpful. </h3>
                </div>
                <br></br><hr></hr>

                <div className='dbinfo'>
                    <div className='scinfo'>
                        <h3 className='sc'>Subject Code: AL3452</h3>
                        <h3 className='fi'>Faculty Incharge: Mrs.T.C.Sabareeshwari</h3>
                        <h3 className='cr'>Credit: 4</h3>
                        </div>
                    <div className='dbclogodiv'><img className='dbclogo' src={dbclogo} alt="citlogo"/></div>
                </div>
                <br></br>
                <div className='ques'>
                    <h3 className='labeldb'>The Subject is both skillfull and enjoyable and mostly liked by many students.Yes, the material covered in the class is manageable and helpfull too. The learning techniques are good and understandable. The opportunities are more and practices makes students to ghet good exposure to the subject. The pace of the class is normal. The teaching methods are effective and engaging though. The feedback given by the staff are helpful. </h3>
                </div>
                <br></br><hr></hr>

                <div className='dbinfo'>
                    <div className='scinfo'>
                        <h3 className='sc'>Subject Code: AL3451</h3>
                        <h3 className='fi'>Faculty Incharge: Mrs.S.T.Preethi</h3>
                        <h3 className='cr'>Credit: 3</h3>
                        </div>
                    <div className='dbclogodiv'><img className='dbclogo' src={dbclogo} alt="citlogo"/></div>
                </div>
                <br></br>
                <div className='ques'>
                    <h3 className='labeldb'>The Subject is both skillfull and enjoyable and mostly liked by many students.Yes, the material covered in the class is manageable and helpfull too. The learning techniques are good and understandable. The opportunities are more and practices makes students to ghet good exposure to the subject. The pace of the class is normal. The teaching methods are effective and engaging though. The feedback given by the staff are helpful. </h3>
                </div>
                <br></br><hr></hr>

                <div className='dbinfo'>
                    <div className='scinfo'>
                        <h3 className='sc'>Subject Code: CW3401</h3>
                        <h3 className='fi'>Faculty Incharge: Dr.N.Kirubakaran</h3>
                        <h3 className='cr'>Credit: 3</h3>
                        </div>
                    <div className='dbclogodiv'><img className='dbclogo' src={dbclogo} alt="citlogo"/></div>
                </div>
                <br></br>
                <div className='ques'>
                    <h3 className='labeldb'>The Subject is both skillfull and enjoyable and mostly liked by many students.Yes, the material covered in the class is manageable and helpfull too. The learning techniques are good and understandable. The opportunities are more and practices makes students to ghet good exposure to the subject. The pace of the class is normal. The teaching methods are effective and engaging though. The feedback given by the staff are helpful. </h3>
                </div>
                <br></br><hr></hr>

                <div className='dbinfo'>
                    <div className='scinfo'>
                        <h3 className='sc'>Subject Code: MA3391</h3>
                        <h3 className='fi'>Faculty Incharge: Mr.K.R.Prabhakaran</h3>
                        <h3 className='cr'>Credit: 4</h3>
                        </div>
                    <div className='dbclogodiv'><img className='dbclogo' src={dbclogo} alt="citlogo"/></div>
                </div>
                <br></br>
                <div className='ques'>
                    <h3 className='labeldb'>The Subject is both skillfull and enjoyable and mostly liked by many students.Yes, the material covered in the class is manageable and helpfull too. The learning techniques are good and understandable. The opportunities are more and practices makes students to ghet good exposure to the subject. The pace of the class is normal. The teaching methods are effective and engaging though. The feedback given by the staff are helpful. </h3>
                </div>
                <br></br><hr></hr>                                                                                
            </div>
            <div className='dbfoo'>
                <Footer />
            </div>
        </div>
    </div>
  )
  }
export default Feedanalysis;