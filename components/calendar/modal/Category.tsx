import React from 'react'
import Input from '../../form-elements/Input'
import Button from '../../Button/Button'

const Category = (props:any) => {
  return (
    <div  >
 <h3 className='font-bold text-white text-center bg-neutral-900'>Create A new Category </h3><br/>
 <form>
 <Input type='text' placeholder='Add a new Category' /><br/>
       <Input type='text' placeholder='Add a new Task' /><br/>
       <Input type='Date' placeholder='Add a new Task' /><br/>
       <label htmlFor='Choose a color'/>Choose a color<br/>
  
       <div className='justify-space-around flex gap-2'>
       <input type="radio" value='red' className=' bg-red-600 border-gray-300 checked:bg-blue-500 checked:border-blue-500 checked:text-white' name="color"/>
             <i className="pl-0" >Red</i>
             <input type="radio"  value='blue' name="color"/>
             <i className="pl-0">blue</i>
             <input type="radio" value='green' name="color"/>
             <i className="pl-0">green</i>
             <input type="radio" value='yellow' name="color"/>
             <i className="pl-0">yellow</i>
             <input type="radio" value='pink' name="color"/>
             <i className="pl-0">pink</i>
             <input type="radio" value='orange' name="color"/>
             <i className="pl-0">Orange</i>
       </div>
       
       <div className='grid grid-cols-2  w-[90%] gap-10'>
       <Button text='Add New Category' className='bg-green-900 mt-[6%] mb-[4%] rounded-md'/>
       <Button text='Close' className='bg-green-900 mt-[6%] mb-[4%] rounded-md' onClick={props.closeModel}/>
       </div>
 </form>
      
    
       
    </div>
     

    
  )
}

export default Category
