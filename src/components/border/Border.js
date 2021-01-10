
import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import {nanoid} from 'nanoid'
import {ADD_TASK} from '../../constants/actions'
import  Addtask  from "../addtask";
import Task from '../task'
export const Border = ()=>{

  const dispath = useDispatch()

  const tasks = useSelector((state)=>state.task.tasks_arr)
  
  const addTask = (actionType,value)=>{
   value = value.trim()
   if (value==="" || actionType.trim()===""){return}
   dispath({type:actionType,payload:{caption:value,id:nanoid()}})
  }

   return (
   <div className="border">
      {tasks.map(((id_task,index)=>(<div className="task_conteiner" key={index}><Task id_task={id_task} /></div>)))}
      <div className="task_conteiner"><Addtask getAction={addTask.bind(null,ADD_TASK)}/></div>
   </div>);
   
}
// <div className="task_conteiner"><Addtask/></div>