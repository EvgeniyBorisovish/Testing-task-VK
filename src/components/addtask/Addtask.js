
import React,{useState,useRef} from 'react'

import addSvg from "../../images/addBtnTask.svg";

import clearSvg from "../../images/clear.svg";

export const Addtask = ({getAction,textPlaceholder})=>{

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
            <div className="addtaskFirstBtn" onClick={hideShowStartTask.bind(null,true)}><img className="addSvg-img" src={addSvg}></img><span>Добавить еще одну карточку</span></div>
            )
        }
        {
            inputBlock && (
            <div className="taskInput">
                <p><textarea ref={refEl} className="taskInput__TextArea" placeholder={textPlaceholder}></textarea></p>
                <div className="task__btns_area">
                        <div  className="task__btn_add" onClick={exuteAction}>Добавить карточку</div>
                        <div className="task__btn_X" onClick={hideShowStartTask.bind(null,false)}><img className="add-form__bottom-clear" src={clearSvg}></img></div>      
                </div>
            </div>)
            
        }
   
    </div>);
    
}
