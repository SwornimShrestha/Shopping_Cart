import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from "../../config/firebase";

export const Shop = () => {
  function GetCurrentUser(){
    const [user,setUser]=useState('');
    const userCollectionRef = collection(db,"users")
    useEffect(()=>{
      auth.onAuthStateChanged(userlogged => {
        if(userlogged){
          const getUsers =async ()=>{
            const q = query(collection(db,"users"),where("uid","==",userlogged.uid))
            //console.log(q)
            const data = await getDocs(q);
            setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
          }
          getUsers();
        }
        else{
          setUser(null)
        }
      })
    },[])
    return user;
  }
  //const loggeduser = GetCurrentUser();
  //if(loggeduser){console.log( loggeduser[0].email)};
  return (
    <div className="shop">
      <div className="shopTitle">
      <strong>Gharra</strong>
      <small>.Np</small>
      </div>
      {/* <p>{loggeduser ? loggeduser[0].email:"No data"}</p> */}
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id}  />
        ))}
      </div>
    </div>
  );
};
