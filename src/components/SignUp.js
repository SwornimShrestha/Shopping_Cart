import React from 'react';
import { Link , useNavigate } from "react-router-dom";
import {auth,googleProvider} from "../config/firebase";
import {useState} from "react";
import { createUserWithEmailAndPassword ,signOut, signInWithPopup} from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore';
import {db} from "../config/firebase"
import './signup.css';
export const SignUp = () => {
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [address,setAddress]=useState("");
    const [successMsg, setSucessMsg]=useState("");
    const [errorMsg, setErrorMsg]=useState("");
    const navigate =useNavigate();
    const handleSubmit =(e)=>{
            e.preventDefault();//referesh 
            createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                const user= userCredential.user ;
                const intialcartvalue = 0;
                console.log(user);
                addDoc(collection(db,"users"),{
                    username:userName,
                    email:email,
                    phonenumber:phoneNumber,
                    address:address,
                    cart:intialcartvalue,
                    uid:user.uid
                 })
                .then(()=>{
                setSucessMsg('New user added .Now you will redirected to login page')
                setUserName('')
                setEmail('')
                setPassword('')
                setPhoneNumber('')
                setAddress('')
                setTimeout(()=>{
                            setSucessMsg('');
                            navigate("/signIn")
                     },4000);
                 })
                 .catch((error)=>{ setErrorMsg(error.message) });
            })
            .catch((error)=>{
                if(error.message ==="Firebase: Error (auth/invalid email).")
                {
                    setErrorMsg('PLease fill all the form');
                }
                if( error.message ==="Firebase: Error (auth/email-already-in-use).")
                {
                    setErrorMsg('User already Exist');
                }
            })
        }   

     return (
        <div className="signup-container">
            <form className='signup-form' onSubmit={handleSubmit}>
                <p>Create Account</p><br/>

                {successMsg && <>
                    <div className='sucess-msg'>
                        {successMsg}
                    </div>
                </>}
                {errorMsg && <>
                    <div className='error-msg'>
                        {errorMsg}
                    </div>
                </>}<br/>
                <label>Your Name</label>
                <input onChange={(e)=>setUserName(e.target.value)} type='text' placeholder='First name & Last name'/>
                <br/><label>Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='Email'/>
                <br/><label>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='Password'/>
                <br/><label>Address</label>
                <input onChange={(e)=>setAddress(e.target.value)} type='text' placeholder='Address'/>
                <br/><label>Phone Number</label>
                <input onChange={(e)=>setPhoneNumber(e.target.value)} type='text' placeholder='Phone Number'/>
                <br/>
                <button type='submit'>Sign Up</button>
                <div>
                    <span>Already have an account?</span>
                    <Link to="/signIn">Sign In</Link>
                </div>
            </form>
        
        </div>
    );
};

