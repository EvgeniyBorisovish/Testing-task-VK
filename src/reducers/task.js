import {ADD_TASK,DELETE_TASK} from '../constants/actions'

const initialState = {
    tasks_arr: [1,2],
    tasks_obj: {1:{caption:"Первая задача"},2:{caption:"Вторая задача"}},
    proccesing:false
}

export const task = (state = initialState,action)=> {

  switch (action.type) {
       case ADD_TASK:
          state.tasks_obj[action.payload.id] = {...action.payload}
          return {
              ...state,
              tasks_arr:[...state.tasks_arr,action.payload.id],
              tasks_obj:{...state.tasks_obj},
              proccesing:false
          };

      case DELETE_TASK:
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