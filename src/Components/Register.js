import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const Navigate=useNavigate();
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [number, setNumber] = useState("");
  return (
    
    <div>
        <h1>Register</h1>

        <label htmlFor="FirstName">First Name</label><br></br>
        <input type='text' placeholder='Enter first name' value={fName} onChange={(e)=>{setfName(e.target.value)}} name='FirstName'></input><br></br>
        <label htmlFor="LastName">Last Name</label><br></br>
        <input type='text' placeholder='Enter last name' onChange={(e)=>{setlName(e.target.value)}} name='LastName'></input><br></br>
        <label htmlFor="Mobile">Phone number</label><br></br>
        <input type='number' placeholder='Enter Contact no' onChange={(e)=>{setNumber(e.target.value)}} minLength={3} maxLength={10} name='Mobile'></input><br></br>
       
        <button onClick={()=>{
            let regexname =/^[A-Za-z\s]*$/
            if(fName===""){
                // erro=1
                return alert("Enter first name");
            }else if(!regexname.test(fName)){
                return alert("Enter valid first name")

            }

            let regexlname =/^[A-Za-z\s]*$/
            if(fName===""){
                // erro=1
                return alert("Enter last name");
            }else if(!regexlname.test(lName)){
                return alert("Enter valid last name")

            }

            let regexnumber=/^[0-9]{10}$/
            if(number===""){
                return alert("Enter last name")
            }else if(!regexnumber.test(number)){
                return alert("Please enter your last name")
            }

            console.log(`fName ${fName}`);
            console.log("lName",lName);
            console.log("number",number);
            let obj={
                fName:fName,
                lName:lName,
                number:number,
            }
            Navigate(`/Login`);

        }}>Sumbit</button>
    </div>
  )
}
