import './App.css';
import { Routes,Route } from "react-router-dom";
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import About from './Components/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home data="abc"/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="About" element={<About/>}/>
    </Routes>
  );
}

export default App;
