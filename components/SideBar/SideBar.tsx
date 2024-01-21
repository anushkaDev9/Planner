'use client';
import React, { useState } from 'react'
import Button from '../Button/Button'
import ModelCategory from '../calendar/modal/ModalCategory'
import Profile from './Profile';
import Model from '../../components/SideBar/login/Model'
const SideBar = () => {
  const[open,setModel]=useState(false)
  const[login,setLogin]=useState(false)
  const model=()=>{
    
    setModel(true)
  }
  const closeModel=()=>{
    setModel(false)
  }
  const loginOpen=()=>{
 setLogin(true)
  }
  const closeLogin=()=>{
    setLogin(false)
  }
  return (
    <div className='w-[10%] bg-neutral-900 border-2 rounded-md ' >
      {open && <ModelCategory closeModel={closeModel}/>}
      {login && <Model closeModel={closeLogin}/>}
        <div>
    
        <Button className='text-white bg-green-700 hover:bg-green-800 w-[50%] h-[3rem] mt-[10%] ml-[20%]  text-sm  text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
         text='Login ' 
         onClick={loginOpen}/>
        </div>
        <Button className='text-white bg-green-700 hover:bg-green-800 w-[94%] mt-[405%] ml-[2%] rounded-lg text-sm  text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
         text='+ Add new Project ' 
         onClick={model}/>
    </div>
  )
}

export default SideBar
