import React from 'react'
import khushbu from '../assets/khushbu.jpeg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id="user-name">{props.name}</p>
        <img  id="user-img" src={khushbu} alt='image'></img>
        <p id="user-desc">{props.desc}</p>
    </div>
  )
}

export default UserCard
