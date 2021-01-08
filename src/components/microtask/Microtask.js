
import React from "react"
import {DELETE_MICRO_TASK} from "../../constants/actions"
import {useDispatch} from 'react-redux'

export const Microtask = ({id,text})=>{
  const dispath = useDispatch()
  const handDelMicroTask = ()=>{
    dispath({type:DELETE_MICRO_TASK,payload:id})
  }
  
   return (
    <div className="microtask">
      <div className="microtask__text">{text}</div>
      <div className="microtask__btnClose" onClick={handDelMicroTask} ><div>&#10006;</div></div>
    </div>);
    
}
