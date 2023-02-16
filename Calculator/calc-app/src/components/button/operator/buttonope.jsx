

import React from 'react'
import "./buttonope.css"



const Buttonoperator = ({onOperatorClick,content}) => {
  return (
    <div className={"operator"} onClick={onOperatorClick(content)}>
    {content}
  </div>
  )
}

export default Buttonoperator