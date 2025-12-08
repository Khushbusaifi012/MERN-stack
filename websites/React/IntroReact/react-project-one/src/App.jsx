
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'      
import Counter from './components/Counter'
import Card from './components/Card'
import { useState } from 'react'
import Logutbutton from './components/Logutbutton'
import Loginbutton from './components/Loginbutton'

function App() {
  const[isLoggedIn,setLoggedIn]=useState(false);   //set according to buttons

  // if(isLoggedIn){
  //   return(
  //     <Logutbutton/>
  //   )
  // }
  // else{
  //   return(
  //     <Loginbutton/>
  //   )
  // }

  return (
    <>
    <div className="container">
      <UserCard name="saheen saifi" desc="I am Saheen Saifi"  /> 
      <UserCard  name="khushbu saifi" desc="I am khushbu Saifi"/>
      <UserCard name="Ayesha saifi" desc="I am Ayesha Saifi"/>
      <Counter/>
    </div>

    <div className='card'>
      <Card name="Khushbu" designation="MERN stack developer">
        <h1>Welcome</h1>
        <p>Trying to be consistent</p>
        <p>Study about props and children</p>
      </Card>

      <Card>
        <h2>Hello</h2>
        <p>This is another card</p>
      </Card>
      <Card/>
    </div>

    <div>  
      {isLoggedIn ? <Logutbutton/> : <Loginbutton/>} 
    </div>
    </>
  )
}

export default App
