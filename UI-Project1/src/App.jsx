import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img: 'https://i.pinimg.com/1200x/29/0f/d8/290fd89f00330e210352bfec46395bad.jpg',
      color: '#7646A6',
      intro: 'Visionary thinker leading the organization with clarity and purpose',
      tag: 'CEO'
    },
    {
      img: 'https://i.pinimg.com/1200x/b4/e3/34/b4e33431fa44355a00d729f1c7dc4967.jpg',
      color: '#D1BFD9',
      intro: 'Inspires teams through strong leadership and decisive action',
      tag: 'Leader'
    },
    {
      img: 'https://i.pinimg.com/736x/73/ad/bd/73adbdbdd328599bc902644fb82b553b.jpg',
      color: '#9D7ABF',
      intro: 'Guides the institution with authority, responsibility, and vision',
      tag: 'President'
    },
    {
      img: 'https://i.pinimg.com/736x/84/2c/a1/842ca18fe3a609a6b2e57a06ce5151ca.jpg',
      color: '#C0A7D9',
      intro: 'Oversees strategic planning and ensures smooth execution',
      tag: 'Director'
    },
    {
      img: 'https://i.pinimg.com/1200x/c0/65/76/c06576b100932a29d96085c8e9351034.jpg',
      color: '#D0D9CC',
      intro: 'Manages operations efficiently and drives team performance',
      tag: 'Manager'
    },
    {
      img: 'https://i.pinimg.com/1200x/71/7a/0e/717a0efef9e1cbffb598b9c49c93bd66.jpg',
      color: '#D1BFD9',
      intro: 'Leads large-scale operations with strategic and operational excellence',
      tag: 'Admin'
    },
    {
      img: 'https://i.pinimg.com/736x/30/50/f7/3050f7d6e9850de51efa2b5846d403be.jpg',
      color: '#7646A6',
      intro: 'Represents creativity, confidence, and modern style',
      tag: 'Model'
    },
    
  ]

  return (
    <div>
      <Section1 users= {users} />
    </div>
  )
}

export default App