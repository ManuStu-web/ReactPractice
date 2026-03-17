import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden shrink-0 relative w-80 rounded-4xl'>
      
          <img className='h-full object-cover relative z-0' src={props.img} alt="" />
          <div className='h-full w-full bg-linear-to-b from-transparent to-black absolute top-0 left-0 z-10'></div>

          <RightCardContent tag={props.tag} index={props.index} />
      </div>
  )
}

export default RightCard