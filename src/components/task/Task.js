
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ADD_MICRO_TASK,DELETE_TASK} from '../../constants/actions'
import {nanoid} from 'nanoid'
import Microtask from '../microtask'
import  Addtask  from "../addtask";

export const Task = ({id_task,provided})=>{
const dispath = useDispatch()
const data_obj = useSelector((state)=>(state.task.tasks_obj[id_task]))
const tasks_arr = useSelector((state)=>(Object.values(state.microtask.tasks_obj).filter((task)=>(task.id_task===id_task))))

const addMicroTaskHandler = (actionType,value)=>{
  value = value.trim()
  if (value==="" || actionType.trim()===""){return}
  dispath({type:actionType,payload:{text:value,id:nanoid(),id_task:id_task}})
}
const handDelTask = ()=>{
  dispath({type:DELETE_TASK,payload:id_task})
}

return (<div className="task">
        <div className="task_header">
          
          <div className="task__captionTask">{data_obj.caption}</div>
          <div className="task__btnClose" onClick={handDelTask} ><div>&#10006;</div></div>
        </div>
        <div className="task__microtasks">
              {tasks_arr.map(({id,text,id_task},index)=>{
                return(
                    /*<Draggable
                      key={id}
                      draggableId={ String(id) }
                      index={index}>
                        {
                          (provided ) => (*/
                            /*<Microtask id={id} text={text} key={String(id)} provided={provided} 
                            />*/
                            <Microtask id={id} text={text} key={String(id)} index={index}/>
                            
                  /*       )
                        }
                    </Draggable>*/
                )
                
              })}
        {provided.placeholder}
        </div>
        
        <Addtask getAction={addMicroTaskHandler.bind(null,ADD_MICRO_TASK)}/>
        </div>);
     
}
//   <Addtask getAction={addMicroTaskHandler.bind(null,ADD_MICRO_TASK)}/>