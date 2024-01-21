'use client';
import React, { useEffect, useState } from 'react'
import January from './months/January'
import Feburary from './months/Feburary'
import March from './months/March';
import April from './months/April';
import May from './months/May';
import June from './months/June';
import July from './months/July';
import August from './months/August';
import September from './months/September';
import October from './months/October';
import November from './months/November';
import December from './months/December';
const Calendar = (props:any) => {
let slides:any;
let slideIndex=1
//const [slides, setSlides] = useState<HTMLCollectionOf<Element>>();
window.addEventListener("load", function() {
  slides=document.getElementsByClassName("mySlides")
  console.log(slides.length)
  showSlides(slideIndex)
});





function plusSlides(n:any) {
  showSlides(slideIndex += n);
}



function showSlides(n:any) {
  let i;
  if (n > slides.length) {// slide.length=4
    slideIndex = 1
  }    //not 
  if (n < 1) {slideIndex = slides.length; console.log("yes")}
 
  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";  
   console.log(i)
  }
  
  (slides[slideIndex-1]as HTMLElement).style.display = "block";  
  console.log(slides[slideIndex-1])
}

 
  
  return (

    <div className='slides'>
      <a className="ml-[0%] mt-[-3%]" onClick={()=>plusSlides(-1)}>❮</a>
<a  onClick={()=>plusSlides(1)}>❯</a>
      <div className="slideshow-container">
<div className="mySlides fade">
 <January month='January'/>
</div>
<div className="mySlides fade">
  <Feburary month='Feburary'/>
</div>
<div className="mySlides fade">
 <March month='March'/>
</div>
<div className="mySlides fade">
  <div className="numbertext">
    <April month='April'/>
  </div>
</div>

<div className="mySlides fade">
  <div className="numbertext">
    <May month='May'/>
  </div>


</div>
<div className="mySlides fade">
  <div className="numbertext">
    <June month="June"/>
  </div>
  


</div>

<div className="mySlides fade">
  <div className="numbertext">
    <July month="July"/>
  </div>


</div>
<div className="mySlides fade">
  <div className="numbertext">
    <August month="August"/>
  </div>


</div>
<div className="mySlides fade">
  <div className="numbertext">
    <September month="September"/>
  </div>


</div>
<div className="mySlides fade">
  <div className="numbertext">
    <October month="October"/>
  </div>


</div>
<div className="mySlides fade">
  <div className="numbertext">
    <November month="November"/>
  </div>


</div>
<div className="mySlides fade">
  <div className="numbertext">
    <December month="December"/>
  </div>


</div>
</div>
<br/>
</div>


   
  )
}

export default Calendar
