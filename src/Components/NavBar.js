import React from 'react'
import { useNavigate } from "react-router-dom";

export default function NavBar({first,setfirst}) {
    const Navigate = useNavigate();

  return (
    <>
        <button onClick={()=>{
            Navigate("Login");
        }}>
            Login{}
            </button>
        
        <button onClick={()=>{
            Navigate("Register");
        }}>
            Register
            </button>

            <button onClick={()=>{
            Navigate("About");
        }}>
            AboutUs{first}
            </button>
            <button onClick={()=>{ setfirst(first+1)}}>clickkmee</button>
         </>
  )
}
