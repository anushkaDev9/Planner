import React from 'react'
import Calendar from '../calendar/Calendar'


const Tasks = () => {
  return (
    <div className='w-[80%] border-2 rounded-md bg-neutral-900' >
       <h1 className='text-center font-bold'>Planner</h1>
      <Calendar/>
    </div>
  )
}

export default Tasks
