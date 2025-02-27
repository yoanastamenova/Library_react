import React from 'react'

export const CInput = (
    { 
        type = 'text', 
        name = "", 
        placeholder = "", 
        emitFunction,
        className = "",
        clickFunction,
        value
    }
) => {
  return (
    <>
      <input type={type} 
      name={name} 
      placeholder={placeholder} 
      onChange={emitFunction} 
      onClick={clickFunction} 
      value={value} 
      className={`input-design text-size-xl background-teal bold position-absolute ${className}`}/>
    </>
  )
}