import React from 'react'

export default function Login(props) {
    console.log("props",props);
  return (
    <div>
        <h1>Login</h1>
        <form>
            <label for="email">Email id</label> <br></br>
            <input type="email" ></input><br></br>
            <label for="password">Password</label> <br></br>
            <input type="password" ></input><br></br>
            <input type="submit"></input>

        </form>
    </div>
    
  )
}
