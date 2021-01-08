
import React,{useState,useRef} from 'react'

export const Addtask = ({getAction})=>{

const [inputBlock,setInputBlock] = useState(false)
const refEl =  useRef(null)


const hideShowStartTask = (value)=>{
    setInputBlock(value)
}

const exuteAction = ()=>{

    getAction(refEl.current.value)

    refEl.current.value="";

    hideShowStartTask(false)
}

   return (
   <div className="addtask">

        {
            !inputBlock && (
            <div className="addtaskFirstBtn" onClick={hideShowStartTask.bind(null,true)}>&#10010;&nbsp;&nbsp; Добавить еще одну карточку</div>
            )
        }
        {
            inputBlock && (
            <div className="taskInput">
                <p><textarea ref={refEl} className="taskInput__TextArea" placeholder="введите текст задача"></textarea></p>
                <div className="task__btns_area">
                        <div  className="task__btn_add" onClick={exuteAction}>Добавить карточку</div>
                        <div className="task__btn_X" onClick={hideShowStartTask.bind(null,false)}><div>&#10006;</div></div>      
                </div>
            </div>)
            
        }
   
    </div>);
    
}
