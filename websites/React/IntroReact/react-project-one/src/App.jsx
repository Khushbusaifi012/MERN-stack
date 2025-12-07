
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'      
import Counter from './components/Counter'

function App() {

  return (
    <>
    <div className="container">
      <UserCard name="saheen saifi" desc="I am Saheen Saifi"  /> 
      <UserCard  name="khushbu saifi" desc="I am khushbu Saifi"/>
      <UserCard name="Ayesha saifi" desc="I am Ayesha Saifi"/>
      <Counter/>
    </div>
    </>
  )
}

export default App
