import {auth,googleProvider} from "../config/firebase";
import {useState} from "react";
import { Link , useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword,signOut} from "firebase/auth";
import './style.css';
export const Auth =()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [successMsg, setSucessMsg]=useState("");
    const [errorMsg, setErrorMsg]=useState("");
        
    const navigate =useNavigate();
   
    const handleLogin =(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            setSucessMsg('SignIn Successfully, you will be redirected to Shop page ')
            setEmail('')
            setPassword('')
            setTimeout(()=>{
                  setSucessMsg('');
                  navigate("/")
              },4000);
        })
        .catch((error)=>{
            console.log(error.message);
            if(error.message ==="Firebase:Error (auth/invalid email).")
            {
                setErrorMsg('PLease fill all the form');
            }
            if(error.message ==="Firebase: Error (auth/user-not-found).")
            {
                setErrorMsg('Email not found');
            }
            
            if(error.message ==="Firebase: Error (auth/wrong-password).")
            {
                setErrorMsg('Wrong password');
            }
        })

    }
    return (
        <div className="login-container">
        <form className='login-form' >
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
            <br/><label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='First name & Last name'/>
            <br/><label>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='Password'/>         
            <button onClick={handleLogin}>Sign In</button>
            <div>
                <span>Don't  have an account?</span>
                <Link to="/signup">Sign Up</Link>
            </div>
        </form>
    
    </div>
    );


};