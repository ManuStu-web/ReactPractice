import React from 'react'
import RightCard from './RightCard'
import { User } from 'lucide-react'

const RightContent = (props) => {
  return (
    <div className='h-full p-6 w-2/3 rounded-4xl flex overflow-x-auto gap-6 '>

      {
        props.users.map(function(elem,idx)
        {
          return <RightCard img={elem.img} tag={elem.tag} index={idx} />   
        })
      }


    </div>
  )
}

export default RightContent