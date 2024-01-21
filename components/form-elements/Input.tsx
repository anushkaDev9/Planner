import React from 'react'

const Input = (props:any) => {
  return (
    <div>
     
     <input className=' bg-neutral-900 w-[90%] border-b-2' type={props.type} placeholder={props.placeholder} />
    </div>
   
  )
}

export default Input
