
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
   
   if (source.droppableId === destination.droppableId) {
        dispath({type:CHANGE_PLACE_MT,payload:{source:source.index,destination:destination.index}})

    return

        console.log( source , destination )

       const items = reorder(
           this.getList(source.droppableId),
           source.index,
           destination.index
       );

       let state = { items };

       if (source.droppableId === 'droppable2') {
           state = { selected: items };
       }
       if (source.droppableId === 'droppable3') {
           state = { selected2: items };
       }
       this.setState(state);
   } else {
       const result = move(
           this.getList(source.droppableId),
           this.getList(destination.droppableId),
           source,
           destination
       );

  
  

       let changeObj = {};

       if (result.droppable) {
           changeObj.items = result.droppable;
       }
       if (result.droppable2) {
           changeObj.selected = result.droppable2;
       }
       if (result.droppable3) {
           changeObj.selected2 = result.droppable3;
       }

   }
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

                              <div  className="task_conteiner" 
                                ref={provided.innerRef} 
                                key={nanoid()}>

                                  <Task id_task={id_task} key={nanoid()} provided={provided}/>
                                
                                  </div>
                              )
                             
                           }
                            
                           </Droppable>
                         )
                        }
                        
                        )
               }
              
   </DragDropContext>
   <div className="task_conteiner"><Addtask getAction={addTask.bind(null,ADD_TASK)} textPlaceholder={"Введите текст  макрозадача"}/></div>
   </div>
   );
   
}
// <div className="task_conteiner"><Addtask/></div>
