
import React from "react";
import { useSelector,useDispatch } from 'react-redux';
import {nanoid} from 'nanoid'
import {ADD_TASK,CHANGE_PLACE_MT} from '../../constants/actions'
import  Addtask  from "../addtask";
import Task from '../task'

import { DragDropContext, Droppable } from 'react-beautiful-dnd';




export const Border = ()=>{

  const dispath = useDispatch()

  const tasks = useSelector((state)=>state.task.tasks_arr)
  const addTask = (actionType,value)=>{
   value = value.trim()
   if (value==="" || actionType.trim()===""){return}
   dispath({type:actionType,payload:{caption:value,id:nanoid()}})
  }


  const reorder = (list, startIndex, endIndex) => {
   const result = Array.from(list);
   const [removed] = result.splice(startIndex, 1);
   result.splice(endIndex, 0, removed);

   return result;
};

/**
* Moves an item from one list to another list.
*/
const move = (source, destination, droppableSource, droppableDestination) => {
   const sourceClone = Array.from(source);
   const destClone = Array.from(destination);
   const [removed] = sourceClone.splice(droppableSource.index, 1);

   destClone.splice(droppableDestination.index, 0, removed);

   const result = {};
   result[droppableSource.droppableId] = sourceClone;
   result[droppableDestination.droppableId] = destClone;

   return result;
};

const onDragEnd = (result) => {

   const { source, destination } = result;

   if (!destination) { return; }
   
   dispath({type:CHANGE_PLACE_MT,payload:{source:source,destination:destination}})

};


   return (
    <div className="border">
   <DragDropContext onDragEnd={onDragEnd}>
               {tasks.map(
                     (id_task,index)=>{
                         return(
                           <Droppable type="CARDS" droppableId={String(id_task)} key={nanoid()}>
                           {
                              (provided) => (
                              <div  className="task-conteiner" ref={provided.innerRef} key={nanoid()}>
                                  <Task id_task={id_task} key={nanoid()} provided={provided}/>
                               </div>
                              )
                           }
                           </Droppable>
                         )
                        })
               }
   </DragDropContext>
   <div className="task-conteiner orders"><Addtask getAction={addTask.bind(null,ADD_TASK)} textPlaceholder={"Введите текст  макрозадачи"}/></div>
   </div>
   );
   
}
// <div className="task_conteiner"><Addtask/></div>
