
import React from "react"
import {DELETE_MICRO_TASK} from "../../constants/actions"
import {useDispatch} from 'react-redux'
import { Draggable } from 'react-beautiful-dnd';

export const Microtask = ({id,text,index})=>{
  const dispath = useDispatch()
  const handDelMicroTask = ()=>{
    dispath({type:DELETE_MICRO_TASK,payload:id})
  }
  
   return (
  <Draggable
          key={id}
          draggableId={ String(id) }
          index={index}>
            {
              (provided ) => (
          <div className="microtask"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
          <div className="microtask__text">{text}</div>
          <div className="microtask__btnClose" onClick={handDelMicroTask} ><div>&#10006;</div></div>
        </div>
              )
              }
  </Draggable>
    );
    
}
