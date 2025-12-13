
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'      
import Counter from './components/Counter'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import Logutbutton from './components/Logutbutton'
import Loginbutton from './components/Loginbutton'
import TimerComponent from './components/TimerComponent'
import { useForm } from "react-hook-form"

 async function onsubmit(data){
  await new Promise((resolve) =>setTimeout(resolve,5000));
  console.log("Submitting the form",data)
}

function App() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();
  const[isLoggedIn,setLoggedIn]=useState(false);   //set according to buttons

  useEffect(() =>{
    alert("I will run on each render")

})

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

    <div className='button'>  
      {isLoggedIn ? <Logutbutton/> : <Loginbutton/>} 
    </div>

    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>First name:</label>
        <input {...register("firstname"),{required: true,minLength:3}}/>
        </div>
        <br/>

        <div>
        <label>Middle name:</label>
        <input {...register("middlename")}/>
        </div>
        <br/>


        <div>
        <label>Last name:</label>
        <input {...register("lastname")}/>
        </div>
        <br/>

        <input type='submit' disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}/>

    </form>

{/* <div>
    <TimerComponent/>
    </div> */}
    </>
  )
}

export default App
