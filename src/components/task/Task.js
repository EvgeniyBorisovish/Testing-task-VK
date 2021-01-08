import {ADD_MICRO_TASK,DELETE_TASK} from '../../constants/actions'
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Microtask from '../microtask'
import  Addtask  from "../addtask";

export const Task = ({id_task})=>{
const dispath = useDispatch()
const data_obj = useSelector((state)=>(state.task.tasks_obj[id_task]))
const tasks_arr = useSelector((state)=>(Object.values(state.microtask.tasks_obj).filter((task)=>(task.id_task===id_task))))

const addMicroTaskHandler = (actionType,value)=>{
  value = value.trim()
  if (value==="" || actionType.trim()===""){return}
  dispath({type:actionType,payload:{text:value,id:+new Date(),id_task:id_task}})
}
const handDelTask = ()=>{
  dispath({type:DELETE_TASK,payload:id_task})
}

return (<div className="task" >
        <div className="task_header">
          
          <div className="task__captionTask">{data_obj.caption}</div>
          <div className="task__btnClose" onClick={handDelTask} ><div>&#10006;</div></div>
        </div>
        <div className="task__microtasks">
              {tasks_arr.map(({id,text,id_task},index)=>(<Microtask id={id} text={text} key={index+id_task}/>))}
        </div>
        <Addtask getAction={addMicroTaskHandler.bind(null,ADD_MICRO_TASK)}/>
        </div>);
     
}
//   <Addtask getAction={addMicroTaskHandler.bind(null,ADD_MICRO_TASK)}/>