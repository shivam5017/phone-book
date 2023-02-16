


import React from 'react'
import "./funbutton.css"


const Funbutton = ({onFunctionClick,content}) => {
  return (
    <div className="function" onClick={onFunctionClick(content)}>
    {content}
  </div>
  )
}

export default Funbutton