
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'      

function App() {

  return (
    <>
    <div className="container">
      <UserCard name="saheen saifi" desc="desc1"  /> 
      <UserCard  name="khushbu saifi" desc="desc2"/>
      <UserCard name="Ayesha saifi" desc="desc3"/>
    </div>
    </>
  )
}

export default App
