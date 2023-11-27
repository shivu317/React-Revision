import React,{useState} from 'react'
import NavBar from './NavBar'

export default function Home(props) {
    // console.log("data",props.data);
    let x=0;
    const [first, setfirst] = useState(x)
    // const [state, setstate] = useState(0)
  return (
    <div>
        {first}
        <button onClick={()=>{setfirst(first+1)}}>click </button>
        <h1>Home</h1>
    <NavBar first={first} setfirst={setfirst}/>
    </div>
  )
}
