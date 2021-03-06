
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ADD_MICRO_TASK,DELETE_TASK,CHANGE_VISIBLE_TASK} from '../../constants/actions'
import {nanoid} from 'nanoid'
import Microtask from '../microtask'
import  Addtask  from "../addtask";

import clearSvg from "../../images/clear.svg";

export const Task = ({id_task,provided})=>{

const dispath = useDispatch()
const data_obj = useSelector((state)=>(state.task.tasks_obj[id_task]))
const tasks_arr = useSelector((state)=>(Object.values(state.microtask.tasks_obj).filter((task)=>(task.id_task===id_task))))

const addMicroTaskHandler = (actionType,value)=>{
  value = value.trim()
  if (value==="" || actionType.trim()===""){return}
  dispath({type:actionType,payload:{text:value,id:nanoid(),id_task:id_task}})
}
const handDelTask = ()=>{ dispath({type:DELETE_TASK,payload:id_task})}
 
const shangeVisible = ()=>{ dispath({type:CHANGE_VISIBLE_TASK,payload:id_task}) }
 
return (<div className="task">
        <div className="task-header">
          
        <b className="task-header__captionTask">
          {data_obj.caption}
          { (tasks_arr.length>1 && data_obj.visibleMicrotasks)  && <span className="task-header__hideMicrotasks" onClick={shangeVisible}>Свернуть</span>}
        </b>
        <div className="task-header__btnClose" onClick={handDelTask} ><img src={clearSvg} alt={"Удалить"}></img></div>
        </div>
        {
          data_obj.visibleMicrotasks
          &&
        <div className="task-microtasks">
              {tasks_arr.map(({id,text,id_task},index)=>{
                return(<Microtask id={id} text={text} key={String(id)} index={index}/>)
              })}
        {provided.placeholder}
        </div>
        }
        {
          !data_obj.visibleMicrotasks
          &&
          <span className="task-header__showMicrotasks" onClick={shangeVisible}> Показать список из {tasks_arr.length} задач</span>
        }
      
        <Addtask getAction={addMicroTaskHandler.bind(null,ADD_MICRO_TASK)} textPlaceholder={"Введите текст  микрозадачи"}/>
        </div>);
}
