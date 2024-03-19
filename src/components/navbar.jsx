import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { signOut} from "firebase/auth";
import {auth} from "../config/firebase";
const logOut = async()=>{
  alert("Are you Sure!!!!")
  try{
      await signOut(auth);
    }catch (err){
      console.error(err);
  }
  
}
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/signIn">SignIn</Link>
        <Link to="/signup">Register</Link>
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <button onClick={logOut} className="logout">Log Out</button>
      </div>
    </div>
  );
};
