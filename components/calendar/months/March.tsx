import React from 'react'
import DaysList from '../days/DaysList'
import Days from '../days/Days'
const March = (props:any) => {
  return (
    <div> <h2 className='ml-[2%]'>{props.month},2024</h2>
    <DaysList/> 
     <div className=' w-[95%] ml-[2%] h-[36.9rem] grid grid-cols-7 grid-rows-5 gap-y-0'>
     <Days date='25'/>
 <Days date='26'/>
 <Days date='27'/>
 <Days date='28' />
 <Days date='29'/>
 <Days date='1' />
 <Days date='2' />
 <Days date='3' />
 <Days date='4'/>
 <Days date='5' />
 <Days date='6'/>
 <Days date='7' />
 <Days date='8' />
     <Days date='9'/>
     <Days date='10'/>
     <Days date='11'/>
 <Days date='12'/>
 <Days date='13'/>
 <Days date='14'/>
 <Days date='15' />
 <Days date='16' />
     <Days date='17'/>
     <Days date='18'/>
     <Days date='19'/>
 <Days date='20'/>
 <Days date='21'/>
 <Days date='22'/>
 <Days date='23' />
 <Days date='24'/>
 <Days date='25'/>
 <Days date='26'/>
 <Days date='27'/>
 <Days date='28' />
 <Days date='29'/>
 <Days date='30' />


      </div></div>
  )
}

export default March