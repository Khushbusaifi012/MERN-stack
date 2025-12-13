import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import LoggerComponent from './components/LoggerComponent.jsx'
import TimerComponent from './components/TimerComponent.jsx'
import UserNameForm from './components/UserNameForm.jsx'
import { Provider } from 'react-redux'
import { store } from './components/store'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}></Provider>
    <App />
    <LoggerComponent/>
    {/* <TimerComponent/> */}
    <UserNameForm/>
  </StrictMode>,
)

