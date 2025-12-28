import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const submitHandeler = (e)=>{
    e.preventDefault()

    const oldUser = [...alluser]

    oldUser.push({name,id,age,contact,email})
    // console.log(oldUser)

    setAlluser(oldUser)

    setName('')
    setId('')
    setAge('')
    setContact('')
    setEmail('')
  }

  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [age, setAge] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [alluser, setAlluser] = useState([])

  

  return (
    <div id='parent'>
      <div id='main'>
        <form onSubmit={(e)=>{
            submitHandeler(e)
          }}>
          <input type="text" placeholder='Enter Your Name:' value={name} onChange={(e)=>{
            setName(e.target.value)
            
          }} />
          <input type="number" placeholder='Enter your ID:' value={id} onChange={(e)=>{
            setId(e.target.value)
          }} />
          <input type="number" placeholder='Enter Your Age:' value={age} onChange={(e)=>{
            setAge(e.target.value)
          }} />
          <input type="number" placeholder='Enter Your Contact Number:' value={contact} onChange={(e)=>{
            setContact(e.target.value)
          }} />
          <input type="email" placeholder='Enter Your Email:' value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }} />
          <button>Submit</button>
        </form>
        
      </div>
      <div id='parentCard'>
        {alluser.map((e,idx)=>{
          // console.log(e);
          
          return <Card key={idx} obj={e} />
        })}
      </div>
    </div>
  )
}

export default App