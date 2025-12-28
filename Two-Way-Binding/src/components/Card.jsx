import React from 'react'

const Card = (props) => {
    
  return (
    <div className='card'>
        <h1><span>Name:</span>{props.obj.name} </h1>
        <h2><span>ID:</span>{props.obj.id} </h2>
        <h2><span>Age:</span>{props.obj.age} </h2>
        <h3><span>Contact</span>{props.obj.contact} </h3>
        <h3><span>Email:</span>{props.obj.email} </h3>
    </div>
  )
}

export default Card