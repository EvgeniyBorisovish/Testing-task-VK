import { combineReducers } from "redux";
import {task} from "./task"
import {microtask} from "./microtask"


export default combineReducers({
    task,
    microtask
});
