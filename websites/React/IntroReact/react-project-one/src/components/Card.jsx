import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div>
        {props.children} 
        {props.designation}
    </div>
  )
}

export default Card
