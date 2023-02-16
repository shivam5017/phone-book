


import React,{useState} from 'react'
import "./calc.css"
import Buttonoperator from "../button/operator/buttonope"
import Numbutton from "../button/num/numbutton"
import Funbutton from "../button/fun/funbutton"


const Calc = () => {


  const [value,setValue]=useState("0")
  const [left,setLeft]=useState(null)
  const [operator,setOperator]=useState(null)


  const num=parseFloat(value)

  const handleClick=content=>()=>{
    setValue((content).toString())
    
  }

  

  const AcClick=content=>()=>{
    setValue("0")
    setLeft(null)
    setOperator(null)
  return;
  
  }

  const plusminusClick=content=>()=>{
    setValue((num * -1).toString())
    return;
  }


  const moduloClick=content=>()=>{
    setValue((num / 100).toString())
    setLeft(null)
    setOperator(null)
    return;
  }

  const handleDivide=content=>()=>{
    console.log("div")
  }

  const handlePro=content=>()=>{
    console.log("pro")
  }
  
  const handleAdd=content=>()=>{
    setLeft(left + parseFloat(value));
  setOperator("+")
  return;
  
  }

  const handleSub=content=>()=>{
    setLeft(left - parseFloat(value));
    setOperator("-")
    return;
  }


  const handleEqual=content=>()=>{
    console.log("equal")
  }

  return (
    <div className='container'>
        <div className='display'>
        <h1 className="display-item">{value}</h1>
        </div>
        <div className='keypads'>
                  <Funbutton onFunctionClick={AcClick} content="AC"/>
                   <Funbutton onFunctionClick={plusminusClick}  content="+/-" />
                   <Funbutton onFunctionClick={moduloClick}  content="%" />



                   <Buttonoperator  onOperatorClick={handleDivide} content="÷"/>


                   <Numbutton onButtonClick={handleClick}  content="7"/>
                   <Numbutton onButtonClick={handleClick}  content="8"/>
                   <Numbutton onButtonClick={handleClick}  content="9"/>


                   <Buttonoperator onOperatorClick={handlePro} content="X" />


                   <Numbutton onButtonClick={handleClick} content="4"/>
                   <Numbutton onButtonClick={handleClick} content="5"/>
                   <Numbutton onButtonClick={handleClick} content="6"/>


                   <Buttonoperator onOperatorClick={handleSub} content="-" />


                   <Numbutton onButtonClick={handleClick} content="1"/>
                   <Numbutton onButtonClick={handleClick} content="2"/>
                   <Numbutton onButtonClick={handleClick} content="3"/>


                   <Buttonoperator onOperatorClick={handleAdd} content="+"/>


                   <Numbutton onButtonClick={handleClick} content="0"/>
                   <Numbutton onButtonClick={handleClick} content="."/>


                   <Buttonoperator  onOperatorClick={handleEqual} content="="/>
        </div>
    </div>
  )
}

export default Calc