import React, { useState } from 'react'
import Input from '../../form-elements/Input'
import Button from '../../Button/Button'
const Model = (props:any) => {
  const [loginModel,setLoginModel]=useState(true)
  const signUp=()=>{
   setLoginModel(false)
  }
  const login=()=>{
    setLoginModel(true)
  }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop:blur  '>
    <div className=' bg-neutral-900 w-[30%]  ml-[30%] mt-[15%] shadow-[40%] rounded-sm pl-[2%]'> 
  
    <h2 className='text-center'>{loginModel?'Login':'Sign In'}</h2><br/>
    <form>
    {!loginModel &&<div>
    <Input type='text' placeholder='Enter Email Address'/><br/>
          <Input type='text' placeholder='Enter Password'/><br/></div>}
          <Input type='text' placeholder='Enter Email Address'/><br/>
          <Input type='text' placeholder='Enter Password'/>
          
       {loginModel ?
       <p className='m-[4%]'>Don't have an account? <span className='text-green-900 cursor-pointer font-bold'onClick={signUp}>Sign In</span></p>:
       <p className='m-[4%]'>Already Have an account <span className='text-green-900 cursor-pointer font-bold'onClick={login}>login In</span></p>
       }
      <div className='grid grid-cols-2  w-[90%] gap-10'>
       <Button text='Submit' className='bg-green-900 mt-[6%] mb-[4%] rounded-md'/>
       <Button text='Close' className='bg-green-900 mt-[6%] mb-[4%] rounded-md' onClick={props.closeModel}/>
       </div>
    </form>
  
      
    </div>
   
      
 

    </div>
  )
}

export default Model
