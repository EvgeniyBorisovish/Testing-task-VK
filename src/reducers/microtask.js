import { act } from 'react-dom/test-utils';
import {ADD_MICRO_TASK,CHANGE_MICRO_TASK,DELETE_MICRO_TASK,CHANGE_PLACE_MT} from '../constants/actions'

const initialState = {
  tasks_arr: [],
  tasks_obj: {},
  proccesing:false
}

export const microtask = (state = initialState,action)=> {
  
  switch (action.type) {
    
       case ADD_MICRO_TASK:
          state.tasks_obj[action.payload.id] = action.payload
          return {
              ...state,
              tasks_arr:[...state.tasks_arr,action.payload.id],
              
          };
      case CHANGE_MICRO_TASK:
        state.tasks_obj[action.payload.id][action.payload.nameProp] = action.payload.value
          return{
            ...state,
            task_obj:{...state.task_obj}
          }
      case CHANGE_PLACE_MT:
        
          const result = [...state.tasks_arr];

          const firstElement =  Object.values(state.tasks_obj).filter((elem)=>(String(elem.id_task)===String(action.payload.source.droppableId)))[Number(action.payload.source.index)]

          firstElement.id_task = action.payload.destination.droppableId

          const firstElementIndex = state.tasks_arr.findIndex((element)=>(String(element)===String(firstElement.id)))
                     
          const secondElement =  Object.values(state.tasks_obj).filter((elem)=>(String(elem.id_task)===String(action.payload.destination.droppableId)))[Number(action.payload.destination.index)]

          const secondElementIndex = state.tasks_arr.findIndex((element)=>(String(element)===String(secondElement.id)))

          const [removed] = result.splice(firstElementIndex, 1);
        
          result.splice(secondElementIndex, 0, removed);

          let new_tasks_obj = result.reduce((obj,el)=>{
            obj[el] = state.tasks_obj[el]
            return obj
          },{})
          return {
            ...state,
            tasks_arr:[...result],
            tasks_obj:{...new_tasks_obj}

          }
      case DELETE_MICRO_TASK:
        delete state.tasks_obj[action.payload]
          return {
            ...state,
            tasks_arr:[...state.tasks_arr.filter(id=>String(id)!==String(action.payload))  ],
            }
      default:
          return state;
  }
}
