import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import LoggerComponent from './components/LoggerComponent.jsx'
import TimerComponent from './components/TimerComponent.jsx'
import UserNameForm from './components/UserNameForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LoggerComponent/>
    {/* <TimerComponent/> */}
    <UserNameForm/>
  </StrictMode>,
)
