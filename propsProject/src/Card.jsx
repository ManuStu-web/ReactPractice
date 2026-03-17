import React from 'react'
import { Bookmark } from 'lucide-react'

// component name starts with capital letter and is exported as default
const Card = (props) => {
  return (
    <div className="parent">
    <div className="card">

      <div className="top">
        <img src={props.image} alt="" />
        <button id="save">Save <Bookmark size={20}/></button>
      </div>

      <div className="center">
        <h1>{props.companyName} <span id="time">{props.timePosted}</span></h1>
        <h2>{props.jobPost}</h2>
        <div className='tags'>
          <h4 id='tag'>{props.tag1}</h4>
          <h4 id='tag'>{props.tag2}</h4>
        </div>
      </div>

      <div className='bottom'>
          <div className='bot'>
            <h2>{props.pay}</h2>
            <p>{props.location}</p>
          </div>

        <button>Apply Now</button>
      </div>
    </div>
    </div>
  )
}

export default Card

