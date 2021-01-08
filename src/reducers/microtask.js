import {ADD_MICRO_TASK,CHANGE_MICRO_TASK,DELETE_MICRO_TASK} from '../constants/actions'

const initialState = {
  tasks_arr: [],
  tasks_obj: {},
  proccesing:false
}

export const microtask = (state = initialState,action)=> {
 console.log(action)   
  switch (action.type) {
    
       case ADD_MICRO_TASK:
          state.tasks_obj[action.payload.id] = action.payload
          return {
              ...state,
              tasks_arr:[...state.tasks_arr,action.payload.id],
              tasks_obj:{...state.tasks_obj}
          };
      case CHANGE_MICRO_TASK:
        state.tasks_obj[action.payload.id][action.payload.nameProp] = action.payload.value
          return{
            ...state,
            task_obj:{...state.task_obj}
          }
      case DELETE_MICRO_TASK:
        delete state.tasks_obj[action.payload]
          return {
            ...state,
            tasks_arr:[...state.tasks_arr.filter(id=>String(id)!==String(action.payload))  ],
            tasks_obj:{...state.tasks_obj},
            proccesing:false
          }
      default:
          return state;
  }
}