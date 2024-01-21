import React from 'react'
import Button from '../Button/Button'
const Navigation = () => {
  return (
    <div className='flex w-[100%] h-[3rem] bg-neutral-900'>
           <h1 className='text-center font-bold'>Planner</h1>
           <Button className='bg-green-900 h-[2rem] ml-[70%]' text='Login'/>
    </div>
  )
}

export default Navigation
