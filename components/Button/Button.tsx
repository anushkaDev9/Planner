'use client'
import React from 'react'

const Button = (props:any) => {
  return (
    <button className={props.className} onClick={props.onClick}>{props.text}</button>
  )
}

export default Button
