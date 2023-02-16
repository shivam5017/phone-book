


import React from 'react'
import "./numbutton.css"


const Numbutton = ({content,onButtonClick}) => {
  return (
    <div className={`Button ${content==="0"?"zero":""}`} onClick={onButtonClick(content)}>
    {content}
  </div>
  )
}

export default Numbutton
