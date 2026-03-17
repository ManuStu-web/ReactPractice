import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-16 py-6'>
        <h4 className='bg-black text-white px-5 py-3 rounded-full uppercase'>Target Audience</h4>
        <button className='bg-gray-300 uppercase px-5 py-3 rounded-full tracking-widest text-xs'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar