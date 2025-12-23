import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='w-72 h-full relative rounded-4xl overflow-hidden shrink-0'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent id={props.id} tag={props.tag} intro={props.intro} color={props.color} />
    </div>
  )
}

export default RightCard