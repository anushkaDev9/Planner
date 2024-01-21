'use client'
import React from 'react'
import Input from '../../form-elements/Input'
import Category from './Category'
const ModalCategory = (props:any) => {
  
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop:blur  '>
    <div className=' bg-neutral-900 w-[30%] ml-[30%] mt-[15%] shadow-[40%] rounded-sm pl-[2%]'> 
 <Category closeModel={props.closeModel}/>
    </div>

    </div>
 
  )
}

export default ModalCategory
